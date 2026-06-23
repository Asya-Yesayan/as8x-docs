---
title: DialogValues
parent: "Հատկություններ"
grand_parent: "DataViewExtension"
---

# DataViewExtension.DialogValues հատկություն

## Նկարագիր

**Դաս՝** [DataViewExtension](../DataViewExtension.md)

```c#
public Dictionary<string, object> DialogValues { get; set; }
```

Վերադարձնում կամ նշանակում է ընդլայնման [DialogExtension](DialogExtension.md) ցուցակում նկարագրված control-ների ընթացիկ արժեքների Dictionary-ն, որտեղ բանալին control-ի ներքին անունն է (կոդը), իսկ արժեքը՝ control-ում մուտքագրված տվյալը։

Արժեքները լրացվում են դիտելու ձևի նախնական ֆիլտրման դիալոգի կատարման ժամանակ և օգտագործվում են [CalculateExtenderParamsValues](../Methods/CalculateExtenderParamsValues.md) մեթոդի կողմից՝ ընդլայնման պարամետրերի արժեքները հաշվարկելու համար։
