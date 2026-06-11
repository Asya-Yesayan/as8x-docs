---
title: IsRestException
parent: "Հատկություններ"
grand_parent: "ApiException"
---

# ApiException.IsRestException հատկություն

**Դաս՝** [ApiException](../../ApiException.md)

```c#
public bool IsRestException { get; set; }
```

Վերադարձնում կամ նշանակում է, արդյոք սխալը սերվերի կողմից առաջացված [RESTException](../../RESTException.md) է։

**true** արժեքի դեպքում սխալը պայմանավորված է օգտագործողի սխալով (անվավեր մուտքագրում, բիզնես կանոնի խախտում)՝ ապահով է ցուցադրել օգտագործողին։ **false** արժեքի դեպքում սխալը HTTP-ի կամ սերվերի ներքին խնդրի արդյունք է, և UI-ն կարող է այլ կերպ մշակել (օրինակ՝ լոգավորել, ընդհանուր սխալի պատուհան ցուցադրել)։

Արժեքավորվում է [ApiException](../Methods/ApiException.md) դասի կոնստրուկտորի **isRestException** պարամետրով։
