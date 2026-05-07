---
title: AllowView
parent: "Հատկություններ"
grand_parent: "DataView"
---

# DataView.AllowView հատկություն

## Նկարագիր

**Դաս՝** [DataView](../DataView.md)

```c#
public virtual bool AllowView { get; }
```

Ինդիկացնում է՝ արդյոք DataView-ից թույլատրված է փաստաթղթի read-only դիտումը:

Լռությամբ հավասար է `IsDocumentBased`-ի արժեքին:
Կոնտեքստային մենյուն ցուցադրում է "Դիտել" ֆունկցիան, որն կանչում է
`EditDocument(isReadOnly: true)`:

