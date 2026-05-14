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

Տրված դասավորման խմբին (կամ՝ եթե այն **null** է, երկխոսության հիմնական դասավորման տարրին) ավելացնում է նոր դասավորման տարր (**LayoutItemWithRequired**)՝ տրված անվանումով։ 

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
|----------|--------------|----------------|----------------|
| container | LayoutGroup | — | Դասավորման խումբը, որտեղ ավելացվում է դասավորման տարրը (LayoutItem)։ Եթե **null** է, դասավորման տարրը ավելացվում է երկխոսության հիմնական դասավորման խմբում։ |
| caption | string | — | Դասավորման տարրի անվանումը։ |
