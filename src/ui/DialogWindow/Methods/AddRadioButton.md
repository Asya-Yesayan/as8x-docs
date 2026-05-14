---
title: AddRadioButton
nav_exclude: true
---

# DialogWindow.AddRadioButton մեթոդ

## Գերբեռնումներ

| Անվանում | Նկարագրություն |
|--|--|
| [AddRadioButton(string, string, string, bool)](#dialogwindowaddradiobuttonstring-string-string-bool-մեթոդ) | Երկխոսության պատուհանում ավելացնում է ռադիոկոճակ։ |
| [AddRadioButton(LayoutGroup, string, string, string, bool)](#dialogwindowaddradiobuttonlayoutgroup-string-string-string-bool-մեթոդ) | Նշված դասավորման խմբում ավելացնում է ռադիոկոճակ։ |

### DialogWindow.AddRadioButton(string, string, string, bool) մեթոդ

**Դաս՝** [DialogWindow](../DialogWindow.md)

```c#
public RadioButtonExt AddRadioButton(string name, string caption, string groupName, bool storeValue = true);
```

Երկխոսության պատուհանում ավելացնում է ռադիոկոճակ (**RadioButtonExt**)։ Միևնույն խմբի մեջ գտնվող ռադիոկոճակները փոխադարձ բացառվում են։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
|----------|--------------|----------------|----------------|
| name | string | — | Դաշտի ներքին անունը։ |
| caption | string | — | Դաշտի անվանումը։ |
| groupName | string | — | Ռադիոկոճակների խմբի անունը։ Միևնույն խմբի մեջ գտնվող ռադիոկոճակները փոխադարձ բացառվում են։ |
| storeValue | bool | true | Որոշում է, արդյոք դաշտի արժեքը պետք է պահպանվի։ |

### DialogWindow.AddRadioButton(LayoutGroup, string, string, string, bool) մեթոդ

**Դաս՝** [DialogWindow](../DialogWindow.md)

```c#
public RadioButtonExt AddRadioButton(LayoutGroup container, string name, string caption, string groupName,
                                     bool storeValue = true);
```

Նշված դասավորման խմբում ավելացնում է ռադիոկոճակ։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
|----------|--------------|----------------|----------------|
| container | LayoutGroup | — | Դասավորման խումբը, որտեղ ավելացվում է դաշտը։ |
| name | string | — | Դաշտի ներքին անունը։ |
| caption | string | — | Դաշտի անվանումը։ |
| groupName | string | — | Ռադիոկոճակների խմբի անունը։ |
| storeValue | bool | true | Որոշում է, արդյոք դաշտի արժեքը պետք է պահպանվի։ |

