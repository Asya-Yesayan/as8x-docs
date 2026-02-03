---
title: ReFolder(Document, StoreMode)
parent: "Մեթոդներ"
grand_parent: "IDocumentService"
---

# IDocumentService.ReFolder(Document, StoreMode) մեթոդ

## Նկարագիր

**Համարժեքը 4x-ում՝** [AsDoc.ReFolder](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Functions/ASDOC/ReFolder.html)

**Դաս՝** [IDocumentService](../IDocumentService.md)

```c#
public Task ReFolder(Document document, 
                     StoreMode mode)
```

Իրականացնում է փաստաթղթի վերաինդեքսավորումը թղթապանակներում:
Այսինքն առաջացնում է [Folders](../../../Definitions/Document/Methods/Folders.md) իրադարձությունը և համապատասխան մշակիչը։

**Պարամետրեր**

| Անվանում        | Տվյալների տիպ        | Լռությամբ արժեք | Նկարագրություն |
|-----------------|----------------------|----------------|----------------|
| document        | Document             | -              | [Փաստաթղթի օբյեկտ](../../../Definitions/Document/Document.md)։ |
| mode            | StoreMode            | -              | [Փաստաթղթի պահպանման ռեժիմը](../../../Types/StoreMode.md)։ |
  Տե՛ս [Document](../../../Definitions/Document/Document.md).[StoreMode](../../../Definitions/Document/Properties/StoreMode.md) հատկությունը։
