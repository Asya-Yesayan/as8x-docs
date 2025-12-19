---
layout: page
title: "AttachmentModel դաս" 
---

Դասը պարունակում է փաստաթղթին կցված ֆայլի տվյալները։

Օգտագործվում է [IAttachmentService](../services/IAttachmentService.md)-ի [Get](../services/IAttachmentService/Methods/Get.md), [GetAll](../../Bank/Client/Routes/LoanApplicationsRoutes/Methods/GetAll.md) մեթոդներով փաստաթղթին կցված ֆայլերի տվյալները վերադարձնելիս, [Add](../services/IAttachmentService/Methods/Add.md), [ChangeComment](../services/IAttachmentService/Methods/ChangeComment.md) մեթոդների կանչի արդյունքում ստեղծված կցված ֆայլի տվյալները վերադարձնելու համար։ 

```c#
public class AttachmentModel 
{
    public string FileName { get; set; }
    public string Comment { get; set; }
    public AttachmentTypes Type { get; set; }
    public string Username { get; set; }
    public DateTime? LastModifiedDate { get; set; }
    public string ComputerName { get; set; }
    public int Size { get; set; }
}
```

## Հատկություններ

| Անվանում         | Տվյալների տիպ   | Լռությամբ արժեք | Նկարագրություն   |
| ---------------- | --------------- | --------------- | ---------|
| FileName         | string          |      -           | Կցված ֆայլի անունը՝ ներառյալ ընդլայնումը։   |
| Comment          | string          |     -            | Կցված ֆայլի մեկնաբանություն։   |
| Type             | AttachmentTypes |      -           | Կցված ֆայլի ձևը (ֆայլ կամ հղում)։  |
| Username         | string          |      -           | Կցված ֆայլում վերջին փոփոխություն կատարած օգտագործողի համար (կոդ)։     |
| LastModifiedDate | DateTime?       |      -           | Կցված ֆայլում վերջին փոփոխության ամսաթիվը/ժամանակ։   |
| ComputerName     | string          |       -          | Համակարգչի անունը, որից կատարվել է կցված ֆայլում վերջին փոփոխությունը։ |
| Size             | int             |       -          | Կցված ֆայլի չափը բայթերով։    |
