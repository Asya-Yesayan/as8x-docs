---
title: AddLayoutItem
nav_exclude: true
---

# DialogWindow.AddLayoutItem(LayoutGroup, string) մեթոդ

## Նկարագիր

**Դաս՝** [DialogWindow](../DialogWindow.md)

```c#
protected LayoutItemWithRequired AddLayoutItem(LayoutGroup container, string caption);
```

Տրված դասավորման խմբին (կամ՝ եթե այն **null** է, երկխոսության հիմնական դասավորման տարրին) ավելացնում է նոր դասավորման տարր (**LayoutItemWithRequired**)՝ տրված անվանումով։ Դասավորման տարրը հետագայում դառնում է երկխոսության դաշտի տարա։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
|----------|--------------|----------------|----------------|
| container | LayoutGroup | — | Դասավորման խումբը, որտեղ ավելացվում է դասավորման տարրը։ Եթե **null** է, դասավորման տարրը ավելացվում է երկխոսության հիմնական դասավորման տարրում։ |
| caption | string | — | Դասավորման տարրի անվանումը։ |

**Վերադարձնում է**

Ստեղծված **LayoutItemWithRequired** դասավորման տարրը։
