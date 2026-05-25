---
title: AddImageEdit
parent: "Մեթոդներ"
grand_parent: "DocumentPanel"
---

# DocumentPanel&lt;T&gt;.AddImageEdit(string, string, double, double, string, HorizontalAlignment, Stretch) մեթոդ

## Նկարագիր

**Դաս՝** [DocumentPanel](../DocumentPanel.md)

```c#
public ImageEditExt AddImageEdit(string name,
                                 string caption,
                                 double width,
                                 double height,
                                 string dataItemName = null,
                                 HorizontalAlignment horizontalAlignment = HorizontalAlignment.Left,
                                 Stretch stretch = Stretch.Uniform)
```

Փաստաթղթի վահանակում ավելացնում է պատկերի դաշտ (**ImageEditExt**) և վերադարձնում է այն։ Դաշտի առավելագույն չափը սահմանվում է [ImagesSizeLimitInKB](../Properties/ImagesSizeLimitInKB.md) հատկության արժեքով։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- |
| name | string | - | Դաշտի ներքին անունը։ |
| caption | string | - | Դաշտի գլխագիրը։ |
| width | double | - | Դաշտի առավելագույն լայնությունը՝ pixel-ներով։ |
| height | double | - | Դաշտի առավելագույն բարձրությունը՝ pixel-ներով։ |
| dataItemName | string | null | Տվյալների աղբյուրի ներքին անունը։ |
| horizontalAlignment | HorizontalAlignment | HorizontalAlignment.Left | Դաշտի հորիզոնական դասավորման ռեժիմը։ |
| stretch | Stretch | Stretch.Uniform | Պատկերի մասշտաբավորման ռեժիմը։ |
