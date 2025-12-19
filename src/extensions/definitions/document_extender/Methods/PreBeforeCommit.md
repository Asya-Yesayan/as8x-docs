---
title: DocumentExtender.PreBeforeCommit(Document, BeforeCommitEventArgs) մեթոդ
---

## Նկարագիր

**Համարժեքը 4x-ում՝** ScriptExtension.DocPreBeforeCommit

**Դաս՝** [DocumentExtender](../document_extender.md)

```c#
public virtual Task PreBeforeCommit(Document sender, 
                                    BeforeCommitEventArgs args)
```

PreBeforeCommit մեթոդը կանչվում է միջուկի կողմից` փաստաթղթի տվյալների պահոցում գրանցումից անմիջապես հետո տրանզակցիայի մեջ, [BeforeCommit](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/ScriptProcs/BeforeCommit.html) իրադարձությունից առաջ։
