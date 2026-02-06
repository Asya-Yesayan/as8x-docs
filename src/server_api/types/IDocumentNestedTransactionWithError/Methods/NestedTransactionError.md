---
title: NestedTransactionError
---

```c#
public Task NestedTransactionError(NestedTransactionErrorEventArgs<T> args)
```

Մեթոդը կանչվում է [IDocumentService](../../../Services/IDocument/IDocumentService.md)-ի [NestedTransactions](../../../Services/IDocument/Methods/NestedTransactions.md) մեթոդի **values** ցուցակի տարրերի մշակման ընթացում՝ սխալներ առաջանալու դեպքում։ Նախատեսված է սխալները պարունակող [տեքստային հաշվետվությունում](../../TextReport.md) սխալների լրացուցիչ մշակման և այլ հաղորդագրությունների ավելացման համար։

**Պարամետրեր**

| Անվանում        | Տվյալների տիպ        | Լռությամբ արժեք | Նկարագրություն |
|-----------------|----------------------|----------------|----------------|
| args            | NestedTransactionErrorEventArgs<T> | -              | [NestedTransactionErrorEventArgs](../../Args/NestedTransactionErrorEventArgs.md) դասի օբյեկտ։ |
