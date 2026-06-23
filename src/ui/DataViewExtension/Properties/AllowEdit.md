---
title: AllowEdit
parent: "Հատկություններ"
grand_parent: "DataViewExtension"
---

# DataViewExtension.AllowEdit հատկություն

## Նկարագիր

**Դաս՝** [DataViewExtension](../DataViewExtension.md)

```c#
public virtual bool? AllowEdit { get; }
```

Վերասահմանում է դիտելու ձևի [AllowEdit](../../DataView/Properties/AllowEdit.md) հատկության արժեքը՝ որոշելով դիտելու ձևի ընթացիկ տողի խմբագրման իրավասությունը։ Հատկության լռությամբ արժեքը null է։

* null արժեքի դեպքում կիրառվում է դիտելու ձևի [AllowEdit](../../DataView/Properties/AllowEdit.md) հատկության արժեքը։
* true արժեքի դեպքում դիտելու ձևի կոնտեքստային մենյուում հասանելի է դառնում «Դիտել/Խմբագրել» կոնտեքստային ֆունկցիան՝ անկախ դիտելու ձևի կարգավորումից։
* false արժեքի դեպքում նշված ֆունկցիան դիտելու ձևի կոնտեքստային մենյուում չի ցուցադրվում, բացառությամբ այն դեպքի, երբ դիտման իրավասությունը միացված է [AllowView](AllowView.md) հատկության միջոցով։
