---
layout: page
title: "FolderElement" 
tags: AsFoldElement
---

Այս դասը նախատեսված է թղթապանակի տարրի նկարագրման համար։

Օգտագործվում է [IDocumentService](../services/IDocumentService.md).[StoreInFolder](../services/IDocumentService/Methods/StoreInFolder.md) և [IFolderService](../services/IFolderService.md)-ի ֆունկցիաներում։

```c#
public class FolderElement
{
    public string FolderId { get; set; } = string.Empty;
    public FolderStatus Status { get; set; } = FolderStatus.Copy;
    public string Key { get; set; } = string.Empty;
    public string Comment { get; set; } = string.Empty;
    public string EComment { get; set; } = string.Empty;
    public string Spec { get; set; } = string.Empty;
    public string DocName { get; set; } = string.Empty;
    public int ISN { get; set; }
    public string ErrorMessage { get; set; } = string.Empty;
    public string Branch { get; set; } = string.Empty;
    public string Depart { get; set; } = string.Empty;
}
```

## Հատկություններ

| Անվանում     | Տվյալների տիպ | Լռությամբ արժեք   | Նկարագրություն   |
| ------------ | ------------- | ----------------- | ------|
| FolderId     | string        | string.Empty      | Թղթապանակի ներքին անունը։  |
| Status       | FolderStatus  | FolderStatus.Copy | Թղթապանակի տարրի վիճակը։  |
| Key          | string        | string.Empty      | Թղթապանակի տարրի կոդը։ |
| Comment      | string        | string.Empty      | Թղթապանակի տարրի հայերեն անվանումը։ |
| EComment     | string        | string.Empty      | Թղթապանակի տարրի անգլերեն անվանումը։ |
| Spec         | string        | string.Empty      | Թղթապանակի ազատ լրացման դաշտը, որը սովորաբար օգտագործվում է փաստաթղթի որոշ դաշտերի արժեքների պահման համար։ |
| DocName      | string        | string.Empty      | Թղթապանակի տարրի հետ կապակցված փաստաթղթի ներքին անունը։  |
| ISN          | int           |    -               | Թղթապանակի տարրի հետ կապակցված փաստաթղթի ներքին նույնականացման համարը։ |
| ErrorMessage | string        | string.Empty      | Սխալի հաղորդագրության տեքստը, որը ցույց կտրվի արդեն գոյություն ունեցացող կոդով տարր ավելացնելու դեպքում։   |
| Branch       | string        | string.Empty      | Թղթապանակի տարրի գրասենյակի կոդը։  |
| Depart       | string        | string.Empty      | Թղթապանակի բաժնի կոդը։ |
