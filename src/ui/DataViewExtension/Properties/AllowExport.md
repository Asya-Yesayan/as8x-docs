---
title: AllowExport
parent: "Հատկություններ"
grand_parent: "DataViewExtension"
---

# DataViewExtension.AllowExport հատկություն

## Նկարագիր

**Դաս՝** [DataViewExtension](../DataViewExtension.md)

```c#
public virtual bool? AllowExport { get; }
```

Վերասահմանում է դիտելու ձևի [AllowExport](../../DataView/Properties/AllowExport.md) հատկության արժեքը՝ որոշելով դիտելու ձևի արտահանման իրավասությունը։ Հատկության լռությամբ արժեքը null է։

* null արժեքի դեպքում կիրառվում է դիտելու ձևի [AllowExport](../../DataView/Properties/AllowExport.md) հատկության արժեքը։
* true արժեքի դեպքում թույլատրվում է դիտելու ձևի տվյալների արտահանումը Excel, PDF և CSV ձևաչափերով՝ անկախ դիտելու ձևի կարգավորումից։
* false արժեքի դեպքում արտահանումն արգելվում է։
