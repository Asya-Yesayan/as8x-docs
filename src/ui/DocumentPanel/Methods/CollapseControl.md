---
title: CollapseControl
parent: "Մեթոդներ"
grand_parent: "DocumentPanel"
---

# DocumentPanel&lt;T&gt;.CollapseControl մեթոդ

## Գերբեռնումներ

| Անվանում | Նկարագրություն |
|----------|----------------|
| [CollapseControl(Control)](#documentpanelcollapsecontrolcontrol-մեթոդ) | Թաքցնում է տրված դաշտը վահանակում։ |
| [CollapseControl(string)](#documentpanelcollapsecontrolstring-մեթոդ) | Թաքցնում է տրված ներքին անունով դաշտը վահանակում։ |

### DocumentPanel.CollapseControl(Control) մեթոդ

**Դաս՝** [DocumentPanel](../DocumentPanel.md)

```c#
public void CollapseControl(Control control)
```

Թաքցնում է տրված դաշտը վահանակում։ Մեթոդը փոխանցվում է [CollapseControl(string)](#documentpanelcollapsecontrolstring-մեթոդ) մեթոդին՝ դաշտի ներքին անունով։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- |
| control | Control | - | Թաքցվող դաշտը։ |

### DocumentPanel.CollapseControl(string) մեթոդ

**Դաս՝** [DocumentPanel](../DocumentPanel.md)

```c#
public void CollapseControl(string controlName)
```

Թաքցնում է տրված ներքին անունով դաշտը վահանակում։ Դաշտը պարունակող հորիզոնական դասավորման խումբը նույնպես թաքցվում է, եթե նրա բոլոր ենթատարրերը թաքնված են։

Տրված ներքին անունով դաշտի դասավորման տարրի բացակայության դեպքում առաջանում է **InvalidOperationException** տիպի սխալ։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- |
| controlName | string | - | Թաքցվող դաշտի ներքին անունը։ |
