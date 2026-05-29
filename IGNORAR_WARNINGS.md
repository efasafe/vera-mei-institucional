# ⚠️ Warnings Conhecidos (Podem ser Ignorados)

## Warning do ReactQuill - findDOMNode

```
Warning: findDOMNode is deprecated and will be removed in the next major release.
```

### O que é?
Este é um warning da biblioteca `react-quill` que usa uma API antiga do React chamada `findDOMNode`.

### É um problema?
**Não!** É apenas um aviso. A funcionalidade funciona perfeitamente.

### Por que não corrigimos?
- O warning vem da biblioteca `react-quill`, não do nosso código
- Seria necessário que os mantenedores da biblioteca atualizassem o código
- Alternativa seria trocar de editor, mas o React Quill funciona bem

### O que fazer?
**Ignore o warning.** O editor de texto rico funciona perfeitamente.

---

## Erro do bcrypt (Resolvido)

Se você ver erros relacionados a `bcrypt`, certifique-se de que:
1. A pasta `/supabase/` foi removida
2. Não há dependências de servidor no `package.json`
3. O arquivo `/workspaces/default/code/supabase` existe (arquivo vazio, não pasta)

Este projeto funciona 100% offline sem necessidade de backend.
