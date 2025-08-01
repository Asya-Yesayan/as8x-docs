---
title: IDocumentService.CreateFactsUsingStateMoverFrom(Document, int) մեթոդ
---

## Նկարագիր

**Համարժեքը 4x-ում՝** AsDoc.CreateFactsUsingDocStateMoverFrom

```c#
public Task CreateFactsUsingStateMoverFrom(Document document, int state)
```

Ֆունկցիան կանչելուց հետո [Action](../../definitions/document/Action.md)-ում [StoreFact](StoreFact.md) ֆունկցիայով գրանցվող հաշվառումների ստեղծող օգատգործող է լրացվում այն օգտագործողը, որը վերջինն է փաստաթուղթը բերել նշված վիճակ։

**Պարամետրեր**

* `document` - [Փաստաթղթի օբյեկտ](../../definitions/document.md)։
* `state` - Այն վիճակը, որը վերջին անգամ հասցնող օգտագործողը լրացվելու է, որպես գրանցվող հաշվառումների ստեղծող: