---
title: IDocumentService.GetParentIsn մեթոդ
---

## Նկարագիր

Համարժեքը 4x-ում։ [AsDocEngine.DocParentIsn](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Functions/Functions/DocumentsCirculation/DocParentISN.html)

## Գերբեռնումներ

| Անվանում | Նկարագրություն |
|--|--|
| [GetParentIsn(int)](#idocumentservicegetparentisnint-մեթոդ) | Վերադարձնում է փաստաթղթի միակ(առաջին) ծնող փաստաթղթի ներքին նույնականացման համարը։ |
| [GetParentIsn(int, string)](#idocumentservicegetparentisnint-string-մեթոդ) | Վերադարձնում է փաստաթղթի առաջին ծնող փաստաթղթի ներքին նույնականացման համարը, որը ունի նշված ներքին անունը (տեսակը)։ |

### IDocumentService.GetParentIsn(int) մեթոդ

```c#
public Task<int> GetParentIsn(int isn)
```

Վերադարձնում է փաստաթղթի միակ(առաջին) ծնող փաստաթղթի ներքին նույնականացման համարը։ 
Եթե ծնող փաստաթղթը չկա, ապա վերադառնում է `-1`։

**Պարամետրեր**

* `isn` - Փաստաթղթի ներքին նույնականացման համար:

### IDocumentService.GetParentIsn(int, string) մեթոդ

```c#
public Task<int> GetParentIsn(int isn, string docTypeLike)
```

Վերադարձնում է փաստաթղթի առաջին ծնող փաստաթղթի ներքին նույնականացման համարը, որը ունի նշված ներքին անունը (տեսակը)։
Եթե ծնող փաստաթղթը չկա, ապա վերադառնում է `-1`։

**Պարամետրեր**

* `isn` - Փաստաթղթի ներքին նույնականացման համար:
* `docTypeLike` - Սահմանում է ներառվող կամ չներառվող ծնող փաստաթղթերի տիպերի ֆիլտր։  
  Ներառվող տիպերի ֆիլտրը `+` նշանով սկսելով։ 
  Օրինակ՝ `"+Acc%"`։  
  Չներառվող տիպերի ֆիլտրը `-` նշանով սկսելով։ 
  Օրինակ՝ `"-Acc%"`։

