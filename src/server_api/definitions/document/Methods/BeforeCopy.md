---
title: BeforeCopy
parent: "Մեթոդներ"
grand_parent: "Փաստաթուղթ"
---

# Document.BeforeCopy(BeforeCopyEventArgs) մեթոդ

## Նկարագիր

**Համարժեքը 4x-ում՝** [BeforeCopy](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/ScriptProcs/BeforeCopy.html)

**Դաս՝** [Document](../Document.md)

```c#
public virtual Task BeforeCopy(BeforeCopyEventArgs args)
```

Մեթոդը կանչվում է միջուկի կողմից՝ [IDocumentService.Copy](../../../Services/IDocument/Methods/Copy.md) ֆունկցիայով փաստաթղթի պատճեն օբյեկտը ստեղծելուց հետո։

**Պարամետրեր**


| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- |
| args | [BeforeCopyEventArgs](../../../Types/Args/BeforeCopyEventArgs.md) | - | [BeforeCopyEventArgs](../../../Types/Args/BeforeCopyEventArgs.md) դասի օբյեկտ։ |