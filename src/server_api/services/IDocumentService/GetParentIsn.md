---
title: IDocumentService.GetParentIsn(int) մեթոդ
---

## Նկարագիր

Համարժեքը 4x-ում։ [AsDocEngine.DocParentIsn](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Functions/Functions/DocumentsCirculation/DocParentISN.html)

```c#
public Task<int> GetParentIsn(int isn)
```

Վերադարձնում է փաստաթղթի միակ(առաջին) ծնող փաստաթղթի ներքին նույնականացման համարը։ 
Եթե ծնող փաստաթղթը չկա, ապա վերադառնում է `-1`։

**Պարամետրեր**

* `isn` - Փաստաթղթի ներքին նույնականացման համար:
