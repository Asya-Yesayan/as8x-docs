---
title: GetControl
parent: "Մեթոդներ"
grand_parent: "DocumentPanel"
---

# DocumentPanel&lt;T&gt;.GetControl մեթոդ

## Գերբեռնումներ

| Անվանում | Նկարագրություն |
|----------|----------------|
| [GetControl(string)](#documentpanelgetcontrolstring-մեթոդ) | Վերադարձնում է տրված ներքին անունով դաշտը։ |
| [GetControl&lt;C&gt;(string)](#documentpanelgetcontrolcstring-մեթոդ) | Վերադարձնում է տրված ներքին անունով դաշտը՝ արտածած **C** տիպին։ |

### DocumentPanel.GetControl(string) մեթոդ

**Դաս՝** [DocumentPanel](../DocumentPanel.md)

```c#
public Control GetControl(string name)
```

Վերադարձնում է տրված ներքին անունով դաշտը։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- |
| name | string | — | Դաշտի ներքին անունը։ |

**Վերադարձնում է**

Տրված ներքին անունով **Control** դաշտը։

### DocumentPanel.GetControl&lt;C&gt;(string) մեթոդ

**Դաս՝** [DocumentPanel](../DocumentPanel.md)

```c#
public C GetControl<C>(string name) where C : Control
```

Վերադարձնում է տրված ներքին անունով դաշտը՝ արտածած **C** տիպին։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- |
| name | string | — | Դաշտի ներքին անունը։ |

**Վերադարձնում է**

Տրված ներքին անունով **C** տիպի դաշտը։
