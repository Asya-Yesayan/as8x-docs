---
title: IDocumentService.CreateParentLinkDB(int, int) մեթոդ
---

## Նկարագիր

Համարժեքը 4x-ում։ [AsDocEngine.CreateParentLink](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Functions/Functions/DocumentsCirculation/CreateParentLink.html)

```c#
public Task CreateParentLinkDB(int isn, int parentIsn = -1)
```

Փաստաթղթերի միջև ստեղծում է ծնող-զավակ կապ։ 
Ֆունկցիան ստեղծում է կապը անմիջապես տվյալների պահոցում։ 
Զավակ փաստաթուղթը պետք է գրանցված լինի տվյալների պահոցում։

Ի տարբերություն [MakeParentLink](MakeParentLink.md)-ի այս ֆունկցիան կարելի է կանչել ամենուրեք։

**Պարամետրեր**

* `isn` - Զավակ փաստաթղթի ներքին նույնականացման համար:
* `parentIsn` - Ծնող փաստաթղթի ներքին նույնականացման համար։