---
title: IDocumentNestedTransactionWithError.NestedTransaction(NestedTransactionEventArgs&lt;T&gt;) մեթոդ
---

```c#
public Task NestedTransaction(NestedTransactionEventArgs<T> args)
```

Մեթոդը կանչվում է [IDocumentService](../../services/IDocumentService.md)-ի [NestedTransactions](../../services/IDocumentService/NestedTransactions.md) մեթոդի **values** ցուցակի յուրաքանչյուր տարրի մշակման ընթացում:

**Պարամետրեր**

* `args` - **NestedTransactionEventArgs** դասի օբյեկտ, որը պարունակում է **values** ցուցակի ընթացիկ մշակվող տարրը։
