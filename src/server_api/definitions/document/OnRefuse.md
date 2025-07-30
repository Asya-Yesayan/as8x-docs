---
title: Document.OnRefuse(RefuseEventArgs) մեթոդ
---

## Նկարագիր

Համարժեքը 4x-ում։ [OnRefuseDoc](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/ScriptProcs/OnRefuseDoc.html)

```c#
public virtual Task OnRefuse(RefuseEventArgs args)
```

Մեթոդը կանչվում է միջուկի կողմից [IDocumentService](../../services/IDocumentService.md).[Delete](../../services/IDocumentService/Delete.md) մեթոդի միջոցով փաստաթղթի ջնջելուց առաջ, եթե մեթոդի `callDelete` պարամետրի արժեքը `false` է։ 

Այս մեթոդի մշակման դեպքում իմաստ չունի մշակել [Delete](Delete.md) մեթոդը, քանի որ մեթոդը չի կանչվելու միջուկի կողմից։

