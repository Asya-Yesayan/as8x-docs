---
title: RowCount
nav_exclude: true
---

# IGrid.RowCount հատկություն

```c#
public int RowCount { get; }
```

Վերադարձնում է ընթացիկ աղյուսակի տողերի քանակը։

**Օրինակ**

```c#
public void DeleteEmployeesWithLowRate(Document doc)
{
    var employees = doc.Grids["EMPL"];
    for (int i = 0; i < employees.RowCount; i++)
    {
        double employeeRate = (double)employees[i]["Rate"];
        if (employeeRate < 4.0)
        {
            employees.RemoveRow(i);
        }
    }
}
```