---
title: GetControl
nav_exclude: true
---

# DialogWindow.GetControl(string) մեթոդ

## Նկարագիր

**Դաս՝** [DialogWindow](../DialogWindow.md)

```c#
public Control GetControl(string name);
```

Վերադարձնում է երկխոսության պատուհանի՝ տրված ներքին անունով դաշտը։ Եթե այդպիսի դաշտ գոյություն չունի, վերադարձնում է **null**։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
|----------|--------------|----------------|----------------|
| name | string | — | Փնտրվող դաշտի ներքին անունը։ |

## Օրինակ

```c#
// ստանում է «code» ներքին անունով դաշտը
var control = GetControl("code");

// դաշտի առկայության դեպքում ստանում է դրա label-ը՝ համապատասխան դասավորման տարրից
if (control != null)
{
    string label = GetLayoutItem(control).Label.ToString();
}
```
