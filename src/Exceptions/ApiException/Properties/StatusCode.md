---
title: StatusCode
parent: "Հատկություններ"
grand_parent: "ApiException"
---

# ApiException.StatusCode հատկություն

**Դաս՝** [ApiException](../../ApiException.md)

```c#
public int StatusCode { get; private set; }
```

Վերադարձնում է սերվերի կողմից վերադարձված HTTP ստատուս կոդը։

Արժեքավորվում է [ApiException](../Methods/ApiException.md) դասի կոնստրուկտորի **statusCode** պարամետրով։ Կանչող կոդը այս արժեքի միջոցով կարող է որոշել, թե սխալը պայմանավորված է հարցումի ձևաչափի սխալով (4xx), սերվերի ներքին խնդրով (5xx), թե այլ պատճառով։
