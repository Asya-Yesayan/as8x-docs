---
title: AddTabbedGroup
nav_exclude: true
---

# DialogWindow.AddTabbedGroup(DXTabControl, string) մեթոդ

## Նկարագիր

**Դաս՝** [DialogWindow](../DialogWindow.md)

```c#
public LayoutGroup AddTabbedGroup(DXTabControl tc, string header);
```

Տրված **DXTabControl** տարրին ավելացնում է նոր էջ (tab)՝ նշված վերնագրով, և վերադարձնում է այդ էջի ներսում ստեղծված դասավորման խումբը, որին հետագայում կարելի է ավելացնել դաշտեր։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
|----------|--------------|----------------|----------------|
| tc | DXTabControl | — | Էջերի վերահսկիչ տարրը, որին ավելացվում է նոր էջը։ |
| header | string | — | Նոր էջի վերնագիրը։ |

**Վերադարձնում է**

Ստեղծված էջի դասավորման խումբը (**LayoutGroup**)։
