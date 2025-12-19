---
title: IDocumentService.ReFolder(Document, StoreMode) մեթոդ
---

## Նկարագիր

**Համարժեքը 4x-ում՝** [AsDoc.ReFolder](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Functions/ASDOC/ReFolder.html)

**Դաս՝** [IDocumentService](../../IDocumentService.md)

```c#
public Task ReFolder(Document document, 
                     StoreMode mode)
```

Իրականացնում է փաստաթղթի վերաինդեքսավորումը թղթապանակներում:
Այսինքն առաջացնում է [Folders](../../../definitions/document/Methods/Folders.md) իրադարձությունը և համապատասխան մշակիչը։

**Պարամետրեր**

| Անվանում        | Տվյալների տիպ        | Լռությամբ արժեք | Նկարագրություն |
|-----------------|----------------------|----------------|----------------|
| document        | Document             | -              | [Փաստաթղթի օբյեկտ](../../../definitions/document.md)։ |
| mode            | StoreMode            | -              | [Փաստաթղթի պահպանման ռեժիմը](../../../definitions/document/Properties/StoreMode.md)։ |
  Տե՛ս [Document](../../../definitions/document.md).[StoreMode](../../../definitions/document/Properties/StoreMode.md) հատկությունը։
