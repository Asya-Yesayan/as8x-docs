---
title: GetDXTab
parent: "Մեթոդներ"
grand_parent: "DocumentPanel"
---

# DocumentPanel&lt;T&gt;.GetDXTab մեթոդ

## Գերբեռնումներ

| Անվանում | Նկարագրություն |
|----------|----------------|
| [GetDXTab(Control)](#documentpanelgetdxtabcontrol-մեթոդ) | Վերադարձնում է այն թաբը (**DXTabItem**), որում տեղակայված է տրված դաշտը։ |
| [GetDXTab(string)](#documentpanelgetdxtabstring-մեթոդ) | Վերադարձնում է տրված ներքին անունով թաբը (**DXTabItem**)։ |

### DocumentPanel.GetDXTab(Control) մեթոդ

**Դաս՝** [DocumentPanel](../DocumentPanel.md)

```c#
public DXTabItem GetDXTab(Control control)
```

Վերադարձնում է այն թաբը (**DXTabItem**), որում տեղակայված է տրված դաշտը։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- |
| control | Control | - | Փնտրվող դաշտը։ |

### DocumentPanel.GetDXTab(string) մեթոդ

**Դաս՝** [DocumentPanel](../DocumentPanel.md)

```c#
public DXTabItem GetDXTab(string name)
```

Վերադարձնում է տրված ներքին անունով թաբը (**DXTabItem**)։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- |
| name | string | - | թաբի ներքին անունը։ |
