---
title: AfterCreate(AfterCreateEventArgs)
parent: "Մեթոդներ"
grand_parent: "Փաստաթուղթ"
---

# Document.AfterCreate(AfterCreateEventArgs) մեթոդ

## Նկարագիր

**Համարժեքը 4x-ում՝** [AfterCreate](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/ScriptProcs/AfterCreate.html)

**Դաս՝** [Document](../Document.md)

```c#
public virtual Task AfterCreate(AfterCreateEventArgs args)
```

Մեթոդը կանչվում է միջուկի կողմից՝ [IDocumentService.Create](../../../Services/IDocument/Methods/Create.md) ֆունկցիայով փաստաթղթի օբյեկտը ստեղծելուց հետո։

Փաստաթղթի ներմուծման ժամանակ մեթոդը չի կանչվում։

**Պարամետրեր**


| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- |
| args | [AfterCreateEventArgs](../../../Types/Args/AfterCreateEventArgs.md) | - | [AfterCreateEventArgs](../../../Types/Args/AfterCreateEventArgs.md) դասի օբյեկտ։ |

