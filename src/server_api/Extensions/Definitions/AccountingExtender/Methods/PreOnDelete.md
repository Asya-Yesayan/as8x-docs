---
title: PreOnDelete(Accounting, OnDeleteEventArgs)
nav_exclude: true
---

# AccountingExtender.PreOnDelete(Accounting, OnDeleteEventArgs) մեթոդ

## Նկարագիր

**Համարժեքը 4x-ում՝** [PreOnDelete](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/ScriptProcs/AccountingExtenderEvents/PreOnDelete.html)

**Դաս՝** [AccountingExtender](../acc_extender.md)

```c#
public virtual Task PreOnDelete(Accounting sender, 
                                OnDeleteEventArgs onDeleteEventArgs);
```

PreOnDelete իրադարձությունը առաջանում է հաշվառումը ջնջելու ժամանակ` հաշվառման OnDelete իրադարձությունից առաջ։ 

**Պարամետրեր**


| Անվանում          | Տվյալների տիպ      | Լռությամբ արժեք | Նկարագրություն                                      |
|-------------------|-------------------|----------------|-------|
| sender            | Accounting        | —              | Հաշվառումը նկարագրող դասը։  |
| onDeleteEventArgs | OnDeleteEventArgs | —              | Հաշվառման գործառնությունները նկարագրող դասը։      |

