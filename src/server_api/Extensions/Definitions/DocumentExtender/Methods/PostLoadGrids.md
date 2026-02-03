---
title: PostLoadGrids(Document, LoadGridsEventArgs)
nav_exclude: true
---

# DocumentExtender.PostLoadGrids(Document, LoadGridsEventArgs) մեթոդ

## Նկարագիր

**Համարժեքը 4x-ում՝** ScriptExtension.DocPostLoadGrids

**Դաս՝** [DocumentExtender](../document_extender.md)

```c#
public virtual Task PostLoadGrids(Document sender, 
                                  LoadGridsEventArgs args)
```

PostLoadGrids մեթոդը կանչվում է միջուկի կողմից` փաստաթղթի աղյուսակների բեռնման ժամանակ՝ [LoadGrids](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/ScriptProcs/LoadGrid.html) իրադարձությունից հետո։

