---
title: ColumnHasValidationError
nav_exclude: true
---

# IGridRow.ColumnHasValidationError(string) մեթոդ

```c#
public bool ColumnHasValidationError(string columnName);
```

Մեթոդը վերադարձնում է bool տիպի արժեք, որը ցույց է տալիս արդյոք աղյուսակի տրված սյան վալիդացիայի ընթացքում տեղի են ունեցել սխալներ, թե ոչ։ 

**GridInfo.CacheValidationResults** հայտանիշի true արժեքի դեպքում վալիդացիայի արդյունքները քեշավորվում են։

**Պարամետրեր**

| Անվանում        | Տվյալների տիպ        | Լռությամբ արժեք | Նկարագրություն |
|-----------------|----------------------|----------------|----------------|
|   columnName    |     string           |      -         | Սյան ներքին անունը (կոդը)։ |

## Օրինակ

```c#
private void Grid_CellValueChanged(object sender, CellValueChangedEventArgs e)
{
    var currentRow = (PaymentRow)e.Row;
    if (currentRow.ColumnHasValidationError(nameof(PaymentRow.SummCurDb)))
    {
        return;
    }
}
```