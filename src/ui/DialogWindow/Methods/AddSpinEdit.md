---
title: AddSpinEdit
nav_exclude: true
---

# DialogWindow.AddSpinEdit մեթոդ

## Գերբեռնումներ

| Անվանում | Նկարագրություն |
|--|--|
| [AddSpinEdit(string, string, decimal, decimal, double, bool)](#dialogwindowaddspineditstring-string-decimal-decimal-double-bool-մեթոդ) | Երկխոսության պատուհանում ավելացնում է ավելացնող/նվազեցնող (Spin) թվային դաշտ։ |
| [AddSpinEdit(LayoutGroup, string, string, decimal, decimal, double, bool)](#dialogwindowaddspineditlayoutgroup-string-string-decimal-decimal-double-bool-մեթոդ) | Նշված դասավորման խմբում ավելացնում է ավելացնող/նվազեցնող (Spin) թվային դաշտ։ |

### DialogWindow.AddSpinEdit(string, string, decimal, decimal, double, bool) մեթոդ

**Դաս՝** [DialogWindow](../DialogWindow.md)

```c#
public SpinEditExt AddSpinEdit(string name, string caption, decimal minValue = 0, decimal maxValue = 2,
                               double minWidth = 50, bool storeValue = true);
```

Երկխոսության պատուհանում ավելացնում է ավելացնող/նվազեցնող (Spin) թվային դաշտ (**SpinEditExt**), որտեղ արժեքի փոփոխման համար օգտագործվում են վեր/վար նետիկները։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
|----------|--------------|----------------|----------------|
| name | string | — | Դաշտի ներքին անունը։ |
| caption | string | — | Դաշտի անվանումը։ |
| minValue | decimal | 0 | Դաշտի թույլատրելի նվազագույն արժեքը։ |
| maxValue | decimal | 2 | Դաշտի թույլատրելի առավելագույն արժեքը։ |
| minWidth | double | 50 | Դաշտի նվազագույն լայնությունը։ |
| storeValue | bool | true | Որոշում է, արդյոք դաշտի արժեքը պետք է պահպանվի։ |

#### Օրինակ

```c#
// երկխոսության պատուհանում ավելացնում է Spin թվային դաշտ՝ 1-ից 10 արժեքների միջակայքով
var spin = AddSpinEdit("count", "Քանակ", 1, 10);
```

### DialogWindow.AddSpinEdit(LayoutGroup, string, string, decimal, decimal, double, bool) մեթոդ

**Դաս՝** [DialogWindow](../DialogWindow.md)

```c#
public SpinEditExt AddSpinEdit(LayoutGroup container, string name, string caption,
                               decimal minValue = 0, decimal maxValue = 2, double minWidth = 50,
                               bool storeValue = true);
```

Նշված դասավորման խմբում ավելացնում է ավելացնող/նվազեցնող թվային դաշտ։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
|----------|--------------|----------------|----------------|
| container | LayoutGroup | — | Դասավորման խումբը, որտեղ ավելացվում է դաշտը։ |
| name | string | — | Դաշտի ներքին անունը։ |
| caption | string | — | Դաշտի անվանումը։ |
| minValue | decimal | 0 | Դաշտի թույլատրելի նվազագույն արժեքը։ |
| maxValue | decimal | 2 | Դաշտի թույլատրելի առավելագույն արժեքը։ |
| minWidth | double | 50 | Դաշտի նվազագույն լայնությունը։ |
| storeValue | bool | true | Որոշում է, արդյոք դաշտի արժեքը պետք է պահպանվի։ |

#### Օրինակ

```c#
// ստեղծում է ուղղահայաց դասավորման խումբ
var group = AddVerticalLayoutGroup();

// նշված դասավորման խմբում ավելացնում է Spin թվային դաշտ՝ Քանակ անվանումով և 1-10 արժեքների ընտրման հնարավորությամբ
var spin = AddSpinEdit(group, "count", "Քանակ", 1, 10);
```
