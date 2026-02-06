---
title: PostTemplateSubstitution
nav_exclude: true
---

# DocumentExtender.PostTemplateSubstitution(Document, TemplateSubstitutionEventArgs<TemplateSubstitution>) մեթոդ

## Նկարագիր

**Համարժեքը 4x-ում՝** [PostTemplateSubstitution](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/ScriptProcs/DocExtenderEvents/PostTemplateSubstitution.html)

**Դաս՝** [DocumentExtender](../document_extender.md)

```c#
public virtual Task PostTemplateSubstitution(Document sender, 
                                             TemplateSubstitutionEventArgs<TemplateSubstitution> args)
```

Մեթոդը կանչվում է միջուկի կողմից, երբ փաստաթղթի համար ձևավորվում է տպման ձև և անջատված է փաստաթղթի [TemplateSubstitutionIsExtended](../../../../Definitions/Document/Properties/TemplateSubstitutionIsExtended.md) հատկությունը։ Մեթոդը կանչվում է [TemplateSubstitution](../../../../Definitions/Document/Methods/TemplateSubstitution.md) մեթոդի կանչից հետո։

Տե՛ս օգտագործման [օրինակը](../../../Examples/PostTemplateSubstitution.md):

**Պարամետրեր**

| Անվանում | Տվյալների տիպ                   | Լռությամբ արժեք | Նկարագրություն   |
|----------|---------------------------------|----------------|----------------------|
| sender   | Document                        | —              | Տպելու ձևանմուշին կապակցված [փաստաթղթի](../../../../Definitions/Document/document.md)  օբյեկտ։      |
| args     | TemplateSubstitutionEventArgs   | —              | [TemplateSubstitutionEventArgs](../../../Types/Args/TemplateSubstitutionEventArgs.md) տիպի օբյեկտ։     |

