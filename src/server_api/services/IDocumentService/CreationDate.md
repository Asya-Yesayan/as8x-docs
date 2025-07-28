---
title: IDocumentService.CreationDate(int, bool) մեթոդ
---

## Նկարագիր

Համարժեքը 4x-ում։ [AsUtil.CreationDate](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Functions/Functions/DocumentsCirculation/CreationDate.html)

```c#
public Task<(DateTime CreationDate, short SUID)> CreationDate(int isn, bool isNotRiseErrWhenNoRow = false)
```

Վերադարձնում է փաստաթղթի ստեղծման ամսաթիվը և ստեղծողի ներքին համարը։

**Պարամետրեր**

* `isn` - Փաստաթղթի ներքին նույնականացման համար:
* `isNotRiseErrWhenNoRow` - Պահանջվող փաստաթղթի չգտնվելու դեպքում սխալի առաջացման հայտանիշ։
  `true` արժեքի դեպքում տվյալների պահոցում փաստաթղթի բացակայության ժամանակ վերադարձնում է `01/01/1900` և `-1` արժեքները:
