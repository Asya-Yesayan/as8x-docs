---
title: Title
parent: "Հատկություններ"
grand_parent: "ApiException"
---

# ApiException.Title հատկություն

**Դաս՝** [ApiException](../../ApiException.md)

```c#
public string Title { get; set; }
```

Վերադարձնում կամ նշանակում է սխալի պատուհանի գլխագիրը։

Նշանակվում է client-ի կողմից, երբ ApiException-ը ձևավորվում է սերվերի [RESTException](../../RESTException.md)-ի **Title** հատկության արժեքից։ UI-ն այս արժեքն օգտագործում է սխալի պատուհանի վերնագիրը ձևավորելու համար։
