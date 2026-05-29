# 📱 Sistema de Blog Admin - Pronto para Uso!

## ✅ Como Usar Agora (Modo Offline)

O sistema está funcionando em **modo offline** - tudo roda no seu navegador!

### Passo 1: Criar uma Conta
1. Acesse a aplicação
2. Vá para `/signup` (botão "Cadastre-se")
3. Preencha: nome, email e senha
4. Clique em "Criar Conta"

### Passo 2: Fazer Login
Após criar a conta, você será automaticamente redirecionado para o painel admin.

Ou acesse `/login` para fazer login novamente.

### Passo 3: Gerenciar Posts
No painel admin (`/admin` ou `/admin-local`), você pode:
- ✏️ **Criar** novos posts
- 📝 **Editar** posts existentes
- 🗑️ **Deletar** posts
- 🖼️ **Adicionar imagens** aos posts
- 🔍 **Buscar e filtrar** posts

### Passo 4: Ver Posts Públicos
Acesse `/blog` para ver todos os posts publicados como um visitante veria.

## 🔒 Modo Offline

**Vantagens:**
- ✅ Funciona sem internet
- ✅ Não precisa de servidor
- ✅ Dados salvos no navegador
- ✅ Rápido e responsivo

**Limitações:**
- ❌ Dados só no seu navegador
- ❌ Não compartilha entre dispositivos
- ❌ Se limpar o cache, perde os dados

## 🚀 Para Produção

O sistema está otimizado para funcionar em modo offline com localStorage.

Se quiser adicionar um backend no futuro:
1. Crie uma API REST com endpoints para posts e autenticação
2. Altere `src/app/config/api.ts` para apontar para sua API
3. O código já está preparado para detectar automaticamente se há backend configurado

## 📂 Estrutura de Rotas

- `/` - Página inicial
- `/blog` - Lista de posts públicos
- `/login` - Login
- `/signup` - Criar conta
- `/admin` - Painel administrativo principal
- `/admin-local` - Painel administrativo alternativo
- `/sobre` - Sobre
- `/servicos` - Serviços
- `/contato` - Contato
- `/faq` - FAQ

## 💡 Dicas

1. **Primeiro acesso**: Crie uma conta em `/signup`
2. **Senha esquecida**: No modo offline, não há recuperação. Crie uma nova conta.
3. **Backup**: Exporte os dados do localStorage antes de limpar o cache
4. **Imagens**: São convertidas para base64 e salvas junto com os posts

## 🎨 Recursos

- ✅ **Editor Rich Text**: Negrito, itálico e tamanhos de fonte
- ✅ **Upload de Imagens**: Múltiplas imagens por post (convertidas para base64)
- ✅ **Busca e Filtros**: Encontre posts rapidamente
- ✅ **Design Responsivo**: Funciona em desktop e mobile
- ✅ **Tema Personalizado**: Design profissional em laranja

## ❓ Precisa de Ajuda?

- **Modo Offline**: Tudo funciona localmente, sem configuração necessária
- **Dados**: Salvos em `localStorage` do navegador
- **Erros**: Verifique o console do navegador (F12)
