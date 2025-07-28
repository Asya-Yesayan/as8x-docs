---
title: IDocumentService.GetPassedState(int, bool) մեթոդ
---

## Նկարագիր

Համարժեքը 4x-ում։ [AsDocEngine.GetDocPassedState](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Functions/Functions/DocumentsCirculation/GetDocPassedState.html)

```c#
public short GetPassedState(int isn, bool lastState = true)
```

Վերադարձնում է փաստաթղթի վերջին կամ առաջին նշանակված վիճակը։

**Պարամետրեր**

* `isn` - Փաստաթղթի ներքին նույնականացման համար։
* `lastState` - `true` արժեքի դեպքում վերադարձնում է վերջին նշանակված վիճակը, հակառակ դեպքում՝ առաջինը։
