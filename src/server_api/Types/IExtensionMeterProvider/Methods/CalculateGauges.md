---
title: CalculateGauges
nav_exclude: true
---

# IExtensionMeterProvider.CalculateGauges(IDBService) մեթոդ

```c#
public void CalculateGauges(IDBService dbService)
```

Այս մեթոդը նախատեսված է սեփական նկարագրությունները պարունակող assembly-ում ստեղծված մետրիկաների արժեքների հաշվարկի համար։

Մեթոդը ավտոմատ կերպով կանչվում է համակարգի կողմից՝ [appsettings.json](../../../../Project/appsettings_json.md) կոնֆիգուրացիոնֆայլի [OTLP:Metrics։PeriodicExporting:ExportIntervalMilliseconds](../../../../Project/appsettings_json.md) դաշտում սահմանված արտահանման պարբերականությամբ։

**Պարամետրեր**


| Անվանում | Տեսակ | Նկարագրություն |
|----------|----------|----------|
| dbService | [IDBService](../../../Services/IDB/IDBService.md) | [IDBService](../../../Services/IDB/IDBService.md) դասի օբյեկտ, որը տալիս է հնարավորություն ստանալ Sql միացում դեպի ընթացիկ տվյալների պահոց և կատարել Sql հարցումներ։ |