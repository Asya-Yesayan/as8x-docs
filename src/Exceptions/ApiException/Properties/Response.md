---
title: Response
parent: "Հատկություններ"
grand_parent: "ApiException"
---

# ApiException.Response հատկություն

**Դաս՝** [ApiException](../../ApiException.md)

```c#
public string Response { get; private set; }
```

Վերադարձնում է սերվերից ստացված հարցումի պատասխանի ամբողջական տեքստը։

Արժեքավորվում է [ApiException](../Methods/ApiException.md) դասի կոնստրուկտորի **response** պարամետրով։ Կարող է պարունակել սերվերի կողմից սերիալիզացված ամբողջական սխալի մոդելը կամ չստանդարտացված տեքստ՝ debug-ի և լոգավորման համար։
