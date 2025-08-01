---
title: IDocumentService.CutChildLink(int, int) մեթոդ
---

## Նկարագիր

**Համարժեքը 4x-ում՝** [AsDocEngine.CutChildLink](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Functions/Functions/DocumentsCirculation/CutChildLink.html)

```c#
public Task CutChildLink(int isn, int childIsn = -1)
```

Ջնջում է փաստաթղթի և իրա զավակների միջև կապերը, կամ մեկ նշված զավակ փաստաթղթի հետ կապը։

**Պարամետրեր**

* `isn` - Այն փաստաթղթի ներքին նույնականացման համարը, որի համար խզվում է զավակների հետ կապը։
* `childIsn` - Մեկ զավակի ներքին նույնականացման համար, այդ զավակի կապը կզելու համար։
  Եթե պարամետրը փոխանցված չէ, ապա կապը խզվում է բոլոր առկա զավակների հետ։
