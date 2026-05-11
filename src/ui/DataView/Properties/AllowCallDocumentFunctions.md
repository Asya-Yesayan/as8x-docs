---
title: AllowCallDocumentFunctions
parent: "Հատկություններ"
grand_parent: "DataView"
---

# DataView.AllowCallDocumentFunctions հատկություն

## Նկարագիր

**Դաս՝** [DataView](../DataView.md)

```c#
public virtual bool AllowCallDocumentFunctions { get; }
```

Սահմանում է դիտելու ձևում ընթացիկ տողում պարունակվող փաստաթղթի և փաստաթղթի ընդլայնման կոնտեքստային ֆունկցիաների ցուցադրման իրավասությունը՝ IsDocumentBased հատկության հետ համատեղ։ Հատկության լռությամբ արժեքը համընկնում է IsDocumentBased հատկության արժեքի հետ։

Եթե `IsDocumentBased=true` և `AllowCallDocumentFunctions=true`, ապա դիտելու ձևի կոնտեքստային մենյուում ցուցադրվում են ընթացիկ տողում պարունակվող փաստաթղթի և փաստաթղթի ընդլայնման կոնտեքստային ֆունկցիաները։