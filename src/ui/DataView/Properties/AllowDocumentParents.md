---
title: AllowDocumentParents
parent: "Հատկություններ"
grand_parent: "DataView"
---

# DataView.AllowDocumentParents հատկություն

## Նկարագիր

**Դաս՝** [DataView](../DataView.md)

```c#
public virtual bool AllowDocumentParents { get; }
```

Սահմանում է դիտելու ձևի ընթացիկ տողի (փաստաթղթի) ծնող փաստաթղթերի դիտման իրավասությունը: Հատկության լռությամբ արժեքը համընկնում է IsDocumentBased հատկության արժեքի հետ։

Հատկության true արժեքի դեպքում **«Փաստաթուղթ»** կոնտեքստային մենյուում հասանելի է դառնում **«Ծնող փաստաթղթեր»** (Shift + F3) կոնտեքստային ֆունկցիան։ Կատարման արդյունքում բացվում է **«Ծնող փաստաթղթեր»** դիտելու ձևը, որը պարունակում է դիտելու ձևի ընթացիկ տողի (փաստաթղթի) ծնող փաստաթղթերի ցուցակը։ 

![Parent_Documents](../../images/DataView/Parent_Documents.png)

