---
title: NodeCaption
parent: "Հատկություններ"
grand_parent: "TreeEdit"
---

# TreeEdit.NodeCaption հատկություն

## Նկարագիր

**Դաս՝** [TreeEdit](../TreeEdit.md)

```c#
public virtual string NodeCaption { get; internal set; }
```

Սահմանում է ծառի տողի գլխագիրը՝ ընթացիկ լեզվին համապատասխան։ Հատկությունը արժեքավորվում է [ConfigureFromDefinition](../Methods/ConfigureFromDefinition.md) մեթոդի կանչի արդյունքում՝ ծառի նկարագրության (TreeDefinition) NodeCaption հատկության հիման վրա։ Հայերեն լեզվի դեպքում օգտագործվում է NodeArmenianCaption արժեքը, հակառակ դեպքում՝ NodeEnglishCaption-ը, որի բացակայության դեպքում՝ NodeArmenianCaption-ը։
