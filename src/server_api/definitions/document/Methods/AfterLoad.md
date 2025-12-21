---
title: Document.AfterLoad(AfterLoadEventArgs) մեթոդ
---

## Նկարագիր

**Համարժեքը 4x-ում՝** [AfterLoad](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/ScriptProcs/AfterLoad.html)

**Դաս՝** [Document](../../Document.md)

```c#
public virtual Task AfterLoad(AfterLoadEventArgs args)
```

Մեթոդը կանչվում է միջուկի կողմից՝ [IDocumentService.Load](../../../services/IDocumentService/Methods/Load.md) ֆունկցիայով փաստաթուղթը տվյալների պահոցից բեռնելուց անմիջապես հետո։

Մեթոդում սովորաբար փաստաթղթի դաշտերին տրվում են ժամանակավոր արժեքներ։

**Պարամետրեր**


| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- |
| args | [AfterLoadEventArgs](../../../types/args/AfterLoadEventArgs.md) | - | [AfterLoadEventArgs](../../../types/args/AfterLoadEventArgs.md) դասի օբյեկտ։ |

