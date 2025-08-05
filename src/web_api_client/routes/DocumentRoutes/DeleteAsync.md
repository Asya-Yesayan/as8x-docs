---
title: DocumentRoutes.DeleteAsync մեթոդ
---

## Գերբեռնումներ

| Անվանում | Նկարագրություն |
|--|--|
| [DeleteAsync(int, DocumentDeleteModel, CancellationToken)](#documentroutesdeleteasyncint-documentdeletemodel-cancellationtoken-մեթոդ)| Ջնջում է փաստաթուղթը համակարգից։ |
| [DeleteAsync(DocumentDeleteRequestModel, CancellationToken)](#documentroutesdeleteasyncdocumentdeleterequestmodel-cancellationtoken-մեթոդ) | Ջնջում է փաստաթուղթը համակարգից։ |

### DocumentRoutes.DeleteAsync(int, DocumentDeleteModel, CancellationToken) մեթոդ

```c#
public Task<DeletedDoc> DeleteAsync(int isn, 
                                    DocumentDeleteModel model, 
                                    CancellationToken cancellationToken = default)
```

Ջնջում է փաստաթուղթը համակարգից։  
Ջնջման ժամանակ հեռացվում են նաև այդ փաստաթղթի բոլոր թղթապանակները, ծառի տարրերը և իր համար գրանցված հաշվառումները։

Եթե փաստաթուղթը ունի ենթափաստաթղթեր, ապա ջնջումը չի կատարվի և կառաջանա սխալ։

Ջնջումը տեղի է ունենում տրանզակցիայի մեջ։

**Պարամետրեր**

* `isn` - Ջնջվող փաստաթղթի ներքին նույնականացման համարը (isn):
* `model` - Ջնջման համար անհրաժեշտ տվյալներ (ամբողջությամբ ջնջել թե մասնակի, ջնջման մեկնաբանություն...)։
* `cancellationToken` - Ընդհատման օբյեկտ:

### DocumentRoutes.DeleteAsync(DocumentDeleteRequestModel, CancellationToken) մեթոդ

```c#
public Task<DeletedDoc> DeleteAsync(DocumentDeleteRequestModel model, 
                                    CancellationToken cancellationToken = default)
```

Ջնջում է փաստաթուղթը համակարգից։  
Ջնջման ժամանակ հեռացվում են նաև այդ փաստաթղթի բոլոր թղթապանակները, ծառի տարրերը և իր համար գրանցված հաշվառումները։

Եթե փաստաթուղթը ունի ենթափաստաթղթեր, ապա ջնջումը չի կատարվի և կառաջանա սխալ։

Ջնջումը տեղի է ունենում տրանզակցիայի մեջ։

**Պարամետրեր**

* `model` - Ջնջվող փաստաթղթի տվյալներ (ջնջման ենթակա փաստաթղթի օբյեկտ, ամբողջությամբ ջնջել թե մասնակի, ջնջման մեկնաբանություն...):
* `cancellationToken` - Ընդհատման օբյեկտ:


