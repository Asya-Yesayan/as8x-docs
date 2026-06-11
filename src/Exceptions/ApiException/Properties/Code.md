---
title: Code
parent: "Հատկություններ"
grand_parent: "ApiException"
---

# ApiException.Code հատկություն

**Դաս՝** [ApiException](../../ApiException.md)

```c#
public string Code { get; private set; }
```

Վերադարձնում է սխալի կոդը։

Արժեքավորվում է [ApiException](../Methods/ApiException.md) դասի կոնստրուկտորի **errorResponse.Code** արժեքից, երբ սխալը ստեղծվում է **ErrorResponse** մոդելից։ Մյուս կոնստրուկտորների դեպքում արժեքավորվում է դատարկ տողով։
