---
title: "LanguageService սերվիս"
---

## Ներածություն

LanguageService-ը ստատիկ դաս է, որը նախատեսված է ծրագրի ընթացիկ լեզվի կարգավորումները կառավարելու համար: 

8X-ի պրոյեկտներում գոյություն ունեցող ռեսուրսները (Resources) նայում են հենց այս դասի տված հատկություններին հայերեն/անգլերեն տեքստը վերադարձնելու համար։

## Հատկություններ

| Անվանում | Նկարագրություն |
|----------|----------------|
| [CurrentUICultureName](LanguageService/CurrentUICultureName.md) | Վերադարձնում է ծրագրի ընթացիկ [UI Culture](https://learn.microsoft.com/en-us/dotnet/api/system.globalization.cultureinfo.currentuiculture)-ի անունը: |
| [IsArmenian](LanguageService/IsArmenian.md) | Ցույց է տալիս արդյոք ծրագրի ընթացիկ լեզուն հայերենն է։ |
| [IsEnglish](LanguageService/IsEnglish.md) | Ցույց է տալիս արդյոք ծրագրի ընթացիկ լեզուն անգլերենն է։ |
| [Language](LanguageService/Language.md) | Վերադարձնում կամ նշանակում է ծրագրի [ընթացիկ լեզուն](../types/Language.md)։ |

## Մեթոդներ

| Անվանում | Նկարագրություն |
|----------|----------------|
| [GetAcceptLanguage(CultureInfo)](LanguageService/GetAcceptLanguage.md) | Վերադարձնում է տեքստային արժեք, որը կարող է օգտագործվել api հարցման `Accept-Language` header-ում (օրինակ "hy-AM,hy;q=0.5")՝ հիմնվելով տրված [CultureInfo](https://learn.microsoft.com/en-us/dotnet/api/system.globalization.cultureinfo)-ի վրա։ |