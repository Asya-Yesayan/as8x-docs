---
title: AddRow
nav_exclude: true
---

# IGrid.AddRow() մեթոդ

```c#
public IGridRow AddRow();
```

Ավելացնում է նոր դատարկ տող ընթացիկ աղյուսակում և վերադարձնում է ավելացված [տողի նկարագրությունը](../../IGridRow/IGridRow.md)։


**Օրինակ**

```c#
public async Task CreateAccsGridRow(Document accDoc)
{
    var accountings = accDoc.Grids["ACCS"];
    // դատարկ տողի ավելացում 
    var row = accountings.AddRow();
    // տողի CODE ներքին անունով սյան արժեքավորում
    row["CODE"] = 123456789;
}
```
