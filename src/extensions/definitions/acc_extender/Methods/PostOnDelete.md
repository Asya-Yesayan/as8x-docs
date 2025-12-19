---
title: AccountingExtender.PostOnDelete(Accounting, OnDeleteEventArgs) մեթոդ
---

## Նկարագիր

**Համարժեքը 4x-ում՝** [PostOnDelete](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/ScriptProcs/AccountingExtenderEvents/PostOnDelete.html)

**Դաս՝** [AccountingExtender](../../acc_extender.md)

```c#
public virtual Task PostOnDelete(Accounting sender, 
                                 OnDeleteEventArgs onDeleteEventArgs);
```

PreOnDelete իրադարձությունը առաջանում է հաշվառումը ջնջելու ժամանակ` հաշվառման OnDelete իրադարձությունից հետո։ 

**Պարամետրեր**


| Անվանում        | Տվյալների տիպ        | Լռությամբ արժեք | Նկարագրություն |
|-----------------|----------------------|----------------|----------------|
| sender          | Accounting           | -              | Հաշվառումը նկարագրող դասը։ |
| onDeleteEventArgs | OnDeleteEventArgs    | -              | Հաշվառման գործառնությունները նկարագրող դասը։ |
