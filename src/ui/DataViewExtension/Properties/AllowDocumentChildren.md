---
title: AllowDocumentChildren
parent: "Հատկություններ"
grand_parent: "DataViewExtension"
---

# DataViewExtension.AllowDocumentChildren հատկություն

## Նկարագիր

**Դաս՝** [DataViewExtension](../DataViewExtension.md)

```c#
public virtual bool? AllowDocumentChildren { get; }
```

Վերասահմանում է դիտելու ձևի [AllowDocumentChildren](../../DataView/Properties/AllowDocumentChildren.md) հատկության արժեքը՝ որոշելով դիտելու ձևի ընթացիկ տողի (փաստաթղթի) զավակ փաստաթղթերի դիտման իրավասությունը։ Հատկության լռությամբ արժեքը null է։

* null արժեքի դեպքում կիրառվում է դիտելու ձևի [AllowDocumentChildren](../../DataView/Properties/AllowDocumentChildren.md) հատկության արժեքը։
* true արժեքի դեպքում «Փաստաթուղթ» կոնտեքստային մենյուում հասանելի է դառնում «Զավակ փաստաթղթեր» կոնտեքստային ֆունկցիան՝ անկախ դիտելու ձևի կարգավորումից։
* false արժեքի դեպքում նշված ֆունկցիան «Փաստաթուղթ» կոնտեքստային մենյուում չի ցուցադրվում։
