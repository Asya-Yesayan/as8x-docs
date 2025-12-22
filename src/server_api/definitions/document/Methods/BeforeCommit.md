---
title: Document.BeforeCommit(BeforeCommitEventArgs) մեթոդ
---

## Նկարագիր

**Համարժեքը 4x-ում՝** [BeforeCommit](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/ScriptProcs/BeforeCommit.html)

**Դաս՝** [Document](../../Document.md)

```c#
public virtual Task BeforeCommit(BeforeCommitEventArgs args)
```

Մեթոդը կանչվում է միջուկի կողմից՝ [IDocumentService.Store](../../../Services/IDocument/Methods/Store.md) ֆունկցիայով փաստաթուղթը տվյալների պահոցում գրանցելիս։ Կանչը տեղի է ունենում փաստաթղթի գրանցման տրանզակցիայի փակումից անմիջապես առաջ։

Մեթոդում իմաստ չունի փոխել փաստաթղթի հատկությունները, դաշտերը, գեներացնել հաշվառումներ և այլն, քանի որ փաստաթուղթը արդեն գրանցվել է տվյալների պահոցում։

**Պարամետրեր**


| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- |
| args | [BeforeCommitEventArgs](../../../Types/Args/BeforeCommitEventArgs.md) | - | [BeforeCommitEventArgs](../../../Types/Args/BeforeCommitEventArgs.md) դասի օբյեկտ։ |

