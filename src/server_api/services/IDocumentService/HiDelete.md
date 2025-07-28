---
title: IDocumentService.HiDelete(Document, bool) մեթոդ
---

## Նկարագիր

Համարժեքը 4x-ում։ [AsDoc.HiDelete](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Functions/ASDOC/HiDelete.html)

```c#
public Task<(bool had01AccRow, bool hadHIRow)> HiDelete(Document doc, bool deleteDoc)
```

Ջնջում է փաստաթղթի նախկինում գրանցած հաշվառումները [HI](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Database/Hi.html) աղյուսակից։  
Եթե մեթոդը կանչում են [Action](../../definitions/document/Action.md) իրադարձության մշակիչից, ապա սահմանաչափերի ստուգումները կկատարվեն Action-ի ավարտից հետո։  
Իսկ եթե այլ տեղից է կանչած, ապա ստուգումները կկատարվեն անմիջապես։

Վերադարձնում է կորտեժ  
`hadHIRow` - ջնջվում են որևէ հաշվառման տողեր,  
`had01AccRow` - ջնջվում են `01` հաշվառման տողեր։

**Պարամետրեր**

* `doc` - [Փաստաթղթի օբյեկտ](../../definitions/document.md)։
* `deleteDoc` - հարկավոր է փոխանցել `true`, երբ ֆունկցիան կանչվում է որևէ փաստաթղթի ջնջման ժամանակ։
  Պարամետրը փոխանցվում է OnLimitFault իրադարձության մշակիչին։
