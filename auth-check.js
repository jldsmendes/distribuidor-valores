// Adicionar verificação de autenticação
const isAuthenticated = sessionStorage.getItem('authenticated') === 'true';
if (!isAuthenticated) {
  window.location.href = 'login.html';
}
