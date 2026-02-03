---
title: PreValidate(Document, ValidateEventArgs)
nav_exclude: true
---

# DocumentExtender.PreValidate(Document, ValidateEventArgs) մեթոդ

## Նկարագիր

**Համարժեքը 4x-ում՝** ScriptExtension.DocPreValidate

**Դաս՝** [DocumentExtender](../document_extender.md)

```c#
public virtual Task PreValidate(Document sender, 
                                ValidateEventArgs args)
```

PreValidate մեթոդը կանչվում է միջուկի կողմից՝ փաստաթղթի պահպանման ժամանակ ([Store](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Functions/ASDOC/Store.html)) տրանզակցիայի մեջ, [Validate](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/ScriptProcs/Validate.html) իրադարձությունից առաջ։

