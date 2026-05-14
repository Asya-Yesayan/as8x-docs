---
title: AddSpecialDateButton
nav_exclude: true
---

# DialogWindow.AddSpecialDateButton(LayoutGroup, DateEditControl, DateEditControl) մեթոդ

## Նկարագիր

**Դաս՝** [DialogWindow](../DialogWindow.md)

```c#
public void AddSpecialDateButton(LayoutGroup container, DateEditControl xDateControl,
                                 DateEditControl xPeriodEndControl = null);
```

Երկխոսության պատուհանում ավելացնում է հատուկ ամսաթվերի ընտրման կոճակ՝ տրված ամսաթվային դաշտի (և ընտրովի՝ ժամկետի վերջի ամսաթվային դաշտի) հետ կապված։ Կոճակը սեղմելու դեպքում բացվում է հատուկ ամսաթվերի ընտրման popup տեսակի պատուհանը։ Հասանելի է նաև **Alt+D** shortcut-ի միջոցով։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
|----------|--------------|----------------|----------------|
| container | LayoutGroup | — | Դասավորման խումբը, որտեղ ավելացվում է կոճակը։ |
| xDateControl | DateEditControl | — | Հիմնական ամսաթվային դաշտը, որի հետ կապված է կոճակը։ |
| xPeriodEndControl | DateEditControl | null | Ժամկետի վերջի ամսաթվային ընտրովի դաշտը (ժամկետի ընտրման դեպքում)։ |


