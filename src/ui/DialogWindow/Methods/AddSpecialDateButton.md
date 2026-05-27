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

Երկխոսության պատուհանում ավելացնում է հատուկ ամսաթվերի ընտրման կոճակ՝ տրված ամսաթվային դաշտի (և տրված՝ ժամկետի վերջի ամսաթվային դաշտի) հետ կապված։ Կոճակը սեղմելու դեպքում բացվում է հատուկ ամսաթվերի ընտրման popup տեսակի պատուհանը։ Հասանելի է նաև **Alt+D** shortcut-ի միջոցով։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
|----------|--------------|----------------|----------------|
| container | LayoutGroup | — | Դասավորման խումբը, որտեղ ավելացվում է կոճակը։ |
| xDateControl | DateEditControl | — | Հիմնական ամսաթվային դաշտը, որի հետ կապված է կոճակը։ |
| xPeriodEndControl | DateEditControl | null | Ժամկետի վերջի ամսաթվային տրված դաշտը (ժամկետի ընտրման դեպքում)։ |

## Օրինակ

```c#
// ստեղծում է ուղղահայաց դասավորման խումբ
var group = AddVerticalLayoutGroup();

// ստեղծում է ամսաթվային դաշտը՝ Ամսաթիվ անվանումով
var dateControl = AddDateEditControl(group, "date", "Ամսաթիվ");

// ավելացնում է հատուկ ամսաթվերի ընտրման կոճակ՝ կապված ստեղծված ամսաթվային դաշտի հետ
AddSpecialDateButton(group, dateControl);
```


