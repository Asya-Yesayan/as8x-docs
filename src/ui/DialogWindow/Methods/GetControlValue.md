---
title: GetControlValue
nav_exclude: true
---

# DialogWindow.GetControlValue մեթոդ

## Գերբեռնումներ

| Անվանում | Նկարագրություն |
|--|--|
| [GetControlValue(string)](#dialogwindowgetcontrolvaluestring-մեթոդ) | Վերադարձնում է տրված ներքին անունով դաշտի արժեքը։ |
| [GetControlValue(Control)](#dialogwindowgetcontrolvaluecontrol-մեթոդ) | Վերադարձնում է տրված դաշտի արժեքը։ |

### DialogWindow.GetControlValue(string) մեթոդ

**Դաս՝** [DialogWindow](../DialogWindow.md)

```c#
public object GetControlValue(string name);
```

Վերադարձնում է երկխոսության պատուհանի՝ տրված ներքին անունով դաշտի արժեքը։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
|----------|--------------|----------------|----------------|
| name | string | — | Դաշտի ներքին անունը։ |

**Վերադարձնում է**

Դաշտի արժեքը՝ բերված որպես **object**։

### DialogWindow.GetControlValue(Control) մեթոդ

**Դաս՝** [DialogWindow](../DialogWindow.md)

```c#
public static object GetControlValue(Control control);
```

Վերադարձնում է տրված դաշտի արժեքը։ Դաշտի տիպից կախված՝ վերադարձվում է դաշտին համապատասխան տիպի արժեք (օրինակ՝ տեքստ, ամսաթիվ, թիվ, տրամաբանական արժեք և այլն)։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
|----------|--------------|----------------|----------------|
| control | Control | — | Դաշտը, որի արժեքը պետք է վերադարձվի։ |

**Վերադարձնում է**

Դաշտի արժեքը՝ բերված որպես **object**։

**Բացառություններ**

| Տիպ | Նկարագրություն |
|-----|----------------|
| NotImplementedException | Առաջանում է, եթե տրված դաշտի տիպի համար արժեքի վերադարձման տրամաբանություն սահմանված չէ։ |
