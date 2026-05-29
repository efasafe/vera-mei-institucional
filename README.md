# 🌟 Sistema de Blog Administrativo

Sistema completo de blog com painel administrativo, desenvolvido em React + TypeScript + Firebase.

---

## ⚡ NOVO USUÁRIO? Comece Aqui (30 segundos)

### 👉 [LEIA-PRIMEIRO.md](./LEIA-PRIMEIRO.md) ← Clique aqui!

**Resumo ultra-rápido:**
- ✅ Sistema funciona 100%
- 🔴 Configure Firestore (obrigatório - 5 min)
- ⚠️ Ignore erro "bcrypt" (cosmético)
- 📚 Documentação completa disponível

---

## 🚨 IMPORTANTE: Leia Antes de Usar

### ✅ Status do Sistema: FUNCIONANDO PERFEITAMENTE

**O sistema está 100% funcional!** Veja: [STATUS-DO-SISTEMA.md](./STATUS-DO-SISTEMA.md)

### 🔴 Configuração Obrigatória (5 minutos)

**⚠️ Antes de usar, você DEVE configurar as regras do Firestore!**

### 👉 Leia primeiro: [COMECE-AQUI.md](./COMECE-AQUI.md)

Sem esta configuração, você verá:
```
Error: Missing or insufficient permissions
```

**Solução rápida:**
1. Acesse https://console.firebase.google.com/
2. Projeto **vera-mei** > Firestore Database > Rules
3. Cole as regras de desenvolvimento (veja COMECE-AQUI.md)
4. Publique e aguarde 30 segundos

### ⚠️ Erro que Você Pode (e Deve) Ignorar

**Você vai ver este erro no console do servidor:**
```
event loop error: Cannot find module 'bcrypt_lib.node'
```

**👉 IGNORE completamente - não afeta nada!**

- ✅ Sistema funciona perfeitamente com este erro
- ✅ É cosmético e esperado
- ✅ Não pode ser corrigido (arquivo protegido)
- ✅ Detalhes: [SOBRE-ERRO-BCRYPT.md](./SOBRE-ERRO-BCRYPT.md)

---

## ✨ Características

- 📝 **Editor Rich Text** - Negrito, itálico e tamanhos de fonte
- 🖼️ **Upload de Imagens** - Múltiplas imagens por post
- 🔍 **Busca e Filtros** - Encontre posts facilmente
- 🎨 **Design Profissional** - Interface moderna e responsiva
- 🔥 **Firebase Backend** - Autenticação e banco de dados na nuvem
- 🔐 **Sistema de Login** - Autenticação Firebase segura
- ☁️ **Sincronização** - Dados salvos na nuvem, acessíveis de qualquer dispositivo

## 🚀 Como Usar

### 1️⃣ Criar Conta
Acesse `/signup` e crie sua conta de administrador.

### 2️⃣ Fazer Login
Use `/login` para acessar o painel admin.

### 3️⃣ Gerenciar Posts
No painel admin (`/admin`):
- Criar, editar e deletar posts
- Adicionar múltiplas imagens
- Usar formatação rica no conteúdo
- Buscar e filtrar posts

### 4️⃣ Visualizar Blog
Acesse `/blog` para ver os posts publicados.

## 📁 Rotas Disponíveis

### Públicas
- `/` - Página inicial
- `/blog` - Lista de posts
- `/sobre` - Sobre
- `/servicos` - Serviços
- `/contato` - Contato
- `/faq` - FAQ

### Administrativas
- `/login` - Login
- `/signup` - Cadastro
- `/admin` - Painel administrativo principal
- `/admin-local` - Painel administrativo alternativo

## 🛠️ Tecnologias

### Frontend
- **React 18.3** - Framework frontend
- **TypeScript** - Tipagem estática
- **React Router 7** - Roteamento
- **Tailwind CSS 4** - Estilização
- **React Quill** - Editor de texto rico
- **Lucide React** - Ícones

### Backend (Firebase)
- **Firebase Authentication** - Autenticação de usuários
- **Cloud Firestore** - Banco de dados NoSQL em tempo real
- **Firebase SDK** - Integração completa

## 💾 Armazenamento

Os dados são salvos no **Firebase Cloud Firestore**:
- **Autenticação**: Firebase Authentication (gerenciado automaticamente)
- **Posts**: Collection `posts` no Firestore
- **Imagens**: Base64 armazenado nos documentos de posts
- **Sincronização**: Automática entre dispositivos via Firebase

## 🎨 Editor de Conteúdo

O editor suporta:
- **Negrito** - Destacar texto importante
- **Itálico** - Enfatizar palavras
- **Tamanhos** - Pequeno, Normal, Grande, Enorme

## 🖼️ Imagens

- Formato: JPG, PNG, GIF, WebP
- Tamanho máximo: 5MB por imagem
- Armazenamento: Base64 (convertido automaticamente)
- Múltiplas imagens por post

## ⚙️ Desenvolvimento

```bash
# Instalar dependências
pnpm install

# Iniciar em modo desenvolvimento
pnpm run dev

# Build para produção
pnpm run build
```

## 📦 Estrutura do Projeto

```
src/
├── app/
│   ├── components/
│   │   ├── pages/
│   │   │   ├── HomePage.tsx
│   │   │   ├── BlogPage.tsx
│   │   │   ├── LoginPage.tsx
│   │   │   ├── SignupPage.tsx
│   │   │   ├── AdminDashboardNew.tsx
│   │   │   └── AdminDashboardLocal.tsx
│   │   ├── PostForm.tsx
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── utils/
│   │   ├── firebaseAuth.ts       # Autenticação Firebase
│   │   └── firebasePosts.ts      # CRUD de posts
│   ├── config/
│   │   ├── firebase.ts           # Configuração Firebase
│   │   └── api.ts                # Config legacy
│   └── App.tsx
└── styles/
    ├── theme.css
    └── quill-custom.css
```

## 📚 Documentação

- **COMECE-AQUI.md** - 🚀 Guia rápido de configuração inicial
- **FIRESTORE-RULES.md** - 🔐 Como configurar regras de segurança
- **FIREBASE-SETUP.md** - 🔥 Guia completo do Firebase
- **ERROS-CONHECIDOS.md** - 🐛 Soluções para erros comuns
- **README.md** - 📖 Este arquivo (visão geral)

## 🔒 Segurança

### Implementado
- ✅ **Firebase Authentication** - Senhas com hash automático
- ✅ **HTTPS obrigatório** - Gerenciado pelo Firebase
- ✅ **Tokens JWT** - Autenticação segura
- ✅ **AuthorId vinculado** - Posts ligados ao criador

### Recomendações para Produção
- Configure **Firestore Security Rules** (veja FIRESTORE-RULES.md)
  - JWT tokens
  - HTTPS
  - Rate limiting

## 📝 Notas

- Sistema otimizado para protótipos e desenvolvimento
- Dados persistem apenas no navegador local
- Limpar cache do navegador apaga todos os dados
- Não compartilha dados entre dispositivos

## 🤝 Contribuindo

Este é um sistema educacional/protótipo. Sinta-se livre para:
- Fazer fork do projeto
- Adicionar funcionalidades
- Melhorar o código
- Criar issues para bugs

## 📄 Licença

MIT License - Livre para uso pessoal e comercial

---

Desenvolvido com ❤️ usando React + TypeScript
