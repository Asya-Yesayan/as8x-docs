---
title: PostDelete(Document, DeleteEventArgs)
nav_exclude: true
---

# DocumentExtender.PostDelete(Document, DeleteEventArgs) մեթոդ

## Նկարագիր

**Համարժեքը 4x-ում՝** ScriptExtension.DocPostDelete

**Դաս՝** [DocumentExtender](../document_extender.md)

```c#
public virtual Task PostDelete(Document sender, 
                               DeleteEventArgs args)
```

PostDelete մեթոդը կանչվում է միջուկի կողմից` փաստաթուղթը ջնջելու ժամանակ տրանզակցիայի մեջ, [Delete](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/ScriptProcs/Delete.html) իրադարձությունից հետո։ 

