---
title: PostAfterLoad
nav_exclude: true
---

# DocumentExtender.PostAfterLoad(Document, AfterLoadEventArgs) մեթոդ

## Նկարագիր

**Համարժեքը 4x-ում՝** ScriptExtension.DocPostAfterLoad

**Դաս՝** [DocumentExtender](../document_extender.md)

```c#
public virtual Task PostAfterLoad(Document sender, 
                                  AfterLoadEventArgs args)
```

PostAfterLoad մեթոդը կանչվում է միջուկի կողմից` փաստաթղթի բեռնումից անմիջապես հետո, [AfterLoad](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/ScriptProcs/AfterLoad.html) իրադարձությունից հետո։

