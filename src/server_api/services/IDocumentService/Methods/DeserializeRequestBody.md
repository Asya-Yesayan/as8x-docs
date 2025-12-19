---
title: IDocumentService.DeserializeRequestBody(DocumentModel, bool) մեթոդ
---

## Նկարագիր

**Դաս՝** [IDocumentService](../IDocumentService.md)

```c#
public Task<Document> DeserializeRequestBody(DocumentModel request, 
                                             bool isExtended = false)
```

նախատեսված է կլիենտից դեպի սերվեր փաստաթղթի ուղարկման ժամանակ դեսերիալիզազիայի և [Document](../../definitions/document.md) տիպի օբյեկտի վերածեու համար։  

Սովորաբար օգտագործվում է փաստաթղթի [DeserializeComplexObjects](../../definitions/document/DeserializeComplexObjects.md) մշակիչի մեջ։

**Պարամետրեր**

| Անվանում        | Տվյալների տիպ        | Լռությամբ արժեք | Նկարագրություն |
|-----------------|----------------------|----------------|----------------|
| request         | DocumentModel        | -              | Փաստաթղթի ցանցով փոխանցվող օբյեկտ։ |
| isExtended      | bool                 | false          | Ցույց է տալիս արդյոք փաստաթղթի դաշտերը պետք է բերվեն `ANSI` կոդավորման և հեռացվեն ավելորդ բացակները, թե ոչ։ |
