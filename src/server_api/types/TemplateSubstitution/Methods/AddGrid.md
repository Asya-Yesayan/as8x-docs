---
title: AddGrid(string)
nav_exclude: true
---

# TemplateSubstitution.AddGrid(string) մեթոդ

```c#
public G AddGrid(string name)
```

Տպելու ձևանմուշի տեղադրվող արժեքների բազմությունում ավելացնում է աղյուսակ և վերադարձնում աղյուսակի նկարագրությունը, որի միջոցով անհրաժեշտ է ավելացնել աղյուսակի տվյալները (սյուները, տողերը, ցուցադրման ոճը․․․):

**Պարամետրեր**


| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- |
| name | string | - | Աղյուսակի ներքին անունը (կոդը)։ |

**Օրինակ**

```c#
private void InitMailInfo(TemplateSubstitution templateSubstitution)
{
    var grid = templateSubstitution.AddGrid("STATEMENTS");
    grid.AddColumn("PRODUCTNAME", "Product Name");
    grid.AddColumn("STARTDATE", "Start Date");
    grid.AddColumn("ENDDATE", "End Date");
}
```
