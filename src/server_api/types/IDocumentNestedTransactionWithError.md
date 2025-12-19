---
title: IDocumentNestedTransactionWithError դաս
---

## Մեթոդներ

| Անվանում | Նկարագրություն |
|----------|----------------|
| [NestedTransaction(NestedTransactionEventArgs&lt;T&gt;)](IDocumentNestedTransaction/Methods/NestedTransaction.md) | Մեթոդը կանչվում է [IDocumentService](../services/IDocumentService.md)-ի [NestedTransactions](../services/IDocumentService/Methods/NestedTransactions.md) մեթոդի **values** ցուցակի յուրաքանչյուր տարրի մշակման ընթացում: |
| [NestedTransactionError(NestedTransactionErrorEventArgs&lt;T&gt;)](IDocumentNestedTransactionWithError/Methods/NestedTransactionError.md) | Մեթոդը կանչվում է [IDocumentService](../services/IDocumentService.md)-ի [NestedTransactions](../services/IDocumentService/Methods/NestedTransactions.md) մեթոդի **values** ցուցակի տարրերի մշակման ընթացում՝ սխալներ առաջանալու դեպքում։ Նախատեսված է սխալները պարունակող [տեքստային հաշվետվությունում](TextReport.md) սխալների լրացուցիչ մշակման և այլ հաղորդագրությունների ավելացման համար։ |
