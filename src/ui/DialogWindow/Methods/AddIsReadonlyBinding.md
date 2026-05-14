---
title: AddIsReadonlyBinding
nav_exclude: true
---

# DialogWindow.AddIsReadonlyBinding(object, LayoutItemWithRequired) մեթոդ

## Նկարագիր

**Դաս՝** [DialogWindow](../DialogWindow.md)

```c#
public static void AddIsReadonlyBinding(object xControl, LayoutItemWithRequired li);
```

Տրված դաշտի **IsReadOnly** հատկության և դասավորման տարրի **IsReadOnly** հատկության միջև սահմանում է կապ (binding), որպեսզի դաշտի կարգավիճակի փոփոխման դեպքում համապատասխանաբար փոխվի դասավորման տարրի կարգավիճակը։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
|----------|--------------|----------------|----------------|
| xControl | object | — | Աղբյուր դաշտը, որի **IsReadOnly** հատկությունից կարդացվում է արժեքը։ |
| li | LayoutItemWithRequired | — | Նպատակային դասավորման տարրը (LayoutItem)։ |
