---
title: DocumentExtender.PostAfterCommit(Document, AfterCommitEventArgs) մեթոդ
---

## Նկարագիր

**Համարժեքը 4x-ում՝** ScriptExtension.DocPostAfterCommit

```c#
public virtual Task PostAfterCommit(Document sender, 
                                    AfterCommitEventArgs args)
```

PostAfterCommit մեթոդը կանչվում է միջուկի կողմից` փաստաթղթի տվյալների պահոցում գրանցումից հետո մեծ տրանզակցիայի մեջ՝ [BeforeCommit](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/ScriptProcs/BeforeCommit.html), AfterCommit իրադարձություններից հետո։

