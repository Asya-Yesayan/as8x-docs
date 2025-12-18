---
title: TextReport.TextReport(IStorageService, TempFileCleanupMode) կոնստրուկտոր
---

```c#
public TextReport(IStorageService storageService, 
                  TempFileCleanupMode cleanupMode = TempFileCleanupMode.Auto)
```

Ստեղծում է [TextReport](../TextReport.md) դասի օբյեկտ։

**Պարամետրեր**


| Անվանում | Տեսակ | Լռությամբ արժեք | Նկարագրություն |
|----------|-------|-----------------|----------------|
| storageService | [IStorageService](../../services/IStorageService.md) | - | IStorageService դասի օբյեկտ։ |
| cleanupMode | [TempFileCleanupMode](../TempFileCleanupMode.md) | Auto | Տեքստային հաշվետվությունը պարունակող ֆայլի հեռացման ռեժիմ։ |