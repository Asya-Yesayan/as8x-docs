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
public async Task CreateAccsGridRow(Document accDoc)
{
    var accountings = accDoc.Grids["ACCS"];
    // դատարկ տողի ավելացում 
    var row = accountings.InsertRow(0);
    // տողի CODE ներքին անունով սյան արժեքավորում
    row["CODE"] = 123456789;
}
```
