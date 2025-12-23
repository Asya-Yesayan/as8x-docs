---
title: Document.Validate(ValidateEventArgs) մեթոդ
---

## Նկարագիր

**Համարժեքը 4x-ում՝** [Validate](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/ScriptProcs/Validate.html)

**Դաս՝** [Document](../Document.md)

```c#
public virtual Task Validate(ValidateEventArgs args)
```

Մեթոդը կանչվում է միջուկի կողմից [IDocumentService](../../../Services/IDocument/IDocumentService.md).[Store](../../../Services/IDocument/Methods/Store.md) ֆունկցիայով փաստաթուղթը տվյալների պահոցում գրանցելուց առաջ։

Օգտագործվում է փաստաթղթի դաշտերի արժեքների ստուգման համար։

**Պարամետրեր**


| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- |
| args | [ValidateEventArgs](../../../Types/Args/ValidateEventArgs.md) | - | [ValidateEventArgs](../../../Types/Args/ValidateEventArgs.md) դասի օբյեկտ։ |

