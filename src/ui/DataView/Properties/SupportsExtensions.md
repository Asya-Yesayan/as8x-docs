---
title: SupportsExtensions
parent: "Հատկություններ"
grand_parent: "DataView"
---

# DataView.SupportsExtensions հատկություն

## Նկարագիր

**Դաս՝** [DataView](../DataView.md)

```c#
public override bool SupportsExtensions { get; }
```

Վերադարձնում է դիտելու ձևի ընդլայնման իրավասությունը, որը համընկնում է DataView ատրիբուտի SupportsExtensions հատկության արժեքի հետ։ 

Հատկության true արժեքի դեպքում **«Փաստաթուղթ»** կոնտեքստային մենյուում հասանելի է դառնում **«Խմբագրել օգտ-ի կողմից նկարագրված դաշտերը»** կոնտեքստային ֆունկցիան։ Այն տալիս է հնարավորություն ավելացնել և կառավարել **«Օգտագործողի դիտելու ձևի ընդլայնում»**-ները (սյուների ավլեացում, հեռացում, տվյալների աղբյուրի ընդլայնիչի կցում, ․․․):

![Extensions_Library](../../images/DataView/Extensions_Library.png)