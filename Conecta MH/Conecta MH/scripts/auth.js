
  const u = window.usuarioLogado;
  if (!u) return;

  const avatar = document.querySelector('.avatar');
  const userName = document.querySelector('.user-name');
  const userRole = document.querySelector('.user-role');
  const sidebarFooter = document.querySelector('.sidebar-footer');

  if (avatar)   avatar.textContent   = u.iniciais;
  if (userName) userName.textContent = u.nome;
  if (userRole) userRole.textContent = u.role;


  if (sidebarFooter && !document.getElementById('btn-logout')) {
    const btn = document.createElement('button');
    btn.id = 'btn-logout';
    btn.title = 'Sair do sistema';
    btn.setAttribute('aria-label', 'Sair do sistema');
    btn.innerHTML = `
      <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
        <polyline points="16 17 21 12 16 7"/>
        <line x1="21" y1="12" x2="9" y2="12"/>
      </svg>`;
    btn.style.cssText = `
      background: none; border: none; cursor: pointer;
      color: rgba(255,255,255,0.5); padding: 4px; border-radius: 6px;
      display: flex; align-items: center; margin-left: auto;
      transition: color 0.15s, background 0.15s;
    `;
    btn.addEventListener('mouseenter', () => {
      btn.style.color = '#fff';
      btn.style.background = 'rgba(255,255,255,0.1)';
    });
    btn.addEventListener('mouseleave', () => {
      btn.style.color = 'rgba(255,255,255,0.5)';
      btn.style.background = 'none';
    });
    btn.addEventListener('click', logout);
    sidebarFooter.appendChild(btn);
  }


function logout() {
  if (!confirm('Deseja realmente sair do sistema?')) return;
  localStorage.removeItem('logado');
  localStorage.removeItem('usuario');
  sessionStorage.removeItem('logado');
  sessionStorage.removeItem('usuario');
  window.location.href = 'ocorrencia.html';
}

document.addEventListener('DOMContentLoaded', preencherUsuario);