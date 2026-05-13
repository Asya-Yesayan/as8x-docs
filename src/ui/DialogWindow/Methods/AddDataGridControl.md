---
title: AddDataGridControl
nav_exclude: true
---

# DialogWindow.AddDataGridControl մեթոդ

## Գերբեռնումներ

| Անվանում | Նկարագրություն |
|--|--|
| [AddDataGridControl(string)](#dialogwindowadddatagridcontrolstring-մեթոդ) | Երկխոսության պատուհանում ավելացնում է աղյուսակային դաշտ։ |
| [AddDataGridControl(LayoutGroup, string)](#dialogwindowadddatagridcontrollayoutgroup-string-մեթոդ) | Նշված դասավորման խմբում ավելացնում է աղյուսակային դաշտ։ |

### DialogWindow.AddDataGridControl(string) մեթոդ

**Դաս՝** [DialogWindow](../DialogWindow.md)

```c#
public DataGridControl AddDataGridControl(string name);
```

Երկխոսության պատուհանում ավելացնում է աղյուսակային դաշտ (**DataGridControl**)։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
|----------|--------------|----------------|----------------|
| name | string | — | Դաշտի ներքին անունը։ |

**Վերադարձնում է**

Ստեղծված **DataGridControl** տիպի դաշտը։

### DialogWindow.AddDataGridControl(LayoutGroup, string) մեթոդ

**Դաս՝** [DialogWindow](../DialogWindow.md)

```c#
public DataGridControl AddDataGridControl(LayoutGroup container, string name);
```

Նշված դասավորման խմբում ավելացնում է աղյուսակային դաշտ։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
|----------|--------------|----------------|----------------|
| container | LayoutGroup | — | Դասավորման խումբը, որտեղ ավելացվում է դաշտը։ Եթե **null** է, դաշտն ավելացվում է երկխոսության պատուհանի հիմնական դասավորման տարրում։ |
| name | string | — | Դաշտի ներքին անունը։ |

**Վերադարձնում է**

Ստեղծված **DataGridControl** տիպի դաշտը։

**Բացառություններ**

| Տիպ | Նկարագրություն |
|-----|----------------|
| InvalidOperationException | Առաջանում է, եթե նույն ներքին անունով դաշտ արդեն գոյություն ունի։ |
