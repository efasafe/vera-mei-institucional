# 🔐 Configurar Regras de Segurança do Firestore

## ❗ ERRO ATUAL

Você está vendo este erro:
```
Error: Missing or insufficient permissions
```

Isso acontece porque **as regras de segurança do Firestore não estão configuradas**.

## ✅ SOLUÇÃO RÁPIDA (Desenvolvimento)

### Passo 1: Acesse o Firebase Console

1. Vá para: https://console.firebase.google.com/
2. Selecione o projeto **vera-mei**
3. No menu lateral, clique em **Firestore Database**
4. Clique na aba **Rules** (Regras)

### Passo 2: Cole estas Regras (Desenvolvimento)

**⚠️ ATENÇÃO: Estas regras são APENAS para desenvolvimento. Permitem leitura/escrita TOTAL.**

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // REGRAS DE DESENVOLVIMENTO - PERMITE TUDO
    match /{document=**} {
      allow read, write: if true;
    }
  }
}
```

### Passo 3: Publique as Regras

1. Clique no botão **"Publicar"** (Publish)
2. Aguarde alguns segundos
3. Recarregue seu aplicativo

## 🔒 REGRAS DE PRODUÇÃO (Recomendadas)

Quando for para produção, use estas regras mais seguras:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Posts collection
    match /posts/{postId} {
      // Qualquer um pode LER posts
      allow read: if true;
      
      // Apenas usuários AUTENTICADOS podem CRIAR posts
      allow create: if request.auth != null;
      
      // Apenas o AUTOR pode EDITAR ou DELETAR seus próprios posts
      allow update, delete: if request.auth != null 
        && request.auth.uid == resource.data.authorId;
    }
  }
}
```

## 🎯 Explicação das Regras de Produção

### Leitura (Read)
- ✅ **Qualquer pessoa** pode ler posts (blog público)

### Criação (Create)
- ✅ Apenas **usuários autenticados** podem criar posts
- ❌ Visitantes anônimos NÃO podem criar posts

### Edição/Exclusão (Update/Delete)
- ✅ Apenas o **autor original** pode editar/deletar
- ✅ Verifica se `request.auth.uid == resource.data.authorId`
- ❌ Outros usuários NÃO podem editar posts alheios

## 🧪 Testar as Regras

### No Firebase Console

1. Vá para **Firestore Database** > **Rules**
2. Clique na aba **Simulator** (Simulador)
3. Configure:
   - **Location**: `posts/{postId}`
   - **Auth**: Authenticated (marque a caixa)
   - **UID**: qualquer string (ex: "user123")

4. Teste cada operação:
   - `get` (ler) - deve funcionar sem auth
   - `create` (criar) - deve funcionar com auth
   - `update` (atualizar) - deve funcionar se uid == authorId
   - `delete` (deletar) - deve funcionar se uid == authorId

## 📝 Regras Personalizadas (Opcional)

### Permitir apenas admins editarem qualquer post

```javascript
match /posts/{postId} {
  allow read: if true;
  allow create: if request.auth != null;
  
  // Permite ao autor OU a admins
  allow update, delete: if request.auth != null && (
    request.auth.uid == resource.data.authorId ||
    request.auth.token.admin == true
  );
}
```

### Limitar número de posts por usuário

```javascript
match /posts/{postId} {
  allow read: if true;
  
  allow create: if request.auth != null 
    && get(/databases/$(database)/documents/users/$(request.auth.uid)).data.postCount < 100;
  
  allow update, delete: if request.auth != null 
    && request.auth.uid == resource.data.authorId;
}
```

### Validar estrutura de dados

```javascript
match /posts/{postId} {
  allow read: if true;
  
  allow create: if request.auth != null
    && request.resource.data.title is string
    && request.resource.data.title.size() > 0
    && request.resource.data.title.size() <= 200
    && request.resource.data.content is string
    && request.resource.data.authorId == request.auth.uid;
  
  allow update: if request.auth != null
    && request.auth.uid == resource.data.authorId
    && request.resource.data.authorId == resource.data.authorId; // Não pode mudar autor
  
  allow delete: if request.auth != null
    && request.auth.uid == resource.data.authorId;
}
```

## 🐛 Troubleshooting

### Erro persiste após publicar regras
1. **Aguarde 30-60 segundos** - regras levam tempo para propagar
2. **Limpe o cache** do navegador (Ctrl+Shift+R ou Cmd+Shift+R)
3. **Faça logout e login novamente** no app

### "Error: 7 PERMISSION_DENIED: false for 'get'"
- As regras estão bloqueando a operação
- Verifique se publicou as regras corretamente
- No modo desenvolvimento, use `allow read, write: if true;`

### "Error: Failed to get document because the client is offline"
- Problema de conexão com internet
- Firestore está em modo offline
- Verifique sua conexão

### Regras aplicadas mas erro continua
1. Abra o **Console do navegador** (F12)
2. Vá para a aba **Application** > **Storage** > **IndexedDB**
3. Delete todos os bancos de dados do Firestore
4. Recarregue a página

## 📚 Documentação Oficial

- [Firestore Security Rules Guide](https://firebase.google.com/docs/firestore/security/get-started)
- [Rules Language Reference](https://firebase.google.com/docs/firestore/security/rules-structure)
- [Common Rules Examples](https://firebase.google.com/docs/firestore/security/rules-conditions)

## ⚡ Checklist Rápido

- [ ] Acessei o Firebase Console
- [ ] Selecionei o projeto vera-mei
- [ ] Fui em Firestore Database > Rules
- [ ] Colei as regras de desenvolvimento
- [ ] Cliquei em "Publicar"
- [ ] Aguardei 30 segundos
- [ ] Recarreguei o aplicativo
- [ ] Erro resolvido! ✅

---

**IMPORTANTE**: Comece com as regras de desenvolvimento (permite tudo) para testar. Depois, quando tudo funcionar, migre para as regras de produção (mais seguras).
