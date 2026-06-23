---
title: AllowDelete
parent: "Հատկություններ"
grand_parent: "DataViewExtension"
---

# DataViewExtension.AllowDelete հատկություն

## Նկարագիր

**Դաս՝** [DataViewExtension](../DataViewExtension.md)

```c#
public virtual bool? AllowDelete { get; }
```

Վերասահմանում է դիտելու ձևի [AllowDelete](../../DataView/Properties/AllowDelete.md) հատկության արժեքը՝ որոշելով դիտելու ձևի ընթացիկ տողի հեռացման իրավասությունը։ Հատկության լռությամբ արժեքը null է։

* null արժեքի դեպքում կիրառվում է դիտելու ձևի [AllowDelete](../../DataView/Properties/AllowDelete.md) հատկության արժեքը։
* true արժեքի դեպքում դիտելու ձևի կոնտեքստային մենյուում հասանելի է դառնում «Հեռացնել» կոնտեքստային ֆունկցիան՝ անկախ դիտելու ձևի կարգավորումից։
* false արժեքի դեպքում նշված ֆունկցիան դիտելու ձևի կոնտեքստային մենյուում չի ցուցադրվում։
