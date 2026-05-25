---
title: GetLayoutItem
parent: "Մեթոդներ"
grand_parent: "DocumentPanel"
---

# DocumentPanel&lt;T&gt;.GetLayoutItem մեթոդ

## Գերբեռնումներ

| Անվանում | Նկարագրություն |
|----------|----------------|
| [GetLayoutItem(Control)](#documentpanelgetlayoutitemcontrol-մեթոդ) | Վերադարձնում է տրված դաշտի դասավորման տարրը (**LayoutItemWithRequired**)։ |
| [GetLayoutItem(string)](#documentpanelgetlayoutitemstring-մեթոդ) | Վերադարձնում է տրված ներքին անունով դաշտի դասավորման տարրը (**LayoutItemWithRequired**)։ |

### DocumentPanel.GetLayoutItem(Control) մեթոդ

**Դաս՝** [DocumentPanel](../DocumentPanel.md)

```c#
public LayoutItemWithRequired GetLayoutItem(Control control)
```

Վերադարձնում է տրված դաշտի դասավորման տարրը (**LayoutItemWithRequired**)։ Դասավորման տարրի բացակայության դեպքում վերադարձնում է **null**։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- |
| control | Control | - | Փնտրվող դաշտը։ |

**Վերադարձնում է**

Դաշտին համապատասխանող **LayoutItemWithRequired** դասավորման տարրը, կամ **null** դրա բացակայության դեպքում։

### DocumentPanel.GetLayoutItem(string) մեթոդ

**Դաս՝** [DocumentPanel](../DocumentPanel.md)

```c#
public LayoutItemWithRequired GetLayoutItem(string controlName)
```

Վերադարձնում է տրված ներքին անունով դաշտի դասավորման տարրը (**LayoutItemWithRequired**)։ Դասավորման տարրի բացակայության դեպքում վերադարձնում է **null**։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- |
| controlName | string | - | Փնտրվող դաշտի ներքին անունը։ |

**Վերադարձնում է**

Դաշտին համապատասխանող **LayoutItemWithRequired** դասավորման տարրը, կամ **null** դրա բացակայության դեպքում։
