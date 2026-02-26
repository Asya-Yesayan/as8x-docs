---
title: Validate
nav_exclude: true
---

# IGridRow.Validate() մեթոդ

```c#
public string Validate();
```

Իրականացնում է ընթացիկ տողի բոլոր սյուների վալիդացիա և վերադարձնում առաջին հայտնաբերված սխալի հաղորդագրությունը։ Սխալների բացակայության դեպքում վերադարձնում է null։ 

Սխալի առկայության դեպքում HasValidationError հատկությունը արժեքը դառնում է true: Exception առաջանալու դեպքում կատարվում է OnRowError մեթոդի կանչ։

## Օրինակ

```c#
private void Services_GridRowPropertyChanged(ClientDoc.ServicesRow row, GridRowPropertyChangedEventArgs e)
{
    if (e.PropertyName == nameof(ClientDoc.ServicesRow.Count))
    {
        row.CurSum = row.Count * row.Price;
    }
    row.Validate();

    if (!row.HasValidationError)
    {
        CreateServiceGridContent();
    }
}
```
