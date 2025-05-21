// Verificar se o usuário está autenticado
const isAuthenticated = sessionStorage.getItem('authenticated') === 'true';

// Se não estiver autenticado e não estiver na página de login, redirecionar
if (!isAuthenticated && !window.location.href.includes('login.html')) {
  window.location.href = 'login.html';
} else if (isAuthenticated && window.location.href.includes('index.html')) {
  // Se estiver autenticado e na página index, redirecionar para home
  window.location.href = 'home.html';
}
