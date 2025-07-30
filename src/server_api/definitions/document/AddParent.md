---
title: Document.AddParent(int) մեթոդ
---

```c#
public Task AddParent(int isn)
```

Ավելացնում է տրված isn-ով փաստաթուղթը փաստաթղթի ծնող փաստաթղթերի ցուցակում։

Ծնող փաստաթղթերի ցուցակը գրանցում է տվյալների պահոցի [DOCP](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Database/DocP.html) աղյուսակում 
[IDocumentService](../../services/IDocumentService.md).[Store](../../services/IDocumentService/Store.md) ֆունկցիայով փաստաթուղթը տվյալների պահոցում գրանցելուց:

**Պարամետրեր**

* `isn` - Ծնող փաստաթղթի ներքին նույնականացման համարը։

