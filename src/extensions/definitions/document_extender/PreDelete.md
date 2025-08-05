---
title: DocumentExtender.PreDelete(Document, DeleteEventArgs) մեթոդ
---

## Նկարագիր

**Համարժեքը 4x-ում՝** ScriptExtension.DocPreDelete

```c#
public virtual Task PreDelete(Document sender, 
                              DeleteEventArgs args)
```

PreDelete մեթոդը կանչվում է միջուկի կողմից` փաստաթուղթը ջնջելու ժամանակ տրանզակցիայի մեջ, [Delete](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/ScriptProcs/Delete.html) իրադարձությունից առաջ։ 

