---
layout: page
title: "TreeElement" 
tags: AsTreeElement
---

## Ծառի տարր օբյեկտ

Այս դասը նախատեսված է ծառի հանգույցի նկարագրման համար։

Օգտագործվում է [IDocumentService](../Services/IDocument/IDocumentService.md).[StoreInTree](../Services/IDocument/Methods/StoreInTree.md)  և [TreeElementsService](../Services/TreeElements/TreeElementsService.md)-ի ֆունկցիաներում։

```c#
public class TreeElement
{
    public string TreeId { get; set; } = string.Empty;
    public string Key { get; set; } = string.Empty;
    public string Comment { get; set; } = string.Empty;
    public string EComment { get; set; } = string.Empty;
    public string Path { get; set; } = string.Empty;
    public string Leaf { get; set; } = string.Empty;
    public string Parent { get; set; } = string.Empty;
    public string DocName { get; set; } = string.Empty;
    public int ISN { get; set; } = -1;
    public string Branch { get; set; } = string.Empty;
    public string Depart { get; set; } = string.Empty;
    public string ErrorMessage { get; set; } = string.Empty;
}
```

## Հատկություններ

| Անվանում     | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն   |
| ------------ | ------------- | --------------- | -------- |
| TreeId       | string        | string.Empty    | Ծառի ներքին անունը։ |
| Key          | string        | string.Empty    | Ծառի հանգույցի կոդը։  |
| Comment      | string        | string.Empty    | Ծառի հանգույցի հայերեն անվանումը։  |
| EComment     | string        | string.Empty    | Ծառի հանգույցի անգլերեն անվանումը։  |
| Path         | string        | string.Empty    | Ծառի մեջ վերադարձնում է հանգույցի ճանապարհը՝ սկսելով ծառի արմատից։ |
| Leaf         | string        | string.Empty    | Ծառի հանգույցի տերև հանդիսանալու հայտանիշը։  |
| Parent       | string        | string.Empty    | Ծառի հանգույցի ծնող հանդիսանալու հայտանիշը։ |
| DocName      | string        | string.Empty    | Ծառի հանգույցի հետ կապակցված փաստաթղթի ներքին անունը։  |
| ISN          | int           | -1              | Ծառի հանգույցի հետ կապակցված փաստաթղթի ներքին նույնականացման համարը։ |
| Branch       | string        | string.Empty    | Ծառի հանգույցի գրասենյակի կոդը։ |
| Depart       | string        | string.Empty    | Ծառի հանգույցի բաժնի կոդը։  |
| ErrorMessage | string        | string.Empty    | Սխալի հաղորդագրության տեքստը, որը ցույց կտրվի արդեն գոյություն ունեցացող կոդով հանգույց ավելացնելու դեպքում։ |
