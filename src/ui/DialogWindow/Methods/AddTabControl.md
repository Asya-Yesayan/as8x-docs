---
title: AddTabControl
nav_exclude: true
---

# DialogWindow.AddTabControl(LayoutGroup) մեթոդ

## Նկարագիր

**Դաս՝** [DialogWindow](../DialogWindow.md)

```c#
public DXTabControl AddTabControl(LayoutGroup container);
```

Տրված դասավորման խմբին (կամ՝ եթե այն **null** է, երկխոսության հիմնական դասավորման տարրին) ավելացնում է էջերի (tab) վերահսկիչ տարր (**DXTabControl**)։ Հետագայում սրա մեջ կարելի է ավելացնել առանձին էջեր [AddTabbedGroup](AddTabbedGroup.md) մեթոդով։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
|----------|--------------|----------------|----------------|
| container | LayoutGroup | — | Դասավորման խումբը, որտեղ ավելացվում է էջերի վերահսկիչ տարրը։ |

**Վերադարձնում է**

Ստեղծված **DXTabControl** տարրը։
