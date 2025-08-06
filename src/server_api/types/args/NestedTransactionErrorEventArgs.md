---
layout: page
title: "NestedTransactionErrorEventArgs" 
---

Այս դասը օգտագործվում է [IDocumentNestedTransactionWithError.NestedTransactionError](../IDocumentNestedTransactionWithError/NestedTransactionError.md) մեթոդում։

```c#
public class NestedTransactionErrorEventArgs<T>
{
    public T Value { get; internal set; }    
    public TextReport.TextReport Report { get; internal set; }   
    public string ErrorMessage { get; set; }
}
```

* `Value` - [IDocumentService.NestedTransactions](../../services/IDocumentService/NestedTransactions.md) մեթոդով մշակվող հերթական տարրը, որի մշակման ընթացքում առաջացել է սխալ։
* `Report` - [IDocumentService.NestedTransactions](../../services/IDocumentService/NestedTransactions.md) մեթոդի կատարման ընթացքում առաջացած սխալները պարունակող [տեքստային հաշվետվությունը](../TextReport.md)։
* `ErrorMessage` - 