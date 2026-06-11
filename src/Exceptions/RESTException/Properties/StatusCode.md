---
title: StatusCode
parent: "Հատկություններ"
grand_parent: "RESTException"
---

# RESTException.StatusCode հատկություն

**Դաս՝** [RESTException](../../RESTException.md)

```c#
public HttpStatusCode StatusCode { get; set; }
```

Վերադարձնում կամ նշանակում է HTTP ստատուս կոդը, որով հարցումի պատասխանը կվերադարձվի։

Լռությամբ արժեքը **HttpStatusCode.BadRequest** է (400), քանի որ RESTException-ը նախատեսված է օգտագործողի սխալների համար։ Արժեքը կարող է բացահայտորեն փոխվել [RESTException](../Methods/RESTException.md) դասի կոնստրուկտորի **statusCode** պարամետրի միջոցով կամ ստեղծումից հետո ուղղակիորեն հատկության արժեքավորմամբ։
