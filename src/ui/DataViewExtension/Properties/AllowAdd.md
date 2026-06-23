---
title: AllowAdd
parent: "Հատկություններ"
grand_parent: "DataViewExtension"
---

# DataViewExtension.AllowAdd հատկություն

## Նկարագիր

**Դաս՝** [DataViewExtension](../DataViewExtension.md)

```c#
public virtual bool? AllowAdd { get; }
```

Վերասահմանում է դիտելու ձևի [AllowAdd](../../DataView/Properties/AllowAdd.md) հատկության արժեքը՝ որոշելով դիտելու ձևում նոր տող ավելացնելու իրավասությունը։ Հատկության լռությամբ արժեքը null է։

* null արժեքի դեպքում կիրառվում է դիտելու ձևի [AllowAdd](../../DataView/Properties/AllowAdd.md) հատկության արժեքը։
* true արժեքի դեպքում դիտելու ձևի կոնտեքստային մենյուում հասանելի է դառնում «Ավելացնել» կոնտեքստային ֆունկցիան՝ անկախ դիտելու ձևի կարգավորումից։
* false արժեքի դեպքում նշված ֆունկցիան դիտելու ձևի կոնտեքստային մենյուում չի ցուցադրվում։
