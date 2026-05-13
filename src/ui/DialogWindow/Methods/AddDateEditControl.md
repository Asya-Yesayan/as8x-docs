---
title: AddDateEditControl
nav_exclude: true
---

# DialogWindow.AddDateEditControl մեթոդ

## Գերբեռնումներ

| Անվանում | Նկարագրություն |
|--|--|
| [AddDateEditControl(string, string, bool, bool, bool)](#dialogwindowadddateeditcontrolstring-string-bool-bool-bool-մեթոդ) | Երկխոսության պատուհանում ավելացնում է ամսաթվային դաշտ։ |
| [AddDateEditControl(LayoutGroup, string, string, bool, bool, bool)](#dialogwindowadddateeditcontrollayoutgroup-string-string-bool-bool-bool-մեթոդ) | Նշված դասավորման խմբում ավելացնում է ամսաթվային դաշտ։ |

### DialogWindow.AddDateEditControl(string, string, bool, bool, bool) մեթոդ

**Դաս՝** [DialogWindow](../DialogWindow.md)

```c#
public DateEditControl AddDateEditControl(string name, string caption, bool useLongDate = false,
                                          bool isRequired = false, bool storeValue = true);
```

Երկխոսության պատուհանում ավելացնում է ամսաթվային դաշտ (**DateEditControl**)։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
|----------|--------------|----------------|----------------|
| name | string | — | Դաշտի ներքին անունը։ |
| caption | string | — | Դաշտի անվանումը։ |
| useLongDate | bool | false | **true** արժեքի դեպքում օգտագործվում է երկար ամսաթվային ֆորմատը, հակառակ դեպքում՝ կարճ։ |
| isRequired | bool | false | Որոշում է, արդյոք դաշտի արժեքը պարտադիր է։ |
| storeValue | bool | true | Որոշում է, արդյոք դաշտի արժեքը պետք է պահպանվի։ |

**Վերադարձնում է**

Ստեղծված **DateEditControl** դաշտը։

### DialogWindow.AddDateEditControl(LayoutGroup, string, string, bool, bool, bool) մեթոդ

**Դաս՝** [DialogWindow](../DialogWindow.md)

```c#
public DateEditControl AddDateEditControl(LayoutGroup container, string name, string caption,
                                          bool useLongDate = false, bool isRequired = false, bool storeValue = true);
```

Նշված դասավորման խմբում ավելացնում է ամսաթվային դաշտ։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
|----------|--------------|----------------|----------------|
| container | LayoutGroup | — | Դասավորման խումբը, որտեղ ավելացվում է դաշտը։ |
| name | string | — | Դաշտի ներքին անունը։ |
| caption | string | — | Դաշտի անվանումը։ |
| useLongDate | bool | false | **true** արժեքի դեպքում օգտագործվում է երկար ամսաթվային ֆորմատը։ |
| isRequired | bool | false | Որոշում է, արդյոք դաշտի արժեքը պարտադիր է։ |
| storeValue | bool | true | Որոշում է, արդյոք դաշտի արժեքը պետք է պահպանվի։ |

**Վերադարձնում է**

Ստեղծված **DateEditControl** դաշտը։

**Բացառություններ**

| Տիպ | Նկարագրություն |
|-----|----------------|
| InvalidOperationException | Առաջանում է, եթե նույն ներքին անունով դաշտ արդեն գոյություն ունի։ |
