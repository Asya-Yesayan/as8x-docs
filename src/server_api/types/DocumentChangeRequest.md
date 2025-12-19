---
layout: page
title: "DocumentChangeRequest" 
tags: [DocChangeRequest, DCR]
---

Այս դասը նախատեսված է փաստաթղթի փոփոխման հայտի նկարագրման համար։

Օգտագործվում է `IDocumentChangeRequestService` սերվիսի ֆունկցիաներում։

```c#
public class DocumentChangeRequest
{
    public int DCRID { get; } = -1;
    public int ISN { get; }
    public short SUID { get; }
    public string Comment { get; } = string.Empty;
    public DateTime CreationDate { get; } = DateTime.Now;
    public short State { get; set; }
    public string EmptyMessage { get; set; }
    public bool ReFolderDocument { get; set; }
    public string CreationLogMessage { get; set; }
}
```

## Հատկություններ

| Անվանում           | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն                                                                                                                                                            |
| ------------------ | ------------- | --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DCRID              | int           | -1              | Փաստաթղթի փոփոխման հայտի համարը։ |
| ISN                | int           |     -            | Այն փաստաթղթի ներքին նույնականացման համարը (isn), որի համար ուղարկվել է փոփոխման հայտ։ |
| SUID               | short         |      -           | Փաստաթղթի փոփոխման հայտը ստեղծած օգտատիրոջ ներքին համարը (id)։ |
| Comment            | string        | string.Empty    | Փաստաթղթի փոփոխման հայտի մեկնաբանությունը։ |
| CreationDate       | DateTime      | DateTime.Now    | Փաստաթղթի փոփոխման հայտի ստեղծման ամսաթիվը/ժամանակը։ |
| State              | short         |     -            | Փաստաթղթի փոփոխման հայտի վիճակը։ <br> 0 - նոր ստեղծված փոփոխման հայտ, <br> 1 - փոփոխման հայտը հաստատվել է, <br> 2 - փոփոխման հայտը մերժվել է։|
| EmptyMessage       | string        |      -           | Դատարկ փաստաթղթի հայտ գրանցել փորձելիս առաջացող սխալի հաղորդագրությունը։ Եթե արժեքը դատարկ տող է, ապա առաջանում է ստանդարտ տեքստով սխալ։ |
| ReFolderDocument   | bool          |      -           | true արժեքի դեպքում փաստաթղթի փոփոխման հայտը մերժելիս փաստաթուղթը [վերաինդեքսավորում է թղթապանակներում](../services/IDocumentService/ReFolder.md)։ |
| CreationLogMessage | string        |       -          | Փաստաթղթի փոփոխման հայտի ստեղծման ժամանակ [փաստաթղթի պատմությունում](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Database/DocLog.html) գրանցվող հաղորդագրությունը։ |