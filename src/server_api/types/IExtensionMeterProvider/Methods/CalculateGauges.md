---
title: IExtensionMeterProvider.CalculateGauges(IDBService) մեթոդ
---

```c#
public void CalculateGauges(IDBService dbService)
```

Այս մեթոդը նախատեսված է սեփական նկարագրությունները պարունակող assembly-ում ստեղծված մետրիկաների արժեքների հաշվարկի համար։

Մեթոդը ավտոմատ կերպով կանչվում է համակարգի կողմից՝ [appsettings.json](../../../project/appsettings_json.md) կոնֆիգուրացիոնֆայլի [OTLP:Metrics։PeriodicExporting:ExportIntervalMilliseconds](../../../project/appsettings_json.md#otlp) դաշտում սահմանված արտահանման պարբերականությամբ։

**Պարամետրեր**


| Անվանում | Տեսակ | Նկարագրություն |
|----------|----------|----------|
| dbService | [IDBService](../../services/IDBService.md) | [IDBService](../../services/IDBService.md) դասի օբյեկտ, որը տալիս է հնարավորություն ստանալ Sql միացում դեպի ընթացիկ տվյալների պահոց և կատարել Sql հարցումներ։ |