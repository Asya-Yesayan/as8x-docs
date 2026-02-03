---
title: PostAfterCreate(Document, AfterCreateEventArgs)
nav_exclude: true
---

# DocumentExtender.PostAfterCreate(Document, AfterCreateEventArgs) մեթոդ

## Նկարագիր

**Համարժեքը 4x-ում՝** ScriptExtension.DocPostAfterCreate

**Դաս՝** [DocumentExtender](../document_extender.md)

```c#
public virtual Task PostAfterCreate(Document sender, 
                                    AfterCreateEventArgs args)
```

PostAfterCreate մեթոդը կանչվում է միջուկի կողմից՝ փաստաթուղթը ստեղծելուց, [AfterCreate](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/ScriptProcs/AfterCreate.html) իրադարձությունից հետո։

