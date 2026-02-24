---
title: GetEventException
nav_exclude: true
---

# SeqHelper.GetEventException(string) մեթոդ

```c#
public static string GetEventException(string eventId)
```

Վերադարձնում է [Seq](https://datalust.co/)-ում գրանցված իրադարձությունում պարունակվող սխալի հաղորդագրությունը (Message): 

SEQAPIKEY համակարգային պարամետրի կամ [appsettings.json](../../../../Project/appsettings_json.md) կոնֆիգուրացիոն ֆայլում [Serilog:WriteTo:Seq:Args:serverUrl](../../../../Project/appsettings_json.md#լոգի-գրանցում-seq-սերվերում) (Seq սերվերի հասցեն) կոնֆիգի չլրացված լինելու դեպքում առաջանում է սխալ։

**Պարամետրեր**


| Անվանում | Տեսակ | **Նկարագրություն** |
| --- | --- | --- |
| eventId | string | [Seq](https://datalust.co/)-ում գրանցված իրադարձության id-ն (eventId)։ |
