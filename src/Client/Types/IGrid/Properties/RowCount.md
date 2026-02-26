---
title: RowCount
nav_exclude: true
---

# IGrid.RowCount հատկություն

```c#
public int RowCount { get; }
```

Վերադարձնում է ընթացիկ աղյուսակի տողերի քանակը։

## Օրինակ

```c#
public void DeleteEmployeesWithLowKPI()
{
    var grid = this.indicatorsGrid.DocumentGrid;
    for (var i = 0; i < grid.RowCount; i++)
    {
        double employeeKPI = (double)grid[i]["Score"];
        if (employeeKPI < 0.2)
        {
            grid.RemoveRow(i);
        }
    }
}
```