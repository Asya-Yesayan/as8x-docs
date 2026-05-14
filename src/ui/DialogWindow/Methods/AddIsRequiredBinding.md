---
title: AddIsRequiredBinding
nav_exclude: true
---

# DialogWindow.AddIsRequiredBinding(object, LayoutItemWithRequired) մեթոդ

## Նկարագիր

**Դաս՝** [DialogWindow](../DialogWindow.md)

```c#
public static void AddIsRequiredBinding(object xControl, LayoutItemWithRequired li);
```

Տրված դաշտի **IsRequired** հատկության և դասավորման տարրի **IsArmsoftRequired** հատկության միջև սահմանում է կապ (binding) և լրացուցիչ ավելացնում **IsReadOnly** կապը։ Արդյունքում դասավորման տարրի վիզուալ տեսքը (օրինակ՝ պարտադիր լրացման հատկանիշը) ավտոմատ կերպով արտացոլում է դաշտի վիճակը։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
|----------|--------------|----------------|----------------|
| xControl | object | — | Աղբյուր դաշտը։ |
| li | LayoutItemWithRequired | — | Նպատակային դասավորման տարրը (LayoutItem)։ |
