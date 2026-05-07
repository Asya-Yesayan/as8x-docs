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

Ինդիկացնում է՝ արդյոք DataView-ի կոնտեքստից թույլատրված է փաստաթղթի կոնտեքստային ֆունկցիաների կանչը:

Լռությամբ հավասար է `IsDocumentBased`-ի արժեքին:
Երբ `false` է, panel-ի document-specific context menu item-ները disabled են:

