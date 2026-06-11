---
title: DocumentExceptionType
parent: "Հատկություններ"
grand_parent: "ApiException"
---

# ApiException.DocumentExceptionType հատկություն

**Դաս՝** [ApiException](../../ApiException.md)

```c#
public DocumentExceptionType DocumentExceptionType { get; set; }
```

Վերադարձնում կամ նշանակում է փաստաթղթի սխալի տիպը, եթե սխալը կապված է փաստաթղթի մշակման հետ։

Արժեքավորվում է, երբ ApiException-ը ձևավորվում է սերվերի [DocumentException](../../DocumentException.md)-ից։ **InvalidFieldValue** արժեքի դեպքում UI-ն ֆոկուսը տեղափոխում է [FieldName](FieldName.md) հատկությամբ նշված դաշտին։ **Report** արժեքի դեպքում UI-ն բացում է [Report](Report.md) հատկությամբ նշված հաշվետվությունը։
