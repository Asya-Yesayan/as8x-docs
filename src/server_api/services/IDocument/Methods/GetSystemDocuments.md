---
title: GetSystemDocuments()
parent: "Մեթոդներ"
grand_parent: "IDocumentService"
---

# IDocumentService.GetSystemDocuments() մեթոդ

## Նկարագիր

**Դաս՝** [IDocumentService](../IDocumentService.md)

```c#
public virtual List<string> GetSystemDocuments();
```

Վերադարձնում է այն փաստաթղթերի տեսակների (ներքին անունների) ցուցակը, որոնք չեն ցուցադրվելու **«Ստեղծված փաստաթղթեր»**, **«Հեռացված փաստաթղթեր»**, **«Փաստաթղթերի պատմություն»** դիտելու ձևերում։ 

Այս մեթոդը անհրաժեշտ է մշակել՝ փաստաթղթերի հասանելիությունը նշված դիտելու ձևերից անջատելու համար։
