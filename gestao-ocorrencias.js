/* ── Navigation ── */
  const pages = ['alunos', 'relatorios', 'config'];
  const titles = { alunos: 'Alunos', relatorios: 'Relatórios', config: 'Configurações' };
  const ctas   = { alunos: 'Novo aluno', relatorios: 'Exportar relatório', config: 'Salvar tudo' };
 
  function navTo(page) {
    pages.forEach(p => {
      document.getElementById('nav-' + p).classList.toggle('active', p === page);
      document.getElementById('section-' + p).classList.toggle('active', p === page);
    });
    document.getElementById('page-title').textContent = titles[page];
    document.getElementById('cta-btn').innerHTML =
      '<i class="ti ti-' + (page === 'relatorios' ? 'download' : 'plus') + '"></i> ' + ctas[page];
  }
 
  /* ── Config sub-tabs ── */
  function cfgTab(idx) {
    document.querySelectorAll('#cfg-tabs .tab').forEach((t, i) =>
      t.classList.toggle('active', i === idx));
    document.querySelectorAll('.cfg-panel').forEach((p, i) =>
      p.classList.toggle('active', i === idx));
  }