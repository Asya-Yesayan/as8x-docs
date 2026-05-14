---
title: AddMonthYearControl
nav_exclude: true
---

# DialogWindow.AddMonthYearControl մեթոդ

## Գերբեռնումներ

| Անվանում | Նկարագրություն |
|--|--|
| [AddMonthYearControl(string, string, bool, bool, bool)](#dialogwindowaddmonthyearcontrolstring-string-bool-bool-bool-մեթոդ) | Երկխոսության պատուհանում ավելացնում է ամիս/տարի ընտրության դաշտ։ |
| [AddMonthYearControl(LayoutGroup, string, string, bool, bool, bool)](#dialogwindowaddmonthyearcontrollayoutgroup-string-string-bool-bool-bool-մեթոդ) | Նշված դասավորման խմբում ավելացնում է ամիս/տարի ընտրության դաշտ։ |

### DialogWindow.AddMonthYearControl(string, string, bool, bool, bool) մեթոդ

**Դաս՝** [DialogWindow](../DialogWindow.md)

```c#
public MonthYearControl AddMonthYearControl(string name, string caption, bool isFirstMonthDay,
                                            bool isRequired = false, bool storeValue = true);
```

Երկխոսության պատուհանում ավելացնում է ամիս/տարի ընտրության դաշտ (**MonthYearControl**)։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
|----------|--------------|----------------|----------------|
| name | string | — | Դաշտի ներքին անունը։ |
| caption | string | — | Դաշտի անվանումը։ |
| isFirstMonthDay | bool | — | **true** արժեքի դեպքում դաշտը վերադարձնում է ամսվա առաջին օրը, **false** արժեքի դեպքում՝ ամսվա վերջին օրը։ |
| isRequired | bool | false | Որոշում է, արդյոք դաշտի արժեքը պարտադիր է։ |
| storeValue | bool | true | Որոշում է, արդյոք դաշտի արժեքը պետք է պահպանվի։ |

### DialogWindow.AddMonthYearControl(LayoutGroup, string, string, bool, bool, bool) մեթոդ

**Դաս՝** [DialogWindow](../DialogWindow.md)

```c#
public MonthYearControl AddMonthYearControl(LayoutGroup container, string name, string caption, bool isFirstMonthDay,
                                            bool isRequired = false, bool storeValue = true);
```

Նշված դասավորման խմբում ավելացնում է ամիս/տարի ընտրության դաշտ։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
|----------|--------------|----------------|----------------|
| container | LayoutGroup | — | Դասավորման խումբը, որտեղ ավելացվում է դաշտը։ |
| name | string | — | Դաշտի ներքին անունը։ |
| caption | string | — | Դաշտի անվանումը։ |
| isFirstMonthDay | bool | — | **true**-ի դեպքում դաշտը վերադարձնում է ամսվա առաջին օրը, **false**-ի դեպքում՝ վերջին օրը։ |
| isRequired | bool | false | Որոշում է, արդյոք դաշտի արժեքը պարտադիր է։ |
| storeValue | bool | true | Որոշում է, արդյոք դաշտի արժեքը պետք է պահպանվի։ |

