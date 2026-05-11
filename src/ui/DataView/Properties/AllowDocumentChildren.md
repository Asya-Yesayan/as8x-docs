---
title: AllowDocumentChildren
parent: "Հատկություններ"
grand_parent: "DataView"
---

# DataView.AllowDocumentChildren հատկություն

## Նկարագիր

**Դաս՝** [DataView](../DataView.md)

```c#
public virtual bool AllowDocumentChildren { get; }
```

Սահմանում է դիտելու ձևի ընդլայնման իրավասությունը։

Հատկության true արժեքի դեպքում **«Փաստաթուղթ»** կոնտեքստային մենյուում հասանելի է դառնում **«Ենթափաստաթղթեր»** (Ctrl + F3) կոնտեքստային ֆունկցիան։ Կատարման արդյունքում բացվում է **«Ենթափաստաթղթեր»** դիտելու ձևը, որը պարունակում է դիտելու ձևի ընթացիկ տողի (փաստաթղթի) զավակ փաստաթղթերի ցուցակը։ 

![Child_Documents](../../images/DataView/Child_Documents.png)