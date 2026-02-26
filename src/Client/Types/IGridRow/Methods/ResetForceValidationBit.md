---
title: ResetForceValidationBit
nav_exclude: true
---

# IGridRow.ResetForceValidationBit մեթոդ

## Գերբեռնումներ

| Անվանում | Նկարագրություն |
|--|--|
| [ResetForceValidationBit()]()| Թարմացվում է աղյուսակի բոլոր սյուների վալիդատորների քեշը, որպեսզի հաջորդ վալիդացիայի ժամանակ նորից կատարվի ստուգում՝ առանց քեշի օգտագործման։ |
| [ResetForceValidationBit(string)](#igridrowresetforcevalidationbit-մեթոդ) | Թարմացվում է նշված ներքին անունով սյան վալիդատորների քեշը, որպեսզի հաջորդ վալիդացիայի ժամանակ նորից կատարվի ստուգում՝ առանց քեշի օգտագործման։ |
| [ResetForceValidationBit(string[])](#igridrowresetforcevalidationbitstring-մեթոդ-1) | Թարմացվում է նշված ներքին անուններով սյուների վալիդատորների քեշը, որպեսզի հաջորդ վալիդացիայի ժամանակ նորից կատարվի ստուգում՝ առանց քեշի օգտագործման։ |

### IGridRow.ResetForceValidationBit() մեթոդ

```c#
public void ResetForceValidationBit()
```

Թարմացվում է աղյուսակի բոլոր սյուների վալիդատորների քեշը, որպեսզի հաջորդ վալիդացիայի ժամանակ նորից կատարվի ստուգում՝ առանց քեշի օգտագործման։

Այս մեթոդը կատարվում է միայն այն դեպքում, երբ GridInfo.CacheValidationResults հատկության արժեքը true է:

### IGridRow.ResetForceValidationBit(string) մեթոդ

```c#
public void ResetForceValidationBit(string column)
```

Թարմացվում է նշված ներքին անունով սյան վալիդատորների քեշը, որպեսզի հաջորդ վալիդացիայի ժամանակ նորից կատարվի ստուգում՝ առանց քեշի օգտագործման։

Այս մեթոդը կատարվում է միայն այն դեպքում, երբ GridInfo.CacheValidationResults հատկության արժեքը true է, նշված ներքին անունով սյունը գոյություն ունի աղյուսակում և սյան ValidatorCacheIndex > 0։

**Պարամետրեր**

| Անվանում        | Տվյալների տիպ        | Լռությամբ արժեք | Նկարագրություն |
|-----------------|----------------------|----------------|----------------|
|   columnName    |     string           |      -         | Սյան ներքին անունը (կոդը)։ |

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

### IGridRow.ResetForceValidationBit(string[]) մեթոդ

```c#
public void ResetForceValidationBit(params string[] columns)
```

Թարմացվում է նշված ներքին անուններով սյուների վալիդատորների քեշը, որպեսզի հաջորդ վալիդացիայի ժամանակ նորից կատարվի ստուգում՝ առանց քեշի օգտագործման։

Այս մեթոդը կատարվում է միայն այն դեպքում, երբ GridInfo.CacheValidationResults հատկության արժեքը true է, նշված սյուները գոյություն ունեն աղյուսակում և յուրաքանչյուրի համար ValidatorCacheIndex > 0։

**Պարամետրեր**

| Անվանում        | Տվյալների տիպ        | Լռությամբ արժեք | Նկարագրություն |
|-----------------|----------------------|----------------|----------------|
|   columnName    |     string           |      -         | Սյան ներքին անունը (կոդը)։ |

