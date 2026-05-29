# 🚀 COMECE AQUI - Configuração Rápida

## 🔴 PASSO 1: Configure as Regras do Firestore (OBRIGATÓRIO)

**SEM ESTE PASSO, O SISTEMA NÃO FUNCIONA!**

### Como fazer:

1. **Acesse o Firebase Console:**
   - Abra: https://console.firebase.google.com/
   - Faça login com sua conta Google

2. **Selecione o projeto:**
   - Clique no projeto **"vera-mei"**

3. **Configure as regras:**
   - No menu lateral esquerdo, clique em **"Firestore Database"**
   - Clique na aba **"Rules"** (Regras)
   - Você verá um editor de texto

4. **Cole estas regras:**

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if true;
    }
  }
}
```

5. **Publique:**
   - Clique no botão azul **"Publicar"** (ou **"Publish"**)
   - Aguarde a confirmação

6. **Aguarde 30 segundos** para as regras propagarem

7. **Recarregue seu aplicativo**

✅ **Pronto! Agora o sistema vai funcionar.**

---

## 🟢 PASSO 2: Teste o Sistema

### 1. Crie uma conta
- Vá para a página `/signup`
- Preencha: nome, email e senha (mínimo 6 caracteres)
- Clique em "Criar Conta"

### 2. Faça login
- Você será redirecionado automaticamente
- Ou acesse `/login` e faça login manualmente

### 3. Crie um post
- No painel admin, clique em "Nova Postagem"
- Preencha título e conteúdo
- Use o editor de texto para formatar
- Adicione imagens (opcional)
- Salve o post

### 4. Veja o resultado
- Acesse `/blog` para ver os posts publicados
- Acesse `/admin` para gerenciar posts

---

## ⚠️ Erros que Você DEVE Ignorar

Você verá estes erros no console - **são normais e esperados**:

### ❌ "Cannot find module '/var/tmp/.../bcrypt_lib.node'"

**EXEMPLO COMPLETO:**
```
event loop error: Error: Cannot find module '/var/tmp/sb-compile-edge-runtime/node_modules/localhost/bcrypt/5.1.1/lib/binding/napi-v3/bcrypt_lib.node'
```

**POR QUÊ:**
- Arquivo protegido do Figma Make (`kv_store.tsx`) importa Supabase
- Supabase requer bcrypt (módulo nativo)
- Edge Runtime não suporta módulos nativos
- **Não usamos** Supabase - sistema usa Firebase

**O QUE FAZER:**
- ✅ **IGNORE completamente**
- ✅ Sistema funciona perfeitamente
- ✅ Erro não afeta nenhuma funcionalidade
- ✅ Aparece apenas no servidor, não no navegador

**📖 Explicação técnica completa:** [SOBRE-ERRO-BCRYPT.md](./SOBRE-ERRO-BCRYPT.md)

---

### ⚠️ "findDOMNode is deprecated"

**POR QUÊ:**
- Biblioteca `react-quill` (editor de texto) usa API antiga
- É um problema da biblioteca, não do nosso código

**O QUE FAZER:**
- ✅ **IGNORE este warning**
- ✅ Não afeta o funcionamento do editor
- ✅ Será corrigido quando react-quill atualizar

---

### 🎯 Foque nos Erros Importantes

**IGNORE:**
- ❌ bcrypt module not found
- ⚠️ findDOMNode is deprecated

**NÃO IGNORE:**
- 🔴 Missing or insufficient permissions (configure Firestore rules!)
- 🔴 Erros de autenticação no navegador
- 🔴 Falhas ao criar/editar posts

---

## 📁 Documentação Completa

Depois que tudo estiver funcionando, leia:

1. **FIRESTORE-RULES.md** - Regras de segurança detalhadas
2. **FIREBASE-SETUP.md** - Guia completo do Firebase
3. **ERROS-CONHECIDOS.md** - Troubleshooting de erros comuns
4. **README.md** - Visão geral do sistema

---

## 🆘 Precisa de Ajuda?

### O sistema não funciona após configurar as regras?

1. **Aguarde 30-60 segundos** após publicar as regras
2. **Limpe o cache** do navegador: `Ctrl+Shift+R` (Windows/Linux) ou `Cmd+Shift+R` (Mac)
3. **Faça logout e login novamente**
4. **Verifique o console** do navegador (F12) para erros

### Ainda não funciona?

1. Abra o arquivo **ERROS-CONHECIDOS.md**
2. Procure pelo erro específico que você está vendo
3. Siga as instruções de solução

---

## ✅ Checklist de Verificação

Marque cada item conforme completa:

- [ ] Acessei o Firebase Console
- [ ] Selecionei o projeto "vera-mei"
- [ ] Fui em Firestore Database > Rules
- [ ] Colei as regras de desenvolvimento
- [ ] Cliquei em "Publicar"
- [ ] Aguardei 30 segundos
- [ ] Recarreguei o aplicativo
- [ ] Criei uma conta de teste
- [ ] Fiz login com sucesso
- [ ] Criei um post de teste
- [ ] O post apareceu em /blog
- [ ] Sistema funcionando! 🎉

---

## 🎯 Próximos Passos

Depois que tudo estiver funcionando:

1. **Explore as funcionalidades:**
   - Editor de texto rich (negrito, itálico, tamanhos)
   - Upload de múltiplas imagens
   - Edição e exclusão de posts
   - Busca de posts

2. **Customize o design:**
   - As cores do projeto estão em `/src/styles/theme.css`
   - Componentes em `/src/app/components/`

3. **Configure regras de produção:**
   - Quando for lançar, use as regras seguras do FIRESTORE-RULES.md
   - Elas impedem que usuários não autenticados criem/editem posts

---

**Tem dúvidas? Leia ERROS-CONHECIDOS.md para soluções comuns!**
