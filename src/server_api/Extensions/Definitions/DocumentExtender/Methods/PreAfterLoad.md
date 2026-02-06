---
title: PreAfterLoad
nav_exclude: true
---

# DocumentExtender.PreAfterLoad(Document, AfterLoadEventArgs) մեթոդ

## Նկարագիր

**Համարժեքը 4x-ում՝** ScriptExtension.DocPreAfterLoad

**Դաս՝** [DocumentExtender](../document_extender.md)

```c#
public virtual Task PreAfterLoad(Document sender, 
                                 AfterLoadEventArgs args)
```

PreAfterLoad մեթոդը կանչվում է միջուկի կողմից` փաստաթղթի բեռնումից անմիջապես հետո, [AfterLoad](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/ScriptProcs/AfterLoad.html) իրադարձությունից առաջ։
