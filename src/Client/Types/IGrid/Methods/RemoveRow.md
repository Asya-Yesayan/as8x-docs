---
title: RemoveRow
nav_exclude: true
---

# IGrid.RemoveRow(int) մեթոդ

```c#
public void RemoveRow(int index);
```

Հեռացնում է նշված ինդեքսով (համարով) տողը ընթացիկ աղյուսակից։

**Պարամետրեր**

| Անվանում        | Տվյալների տիպ        | Լռությամբ արժեք | Նկարագրություն |
|-----------------|----------------------|----------------|----------------|
|  index     |    int            | -              | Հեռացվող տողի ինդեքսը (համարը)։ |

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
