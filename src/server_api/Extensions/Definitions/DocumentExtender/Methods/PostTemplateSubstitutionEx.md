---
title: DocumentExtender.PostTemplateSubstitutionEx(Document, TemplateSubstitutionEventArgs<TemplateSubstitution>) մեթոդ
---

## Նկարագիր

**Համարժեքը 4x-ում՝** [PostTemplateSubstitution](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/ScriptProcs/DocExtenderEvents/PostTemplateSubstitution.html)

**Դաս՝** [DocumentExtender](../document_extender.md)

```c#
public virtual Task PostTemplateSubstitutionEx(Document sender, 
                                               TemplateSubstitutionEventArgs<TemplateSubstitution> args)
```

Մեթոդը կանչվում է միջուկի կողմից, երբ փաստաթղթի համար ձևավորվում է տպման ձև և միացված է փաստաթղթի [TemplateSubstitutionIsExtended](../../../Core/Definitions/Document/TemplateSubstitutionIsExtended.md) հատկությունը։ Մեթոդը կանչվում է [TemplateSubstitutionEx](../../../Core/Definitions/Document/TemplateSubstitutionEx.md) մեթոդի կանչից հետո։

**Պարամետրեր**

* `sender` - Տպելու ձևանմուշին կապակցված [փաստաթղթի](../../../Core/Definitions/Document/document.md) օբյեկտ։
* `args` - [TemplateSubstitutionEventArgs](../../Models/args/TemplateSubstitutionEventArgs.md) տիպի օբյեկտ։
