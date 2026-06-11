---
title: ServiceStackTrace
parent: "Հատկություններ"
grand_parent: "ApiException"
---

# ApiException.ServiceStackTrace հատկություն

**Դաս՝** [ApiException](../../ApiException.md)

```c#
public string ServiceStackTrace { get; set; }
```

Վերադարձնում կամ նշանակում է սերվերի կողմից առաջացած սխալի stack trace-ը։

Արժեքավորվում է client-ի կողմից սերվերից ստացված սխալի պատասխանից։ UI-ն այս արժեքն օգտագործողին ցույց չի տալիս, բայց կարող է պահպանել խնդիրների վերլուծության համար։
