// Site-wide behaviour: fade-up on scroll, enquiry forms and click tracking.
import { whatsappLink } from '../config';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

function track(event: string, params: Record<string, string> = {}) {
  window.gtag?.('event', event, params);
  if (event === 'generate_lead') window.fbq?.('track', 'Lead');
  if (event === 'contact_click') window.fbq?.('track', 'Contact');
}

// Fade-up on scroll
const revealItems = document.querySelectorAll<HTMLElement>('.reveal');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (!('IntersectionObserver' in window) || reduceMotion) {
  revealItems.forEach((el) => el.classList.add('is-visible'));
} else {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
  );
  revealItems.forEach((el) => io.observe(el));
}

// Call / WhatsApp click tracking (only does something once GA4 or the Pixel is set up)
document.addEventListener('click', (e) => {
  const link = (e.target as HTMLElement).closest('a');
  if (!link) return;
  if (link.href.startsWith('tel:')) track('contact_click', { method: 'call' });
  else if (link.href.includes('wa.me/')) track('contact_click', { method: 'whatsapp' });
});

// Enquiry and callback forms
function whatsappText(form: HTMLFormElement): string {
  const lines = [form.dataset.whatsappIntro || 'Hi Aangan, I want a free consultation for my home.'];
  form.querySelectorAll<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>('[data-wa-label]').forEach((field) => {
    const value = field.value.trim();
    if (value) lines.push(`${field.dataset.waLabel}: ${value}`);
  });
  return lines.join('\n');
}

document.querySelectorAll<HTMLFormElement>('form[data-enquiry]').forEach((form) => {
  const wrapper = form.parentElement!;
  const thanks = wrapper.querySelector<HTMLElement>('[data-thanks]');
  const error = form.querySelector<HTMLElement>('[data-error]');
  const submit = form.querySelector<HTMLButtonElement>('[data-submit]');
  const waButton = form.querySelector<HTMLButtonElement>('[data-wa-send]');

  waButton?.addEventListener('click', () => {
    track('contact_click', { method: 'whatsapp_form' });
    window.open(whatsappLink(whatsappText(form)), '_blank', 'noopener');
  });

  const showThanks = () => {
    const name = (form.querySelector<HTMLInputElement>('[name="name"]')?.value || '').trim().split(' ')[0];
    const nameSlot = thanks?.querySelector('[data-thanks-name]');
    if (nameSlot) nameSlot.textContent = name ? `, ${name}` : '';
    form.hidden = true;
    if (thanks) {
      thanks.hidden = false;
      thanks.focus();
    }
  };

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (error) error.hidden = true;
    const label = submit?.textContent || '';
    if (submit) {
      submit.disabled = true;
      submit.textContent = 'Sending…';
    }
    try {
      if (form.dataset.demo !== 'true') {
        const res = await fetch(form.action, {
          method: 'POST',
          body: new FormData(form),
          headers: { Accept: 'application/json' },
        });
        if (!res.ok) throw new Error(`Form service replied ${res.status}`);
      }
      track('generate_lead', { form: (form.querySelector<HTMLInputElement>('[name="form"]')?.value) || 'enquiry' });
      showThanks();
    } catch {
      if (error) {
        error.textContent = 'Sorry, your request could not be sent. Please try again, or tap “Send on WhatsApp”.';
        error.hidden = false;
      }
    } finally {
      if (submit) {
        submit.disabled = false;
        submit.textContent = label;
      }
    }
  });
});
