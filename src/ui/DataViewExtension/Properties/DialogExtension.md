---
title: DialogExtension
parent: "Հատկություններ"
grand_parent: "DataViewExtension"
---

# DataViewExtension.DialogExtension հատկություն

## Նկարագիր

**Դաս՝** [DataViewExtension](../DataViewExtension.md)

```c#
public List<Designer.ControlDescriptor> DialogExtension { get; set; }
```

Վերադարձնում կամ նշանակում է ընդլայնման կողմից դիտելու ձևի նախնական ֆիլտրման դիալոգին ավելացվող control-ների նկարագրությունների ցուցակը։ Յուրաքանչյուր նկարագրություն պարունակում է ավելացվող control-ի տիպը, ներքին անունը (կոդը), վերնագիրը և լրացուցիչ կարգավորումները։

Ընդլայնման control-ները ցուցադրվում են դիտելու ձևի սեփական control-ների կողքին։ Օգտագործողի մուտքագրած արժեքները պահվում են [DialogValues](DialogValues.md) հատկության մեջ և օգտագործվում են ընդլայնման [CalculateExtenderParamsValues](../Methods/CalculateExtenderParamsValues.md) մեթոդի կողմից՝ որպես ընդլայնման պարամետրերի արժեքների աղբյուր։
