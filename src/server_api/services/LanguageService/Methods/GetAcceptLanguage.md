---
title: LanguageService.GetAcceptLanguage(CultureInfo) մեթոդ  
---

## Նկարագիր

**Դաս՝** [LanguageService](../../LanguageService.md)

```c#
public static string GetAcceptLanguage(CultureInfo cultureInfo = null)
```

Վերադարձնում է տեքստային արժեք, որը կարող է օգտագործվել api հարցման `Accept-Language` header-ում (օրինակ "hy-AM,hy;q=0.5")՝ հիմնվելով տրված [CultureInfo](https://learn.microsoft.com/en-us/dotnet/api/system.globalization.cultureinfo)-ի վրա։  
Եթե cultureInfo պարամետրը չի նշված, ապա օգտագործվում է ընթացիկ [CultureInfo](https://learn.microsoft.com/en-us/dotnet/api/system.globalization.cultureinfo)-ն։  

**Պարամետրեր**


| Անվանում | Տեսակ | Լռությամբ արժեք | Նկարագրություն |
|-----------|-------|-----------------|----------------|
| cultureInfo | CultureInfo | null | [CultureInfo](https://learn.microsoft.com/en-us/dotnet/api/system.globalization.cultureinfo) դասի օբյեկտ, որի հիման վրա որոշվում է `Accept-Language` header-ի արժեքը։ |
