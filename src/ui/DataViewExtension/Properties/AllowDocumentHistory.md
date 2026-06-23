---
title: AllowDocumentHistory
parent: "Հատկություններ"
grand_parent: "DataViewExtension"
---

# DataViewExtension.AllowDocumentHistory հատկություն

## Նկարագիր

**Դաս՝** [DataViewExtension](../DataViewExtension.md)

```c#
public virtual bool? AllowDocumentHistory { get; }
```

Վերասահմանում է դիտելու ձևի [AllowDocumentHistory](../../DataView/Properties/AllowDocumentHistory.md) հատկության արժեքը՝ որոշելով դիտելու ձևի ընթացիկ տողի (փաստաթղթի) պատմությունը դիտելու իրավասությունը։ Հատկության լռությամբ արժեքը null է։

* null արժեքի դեպքում կիրառվում է դիտելու ձևի [AllowDocumentHistory](../../DataView/Properties/AllowDocumentHistory.md) հատկության արժեքը։
* true արժեքի դեպքում «Փաստաթուղթ» կոնտեքստային մենյուում հասանելի է դառնում «Պատմություն» կոնտեքստային ֆունկցիան՝ անկախ դիտելու ձևի կարգավորումից։
* false արժեքի դեպքում նշված ֆունկցիան «Փաստաթուղթ» կոնտեքստային մենյուում չի ցուցադրվում։
