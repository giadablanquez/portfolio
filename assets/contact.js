const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!form.reportValidity()) return;
  const fields = new FormData(form);
  const subject = encodeURIComponent(fields.get('Subject').trim());
  const message = encodeURIComponent(fields.get('Message').trim());
  window.location.href = 'mailto:giada.blanquez@gmail.com?subject=' + subject + '&body=' + message;
});
