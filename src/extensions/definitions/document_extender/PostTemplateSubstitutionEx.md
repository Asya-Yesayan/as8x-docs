---
title: DocumentExtender.PostTemplateSubstitutionEx(Document, TemplateSubstitutionEventArgs<TemplateSubstitution>) մեթոդ
---

## Նկարագիր

Համարժեքը 4x-ում։ PostTemplateSubstitution

```c#
public virtual Task PostTemplateSubstitutionEx(Document sender, TemplateSubstitutionEventArgs<TemplateSubstitution> args)
```

Մեթոդը կանչվում է միջուկի կողմից, երբ փաստաթղթի համար ձևավորվում է տպման ձև և միացված է փաստաթղթի [TemplateSubstitutionIsExtended](../../../server_api/definitions/document/TemplateSubstitutionIsExtended.md) հատկությունը։ Մեթոդը կանչվում է [TemplateSubstitution](../../../server_api/definitions/document/TemplateSubstitution.md) մեթոդի կանչից հետո։

**Պարամետրեր**

* `sender` - Տպելու ձևանմուշին կապակցված փաստաթղթի օբյեկտ։
* `args` - [TemplateSubstitutionEventArgs](../../types/args/TemplateSubstitutionEventArgs.md) տիպի օբյեկտ։