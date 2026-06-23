---
title: AllowAccessControl
parent: "Հատկություններ"
grand_parent: "DataViewExtension"
---

# DataViewExtension.AllowAccessControl հատկություն

## Նկարագիր

**Դաս՝** [DataViewExtension](../DataViewExtension.md)

```c#
public virtual bool? AllowAccessControl { get; }
```

Վերասահմանում է դիտելու ձևի `AllowAccessControl` հատկության արժեքը՝ որոշելով դիտելու ձևի ընթացիկ տողի (փաստաթղթի) մուտքի իրավասությունների կարգավորման իրավասությունը։ Հատկության լռությամբ արժեքը null է։

* null արժեքի դեպքում կիրառվում է դիտելու ձևի `AllowAccessControl` հատկության արժեքը։
* true արժեքի դեպքում «Փաստաթուղթ» կոնտեքստային մենյուում հասանելի է դառնում մուտքի իրավասությունների կարգավորման ֆունկցիան՝ անկախ դիտելու ձևի կարգավորումից։
* false արժեքի դեպքում նշված ֆունկցիան «Փաստաթուղթ» կոնտեքստային մենյուում չի ցուցադրվում։
