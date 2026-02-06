---
title: PreBeforeCopy
nav_exclude: true
---

# DocumentExtender.PreBeforeCopy(Document, BeforeCopyEventArgs) մեթոդ

## Նկարագիր

**Համարժեքը 4x-ում՝** ScriptExtension.DocPreBeforeCopy

**Դաս՝** [DocumentExtender](../document_extender.md)

```c#
public virtual Task PreBeforeCopy(Document sender, 
                                  BeforeCopyEventArgs args)
```

PreBeforeCopy մեթոդը կանչվում է միջուկի կողմից` փաստաթուղթը պատճենման ժամանակ, [BeforeCopy](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/ScriptProcs/BeforeCopy.html) իրադարձությունից հետո։ 

