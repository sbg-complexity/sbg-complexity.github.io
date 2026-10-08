document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#contact-form');
  if (!form) return;

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;

    const values = new FormData(form);
    const recipient = form.dataset.recipient;
    const subject = String(values.get('subject')).trim();
    const body = [
      `Name: ${String(values.get('name')).trim()}`,
      `Email: ${String(values.get('email')).trim()}`,
      '',
      String(values.get('message')).trim()
    ].join('\n');

    window.location.href = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
});
