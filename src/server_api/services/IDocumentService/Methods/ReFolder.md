---
title: IDocumentService.ReFolder(Document, StoreMode) մեթոդ
---

## Նկարագիր

**Համարժեքը 4x-ում՝** [AsDoc.ReFolder](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Functions/ASDOC/ReFolder.html)

**Դաս՝** [IDocumentService](../IDocumentService.md)

```c#
public Task ReFolder(Document document, 
                     StoreMode mode)
```

Իրականացնում է փաստաթղթի վերաինդեքսավորումը թղթապանակներում:
Այսինքն առաջացնում է [Folders](../../../definitions/Document/Methods/Folders.md) իրադարձությունը և համապատասխան մշակիչը։

**Պարամետրեր**

| Անվանում        | Տվյալների տիպ        | Լռությամբ արժեք | Նկարագրություն |
|-----------------|----------------------|----------------|----------------|
| document        | Document             | -              | [Փաստաթղթի օբյեկտ](../../definitions/Document.md)։ |
| mode            | StoreMode            | -              | [Փաստաթղթի պահպանման ռեժիմը](../../types/StoreMode.md)։ |
  Տե՛ս [Document](../../../definitions/Document.md).[StoreMode](../../../definitions/Document/Properties/StoreMode.md) հատկությունը։
