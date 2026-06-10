---
title: ExtenderParamsInitialValues
parent: "Հատկություններ"
grand_parent: "ViewExtension"
---

# ViewExtension.ExtenderParamsInitialValues հատկություն

## Նկարագիր

**Դաս՝** [ViewExtension](../ViewExtension.md)

```c#
public Dictionary<string, string> ExtenderParamsInitialValues { get; set; }
```

Վերադարձնում կամ նշանակում է ընդլայնման պարամետրերի սկզբնական արժեքների Dictionary-ն։ Dictionary-ի բանալին պարամետրի ներքին անունն է (կոդ), իսկ արժեքը՝ այդ պարամետրի սկզբնական արժեքը տողային տեսքով։ Սկզբնական արժեքները կիրառվում են ընդլայնման [CalculateExtenderParamsValues](../Methods/CalculateExtenderParamsValues.md) մեթոդի կանչից առաջ՝ որպես պարամետրերի մուտքային արժեքներ։
