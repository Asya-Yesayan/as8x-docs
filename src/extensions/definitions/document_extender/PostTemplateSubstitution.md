---
title: DocumentExtender.PostTemplateSubstitution(Document, TemplateSubstitutionEventArgs<TemplateSubstitution>) մեթոդ
---

## Նկարագիր

**Համարժեքը 4x-ում՝** ScriptExtension.DocPostTemplateSubstitution

```c#
public virtual Task PostTemplateSubstitution(Document sender, TemplateSubstitutionEventArgs<TemplateSubstitution> args)
```

Մեթոդը կանչվում է միջուկի կողմից, երբ փաստաթղթի համար ձևավորվում է տպման ձև և անջատված է փաստաթղթի [TemplateSubstitutionIsExtended](../../../server_api/definitions/document/TemplateSubstitutionIsExtended.md) հատկությունը։ Մեթոդը կանչվում է [TemplateSubstitution](../../../server_api/definitions/document/TemplateSubstitution.md) մեթոդի կանչից հետո։

**Պարամետրեր**

* `sender` - Տպելու ձևանմուշին կապակցված [փաստաթղթի](../../../server_api/definitions/document.md) օբյեկտ։
* `args` - [TemplateSubstitutionEventArgs](../../types/args/TemplateSubstitutionEventArgs.md) տիպի օբյեկտ։