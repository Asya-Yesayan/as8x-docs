---
title: "Api հարցումներում կիրառվող header-ներ"
nav_order: 1
has_toc: false
---

# Api հարցումներում կիրառվող header-ների նկարագրություն

| Անվանում | Տվյալների տիպ | Նկարագրություն |
|--------|---------------|---------------|
| accept | string | Ցույց է տալիս, թե հաճախորդը ինչպիսի պատասխանների մեդիա տեսակներ (MIME type) է սպասում սերվերից։ |
| Content-Type | string | Հարցման կոնտենտի տիպը։ 8X սերվիսի Api-ների հիմնական մասի կոնտենտի տիպը `application/json` է։ |
| Authorization | string | Հարցման նույնականացման տվյալները։ Սերտիֆիկատով նույնականացվող Api կլիենտի դեպքում ֆորմատը պետք է լինի `Bearer tokenData` (օրինակ՝ `Bearer QWxhZGRpbjpvcGVuIHN1c2FTZQ==`), իսկ apiKey-ով նույնականացվող Api կլիենտի դեպքում՝ `ApiClientSecret apiKeyData` (օրինակ՝ `ApiClientSecret ZSGQD3zUZeEy7RdRayZaywaS7KrSbO`)։ |
| Accept-Language | string | Նշում է, թե հաճախորդը որ լեզվով է նախընտրում ստանալ սերվերի պատասխանները։ |
| X-Version | string | Api հարցման տարբերակը (1.0, 2.0, ...)։ |
| CurrentActivityId | string | Նշում է ընթացիկ թրեյսի id-ն և կիրառվում է թրեյսներում։ |
| LogRestExceptions | string | Api հարցման կատարման ընթացքում առաջացած `RESTException` տիպի սխալների լոգավորման հայտանիշ։ |

```json
{
  "accept": "application/json",
  "Content-Type": "application/json",
  "Authorization": "Bearer QWxhZGRpbjpvcGVuIHN1c2FTZQ==",
  "Accept-Language": "hy-AM,hy;q=0.5",
  "X-Version": "1.0",
  "CurrentActivityId": "b7f3a2c1-9d45-4f8e-9c21-6e9a8a2f4d11",
  "LogRestExceptions": "true"
}
```
