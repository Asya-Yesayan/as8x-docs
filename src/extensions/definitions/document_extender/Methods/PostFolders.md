---
title: DocumentExtender.PostFolders(Document, FoldersEventArgs) մեթոդ
---

## Նկարագիր

**Համարժեքը 4x-ում՝** ScriptExtension.DocPostFolders

**Դաս՝** [DocumentExtender](../../document_extender.md)

```c#
public virtual Task PostFolders(Document sender, 
                                FoldersEventArgs args)
```

PostFolders մեթոդը կանչվում է միջուկի կողմից՝ փաստաթղթի պահպանման ժամանակ ([Store](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Functions/ASDOC/Store.html)) տրանզակցիայի մեջ, [Folders](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/ScriptProcs/Folders.html) իրադարձությունից հետո։
