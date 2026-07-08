function subscrever() {
  const emailInput = document.getElementById('newsletter-email');
  const msg = document.getElementById('newsletter-msg');
  const email = emailInput.value.trim();

  // validação simples de email
  const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  if (!emailValido) {
    msg.textContent = 'Por favor, insira um email válido.';
    msg.className = 'newsletter-msg erro';
    return;
  }

  // aqui você poderia enviar o email para o seu backend/API
  msg.textContent = 'Sucesso! Verifique o seu email.';
  msg.className = 'newsletter-msg sucesso';

  emailInput.value = '';
}