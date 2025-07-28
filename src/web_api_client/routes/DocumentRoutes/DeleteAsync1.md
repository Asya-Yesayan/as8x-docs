---
title: DocumentRoutes.DeleteAsync(DocumentDeleteRequestModel, CancellationToken) մեթոդ
---

```c#
public Task<DeletedDoc> DeleteAsync(DocumentDeleteRequestModel model, CancellationToken cancellationToken = default)
```

Ջնջում է փաստաթուղթը համակարգից։  
Ջնջման ժամանակ հեռացվում են նաև այդ փաստաթղթի բոլոր թղթապանակները, ծառի տարրերը և իր համար գրանցված հաշվառումները։

Եթե փաստաթուղթը ունի ենթափաստաթղթեր, ապա ջնջումը չի կատարվի և կառաջանա սխալ։

Ջնջումը տեղի է ունենում տրանզակցիայի մեջ։

**Պարամետրեր**

* `model` - Ջնջվող փաստաթղթի տվյալներ (ջնջման ենթակա փաստաթղթի օբյեկտ, ամբողջությամբ ջնջել թե մասնակի, ջնջման մեկնաբանություն...):
* `cancellationToken` - Ընդհատման օբյեկտ:
