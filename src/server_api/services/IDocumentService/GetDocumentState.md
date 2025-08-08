---
title: IDocumentService.GetDocumentState(int) մեթոդ
---

## Նկարագիր

**Համարժեքը 4x-ում՝** [AsDocEngine.GetDocState](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Functions/Functions/DocumentsCirculation/GetDocState.html)

**Դաս՝** [IDocumentService](../IDocumentService.md)

```c#
public Task<int> GetDocumentState(int isn)
```

Վերադարձնում է փաստաթղթի վիճակը։
Եթե փաստաթուղթը առկա չի, կամ ոչ վերջնական ջնջված է, ապա ֆունկցիան վերադարձնում է `-1` արժեք։

**Պարամետրեր**

* `isn` - Փաստաթղթի ներքին նույնականացման համար։
