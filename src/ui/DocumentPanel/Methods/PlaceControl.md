---
title: PlaceControl
parent: "Մեթոդներ"
grand_parent: "DocumentPanel"
---

# DocumentPanel&lt;T&gt;.PlaceControl մեթոդ

## Գերբեռնումներ

| Անվանում | Նկարագրություն |
|----------|----------------|
| [PlaceControl(LayoutGroup, Control, LayoutGroup, bool)](#documentpanelplacecontrollayoutgroup-control-layoutgroup-bool-մեթոդ) | Տրված դաշտը տեղադրում է վահանակում՝ ուղղահայաց և հորիզոնական դասավորման խմբերում։ |
| [PlaceControl(LayoutGroup, string)](#documentpanelplacecontrollayoutgroup-string-մեթոդ) | Տրված ներքին անունով դաշտը տեղադրում է վահանակում՝ նշված դասավորման խմբում։ |

### DocumentPanel.PlaceControl(LayoutGroup, Control, LayoutGroup, bool) մեթոդ

**Դաս՝** [DocumentPanel](../DocumentPanel.md)

```c#
public void PlaceControl(LayoutGroup verticalContainer,
                         Control control,
                         LayoutGroup horizontalContainer = null,
                         bool showCaption = true)
```

Տրված դաշտը տեղադրում է վահանակում՝ ուղղահայաց և հորիզոնական դասավորման խմբերում։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- |
| verticalContainer | LayoutGroup | - | Ուղղահայաց ծնող դասավորման խումբը։ |
| control | Control | - | Տեղադրվող դաշտը։ |
| horizontalContainer | LayoutGroup | null | Հորիզոնական դասավորման խումբը։ **null** արժեքի դեպքում ավտոմատ կերպով ստեղծվում է նոր հորիզոնական դասավորման խումբ։ |
| showCaption | bool | true | **true** արժեքի դեպքում ցուցադրվում է դաշտի գլխագիրը, **false** արժեքի դեպքում՝ թաքնված է։ |

### DocumentPanel.PlaceControl(LayoutGroup, string) մեթոդ

**Դաս՝** [DocumentPanel](../DocumentPanel.md)

```c#
protected void PlaceControl(LayoutGroup container,
                            string controlName)
```

Տրված ներքին անունով դաշտը տեղադրում է վահանակում՝ նշված դասավորման խմբում։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- |
| container | LayoutGroup | - | Ծնող դասավորման խումբը։ |
| controlName | string | - | Տեղադրվող դաշտի ներքին անունը։ |
