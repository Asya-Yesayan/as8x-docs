---
layout: page
title: "NestedTransactionErrorEventArgs" 
---

Այս դասը օգտագործվում է [IDocumentNestedTransactionWithError.NestedTransactionError](../IDocumentNestedTransactionWithError/Methods/NestedTransactionError.md) մեթոդում։

```c#
public class NestedTransactionErrorEventArgs<T>
{
    public T Value { get; internal set; }    
    public TextReport.TextReport Report { get; internal set; }   
    public string ErrorMessage { get; set; }
}
```

| Անվանում     | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն   |
| ------------ | ------------- | --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Value        |      T         |      -           | [IDocumentService.NestedTransactions](../../Services/IDocument/Methods/NestedTransactions.md) մեթոդով մշակվող հերթական տարրը, որի մշակման ընթացքում առաջացել է սխալ։                                |
| Report       |     TextReport.TextReport          |        -         | [IDocumentService.NestedTransactions](../../Services/IDocument/Methods/NestedTransactions.md) մեթոդի կատարման ընթացքում առաջացած սխալները պարունակող [տեքստային հաշվետվությունը](../TextReport.md)։ |
| ErrorMessage |    string           |        -         |       |
