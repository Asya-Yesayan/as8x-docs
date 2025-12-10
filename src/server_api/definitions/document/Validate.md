---
title: Document.Validate(ValidateEventArgs) մեթոդ
---

## Նկարագիր

**Համարժեքը 4x-ում՝** [Validate](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/ScriptProcs/Validate.html)

**Դաս՝** [Document](../document.md)

```c#
public virtual Task Validate(ValidateEventArgs args)
```

Մեթոդը կանչվում է միջուկի կողմից [IDocumentService](../../services/IDocumentService.md).[Store](../../services/IDocumentService/Store.md) ֆունկցիայով փաստաթուղթը տվյալների պահոցում գրանցելուց առաջ։

Օգտագործվում է փաստաթղթի դաշտերի արժեքների ստուգման համար։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- |
| args | [ValidateEventArgs](../../types/args/ValidateEventArgs.md) | - | [ValidateEventArgs](../../types/args/ValidateEventArgs.md) դասի օբյեկտ։ |

