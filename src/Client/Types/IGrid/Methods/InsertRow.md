---
title: InsertRow
nav_exclude: true
---

# IGrid.InsertRow(int) մեթոդ

```c#
public IGridRow InsertRow(int index);
```

Ավելացնում է նոր դատարկ տող ընթացիկ աղյուսակում՝ **index** պարամետրում նշված դիրքում և վերադարձնում ավելացված [տողի նկարագրությունը](../../IGridRow/IGridRow.md)։

**Պարամետրեր**

| Անվանում        | Տվյալների տիպ        | Լռությամբ արժեք | Նկարագրություն |
|-----------------|----------------------|----------------|----------------|
|   index         |     int              |      -         | Ավելացվող տողի դիրքի համարը։ |

**Օրինակ**

```c#
checkTmSheetGrid.InsertRow(1);
checkTmSheetGrid[1].Department = cadresDoc.DepartG;
checkTmSheetGrid[1].EmplNum = cadresDoc.Code;
```
