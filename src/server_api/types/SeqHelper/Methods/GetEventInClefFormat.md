---
title: GetEventInClefFormat
nav_exclude: true
---

# SeqHelper.GetEventInClefFormat(string) մեթոդ

```c#
public static string GetEventInClefFormat(string eventId)
```

Վերադարձնում է [Seq](https://datalust.co/)-ում գրանցված իրադարձության նկարագրությունը [Clef](https://clef-json.org/) ֆորմատով: 

SEQAPIKEY համակարգային պարամետրի կամ [appsettings.json](../../../../project/appsettings_json.md) կոնֆիգուրացիոն ֆայլում [Serilog:WriteTo:Seq:Args:serverUrl](../../../../project/appsettings_json.md#լոգի-գրանցում-seq-սերվերում) (Seq սերվերի հասցեն) կոնֆիգի չլրացված լինելու դեպքում առաջանում է սխալ։

**Պարամետրեր**

| Անվանում | Տեսակ | **Նկարագրություն** |
| --- | --- | --- |
| eventId | string | [Seq](https://datalust.co/)-ում գրանցված իրադարձության id-ն (eventId)։ |