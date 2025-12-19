---
title: IDocumentNestedTransactionWithError.NestedTransaction(NestedTransactionEventArgs<T>) մեթոդ
---

```c#
public Task NestedTransaction(NestedTransactionEventArgs<T> args)
```

Մեթոդը կանչվում է [IDocumentService](../../../services/IDocumentService.md)-ի [NestedTransactions](../../../services/IDocumentService/Methods/NestedTransactions.md) մեթոդի **values** ցուցակի յուրաքանչյուր տարրի մշակման ընթացում:

**Պարամետրեր**

| Անվանում        | Տվյալների տիպ        | Լռությամբ արժեք | Նկարագրություն |
|-----------------|----------------------|----------------|----------------|
| args            | NestedTransactionEventArgs<T> | -              | **NestedTransactionEventArgs** դասի օբյեկտ, որը պարունակում է **values** ցուցակի ընթացիկ մշակվող տարրը։ |
