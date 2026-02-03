---
title: AfterCommit(AfterCommitEventArgs)
parent: "Մեթոդներ"
grand_parent: "Փաստաթուղթ"
---

# Document.AfterCommit(AfterCommitEventArgs) մեթոդ

## Նկարագիր

**Համարժեքը 4x-ում՝** [AfterCommit](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/ScriptProcs/AfterCommit.html)

**Դաս՝** [Document](../Document.md)

```c#
public virtual Task AfterCommit(AfterCommitEventArgs args)
```

Մեթոդը կանչվում է միջուկի կողմից՝ [IDocumentService.Store](../../../Services/IDocument/Methods/Store.md) ֆունկցիայով փաստաթուղթը գրանցելիս, գրանցման տրանզակցիայից ավարտից հետո։

Մեթոդում իմաստ չունի փոխել փաստաթղթի հատկությունները, դաշտերը, գեներացնել հաշվառումներ և այլն, քանի որ փաստաթուղթը արդեն գրանցվել է տվյալների պահոցում և գրանցման տրանզակցիան ավարտվել է։

**Պարամետրեր**


| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- |
| args | [AfterCommitEventArgs](../../../Types/Args/AfterCommitEventArgs.md) | - | [AfterCommitEventArgs](../../../Types/Args/AfterCommitEventArgs.md) դասի օբյեկտ։ |

