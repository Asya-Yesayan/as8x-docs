---
title: DocumentRoutes.DeleteAsync(int, DocumentDeleteModel, CancellationToken) մեթոդ
---

```c#
public Task<DeletedDoc> DeleteAsync(int isn, DocumentDeleteModel model, CancellationToken cancellationToken = default)
```

Ջնջում է փաստաթուղթը համակարգից։  
Ջնջման ժամանակ հեռացվում են նաև այդ փաստաթղթի բոլոր թղթապանակները, ծառի տարրերը և իր համար գրանցված հաշվառումները։

Եթե փաստաթուղթը ունի ենթափաստաթղթեր, ապա ջնջումը չի կատարվի և կառաջանա սխալ։

Ջնջումը տեղի է ունենում տրանզակցիայի մեջ։

**Պարամետրեր**

* `isn` - Ջնջվող փաստաթղթի ներքին նույնականացման համարը (isn):
* `model` - Ջնջման համար անհրաժեշտ տվյալներ (ամբողջությամբ ջնջել թե մասնակի, ջնջման մեկնաբանություն...)։
* `cancellationToken` - Ընդհատման օբյեկտ:
