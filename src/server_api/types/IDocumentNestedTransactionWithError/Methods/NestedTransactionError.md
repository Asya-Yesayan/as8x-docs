---
title: IDocumentNestedTransactionWithError.NestedTransactionError(NestedTransactionErrorEventArgs<T>) մեթոդ
---

```c#
public Task NestedTransactionError(NestedTransactionErrorEventArgs<T> args)
```

Մեթոդը կանչվում է [IDocumentService](../../../services/IDocumentService.md)-ի [NestedTransactions](../../../services/IDocumentService/Methods/NestedTransactions.md) մեթոդի **values** ցուցակի տարրերի մշակման ընթացում՝ սխալներ առաջանալու դեպքում։ Նախատեսված է սխալները պարունակող [տեքստային հաշվետվությունում](../../TextReport.md) սխալների լրացուցիչ մշակման և այլ հաղորդագրությունների ավելացման համար։

**Պարամետրեր**

| Անվանում        | Տվյալների տիպ        | Լռությամբ արժեք | Նկարագրություն |
|-----------------|----------------------|----------------|----------------|
| args            | NestedTransactionErrorEventArgs<T> | -              | [NestedTransactionErrorEventArgs](../../args/NestedTransactionErrorEventArgs.md) դասի օբյեկտ։ |
