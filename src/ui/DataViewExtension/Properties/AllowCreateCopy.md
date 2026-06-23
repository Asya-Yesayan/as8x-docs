---
title: AllowCreateCopy
parent: "Հատկություններ"
grand_parent: "DataViewExtension"
---

# DataViewExtension.AllowCreateCopy հատկություն

## Նկարագիր

**Դաս՝** [DataViewExtension](../DataViewExtension.md)

```c#
public virtual bool? AllowCreateCopy { get; }
```

Վերասահմանում է դիտելու ձևի [AllowCreateCopy](../../DataView/Properties/AllowCreateCopy.md) հատկության արժեքը՝ որոշելով դիտելու ձևի ընթացիկ տողի պատճենման իրավասությունը։ Հատկության լռությամբ արժեքը null է։

* null արժեքի դեպքում կիրառվում է դիտելու ձևի [AllowCreateCopy](../../DataView/Properties/AllowCreateCopy.md) հատկության արժեքը։
* true արժեքի դեպքում դիտելու ձևի կոնտեքստային մենյուում հասանելի է դառնում «Պատճենել» կոնտեքստային ֆունկցիան՝ անկախ դիտելու ձևի կարգավորումից։
* false արժեքի դեպքում նշված ֆունկցիան դիտելու ձևի կոնտեքստային մենյուում չի ցուցադրվում։
