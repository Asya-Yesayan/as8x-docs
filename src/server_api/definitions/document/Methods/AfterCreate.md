---
title: Document.AfterCreate(AfterCreateEventArgs) մեթոդ
---

## Նկարագիր

**Համարժեքը 4x-ում՝** [AfterCreate](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/ScriptProcs/AfterCreate.html)

**Դաս՝** [Document](../../Document.md)

```c#
public virtual Task AfterCreate(AfterCreateEventArgs args)
```

Մեթոդը կանչվում է միջուկի կողմից՝ [IDocumentService.Create](../../../services/IDocumentService/Methods/Create.md) ֆունկցիայով փաստաթղթի օբյեկտը ստեղծելուց հետո։

Փաստաթղթի ներմուծման ժամանակ մեթոդը չի կանչվում։

**Պարամետրեր**


| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- |
| args | [AfterCreateEventArgs](../../../types/args/AfterCreateEventArgs.md) | - | [AfterCreateEventArgs](../../../types/args/AfterCreateEventArgs.md) դասի օբյեկտ։ |

