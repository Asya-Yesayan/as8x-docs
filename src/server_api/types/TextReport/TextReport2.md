---
title: TextReport.TextReport(IServiceProvider, TempFileCleanupMode) կոնստրուկտոր
---

```c#
public TextReport(IServiceProvider serviceProvider, 
                  TempFileCleanupMode cleanupMode = TempFileCleanupMode.Auto)
```

Ստեղծում է [TextReport](../TextReport.md) դասի օբյեկտ։ Կոնստրուկտորը օգտագործվում է առաջադրանքների կատարման ժամանակ տեքստային հաշվետվություններ ձևավորելու նպատակով․ հաշվետվությունում ավելացված յուրաքանչյուր տող ավտոմատ կերպով պահպանվում է նաև լոգերում։

**Պարամետրեր**

| Անվանում | Տեսակ | Լռությամբ արժեք | Նկարագրություն |
|----------|-------|-----------------|----------------|
| serviceProvider | [IServiceProvider](https://learn.microsoft.com/en-us/dotnet/api/system.iserviceprovider) | - | IServiceProvider դասի օբյեկտ։ |
| cleanupMode | [TempFileCleanupMode](../TempFileCleanupMode.md) | Auto | Տեքստային հաշվետվությունը պարունակող ֆայլի հեռացման ռեժիմ։ |