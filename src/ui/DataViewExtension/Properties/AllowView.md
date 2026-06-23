---
title: AllowView
parent: "Հատկություններ"
grand_parent: "DataViewExtension"
---

# DataViewExtension.AllowView հատկություն

## Նկարագիր

**Դաս՝** [DataViewExtension](../DataViewExtension.md)

```c#
public virtual bool? AllowView { get; }
```

Վերասահմանում է դիտելու ձևի [AllowView](../../DataView/Properties/AllowView.md) հատկության արժեքը՝ որոշելով դիտելու ձևի ընթացիկ տողի դիտման իրավասությունը։ Հատկության լռությամբ արժեքը null է։

* null արժեքի դեպքում կիրառվում է դիտելու ձևի [AllowView](../../DataView/Properties/AllowView.md) հատկության արժեքը։
* true արժեքի դեպքում թույլատրվում է ընթացիկ տողի դիտումը՝ անկախ դիտելու ձևի կարգավորումից։
* false արժեքի դեպքում ընթացիկ տողի դիտումն արգելվում է։
