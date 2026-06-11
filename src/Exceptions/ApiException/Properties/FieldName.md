---
title: FieldName
parent: "Հատկություններ"
grand_parent: "ApiException"
---

# ApiException.FieldName հատկություն

**Դաս՝** [ApiException](../../ApiException.md)

```c#
public string FieldName { get; set; }
```

Վերադարձնում կամ նշանակում է փաստաթղթի դաշտի (Grid կամ Requisite) ներքին անունը (կոդ)։

Արժեքավորվում է, երբ ApiException-ը ձևավորվում է սերվերի [DocumentException](../../DocumentException.md)-ից՝ **InvalidFieldValue** տիպով։ UI-ն այս արժեքն օգտագործում է, որպեսզի սխալը ցուցադրելիս ֆոկուսը տեղափոխվի համապատասխան դաշտին։
