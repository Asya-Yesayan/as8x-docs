---
title: Document.BeforeCopy(BeforeCopyEventArgs) մեթոդ
---

## Նկարագիր

**Համարժեքը 4x-ում՝** [BeforeCopy](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/ScriptProcs/BeforeCopy.html)

**Դաս՝** [Document](../../Document.md)

```c#
public virtual Task BeforeCopy(BeforeCopyEventArgs args)
```

Մեթոդը կանչվում է միջուկի կողմից՝ [IDocumentService.Copy](../../../services/IDocumentService/Methods/Copy.md) ֆունկցիայով փաստաթղթի պատճեն օբյեկտը ստեղծելուց հետո։

**Պարամետրեր**


| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- |
| args | [BeforeCopyEventArgs](../../../types/args/BeforeCopyEventArgs.md) | - | [BeforeCopyEventArgs](../../../types/args/BeforeCopyEventArgs.md) դասի օբյեկտ։ |