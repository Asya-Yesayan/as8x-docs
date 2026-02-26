---
title: AddRow
nav_exclude: true
---

# IGrid.AddRow() մեթոդ

```c#
public IGridRow AddRow();
```

Ավելացնում է նոր դատարկ տող ընթացիկ աղյուսակում և վերադարձնում է ավելացված [տողի նկարագրությունը](../../IGridRow/IGridRow.md)։


## Օրինակ

```c#
DocumentGridControl definitionsGrid;

private void AddRowInGrid(string comment, int? rowId = null)
{
    var row = this.definitionsGrid.DocumentGrid.AddRow();
    row["CODE"] = 123456789;
}
```
