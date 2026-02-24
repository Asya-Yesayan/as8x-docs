---
title: TemplateSubstitutionEx
parent: "Մեթոդներ"
grand_parent: "Փաստաթուղթ"
---

# Document.TemplateSubstitutionEx(Dictionary<string, bool>, Dictionary<string, object>) մեթոդ

## Նկարագիր

**Համարժեքը 4x-ում՝** [TemplateSubstitution](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/ScriptProcs/TemplateSubstitution.html)

**Դաս՝** [Document](../Document.md)

```c#
public virtual Task<TemplateSubstitutionEx> TemplateSubstitutionEx(Dictionary<string, bool> mode, 
                                                                   Dictionary<string, object> parameters = null)
```

Մեթոդը կանչվում է միջուկի կողմից, երբ փաստաթղթի համար ձևավորվում է տպման ձև և միացված է [TemplateSubstitutionIsExtended](../Properties/TemplateSubstitutionIsExtended.md) հատկությունը։

