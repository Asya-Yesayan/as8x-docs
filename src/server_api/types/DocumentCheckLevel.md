---
layout: page
title: "DocumentCheckLevel" 
tags: DocumentCheckLevel
nav_exclude: true
---

# DocumentCheckLevel

## Փաստաթղթի գրանցման եղանակ

Այս enum-ը նախատեսված է փաստաթղթի գրանցման ժամանակ որոշ ստուգումների և մեթոդների կանչերի անջատման համար։

```c#
public enum DocumentCheckLevel
{
    None = 0,
    DisableCallValidate = 1,
    DisableCallAction = 2,
    DisableEmptyValueChecks = 4,
    DisableTypeValid = 8,
    DisableAllchecks = 13,
    DisableAllchecksAndAction = 15,
    CreateChangeRequest = 16,
    WriteSoftwareLog = 32,
    DetailedLog = 64
}
```

**Արժեքների բազմություն**

| Անվանում                  | Արժեք | Նկարագրություն |
| ------------------------- | ----- | --------- |
| None                      | 0     | Համակարգը կատարում է բոլոր ստանդարտ ստուգումները և մեթոդների կանչերը։ |
| DisableCallValidate       | 1     | Անջատում է Validate մեթոդի կանչը։ |
| DisableCallAction         | 2     | Անջատում է Action մեթոդի կանչը։  |
| DisableEmptyValueChecks   | 4     | Անջատում է դաշտերի արժեքների դատարկության ստուգումը։ |
| DisableTypeValid          | 8     | Անջատում է տիպերի ստուգումը։  |
| DisableAllchecks          | 13    | Անջատում է Validate մեթոդի կանչը, դաշտերի արժեքների դատարկության և տիպերի ստուգումը։  |
| DisableAllchecksAndAction | 15    | Անջատում է Validate, Action մեթոդների կանչը, դաշտերի արժեքների դատարկության և տիպերի ստուգումը։ |
| CreateChangeRequest       | 16    | Փոփոխությունների հաստատման ուղարկման հայտանիշ։ Երբ փոխում և պահպանում եք փաստաթուղթ այս ռեժիմով, փոփոխության հարցումն ավտոմատ կերպով ստեղծվում և ուղարկվում է հաստատման, և քանի դեռ այս հարցումը չի հաստատվել, կատարված փոփոխությունները չեն ցուցադրվի փաստաթղթում։ |
| WriteSoftwareLog          | 32    | Նշվում է, երբ փաստաթղթի գրանցումը կատարվում է ծրագրային, այլ ոչ թե օգտագործողի որևէ գործողության հետևանքով։ Այս դեպքում փաստաթղթի պատմության մեջ գրվում է «Մշակվել է ծրագրային»։ Նախատեսված է անցումային ֆունկցիաներում փաստաթղթերը գրանցելուց։ |
| DetailedLog               | 64    | Վերևում նշված բոլոր գործողությունների մանրամասն գրանցում։  |

