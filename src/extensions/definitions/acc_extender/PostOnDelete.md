---
title: AccountingExtender.PostOnDelete(Accounting, OnDeleteEventArgs) մեթոդ
---

## Նկարագիր

**Համարժեքը 4x-ում՝** [PostOnDelete](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/ScriptProcs/AccountingExtenderEvents/PostOnDelete.html)

```c#
public virtual Task PostOnDelete(Accounting sender, OnDeleteEventArgs onDeleteEventArgs);
```

PreOnDelete իրադարձությունը առաջանում է հաշվառումը ջնջելու ժամանակ` հաշվառման OnDelete իրադարձությունից հետո։ 

**Պարամետրեր**
* `sender` - Հաշվառումը նկարագրող դասը։
* `onDeleteEventArgs` - Հաշվառման գործառնությունները նկարագրող դասը։
