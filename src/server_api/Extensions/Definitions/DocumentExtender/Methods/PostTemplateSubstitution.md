---
title: DocumentExtender.PostTemplateSubstitution(Document, TemplateSubstitutionEventArgs<TemplateSubstitution>) մեթոդ
---

## Նկարագիր

**Համարժեքը 4x-ում՝** [PostTemplateSubstitution](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/ScriptProcs/DocExtenderEvents/PostTemplateSubstitution.html)

**Դաս՝** [DocumentExtender](../document_extender.md)

```c#
public virtual Task PostTemplateSubstitution(Document sender, 
                                             TemplateSubstitutionEventArgs<TemplateSubstitution> args)
```

Մեթոդը կանչվում է միջուկի կողմից, երբ փաստաթղթի համար ձևավորվում է տպման ձև և անջատված է փաստաթղթի [TemplateSubstitutionIsExtended](../../../../Definitions/Document/TemplateSubstitutionIsExtended.md) հատկությունը։ Մեթոդը կանչվում է [TemplateSubstitution](../../../../Definitions/Document/TemplateSubstitution.md) մեթոդի կանչից հետո։

Տե՛ս օգտագործման [օրինակը](../../Examples/PostTemplateSubstitution.md):

**Պարամետրեր**

* `sender` - Տպելու ձևանմուշին կապակցված [փաստաթղթի](../../../../Definitions/Document/document.md) օբյեկտ։
* `args` - [TemplateSubstitutionEventArgs](../../Types/Args/TemplateSubstitutionEventArgs.md) տիպի օբյեկտ։
