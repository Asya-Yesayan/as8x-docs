---
title: EnforceValidation
nav_exclude: true
---

# IGridRow.EnforceValidation մեթոդ

## Գերբեռնումներ

| Անվանում | Նկարագրություն |
|--|--|
| [EnforceValidation()](#igridrowenforcevalidation-մեթոդ-1)| Թարմացվում է աղյուսակի բոլոր սյուների վալիդատորների քեշը, որպեսզի հաջորդ վալիդացիայի ժամանակ նորից կատարվի ստուգում՝ առանց քեշի օգտագործման։ Հետո կանչվում է EnforcePropertyChanged մեթոդը, որի արդյունքում սկսվում է ընթացիկ տողի վալիդացիան։ |
| [EnforceValidation(string[])](#igridrowEnforceValidation-մեթոդ) | Թարմացվում է նշված ներքին անուններով սյուների վալիդատորների քեշը, որպեսզի հաջորդ վալիդացիայի ժամանակ նորից կատարվի ստուգում՝ առանց քեշի օգտագործման։ Հետո կանչվում է EnforcePropertyChanged մեթոդը, որի արդյունքում սկսվում է ընթացիկ տողի վալիդացիան։ |

### IGridRow.EnforceValidation() մեթոդ

```c#
public void EnforceValidation()
```

Թարմացվում է աղյուսակի բոլոր սյուների վալիդատորների քեշը, որպեսզի հաջորդ վալիդացիայի ժամանակ նորից կատարվի ստուգում՝ առանց քեշի օգտագործման։ Հետո կանչվում է EnforcePropertyChanged մեթոդը, որի արդյունքում սկսվում է ընթացիկ տողի վալիդացիան։

### IGridRow.EnforceValidation(string[]) մեթոդ

```c#
public void EnforceValidation(params string[] columns)
```

Թարմացվում է նշված ներքին անուններով սյուների վալիդատորների քեշը, որպեսզի հաջորդ վալիդացիայի ժամանակ նորից կատարվի ստուգում՝ առանց քեշի օգտագործման։ Հետո կանչվում է EnforcePropertyChanged մեթոդը, որի արդյունքում սկսվում է ընթացիկ տողի վալիդացիան։

**Պարամետրեր**

| Անվանում        | Տվյալների տիպ        | Լռությամբ արժեք | Նկարագրություն |
|-----------------|----------------------|----------------|----------------|
|   columnName    |     string           |      -         | Սյան ներքին անունը (կոդը)։ |

## Օրինակ

```c#
void AccColumnValidation(GridRow row)
{
    if (!row.ColumnHasValidationError("Code") && !row.ColumnHasValidationError"AccBranch")
    {
        row.EnforceValidation("Acc");
    }
}
```

