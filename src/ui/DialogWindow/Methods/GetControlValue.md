---
title: GetControlValue
nav_exclude: true
---

# DialogWindow.GetControlValue մեթոդ

## Գերբեռնումներ

| Անվանում | Նկարագրություն |
|--|--|
| [GetControlValue(string)](#dialogwindowgetcontrolvaluestring-մեթոդ) | Վերադարձնում է երկխոսության պատուհանի՝ տրված ներքին անունով դաշտի արժեքը։ |
| [GetControlValue(Control)](#dialogwindowgetcontrolvaluecontrol-մեթոդ) | Վերադարձնում է երկխոսության պատուհանի` տրված դաշտի արժեքը։ |

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

#### Օրինակ

```c#
// ստանում է «code» ներքին անունով դաշտի արժեքը
var value = GetControlValue("code");
```

### DialogWindow.GetControlValue(Control) մեթոդ

**Դաս՝** [DialogWindow](../DialogWindow.md)

```c#
public static object GetControlValue(Control control);
```

Վերադարձնում է երկխոսության պատուհանի` տրված դաշտի արժեքը։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
|----------|--------------|----------------|----------------|
| control | Control | — | Դաշտը, որի արժեքը պետք է վերադարձվի։ |

#### Օրինակ

```c#
// ստանում է «code» ներքին անունով դաշտը և կարդում դրա արժեքը
var control = GetControl("code");
var value = GetControlValue(control);
```
