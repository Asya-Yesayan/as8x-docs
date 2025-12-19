---
title: DocumentExtender.PostValidate(Document, ValidateEventArgs) մեթոդ
---

## Նկարագիր

**Համարժեքը 4x-ում՝** ScriptExtension.DocPostValidate

**Դաս՝** [DocumentExtender](../document_extender.md)

```c#
public virtual Task PostValidate(Document sender, 
                                 ValidateEventArgs args)
```

PostValidate մեթոդը կանչվում է միջուկի կողմից՝ փաստաթղթի պահպանման ժամանակ ([Store](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Functions/ASDOC/Store.html)) տրանզակցիայի մեջ, [Validate](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/ScriptProcs/Validate.html) իրադարձությունից հետո։
