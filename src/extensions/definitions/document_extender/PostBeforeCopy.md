---
title: DocumentExtender.PostBeforeCopy(Document, BeforeCopyEventArgs) մեթոդ
---

## Նկարագիր

**Համարժեքը 4x-ում՝** ScriptExtension.DocPostBeforeCopy

**Դաս՝** [DocumentExtender](../document_extender.md)

```c#
public virtual Task PostBeforeCopy(Document sender, 
                                   BeforeCopyEventArgs args)
```

PostBeforeCopy մեթոդը կանչվում է միջուկի կողմից` փաստաթուղթը պատճենման ժամանակ, [BeforeCopy](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/ScriptProcs/BeforeCopy.html) իրադարձությունից հետո։ 

