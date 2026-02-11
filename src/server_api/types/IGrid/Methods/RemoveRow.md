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
