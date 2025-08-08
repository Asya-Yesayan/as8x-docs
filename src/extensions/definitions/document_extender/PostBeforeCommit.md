---
title: DocumentExtender.PostBeforeCommit(Document, BeforeCommitEventArgs) մեթոդ
---

## Նկարագիր

**Համարժեքը 4x-ում՝** ScriptExtension.DocPostBeforeCommit

**Դաս՝** [DocumentExtender](../document_extender.md)

```c#
public virtual Task PostBeforeCommit(Document sender, 
                                     BeforeCommitEventArgs args)
```

PostBeforeCommit մեթոդը կանչվում է միջուկի կողմից` փաստաթղթի տվյալների պահոցում գրանցումից անմիջապես հետո տրանզակցիայի մեջ՝ [BeforeCommit](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/ScriptProcs/BeforeCommit.html) իրադարձությունից հետո։

