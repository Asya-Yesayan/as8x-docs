---
title: "8xClientSettings.json: Կարգավորման ֆայլ"
parent: "Պրոյեկտների կառուցվածք"
nav_order: 2
---

# 8xClientSettings.json: Կարգավորման ֆայլ

## Բովանդակություն

- [Ներածություն](#ներածություն)
- [LocalUpdateLocations](#localupdatelocations)

## Ներածություն

8xClientSettings.json-ը նախատեսված է 8X կոնֆիգուրացիոն սերվիսի աշխատանքի կարգավորման պարամետրերի մի մասի սահմանման համար։

## LocalUpdateLocations

Այս բաժինը նախատեսված է ծրագրի թարմացման կարգավորումների սահմանման համար։

```json
{
  "LocalUpdateLocations": [
    {
      "Path": "",
      "SystemType": "Bank"
    },
    {
      "Path": "",
      "SystemType": "Enterprise"
    },
    {
        "Path": "",
        "SystemType": "Wages"
    }
  ]
}
```

Յուրաքանչյուր բաժին պարունակում է երկու պարամետր՝

| Անվանում | Տվյալների տիպ | Պարտադիր/Ոչ պարտադիր | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- | --- |
| **Path** | string | Պարտադիր | - | Ծրագրի թարմացման լոկալ ճանապարհը։ |
| **SystemType** | string | Պարտադիր | - | Ծրագրի անունը։ |


