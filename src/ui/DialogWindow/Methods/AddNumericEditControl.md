---
title: AddNumericEditControl
nav_exclude: true
---

# DialogWindow.AddNumericEditControl մեթոդ

## Գերբեռնումներ

| Անվանում | Նկարագրություն |
|--|--|
| [AddNumericEditControl(string, string, short, short, bool, bool, bool, bool)](#dialogwindowaddnumericeditcontrolstring-string-short-short-bool-bool-bool-bool-մեթոդ) | Երկխոսության պատուհանում ավելացնում է թվային մուտքագրման դաշտ։ |
| [AddNumericEditControl(LayoutGroup, string, string, short, short, bool, bool, bool, bool)](#dialogwindowaddnumericeditcontrollayoutgroup-string-string-short-short-bool-bool-bool-bool-մեթոդ) | Նշված դասավորման խմբում ավելացնում է թվային մուտքագրման դաշտ։ |

### DialogWindow.AddNumericEditControl(string, string, short, short, bool, bool, bool, bool) մեթոդ

**Դաս՝** [DialogWindow](../DialogWindow.md)

```c#
public NumericEditControl AddNumericEditControl(string name, string caption, short length, short precision = 0,
                                                bool isRequired = false, bool allowNegativeNumbers = false,
                                                bool useCurrencyFormat = true, bool storeValue = true);
```

Երկխոսության պատուհանում ավելացնում է թվային մուտքագրման դաշտ (**NumericEditControl**)։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
|----------|--------------|----------------|----------------|
| name | string | — | Դաշտի ներքին անունը։ |
| caption | string | — | Դաշտի անվանումը։ |
| length | short | — | Թվի առավելագույն երկարությունը։ |
| precision | short | 0 | Կոտորակային մասի թվանշանների քանակը։ |
| isRequired | bool | false | Որոշում է, արդյոք դաշտի արժեքը պարտադիր է։ |
| allowNegativeNumbers | bool | false | Որոշում է, արդյոք թույլատրվում են բացասական թվեր։ |
| useCurrencyFormat | bool | true | Որոշում է, արդյոք օգտագործվի դրամային ֆորմատը։ |
| storeValue | bool | true | Որոշում է, արդյոք դաշտի արժեքը պետք է պահպանվի։ |

### DialogWindow.AddNumericEditControl(LayoutGroup, string, string, short, short, bool, bool, bool, bool) մեթոդ

**Դաս՝** [DialogWindow](../DialogWindow.md)

```c#
public NumericEditControl AddNumericEditControl(LayoutGroup container, string name, string caption, short length,
                                                short precision = 0, bool isRequired = false,
                                                bool allowNegativeNumbers = false, bool useCurrencyFormat = true,
                                                bool storeValue = true);
```

Նշված դասավորման խմբում ավելացնում է թվային մուտքագրման դաշտ։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
|----------|--------------|----------------|----------------|
| container | LayoutGroup | — | Դասավորման խումբը, որտեղ ավելացվում է դաշտը։ |
| name | string | — | Դաշտի ներքին անունը։ |
| caption | string | — | Դաշտի անվանումը։ |
| length | short | — | Թվի առավելագույն երկարությունը։ |
| precision | short | 0 | Կոտորակային մասի թվանշանների քանակը։ |
| isRequired | bool | false | Որոշում է, արդյոք դաշտի արժեքը պարտադիր է։ |
| allowNegativeNumbers | bool | false | Որոշում է, արդյոք թույլատրվում են բացասական թվեր։ |
| useCurrencyFormat | bool | true | Որոշում է, արդյոք օգտագործվի դրամային ֆորմատը։ |
| storeValue | bool | true | Որոշում է, արդյոք դաշտի արժեքը պետք է պահպանվի։ |

