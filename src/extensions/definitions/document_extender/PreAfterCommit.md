---
title: DocumentExtender.PreAfterCommit(Document, AfterCommitEventArgs) մեթոդ
---

## Նկարագիր

**Համարժեքը 4x-ում՝** ScriptExtension.DocPreAfterCommit

```c#
public virtual Task PreAfterCommit(Document sender, AfterCommitEventArgs args)
```

PreAfterCommit մեթոդը կանչվում է միջուկի կողմից` փաստաթղթի տվյալների պահոցում գրանցումից հետո մեծ տրանզակցիայի մեջ՝ [BeforeCommit](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/ScriptProcs/BeforeCommit.html) իրադարձությունից հետո և AfterCommit իրադարձությունից առաջ։

