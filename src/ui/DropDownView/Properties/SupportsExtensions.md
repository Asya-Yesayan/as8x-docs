---
title: SupportsExtensions
parent: "Հատկություններ"
grand_parent: "DropDownView"
---

# DropDownView.SupportsExtensions հատկություն

## Նկարագիր

**Դաս՝** [DropDownView](../DropDownView.md)

```c#
public virtual bool SupportsExtensions { get; }
```

Վերադարձնում է DropDownView-ի ընդլայնման իրավասությունը, որը համընկնում է DropDownView ատրիբուտի SupportsExtensions հատկության արժեքի հետ։

DropDownView ատրիբուտի բացակայության դեպքում վերադարձնում է **false**։


Սահմանում է DropDownView-ի ընդլայնման իրավասությունը։ Հատկության լռությամբ արժեքը համընկնում է DropDownView ատրիբուտի SupportsExtensions հատկության արժեքի հետ։

Հատկության true արժեքի դեպքում **«Թղթապանակ»** կոնտեքստային մենյուում հասանելի է դառնում **«Ընդլայնումների գրադարան»** (Ctrl + L) կոնտեքստային ֆունկցիան։ Այն տալիս է հնարավորություն ավելացնել և կառավարել **«Օգտագործողի դիտելու ձևի ընդլայնում»**-ները (սյուների ավելացում, հեռացում, տվյալների աղբյուրի ընդլայնիչի կցում, ․․․):
