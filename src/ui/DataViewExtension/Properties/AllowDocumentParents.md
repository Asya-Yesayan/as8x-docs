---
title: AllowDocumentParents
parent: "Հատկություններ"
grand_parent: "DataViewExtension"
---

# DataViewExtension.AllowDocumentParents հատկություն

## Նկարագիր

**Դաս՝** [DataViewExtension](../DataViewExtension.md)

```c#
public virtual bool? AllowDocumentParents { get; }
```

Վերասահմանում է դիտելու ձևի [AllowDocumentParents](../../DataView/Properties/AllowDocumentParents.md) հատկության արժեքը՝ որոշելով դիտելու ձևի ընթացիկ տողի (փաստաթղթի) ծնող փաստաթղթերի դիտման իրավասությունը։ Հատկության լռությամբ արժեքը null է։

* null արժեքի դեպքում կիրառվում է դիտելու ձևի [AllowDocumentParents](../../DataView/Properties/AllowDocumentParents.md) հատկության արժեքը։
* true արժեքի դեպքում «Փաստաթուղթ» կոնտեքստային մենյուում հասանելի է դառնում «Ծնող փաստաթղթեր» կոնտեքստային ֆունկցիան՝ անկախ դիտելու ձևի կարգավորումից։
* false արժեքի դեպքում նշված ֆունկցիան «Փաստաթուղթ» կոնտեքստային մենյուում չի ցուցադրվում։
