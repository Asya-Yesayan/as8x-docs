---
title: DocumentExtender.PreAfterCreate(Document, AfterCreateEventArgs) մեթոդ
---

## Նկարագիր

**Համարժեքը 4x-ում՝** ScriptExtension.DocPreAfterCreate

**Դաս՝** [DocumentExtender](../../document_extender.md)

```c#
public virtual Task PreAfterCreate(Document sender, 
                                   AfterCreateEventArgs args)
```

PreAfterCreate մեթոդը կանչվում է միջուկի կողմից՝ փաստաթուղթը ստեղծելուց, [AfterCreate](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/ScriptProcs/AfterCreate.html) իրադարձությունից առաջ։

