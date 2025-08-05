---
title: AccountingExtender.PreOnDelete(Accounting, OnDeleteEventArgs) մեթոդ
---

## Նկարագիր

**Համարժեքը 4x-ում՝** [PreOnDelete](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/ScriptProcs/AccountingExtenderEvents/PreOnDelete.html)

```c#
public virtual Task PreOnDelete(Accounting sender, 
                                OnDeleteEventArgs onDeleteEventArgs);
```

PreOnDelete իրադարձությունը առաջանում է հաշվառումը ջնջելու ժամանակ` հաշվառման OnDelete իրադարձությունից առաջ։ 

**Պարամետրեր**
* `sender` - Հաշվառումը նկարագրող դասը։
* `onDeleteEventArgs` - Հաշվառման գործառնությունները նկարագրող դասը։
