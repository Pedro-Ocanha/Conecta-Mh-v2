# Conecta-Mh-v3
# Sistema de Ocorrências — Colégio MH
## Como usar a integração login ↔ sistema

### Estrutura de arquivos
```
/
├── login.html              ← Tela de entrada
├── index.html              ← Painel principal (protegido)
├── ocorrencias.html        ← Lista de ocorrências (protegido)
├── nova-ocorrencia.html    ← Formulário (protegido)
├── css/
│   ├── login.css           ← Estilos da tela de login
│   └── style.css           ← Estilos do sistema (seu arquivo original)
└── js/
    └── auth.js             ← Lógica de autenticação compartilhada
```

### Como funciona
1. O usuário acessa `login.html`
2. Ao fazer login, os dados são salvos em `sessionStorage` (ou `localStorage` se marcar "Lembrar de mim")
3. Cada página protegida carrega `js/auth.js` que verifica a sessão — se não estiver logado, redireciona para `login.html`
4. O botão de logout aparece automaticamente na sidebar (ícone de seta)

### Credenciais de demonstração
| E-mail                          | Senha  | Perfil        |
|---------------------------------|--------|---------------|
| admin@colegiomh.edu.br          | 123456 | Administrador |
| professor@colegiomh.edu.br      | 123456 | Professor     |

### Para adicionar usuários
Edite o array `USUARIOS` em `login.html`:
```js
const USUARIOS = [
  { email: 'novo@escola.edu.br', senha: 'senha123', nome: 'Nome Completo', role: 'Professor', iniciais: 'NC' },
  // ...
];
```

### Para integrar com back-end real
Substitua a lógica de validação no `login.html` por uma chamada à sua API:
```js
const resp = await fetch('/api/login', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ email, senha })
});
const data = await resp.json();
if (data.token) {
  sessionStorage.setItem('logado', 'true');
  sessionStorage.setItem('usuario', JSON.stringify(data.usuario));
  window.location.href = 'index.html';
}
```
