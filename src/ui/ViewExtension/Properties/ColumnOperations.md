---
title: ColumnOperations
parent: "Հատկություններ"
grand_parent: "ViewExtension"
---

# ViewExtension.ColumnOperations հատկություն

## Նկարագիր

**Դաս՝** [ViewExtension](../ViewExtension.md)

```c#
public List<ColumnOperation> ColumnOperations { get; set; }
```

Վերադարձնում կամ նշանակում է ընդլայնման սյուների գործողությունների ցուցակը։ Յուրաքանչյուր գործողություն նկարագրում է հաշվարկ, որի արդյունքով դիտելու ձևում ձևավորվում է նոր կամ վերահաշվարկվող սյուն։ Սյուների գործողությունները խմբագրվում են ընդլայնման designer-ում, երբ [CalculationMode](CalculationMode.md) հատկության արժեքը **CalculationMode.OperationMode** է։
