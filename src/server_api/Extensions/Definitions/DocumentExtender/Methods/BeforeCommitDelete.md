---
title: BeforeCommitDelete(Document, BeforeCommitDeleteEventArgs)
nav_exclude: true
---

# DocumentExtender.BeforeCommitDelete(Document, BeforeCommitDeleteEventArgs) մեթոդ

## Նկարագիր

**Համարժեքը 4x-ում՝** [BeforeCommitDelete](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/ScriptProcs/DocExtenderEvents/BeforeCommitDelete.html)

**Դաս՝** [DocumentExtender](../document_extender.md)

```c#
public virtual Task BeforeCommitDelete(Document sender, 
                                       BeforeCommitDeleteEventArgs args)
```

BeforeCommitDelete մեթոդը կանչվում է միջուկի կողմից` տվյալների պահոցից փաստաթղթի հեռացումից անմիջապես հետո տրանզակցիայի մեջ։ 
