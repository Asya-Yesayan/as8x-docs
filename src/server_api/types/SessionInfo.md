---
layout: page
title: "SessionInfo դաս" 
---

Ծրագիր մուտք գործելիս բացվում է սեսսիա, որը պարունակում է մուտք գործած օգտատիրոջ տվյալները և ծրագրի աշխատանքի որոշ կարգավորումներ: 
Սեսսիան ավտոմատ կերպով փակվում է ծրագրից դուրս գալիս։

Սեսսիայի փակման հետ համատեղ հեռացվում են նաև սեսսիայի ընթացքում առաջացած ժամանակավոր ֆայլերը, ընդհատվում ընթացիկ job-երը։

Ընթացիկ սեսսիան ստացվում է [ISessionInfoService](../services/ISessionInfoService.md).[GetInfo](../services/ISessionInfoService/GetInfo.md) մեթոդով։

Սեսսիայի մասին ինֆորմացիան պահվում է տվյալների պահոցի [SESSIONINFO](https://asya-yesayan.github.io/as4x-docs/HTM/ProgrGuide/Database/SessionInfo.html) աղյուսակում և քեշում։

Տե՛ս օգտագործման [օրինակ](../examples/SessionInfo.md):

```c#
public class SessionInfo
{
    public DateTime WkDate { get; }
    public DateTime StartDate { get; }
    public DateTime EndDate { get; }
    public int QueryTimeout { get; }
    public int DsQueryTimeout { get; }
    public string ComputerName { get; }
    public string ARMName { get; }
    public string UserName { get; }
    public short Suid { get; }
    public bool IsAdmin { get; }
    public DateTime ExpirationDate { get; }
    public string SessionGuid { get; }
    public short? ApiClientId { get; }
    public bool? FilterInSqlProfiler { get; }
}
```

| Անվանում           | Տեսակ        | Լռությամբ արժեք | Նկարագրություն |
|--------------------|-------------|----------------|----------------|
| `WkDate`           | DateTime    | -              | Սեսսիայի բացման ամսաթիվը/ժամանակը։ |
| `StartDate`        | DateTime    | -              | "Դրույթներ" պատուհանի "Հաշվետու ժամանակաշրջան"-ի սկզբի ամսաթիվ/ժամանակը։ |
| `EndDate`          | DateTime    | -              | "Դրույթներ" պատուհանի "Հաշվետու ժամանակաշրջան"-ի ավարտի ամսաթիվ/ժամանակը։ |
| `QueryTimeout`     | int         | 30 վրկ         | Սեսսիայի ընթացքում հարցումների կատարման առավելագույն ժամանակը վայրկյաններով։ Հնարավոր է փոխել ծրագրի UI-ի "Դրույթներ" պատուհանում։ |
| `DsQueryTimeout`   | int         | 300 վրկ (5 ր) | Սեսսիայի ընթացքում տվյալների աղբյուրների հարցումների կատարման առավելագույն ժամանակը վայրկյաններով։ Հնարավոր է փոխել ծրագրի UI-ի "Դրույթներ" պատուհանում։ |
| `ComputerName`     | string      | Environment.MachineName | Մուտք գործած օգտատիրոջ համակարգչի անուն։ |
| `ARMName`          | string      | -              | Մուտք գործած օգտատիրոջ լռությամբ ԱՇՏ-ն։ |
| `UserName`         | string      | -              | Մուտք գործած օգտատիրոջ ներքին անուն։ |
| `Suid`             | short       | -              | Մուտք գործած օգտատիրոջ ներքին համար (կոդ)։ |
| `IsAdmin`          | bool        | -              | Ցույց է տալիս, արդյոք օգտատերը ունի ադմինիստրատորի իրավունքներ։ |
| `ExpirationDate`   | DateTime    | -              | Սեսսիայի վավերականության ժամկետը։ |
| `SessionGuid`      | string      | -              | Սեսսիայի ներքին նույնականացման համար (Guid)։ |
| `ApiClientId`      | short?      | -              | Մուտք գործած կլիենտ ծրագրի ներքին նույնականացման համար (id)։ |
| `FilterInSqlProfiler` | bool?    | -              | Սեսսիայի ընթացքում կատարված Sql հարցումների տարանջատման հայտանիշ Sql Profiler-ում։ Եթե true, ընթացիկ սեսսիայի հարցումները տարանջատվում են ուրիշ սեսսիաներից։ Դրանք դիտելու համար անհրաժեշտ է ստանալ "Սերվիսային հարցումների տարանջատման բանալի"-ն "Ինֆորմացիա միացումների մասին" պատուհանից։ |
| `ServiceId`        | string      | -              | Այն սերվիսի id-ն, որում բացվել է սեսսիան։ |
