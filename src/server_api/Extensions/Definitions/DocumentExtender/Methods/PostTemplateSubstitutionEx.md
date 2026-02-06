---
title: PostTemplateSubstitutionEx
nav_exclude: true
---

# DocumentExtender.PostTemplateSubstitutionEx(Document, TemplateSubstitutionEventArgs<TemplateSubstitution>) մեթոդ

## Նկարագիր

**Համարժեքը 4x-ում՝** [PostTemplateSubstitution](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/ScriptProcs/DocExtenderEvents/PostTemplateSubstitution.html)

**Դաս՝** [DocumentExtender](../document_extender.md)

```c#
public virtual Task PostTemplateSubstitutionEx(Document sender, 
                                               TemplateSubstitutionEventArgs<TemplateSubstitution> args)
```

Մեթոդը կանչվում է միջուկի կողմից, երբ փաստաթղթի համար ձևավորվում է տպման ձև և միացված է փաստաթղթի [TemplateSubstitutionIsExtended](../../../../Definitions/Document/Properties/TemplateSubstitutionIsExtended.md) հատկությունը։ Մեթոդը կանչվում է [TemplateSubstitutionEx](../../../../Definitions/Document/Methods/TemplateSubstitutionEx.md) մեթոդի կանչից հետո։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ                   | Լռությամբ արժեք | Նկարագրություն                                                                 |
|----------|---------------------------------|----------------|----------------------------------------------------------------------------------|
| sender   | Document                        | —              | Տպելու ձևանմուշին կապակցված [փաստաթղթի](../../../../Definitions/Document/Document.md) օբյեկտ։    |
| args     | TemplateSubstitutionEventArgs   | —              | [TemplateSubstitutionEventArgs](../../../Types/Args/TemplateSubstitutionEventArgs.md) տիպի օբյեկտ։    |

