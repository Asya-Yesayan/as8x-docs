---
title: AllowEditUdf
parent: "Հատկություններ"
grand_parent: "DataViewExtension"
---

# DataViewExtension.AllowEditUdf հատկություն

## Նկարագիր

**Դաս՝** [DataViewExtension](../DataViewExtension.md)

```c#
public virtual bool? AllowEditUdf { get; }
```

Վերասահմանում է դիտելու ձևի [AllowEditUDR](../../DataView/Properties/AllowEditUDR.md) հատկության արժեքը՝ որոշելով դիտելու ձևի ընտրված տողերի (փաստաթղթերի) «Օգտագործողի կողմից նկարագրված դաշտերի» խմբագրման իրավասությունը։ Հատկության լռությամբ արժեքը null է։

* null արժեքի դեպքում կիրառվում է դիտելու ձևի [AllowEditUDR](../../DataView/Properties/AllowEditUDR.md) հատկության արժեքը։
* true արժեքի դեպքում «Փաստաթուղթ» կոնտեքստային մենյուում հասանելի է դառնում **«Խմբագրել օգտ-ի կողմից նկարագրված դաշտերը»** կոնտեքստային ֆունկցիան՝ անկախ դիտելու ձևի կարգավորումից։
* false արժեքի դեպքում նշված ֆունկցիան «Փաստաթուղթ» կոնտեքստային մենյուում չի ցուցադրվում։
