---
layout: page
title: "appsettings.json: Կարգավորման ֆայլ"
tags: [Settings, appsettings]
sublinks:
- { title: "additionalSettings", ref: additionalsettings }
- { title: "Autentication", ref: autentication }
- { title: "db", ref: db }
- { title: "Extensions", ref: extensions }
- { title: "Hangfire", ref: hangfire }
- { title: "JwtConfig", ref: jwtconfig }
- { title: "OTLP", ref: otlp }
- { title: "redisCachingSettings", ref: rediscachingsettings }
- { title: "redisCachedItems", ref: rediscacheditems }
- { title: "Serilog", ref: serilog }
- { title: "MinimumLevel-ի կարգավորում", ref: minimumlevel-ի-կարգավորում }
- { title: "Լոգի գրանցում ֆայլում", ref: լոգի-գրանցում-ֆայլում }
- { title: "Լոգի գրանցում Seq սերվերում", ref: լոգի-գրանցում-seq-սերվերում }
- { title: "Լոգի ֆիլտրում", ref: լոգի-ֆիլտրում }
- { title: "Մի քանի լոգերի կիրառում", ref: մի-քանի-լոգերի-կիրառում }
- { title: "Storage", ref: storage }
---

## Բովանդակություն

<div class="version-block" data-product-id="bank" markdown="1">

- [Ներածություն](#ներածություն)
- [additionalSettings](#additionalsettings)
- [Autentication](#autentication)
- [BackgroundJobs](#backgroundjobs)
- [db](#db)
- [Extensions](#extensions)
- [Hangfire](#hangfire)
- [JwtConfig](#jwtconfig)
- [OTLP](#otlp)
- [RateLimiter](#ratelimiter)
- [redisCachingSettings](#rediscachingsettings)
  - [redisCachedItems](#rediscacheditems)
- [Serilog](#serilog)
  - [MinimumLevel-ի կարգավորում](#minimumlevel-ի-կարգավորում)
  - [Լոգի գրանցում ֆայլում](#լոգի-գրանցում-ֆայլում)
  - [Լոգի գրանցում Seq սերվերում](#լոգի-գրանցում-seq-սերվերում)
  - [Լոգի ֆիլտրում](#լոգի-ֆիլտրում)
  - [Մի քանի լոգերի կիրառում](#մի-քանի-լոգերի-կիրառում)
- [Service](#service)
- [Storage](#storage)

</div>

<div class="version-block" data-version-exclude="bank" markdown="1">

- [Ներածություն](#ներածություն)
- [additionalSettings](#additionalsettings)
- [Autentication](#autentication)
- [db](#db)
- [Extensions](#extensions)
- [Hangfire](#hangfire)
- [JwtConfig](#jwtconfig)
- [OTLP](#otlp)
- [RateLimiter](#ratelimiter)
- [redisCachingSettings](#rediscachingsettings)
  - [redisCachedItems](#rediscacheditems)
- [Serilog](#serilog)
  - [MinimumLevel-ի կարգավորում](#minimumlevel-ի-կարգավորում)
  - [Լոգի գրանցում ֆայլում](#լոգի-գրանցում-ֆայլում)
  - [Լոգի գրանցում Seq սերվերում](#լոգի-գրանցում-seq-սերվերում)
  - [Լոգի ֆիլտրում](#լոգի-ֆիլտրում)
  - [Մի քանի լոգերի կիրառում](#մի-քանի-լոգերի-կիրառում)
- [Service](#service)
- [Storage](#storage)

</div>

## Ներածություն

[appsettings.json](https://learn.microsoft.com/en-us/aspnet/core/fundamentals/configuration)-ը նախատեսված է 8X սերվիսի աշխատանքի կարգավորման պարամետրերը սահմանելու համար, ինչպիսիք են տվյալների բազայի Sql Connection-ը, լոգավորման կարգավորումները:
Այստեղ ավելացվում են կարգավորումներ, որոնք պարունակում են գաղտնիք (password) կամ որոնք էականորեն փոխում են 8X սերվիսի պահվածքը։ 
Նման պարամետրերը նպատակահարմար չէ պահել 4X հարթակի համակարգային պարամետրերի մեջ։

Տե՛ս նաև
- [All About AppSettings In ASP.NET Core](https://www.c-sharpcorner.com/article/all-about-appsettings-in-asp-net-core/)
- [Configuration in .NET](https://learn.microsoft.com/en-us/dotnet/core/extensions/configuration)
- [Configuration in ASP.NET Core](https://learn.microsoft.com/en-us/aspnet/core/fundamentals/configuration/)
- [ՀԾ-Ձեռնարկություն, ՀԾ-Աշխատավարձ և ՀԾ-Բանկ համակարգերի գրանցման մեխանիզմի ինտեգրացումը Azure AD-ի հետ](https://support.armsoft.am/ViewKnowlageBaseArticle.aspx?KnowlageBaseArticleId=0bac001e-11d6-ee11-8f70-00155d643014)
- [ՀԾ-Ձեռնարկություն, ՀԾ-Աշխատավարձ և ՀԾ-Բանկ համակարգերի գրանցման մեխանիզմի ինտեգրացումը Windows ADFS-ի հետ](https://support.armsoft.am/ViewKnowlageBaseArticle.aspx?KnowlageBaseArticleId=92e2c510-43eb-ee11-8f70-00155d643014)
- [Սխալների լոգավորման կազմակերպում](https://support.armsoft.am/ViewKnowlageBaseArticle.aspx?KnowlageBaseArticleId=78fe933a-07c5-eb11-8f3e-00155d644419)
  - [Serilog.Settings.Configuration](https://github.com/serilog/serilog-settings-configuration)
  - [Serilog Expressions](https://github.com/serilog/serilog-expressions)

## additionalSettings

Նախկինում 8X սերվիս լոգին լինելու համար անհրաժեշտ էր միայն մուտքանուն և գաղտնաբառ, որի արդյունքում ստացվող JWT token-ի միջոցով օգտագործողը նույնականացվում էր և կարող էր կատարել կամայական API կանչեր։

Այժմ մտցվել է API Client-ի գաղափար, որը նախատեսված է 8X սերվիս մուտք գործող կլիենտ ծրագրի սահմանման համար։  
Այն անհրաժեշտ է ստեղծել 4X կամ 8X համակարգի UI-ից "**API Client-ներ**" դիտելու ձևից "**Ավելացնել**" կոնտեքստային ֆունկցիայով՝ նշելով կլիենտի վավերականացման եղանակը (սերտիֆիկատով կամ բանալիով) և նկարագրելով Json ֆորմատի **Manifest** ֆայլ, որը սահմանում է կլիենտ ծրագրի իրավասությունները և սահմանափակումները (որ օգտագործողները կարող են մուտք գործել համակարգ, որ տվյալների աղբյուրներին, փաստաթղթերին, DPR-ներին կարող են դիմել ու որ API կանչերը կատարել)։

Այս հայտանիշը ավելացվել է հին լոգինի մեխանիզմը անջատելու համար։

```json
"additionalSettings": {
    "disableOldLogins": false
}
```

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Պարտադիր/Ոչ պարտադիր | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- | --- |
| disableOldLogins | bool | Ոչ պարտադիր | true | Լոգինի հին մեխանիզմի անջատման հայտանիշ: |

## Autentication

Azure AD-ով կամ Windows ADFS-ով նույնականացման կարգավորումներ։  
Մանրամասների համար տե՛ս 
- [ՀԾ-Ձեռնարկություն, ՀԾ-Աշխատավարձ և ՀԾ-Բանկ համակարգերի գրանցման մեխանիզմի ինտեգրացումը Azure AD-ի հետ](https://support.armsoft.am/ViewKnowlageBaseArticle.aspx?KnowlageBaseArticleId=0bac001e-11d6-ee11-8f70-00155d643014)
- [ՀԾ-Ձեռնարկություն, ՀԾ-Աշխատավարձ և ՀԾ-Բանկ համակարգերի գրանցման մեխանիզմի ինտեգրացումը Windows ADFS-ի հետ](https://support.armsoft.am/ViewKnowlageBaseArticle.aspx?KnowlageBaseArticleId=92e2c510-43eb-ee11-8f70-00155d643014)։

Այս կարգավորումները հարկավոր է լինեն նույնը 8X սերվիսի և կոնֆիգուրացիոն սերվիսի համար։

```json
"Autentication": {
    "Alternative": "AD",
    "AD": {
        "Authority": "https://login.microsoftonline.com/yourdomain.am",
        "ClientId": "158u5wn2-2n95-14nm-22b2-9694efe14vae",
        "RedirectUri": "https://yourdomain.am/b2bAdminTool",
        "TokenMapping": "oid",
        "ResourceID": "https://yourdomain.am/Cloud"
    },
    "ADFS": {
        "Authority": "https://federationservername.yourdomain.am/adfs",
        "ClientId": "v04c6fd-4220-14e6-n315-f147ac852c18",
        "RedirectUri": "https://localhost:44322",
        "TokenMapping": "sid"
    }
}
```

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Պարտադիր/Ոչ պարտադիր | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- | --- |
| Alternative | string | Ոչ պարտադիր | AD | Սահմանում է օգտագործողի նույնականացման եղանակը՝ `AD` կամ `ADFS`։ |
| AD | object | Պարտադիր |  | Կարգավորում է Azure Active Directory-ով նույնականացման կարգավորումները։ |
| &nbsp;&nbsp;**Authority** | string | Պարտադիր | - | Oգտագործողի նույնականացման համար անհրաժեշտ URL-ը։ |
| &nbsp;&nbsp;**ClientId** | string | Պարտադիր | - | Ծրագրի Client ID-ն, որը գրանցված է Azure AD-ում։ |
| &nbsp;&nbsp;**RedirectUri** | string | Պարտադիր | - | Նույնականացումից հետո վերահղման համար URL-ը։ |
| &nbsp;&nbsp;**TokenMapping** | string | Պարտադիր | - | Նույնականացման համար անհրաժեշտ տոկենի տեսակը՝ OID։ |
| &nbsp;&nbsp;**ResourceID** | string | Պարտադիր | - | Ծրագրի կողմից մուտքագրվող ռեսուրսի URL-ը։ |
| ADFS | object | Պարտադիր | - | Կարգավորում է Active Directory Federation Services (ADFS)-ով նույնականացման կարգավորումները։ |
| &nbsp;&nbsp;**Authority** | string | Պարտադիր | - | Oգտագործողի նույնականացման համար անհրաժեշտ URL-ը։ |
| &nbsp;&nbsp;**ClientId** | string | Պարտադիր | - | Ծրագրի Client ID-ն, որը գրանցված է ADFS-ում։ |
| &nbsp;&nbsp;**RedirectUri** | string | Պարտադիր | - | Նույնականացումից հետո վերահղման համար URL-ը։ |
| &nbsp;&nbsp;**TokenMapping** | string | Պարտադիր | - | Նույնականացման համար անհրաժեշտ տոկենի տեսակը՝ [SID](https://www.techtarget.com/searchsecurity/definition/security-identifier)։ |

<div class="version-block" data-product-id="bank" markdown="1">

## BackgroundJobs

Այս բաժինը նախատեսված է առաջադրանքների աշխատանքի կարգավորման համար։ 

```json
"BackgroundJobs": {
  "Enabled": false,
  "CheckIntervalSeconds": 30,
  "Scheduler": false
}
```

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Պարտադիր/Ոչ պարտադիր | Լռությամբ արժեք | Նկարագրություն |
|------------|----------------|----------------------|------------------|----------------|
| Enabled | bool | Ոչ պարտադիր | false | Առաջադրանքների հերթագրման և կատարման մեխանիզմի միացման հայտանիշ։ |
| CheckIntervalSeconds | int | Ոչ պարտադիր | 30 | Առաջադրանքների հերթագրման և կատարման պարբերականությունը վայրկյաններով։ |
| Scheduler | bool | Ոչ պարտադիր | false | Պարամետրի true արժեքի դեպքում սերվիսը հեթագրում և կատարում է առաջադրանքները, հակառակ դեպքում` միայն կատարում: |

</div>

## db

Այս բաժինը նախատեսված է տվյալների բազայի կարգավորումները տալու համար։

```json
"db": {
    "server": "TEST-SERVER",
    "database": "test_db",
    "login": "test-user",
    "password": "test-password",
    "readOnly" : "1",
    "maxPoolSize" : 100,
    "customerId": "100000",
    "encrypt": false
}
```

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Պարտադիր/Ոչ պարտադիր | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- | --- |
| **server** | string | Պարտադիր | - | Սերվերի անուն: |
| **database** | string | Պարտադիր | - | Սերվերում գտնվող տվյալների բազայի անուն: |
| **login** | string | Պարտադիր | - | Տվյալների բազայի սերվերին մուտք գործելու համար օգտագործվող մուտքանունը: |
| **password** | string | Պարտադիր | - | Տվյալների բազայի սերվերին մուտք գործելու համար օգտագործվող գաղտնաբառը: |
| readOnly | string | Ոչ պարտադիր | "0" | Նշում է, թե արդյոք տվյալների բազային միացումը միայն կարդալու իրավասությամբ է, թե ոչ: |
| maxPoolSize | int | Ոչ պարտադիր | 100 | Տվյալների բազային միացումների Pool-ում միացումների առավելագույն քանակը: |
| customerId | string | Ոչ պարտադիր |  | Պատվիրատուի նույնակացման համար: Օգտագործվում է ՀԾ-Ձեռնարկության և ՀԾ-Աշխատավարձի 8X սերվիսների կողմից: |
| encrypt | bool | Ոչ պարտադիր | false | Նշում է, թե արդյոք տվյալների բազային միացումը ծածկագրվի, թե ոչ: |

## Extensions

Այս բաժինը նախատեսված է կազմակերպության սեփական նկարագրությունները և ընդլայնումները պարունակող պրոյեկտ(ներ)ի սահմանման համար։  
Ընդլայնող պրոյեկտ(ներ)ը անհրաժեշտ է ստեղծել, կարգավորել ([տե՛ս](customer_specific_extensions_project.md)), կառուցել dll-(ներ)ը, ապա dll-(ներ)ը տեղադրել սերվիսի ֆայլերի մոտ` ենթաթղթապանակում։

```json
"Extensions": [
  {
    "Name": "Organisation Specific Definitions project",
    "Location": "Organisation-DLLs",
    "MainAssembly": "Organisation.Specific.Definitions.dll",
    "Assemblies": [
      "Security.Authentication.dll",
      "Seq.Api.dll"
    ]
  }
],
```

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Պարտադիր/Ոչ պարտադիր | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- | --- |
| Name | string | Ոչ պարտադիր | MainAssembly | Ցուցադրվող անուն (մասնավորապես լոգերում)։ Փոխանցված չլինելու դեպքում օգտագործվում է `MainAssembly`-ն։ |
| **Location** | string | Պարտադիր | - | Ընդլայնումների dll-ի հարաբերական ճանապարհը սերվիսի թղթապանակի նկատմամբ, կամ ամբողջական ճանապարհը։ Օրինակ՝ եթե ընդլայնումների dll-ը տեղադրվել է սերվիսի թղթապանակի «Organisation-DLLs» անունով ենթաթղթապանակում, ապա **Location**-ի արժեքը պետք է լինի `"Organisation-DLLs"`։ **Համակարգի տարբերակը փոխելուց անհրաժեշտ է ընդլայնող պրոյեկտը կրկին կառուցել և ստացված dll-ով փոխարինել հինը։** |
| **MainAssembly** | string | Պարտադիր | - | Ընդլայնումների dll-ի անունը, որը պետք է տեղակայված լինի **Location**-ում նշված հասցեում։ Օրինակ՝ **"Organisation.Specific.Definitions.dll"**։ |
| Assemblies | string[] | Ոչ պարտադիր |  | dll-ների անունների զանգված, որոնք անհրաժեշտ են **MainAssembly**-ում նշված dll-ին աշխատանքի համար։ dll-ները պետք է տեղակայված լինեն **Location**-ում նշված հասցեում։ |

## Hangfire

[Hangfire](https://www.bytehide.com/blog/hangfire-dotnet)-ը գրադարան է, որը նախատեսված է background job-երի հերթի դրման և կատարման մեխանիզմը ապահովելու համար։

```json
"IsHangfireServer": false

"Hangfire": {
    "server": "TEST-SERVER",
    "database": "test_db",
    "login": "test-user",
    "password": "test-password",
    "workerCount": 10,
    "expirationInDays": 1
}
```

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Պարտադիր/Ոչ պարտադիր | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- | --- |
| IsHangfireServer | bool | Ոչ պարտադիր | false | Hangfire Server-ի միացման հայտանիշ։ |
| **server** | string | Պարտադիր | - | Սերվերի անունը, որտեղ գտնվում է Hangfire-ի տվյալների բազան։ |
| **database** | string | Պարտադիր | - | Տվյալների բազայի անունը, որը օգտագործում է Hangfire-ը։ |
| **login** | string | Պարտադիր | - | Տվյալների բազայի սերվերին մուտք գործելու համար օգտագործվող մուտքանունը։ |
| **password** | string | Պարտադիր | - | Տվյալների բազայի սերվերին մուտք գործելու համար օգտագործվող գաղտնաբառը։ |
| workerCount | int | Ոչ պարտադիր | Environment.ProcessorCount * 5 | Ֆոնային աշխատող պրոցեսների քանակը, որոնք Hangfire-ը պետք է օգտագործի առաջադրանքները մշակելու համար։ |
| expirationInDays | int | Ոչ պարտադիր | 1 | Նշում է օրերի քանակը, որից հետո մշակված առաջադրանքները կհամարվեն ժամկետանց և կջնջվեն տվյալների բազայից։ |

## JwtConfig

8X սերվիսում ծրագրային նույնականացվելուց սերվիսը տրամադրվում է JWT Token, որը օգտագործվում է API կանչերի ժամանակ նույնականությունը ստուգելու համար: 
Այս բաժնում սահմանված են JWT Token-ի կարգավորումները։

```json
"JwtConfig": {
    "secret": "7V{)Grmn0/12cx^TY<gnl.568",
    "issuer": "test_db",
    "expirationInMinutes": 1440,
    "refreshExpirationInMinutes": 43200
}
```

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Պարտադիր/Ոչ պարտադիր | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- | --- |
| **secret** | string | Պարտադիր | - | JWT Token-ի վավերականացման ու ստորագրման համար նախատեսված բանալի։ Առավելագույն երկարությունը **32** է (երկարության գերազանցման դեպքում հաշվի են առնվում միայն առաջին 32 սիմվոլները): |
| **issuer** | string | Պարտադիր | - | Token-ը թողարկող տվյալների բազայի անունը: |
| **expirationInMinutes** | int | Պարտադիր | - | JWT Token-ի վավերականության տևողությունը րոպեներով: |
| refreshExpirationInMinutes | int | Ոչ պարտադիր | 43200 | Թարմացման Token-ի վավերականության տևողությունը րոպեներով: Լռությամբ արժեքը **43200 րոպե** է (1 ամիս): |

## OTLP

Այս բաժինը նախատեսված է trace-ների և մետրիկաների կարգավորումների սահմանման համար։ 

```json
"OTLP": {
    "Metrics": {
        "EnableDefaultInstrumentations": false,
        "PeriodicExporting": {
            "ExportIntervalMilliseconds": 10000,
            "MaxExceptionLogCount": 5
            },
        "CachedItemsCountEnabled": false,
        "CBMessagesEnabled": false
        },
      "Tracing": {
          "EnableDefaultInstrumentations": false,
          "SqlClientInstrumentation": {
              "Enabled": false,
              "AddSqlParameters": false
            }
        }
    }
```

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Պարտադիր/Ոչ պարտադիր | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- | --- |
| Metrics | object | Ոչ պարտադիր |  | Այս բաժինը նախատեսված է մետրիկաների կարգավորման համար: |
| &nbsp;&nbsp;EnableDefaultInstrumentations | bool | Ոչ պարտադիր | false | Ծրագրի աշխատանքի ընթացքում եկած Api հարցումների մասին մետրիկաների հավաքագրման հայտանիշ: |
| &nbsp;&nbsp;PeriodicExporting | object | Ոչ պարտադիր |  | Այս բաժինը նախատեսված է պարբերական մետրիկաների կարգավորման համար: |
| &nbsp;&nbsp;&nbsp;&nbsp;ExportIntervalMilliseconds | int | Ոչ պարտադիր | 60000 | Պարբերական մետրիկաների արտահանման ինտերվալը միլիվայրկյաններով: |
| &nbsp;&nbsp;&nbsp;&nbsp;MaxExceptionLogCount | int | Ոչ պարտադիր | 5 | Մետրիկաները արտահանելիս առաջացող սխալների լոգավորման առավելագույն քանակը։ |
| &nbsp;&nbsp;CachedItemsCountEnabled | bool | Ոչ պարտադիր | false | Lite և RO Document տիպի օբյեկտների քանակի գրանցման հայտանիշ: |
| &nbsp;&nbsp;CBMessagesEnabled | bool | Ոչ պարտադիր | false | ԿԲ հաղորդագրությունների (CB_MESSAGES) մետրիկաների հավաքագրման և արտահանման հայտանիշ։ |
| Tracing | object | Ոչ պարտադիր |  | Այս բաժինը նախատեսված է trace-ների կարգավորման համար: |
| &nbsp;&nbsp;EnableDefaultInstrumentations | bool | Ոչ պարտադիր | false | Ծրագրի աշխատանքի ընթացքում եկած Api հարցումների մասին trace-ների հավաքագրման հայտանիշ: |
| &nbsp;&nbsp;SqlClientInstrumentation | object | Ոչ պարտադիր |  | Այս բաժինը նախատեսված է Sql հարցումների համար trace-երի կարգավորման համար: |
| &nbsp;&nbsp;&nbsp;&nbsp;Enabled | bool | Ոչ պարտադիր | false | Ծրագրի աշխատանքի ընթացքում կատարված Sql հարցումների համար trace-երի հավաքագրման հայտանիշ: |
| &nbsp;&nbsp;&nbsp;&nbsp;AddSqlParameters | bool | Ոչ պարտադիր | false | Sql հարցման [պարամետրերի](https://learn.microsoft.com/en-us/dotnet/api/microsoft.data.sqlclient.sqlparameter) մասին ինֆորմացիան trace-երում ներառելու հայտանիշ: |

## RateLimiter

```json
"RateLimiter": {
  "Default": "Global",
  "EnableActionAutoLimiting" : true,
  "FixedWindow": [
    {
        "Name": "Policy1",
        "Urls": [ "/api/Test/Test" ],
        "PermitLimit": 10000,
        "Window": 30
    }
  ],
  "SlidingWindow": [
    {
        "Name": "Policy2",
        "Urls": [],
        "PermitLimit": 10000,
        "Window": 30,
        "SegmentsPerWindow": 5
    }
  ],
  "Concurrency": [
    {
        "Name": "Policy3",
        "Urls": [],
        "PermitLimit": 50
    }
  ],
  "TokenBucket": [
      {
          "Name": "Global",
          "TokenLimit": 100000,
          "ReplenishmentPeriod": 5,
          "TokensPerPeriod": 2000,
          "QueueLimit": 0,
          "QueueProcessingOrder": 0
      }
  ]
}
```

Այս բաժինը նախատեսված է [Rate Limiting](https://bytebytego.com/courses/system-design-interview/design-a-rate-limiter)-ի ալգորիթմի ընտրության և կարգավորման համար։

Այս բաժնում տրվել է հնարավորություն սահմանելու Rate Limiting-ի ալգորիթմի տարբեր կոնֆիգուրացիաներ` policy-ներ (տարբեր պարամետրերով) և դրանք կիրառել անհրաժեշտ api-ների համար՝ օգտագործելով [EnableRateLimiting](https://learn.microsoft.com/en-us/dotnet/api/microsoft.aspnetcore.ratelimiting.enableratelimitingattribute) ատրիբուտը( ատրիբուտում նշելով սահմանված policy-ի անունը (**Name**)) կամ policy-ի **Urls** դաշտում նշելով api-ների հասցեները։

| Անվանում | Տվյալների տիպ | Պարտադիր/Ոչ պարտադիր | Լռությամբ արժեք | Նկարագրություն |
|-----------|----------------|------------------------|------------------|----------------|
| Default | string | Ոչ պարտադիր | — | Գլոբալ policy-ի անունը (**Name**)։ Այն կիրառելի է դառնում բոլոր այն api-ների համար, որոնց համար նշված չէ [DisableRateLimiting](https://learn.microsoft.com/en-us/dotnet/api/microsoft.aspnetcore.ratelimiting.disableratelimitingattribute) ատրիբուտը կամ [EnableRateLimiting](https://learn.microsoft.com/en-us/dotnet/api/microsoft.aspnetcore.ratelimiting.enableratelimitingattribute) ատրիբուտը՝ անհրաժեշտ policy-ի անունով։ |
| EnableActionAutoLimiting | bool | Ոչ պարտադիր | false |  |

**Սատարվող Rate Limiting-ի ալգորիթմներ**

* [Fixed Window](https://bytebytego.com/courses/system-design-interview/design-a-rate-limiter#fixed-window-counter-algorithm)

| Անվանում | Տվյալների տիպ | Պարտադիր/Ոչ պարտադիր | Լռությամբ արժեք | Նկարագրություն |
|-----------|----------------|------------------------|------------------|----------------|
| FixedWindow | array | Ոչ պարտադիր | — | Սահմանում է [Fixed Window](https://bytebytego.com/courses/system-design-interview/design-a-rate-limiter#fixed-window-counter-algorithm) տիպի Policy-ների ցուցակը։ |
| &nbsp;&nbsp;Name | string | **Պարտադիր** | — | Policy-ի անունը։ |
| &nbsp;&nbsp;PermitLimit | int | **Պարտադիր** | — | Թույլատրված հարցումների առավելագույն քանակը մեկ պատուհանի ընթացքում։ |
| &nbsp;&nbsp;Window | int (վայրկյան) | **Պարտադիր** | — | Ժամանակային պատուհանի տևողությունը վայրկյաններով։ |

* [Sliding Window](https://bytebytego.com/courses/system-design-interview/design-a-rate-limiter#sliding-window-log-algorithm)

| Անվանում | Տվյալների տիպ | Պարտադիր/Ոչ պարտադիր | Լռությամբ արժեք | Նկարագրություն |
|-----------|----------------|------------------------|------------------|----------------|
| SlidingWindow | array | Ոչ պարտադիր | — | Սահմանում է [Sliding Window](https://bytebytego.com/courses/system-design-interview/design-a-rate-limiter#sliding-window-log-algorithm) տիպի Policy-ների ցուցակը։  |
| &nbsp;&nbsp;Name | string | **Պարտադիր** | — | Policy-ի անունը։ |
| &nbsp;&nbsp;PermitLimit | int | **Պարտադիր** | — | Թույլատրված հարցումների առավելագույն քանակը պատուհանի ընթացքում։ |
| &nbsp;&nbsp;Window | int (վայրկյան) | **Պարտադիր** | — | Ժամանակային պատուհանի ընդհանուր տևողությունը։ |
| &nbsp;&nbsp;SegmentsPerWindow | int | **Պարտադիր** | — | Ժամանակային պատուհանի բաժանումների քանակը։ |

* Concurrency

| Անվանում | Տվյալների տիպ | Պարտադիր/Ոչ պարտադիր | Լռությամբ արժեք | Նկարագրություն |
|-----------|----------------|------------------------|------------------|----------------|
| Concurrency | array | Ոչ պարտադիր | — | Սահմանում է Concurrency տիպի Policy-ների ցուցակը։ |
| &nbsp;&nbsp;Name | string | **Պարտադիր** | — | Policy-ի անունը։ |
| &nbsp;&nbsp;PermitLimit | int | **Պարտադիր** | — | Թույլատրված միաժամանակյա հարցումների առավելագույն քանակը։ |

* [Token Bucket](https://bytebytego.com/courses/system-design-interview/design-a-rate-limiter#token-bucket-algorithm)

| Անվանում | Տվյալների տիպ | Պարտադիր/Ոչ պարտադիր | Լռությամբ արժեք | Նկարագրություն |
|-----------|----------------|------------------------|------------------|----------------|
| TokenBucket | array | **Պարտադիր** | — | հմանում է [Token Bucket](https://bytebytego.com/courses/system-design-interview/design-a-rate-limiter#token-bucket-algorithm) տիպի Policy-ների ցուցակը։ |
| &nbsp;&nbsp;Name | string | **Պարտադիր** | — | Policy-ի անունը։ |
| &nbsp;&nbsp;TokenLimit | int | **Պարտադիր** | — | Թույլատրելի token-ների առավելագույն քանակը bucket-ում։ |
| &nbsp;&nbsp;ReplenishmentPeriod | int (վայրկյան) | **Պարտադիր** | — | Ժամանակային միջակայքը, որի ընթացքում bucket-ը համալրվում է նոր token-ներով։ |
| &nbsp;&nbsp;TokensPerPeriod | int | **Պարտադիր** | — | Քանի token պետք է ավելացվի յուրաքանչյուր լրացման շրջանի ընթացքում։ |
| &nbsp;&nbsp;QueueLimit | int | Ոչ պարտադիր | 0 | Սպասման հերթի առավելագույն երկարությունը։ |
| &nbsp;&nbsp;QueueProcessingOrder | int | Ոչ պարտադիր | 0 | Սպասման հերթի մշակման կարգը (0՝ FIFO, 1՝ LIFO)։ |

**Օրինակ**

```json
"RateLimiter": {
  "TokenBucket": [
  {
      "Name": "DSExecute",
      "TokenLimit": 100000,
      "ReplenishmentPeriod": 5,
      "TokensPerPeriod": 2000
  }
      ]
}        
```  

```c#
[HttpPost("{name}")]
[EnableRateLimiting("DSExecute")]
public async Task<JsonResult> Execute(string name,
                                      [FromBody] JsonElement request,
                                      [FromServices] IServiceProvider serviceProvider)
```

կամ 

```json
"RateLimiter": {
  "TokenBucket": [
  {
      "Name": "DSExecute",
      "TokenLimit": 100000,
      "ReplenishmentPeriod": 5,
      "TokensPerPeriod": 2000,
      "Urls": [ "/api/DS/{name}" ],
  }
      ]
}        
``` 

## redisCachingSettings

Redis-ը նախատեսված է տվյալների քեշավորման և արագ բեռնման համար։ 
Այս բաժնում սահմանված են Redis-ի կարգավորումները։

```json
"redisCachingSettings": {
    "enabled": false,
    "connectionString": "dockerub1:6379,password=mypassword"
}
```

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Պարտադիր/Ոչ պարտադիր | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- | --- |
| enabled | bool | Ոչ պարտադիր |  | Redis-ով տվյալների քեշավորման միացման հայտանիշ։ Չլրացնելու դեպքում արժեքը համարվում է **true**, եթե լրացված է `connectionString` դաշտը, հակառակ դեպքում՝ **false**: |
| **connectionString** | string | Պարտադիր | - | Redis սերվերին միացման Connection string-ը։ Տե՛ս [Redis Connection Strings](https://docs.servicestack.net/redis/client-managers): |

### redisCachedItems

Այս բաժինը նախատեսված է Redis սերվերում պահվող առանձին տվյալներ և պահպանման տևողությունը կարգավորելու համար։ 
Այն ընդլայնելի է և առաձին պրոյեկտներում կարող է ավելի շատ լինել։  
Օրինակ ՀԾ-Բանկի սերվիսը տալիս է OLAP կարգավորումների քեշավորման պարամետրերը։

8X հարթակում նվազագույնը առկա են հետևյալ կարգավորումները փաստաթղթի մետատվյալները, պարամետրերը և մոնիտորինգի համար անհրաժեշտ տվյալները քեշավորելու համար։

"redisCachedItems" բաժնի դաշտերը կիրառելի են [redisCachingSettings:enabled](#rediscachingsettings) հայտանիշի **true** արժեքի դեպքում։

```json
"redisCachedItems": {
    "documentMetadata": {
        "enabled": true,
        "lifetime": "1.00:00:00"
    },
    "monitoring": {
        "enabled": true,
        "lifetime": "0.00:01:00"
    },
    "parameters": {
        "enabled": true,
        "lifetime": "1.00:00:00"
    }
}
```

Յուրաքանչյուր բաժին պարունակում է երկու պարամետր՝
| Անվանում | Տվյալների տիպ | Պարտադիր/Ոչ պարտադիր | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- | --- |
| enabled | bool | Ոչ պարտադիր | false | Թույլատրված է քեշավորումը Redis-ում, թե ոչ: |
| lifetime | string | Ոչ պարտադիր | 1.00:00:00 (1 օր) | Քեշի պահպանման տևողությունը Redis-ում: |

## Serilog

8X սերվիսում լոգերի հավաքագրման համար օգտագործվում է [Serilog](https://serilog.net/) գրադարանը։ 
appsettings.json-ում կարգավորումների ձևը որոշվում է Serilog գրադարանի կողմից։

Լոգավորումը հնարավոր է կարգավորել այնպես, որ լոգը գրանցվի Console-ում, ֆայլում կամ [Seq սերվերում](https://datalust.co/seq)։ 
Հնարավոր է կարգավորել, որ միաժամանակ մի քանի աղբյուրում կատարվի լոգի գրանցում` այդ թվում կիրառելով որոշակի ֆիլտր։

Տե՛ս նաև 
- [Serilog.Settings.Configuration](https://github.com/serilog/serilog-settings-configuration)
- [Սխալների լոգավորման կազմակերպում](https://support.armsoft.am/ViewKnowlageBaseArticle.aspx?KnowlageBaseArticleId=78fe933a-07c5-eb11-8f3e-00155d644419)։

### MinimumLevel-ի կարգավորում

Այստեղ կարգավորվում է լոգի պահպանման մակարդակը (Information, Warning, Error, Debug, Trace)։

Օրինակ՝
```json
"Serilog": {
    "MinimumLevel": {
        "Default": "Information",
        "Override": {
            "Microsoft": "Warning",
            "System": "Warning",
            "Microsoft.AspNetCore": "Warning",
            "Serilog.AspNetCore": "Warning"
        }
    }
}
```
**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Պարտադիր/Ոչ պարտադիր | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- | --- |
| MinimumLevel:Default | string | Ոչ պարտադիր | "Information" | Կարգավորում է լոգի պահպանման մակարդակը (Information, Warning, Error, Debug, Trace) ընդհանուր դեպքում։ |
| MinimumLevel:Override | object | Ոչ պարտադիր |  | Կարգավորում է լոգի պահպանման մակարդակը առանձին աղբյուրների համար։ |

### Լոգի գրանցում ֆայլում

Ֆայլում գրանցումը ապահովելու համար անհրաժեշտ է `Serilog` բաժնի `WriteTo` ենթաբաժնում ավելացնել դրան հատուկ պարամետրերը։
 
```json
"Serilog": {
    "WriteTo": [
        {
            "Name": "File",
            "Args": {
                "path": "./logs/log.json",
                "rollingInterval": "Day",
                "formatter": "Serilog.Formatting.Compact.CompactJsonFormatter, Serilog.Formatting.Compact"
            }
        }
    ]
}
```

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Պարտադիր/Ոչ պարտադիր | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- | --- |
| **Name** | string | Պարտադիր | - | Գրելով `File` նշում են, որ լոգավորումը կատարվում է ֆայլում։ |
| Args | object | Ոչ պարտադիր |  | Գրանցման ֆայլի կարգավորումները։ |
| &nbsp;&nbsp;**path** | string | Պարտադիր | - | Ֆայլի հարաբերական ճանապարհը appsettings.json ֆայլի նկատմամբ։ |
| &nbsp;&nbsp;rollingInterval | string | Ոչ պարտադիր | Day | Լոգերի գրանցման համար անհրաժեշտ նոր ֆայլի ստեղծման հաճախականությունը։ Այս օրինակում նշված է Day, որ նշանակում է, որ ամեն օրվա լոգերի համար ստեղծվում է նոր ֆայլ։ |
| &nbsp;&nbsp;formatter | string | Ոչ պարտադիր | TXT | Լոգերի գրանցման ֆորմատը (JSON, XAML, ...): Լռությամբ ֆորմատը **TXT** է։ Օրինակում նշված արժեքը առավել հարմար է լոգերի հետ հետագա աշխատանքի համար։ |

### Լոգի գրանցում Seq սերվերում

Seq սերվերում գրանցումը ապահովելու համար անհրաժեշտ է `Serilog` բաժնի `WriteTo` ենթաբաժնում ավելացնել դրան հատուկ պարամետրերը։

```json
"Serilog": {
    "WriteTo": [
        {
            "Name": "Seq",
            "Args": {
                "serverUrl": "http://95.140.203.18:8443",
                "bufferBaseFilename": "./logs/buffer"
            }
        }
    ]
}
```

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Պարտադիր/Ոչ պարտադիր | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- | --- |
| **Name** | string | Պարտադիր | - | Գրելով `Seq` նշում են, որ լոգավորումը կատարվում է Seq սերվերում։ |
| Args | object | Ոչ պարտադիր |  | Գրանցման Seq-ի կարգավորումները։ |
| &nbsp;&nbsp;**serverUrl** | string | Պարտադիր | - | Seq-ի սերվերի հասցեն։ |
| &nbsp;&nbsp;bufferBaseFilename | string | Ոչ պարտադիր |  | Սերվերի անհասանելի լինելու դեպքում լոգերի գրանցման համար անհրաժեշտ ֆայլի հարաբերական ճանապարհը appsettings.json ֆայլի նկատմամբ։ Սերվերը հասանելի դառնալուն պես ֆայլում գրանցված լոգերը գրանցվում են Seq-ում։ |

### Լոգի ֆիլտրում

Լոգը կարելի գրանցել կիրառելով որոշ ֆիլտրեր։
Ստորև օրինակում ֆիլտրվում է ըստ լոգի ConnectedService դաշտի 'ArCaP2P' արժեքի և լոգավորումը պահպանում է ArCaP2P_XXXXXXXX.json անունով ֆայլում (XXXXXXXX-ի փոխարեն գրված ամսաթիվ):

```json
"Serilog": {
  "WriteTo": [
    {
      "Name": "Logger",
      "Args": {
        "configureLogger": {
          "Filter": [
            {
              "Name": "ByIncludingOnly",
              "Args": {
                "expression": "@p['ConnectedService'] = 'ArCaP2P'"
              }
            }
          ],
          "WriteTo": [
            {
              "Name": "File",
              "Args": {
                "path": "./logs/ArCaP2P_.json",
                "formatter": "Serilog.Formatting.Compact.CompactJsonFormatter, Serilog.Formatting.Compact",
                "rollingInterval": "Day",
                "rollOnFileSizeLimit": true,
                "fileSizeLimitBytes": "1000000"
              }
            }
          ]
        }
      }
    }
  ]
}
```
| Անվանում | Տվյալների տիպ | Պարտադիր/Ոչ պարտադիր | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- | --- |
| **Name** | string | Պարտադիր | - | Նշում է որ բարդ լոգ է։ |
| Filter | array | Ոչ պարտադիր |  | Կարգավորում է ֆիլտրը։ Տե՛ս նաև [Serilog Expressions](https://github.com/serilog/serilog-expressions)։ |

### Մի քանի լոգերի կիրառում

Ստորև օրինակում կարգավորված են վերևի երեք լոգերը միաժամանակ։

```json
"Serilog": {
  "MinimumLevel": {
    "Default": "Information",
    "Override": {
      "Microsoft": "Warning",
      "System": "Warning",
      "Microsoft.AspNetCore": "Warning",
      "Serilog.AspNetCore": "Warning"
    }
  },
  "WriteTo": [
    {
      "Name": "File",
      "Args": {
        "path": "./logs/log.json",
        "rollingInterval": "Day",
        "formatter": "Serilog.Formatting.Compact.CompactJsonFormatter, Serilog.Formatting.Compact"
      }
    },
    {
      "Name": "Seq",
      "Args": {
        "serverUrl": "http://95.140.203.18:8443",
        "bufferBaseFilename": "./logs/buffer"
      }
    },
    {
      "Name": "Logger",
      "Args": {
        "configureLogger": {
          "Filter": [
            {
              "Name": "ByIncludingOnly",
              "Args": {
                "expression": "@p['ConnectedService'] = 'ArCaP2P'"
              }
            }
          ],
          "WriteTo": [
            {
              "Name": "File",
              "Args": {
                "path": "./logs/ArCaP2P_.json",
                "formatter": "Serilog.Formatting.Compact.CompactJsonFormatter, Serilog.Formatting.Compact",
                "rollingInterval": "Day",
                "rollOnFileSizeLimit": true,
                "fileSizeLimitBytes": "1000000"
              }
            }
          ]
        }
      }
    }
  ]
}
```

## Service

```json
"Service": {
  "Id": "ServiceId"
}
```

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Պարտադիր/Ոչ պարտադիր | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- | --- |
| Id | string | Ոչ պարտադիր |  | 8x սերվիսի ներքին նույնականացման համարը (id): |

## Storage

Սահմանում է ծրագրի աշխատանքի ընթացքում ստեղծվող ֆայլերի (Text reports, տպելու ձևանմուշներից առաջացած ֆայլեր, կամ այլ ֆայլեր) լոկալ պահպանման կարգավորումները։

```json
 "Storage": {
     "BaseUri": "http://localhost:1026/",
     "Directory": "C:\\Storage\\Files\\",
     "Permanent": {
         "Directory": "C:\\Storage\\PermanentFiles\\"
     }
 }
```

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Պարտադիր/Ոչ պարտադիր | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- | --- |
| BaseUri | string | Ոչ պարտադիր |  | Սերվիսի հասցեն, որն օգտագործվում է ֆայլերի ծրագրային բեռնման կամ վերբեռնման դեպքում URL-ների ձևավորման համար: |
| **Directory** | string | Պարտադիր | - | Ստեղծվող ժամանակավոր ֆայլերի պահպանման հիմնական թղթապանակի ճանապարհը։ |
| Permanent | object | Ոչ պարտադիր |  | Այս ենթաբաժինը նախատեսված է ստեղծվող մշտական ֆայլերի կարգավորման համար։ |
| Directory | string | Ոչ պարտադիր |  | Ստեղծվող մշտական ֆայլերի պահպանման հիմնական թղթապանակի ճանապարհը։ |

