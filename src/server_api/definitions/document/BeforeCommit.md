---
title: Document.BeforeCommit(BeforeCommitEventArgs) մեթոդ
---

## Նկարագիր

Համարժեքը 4x-ում։ [BeforeCommit](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/ScriptProcs/BeforeCommit.html)

```c#
public virtual Task BeforeCommit(BeforeCommitEventArgs args)
```

Մեթոդը կանչվում է միջուկի կողմից [IDocumentService](../../services/IDocumentService.md).[Store](../../services/IDocumentService/Store.md) ֆունկցիայով փաստաթուղթը տվյալների պահոցում գրանցելուց տրանզակցիան փակելուց առաջ։

Մեթոդում իմաստ չունի փոխել փաստաթղթի հատկությունները, գեներացնել հաշվառումները և այլն, քանի որ փաստաթուղթը արդեն գրանցվել է տվյալների պահոցում։

