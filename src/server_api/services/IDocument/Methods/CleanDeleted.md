---
title: CleanDeleted(DateTime, DateTime, string)
parent: "Մեթոդներ"
grand_parent: "IDocumentService"
---

# IDocumentService.CleanDeleted(DateTime, DateTime, string) մեթոդ

## Նկարագիր

**Համարժեքը 4x-ում՝** AsUtil.CleanDelDoc

**Դաս՝** [IDocumentService](../IDocumentService.md)

```c#
public Task CleanDeleted(DateTime startDate, 
                         DateTime endDate, 
                         string docType = "")
```

Ջնջված փաստաթղթերը լրիվ հեռացնում է համակարգից ըստ ջնջման ժամանակահատվածի։

**Պարամետրեր**

| Անվանում        | Տվյալների տիպ        | Լռությամբ արժեք | Նկարագրություն |
|-----------------|----------------------|----------------|----------------|
| startDate       | DateTime             | -              | ժամանակահատվածի սկզբի ամսաթիվ։ |
| endDate         | DateTime             | -              | ժամանակահատվածի վերջին ամսաթիվ։ |
| docType         | string               | ""             | Փաստաթղթի ներքին անունը (տեսակը)։ Չլրացնելու դեպքում մաքրվում են նշված ժամանակահատվածում հեռացված բոլոր փաստաթղթերը։ |
  
