---
title: Caption
parent: "Հատկություններ"
grand_parent: "TreeEdit"
---

# TreeEdit.Caption հատկություն

## Նկարագիր

**Դաս՝** [TreeEdit](../TreeEdit.md)

```c#
public string Caption { get; internal set; }
```

Վերադարձնում է ծառի գլխագիրը՝ ընթացիկ լեզվին համապատասխան։ Հատկությունը արժեքավորվում է [ConfigureFromDefinition](../Methods/ConfigureFromDefinition.md) մեթոդի կանչի արդյունքում՝ ծառի նկարագրության (TreeDefinition) Caption հատկության հիման վրա։ Հայերեն լեզվի դեպքում օգտագործվում է ArmenianCaption արժեքը, հակառակ դեպքում՝ EnglishCaption-ը, որի բացակայության դեպքում՝ ArmenianCaption-ը։
