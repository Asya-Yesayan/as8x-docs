---
title: Correct
nav_exclude: true
---

# IGridRow.Correct(string, object) մեթոդ

```c#
public object Correct(string name, object value)
```

Ստուգում է սյան տրված արժեքի վալիդությունը։

Եթե արժեքը վալիդ է, այն ձևափոխում (սերիալիզացնում) է սյան համակարգային տիպին համապատասխան ձևաչափի և վերադարձնում է։ Օրինակ՝ եթե համակարգային տիպը C(5) է, իսկ արժեքի երկարությունը 3 է, ապա ավելացվում են ևս 2 բացատ։

Եթե արժեքը վալիդ չէ, վերադարձնում է սկզբնական (չձևափոխված) արժեքը։

Եթե արժեքը վալիդ չէ և ValidatorCacheIndex հատկությունը true է, ապա վալիդացիայի սխալի հաղորդագրությունը պահպանվում է քեշում։

**Պարամետրեր**

| Անվանում        | Տվյալների տիպ        | Լռությամբ արժեք | Նկարագրություն |
|-----------------|----------------------|----------------|----------------|
|   columnName    |     string           |      -         | Սյան ներքին անունը (կոդը)։ |
|   value         |     object           |      -         | Ստուգման ենթակա արժեքը։ |

## Օրինակ

```c#
private string accTypes;

public string AccTypes
{
    get
    {
        return this.accTypes;
    }
    set
    {
        if (this.accTypes != value)
        {
            ResetForceValidationBit(nameof(this.AccTypes));
            this.accTypes = value == null ? string.Empty : (string)Correct(nameof(this.AccTypes), value);
        }
        OnPropertyChanged();
    }
}
```