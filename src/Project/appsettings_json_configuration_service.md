---
layout: page
title: "Կոնֆիգուրացիոն սերվիսի կարգավորման ֆայլ։ appsettings.json"
tags: [Settings, appsettings]
sublinks:
- { title: "Autentication", ref: autentication }
- { title: "masterdb", ref: masterdb }
- { title: "Hangfire", ref: hangfire }
- { title: "JwtConfig", ref: jwtconfig }
- { title: "Serilog", ref: serilog }
- { title: "MinimumLevel-ի կարգավորում", ref: minimumlevel-ի-կարգավորում }
- { title: "Լոգի գրանցում ֆայլում", ref: լոգի-գրանցում-ֆայլում }
- { title: "Լոգի գրանցում Seq սերվերում", ref: լոգի-գրանցում-seq-սերվերում }
- { title: "Լոգի ֆիլտրում", ref: լոգի-ֆիլտրում }
- { title: "Մի քանի լոգերի կիրառում", ref: մի-քանի-լոգերի-կիրառում }
parent: "Կարգավորումներ"
nav_order: 2
---

# appsettings.json: Կարգավորման ֆայլ

## Բովանդակություն
- [Ներածություն](#ներածություն)
- [Autentication](#autentication)
- [AdditionalSettings](#additionalsettings)
- [masterdb](#masterdb)
- [Hangfire](#hangfire)
- [JwtConfig](#jwtconfig)
- [Serilog](#serilog)
  - [MinimumLevel-ի կարգավորում](#minimumlevel-ի-կարգավորում)
  - [Լոգի գրանցում ֆայլում](#լոգի-գրանցում-ֆայլում)
  - [Լոգի գրանցում Seq սերվերում](#լոգի-գրանցում-seq-սերվերում)
  - [Լոգի ֆիլտրում](#լոգի-ֆիլտրում)
  - [Մի քանի լոգերի կիրառում](#մի-քանի-լոգերի-կիրառում)
- [Storage](#storage)

## Ներածություն

[appsettings.json](https://learn.microsoft.com/en-us/aspnet/core/fundamentals/configuration)-ը նախատեսված է 8X կոնֆիգուրացիոն սերվիսի աշխատանքի կարգավորման պարամետրերը սահմանելու համար, ինչպիսիք են տվյալների բազայի Sql Connection-ը, լոգավորման կարգավորումները:

Տե՛ս նաև
- [All About AppSettings In ASP.NET Core](https://www.c-sharpcorner.com/article/all-about-appsettings-in-asp-net-core/)
- [Configuration in .NET](https://learn.microsoft.com/en-us/dotnet/core/extensions/configuration)
- [Configuration in ASP.NET Core](https://learn.microsoft.com/en-us/aspnet/core/fundamentals/configuration/)
- [ՀԾ-Ձեռնարկություն, ՀԾ-Աշխատավարձ և ՀԾ-Բանկ համակարգերի գրանցման մեխանիզմի ինտեգրացումը Azure AD-ի հետ](https://support.armsoft.am/ViewKnowlageBaseArticle.aspx?KnowlageBaseArticleId=0bac001e-11d6-ee11-8f70-00155d643014)
- [ՀԾ-Ձեռնարկություն, ՀԾ-Աշխատավարձ և ՀԾ-Բանկ համակարգերի գրանցման մեխանիզմի ինտեգրացումը Windows ADFS-ի հետ](https://support.armsoft.am/ViewKnowlageBaseArticle.aspx?KnowlageBaseArticleId=92e2c510-43eb-ee11-8f70-00155d643014)
- [Սխալների լոգավորման կազմակերպում](https://support.armsoft.am/ViewKnowlageBaseArticle.aspx?KnowlageBaseArticleId=78fe933a-07c5-eb11-8f3e-00155d644419)
  - [Serilog.Settings.Configuration](https://github.com/serilog/serilog-settings-configuration)
  - [Serilog Expressions](https://github.com/serilog/serilog-expressions)

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

## AdditionalSettings

Այս բաժինը նախատեսված է սերվիսի հավելյալ կարգավորումները տալու համար։

```json
"AdditionalSettings": {
  "CheckServerName": true
}
```

| Անվանում | Տվյալների տիպ | Պարտադիր/Ոչ պարտադիր | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- | --- |
| CheckServerName | bool | Ոչ պարտադիր | true | true արժեքի դեպքում համեմատվում են սերվիսի կոնֆիգուրացիայում նշված սերվեր/տվյալների բազայի և միացված կոնֆիգուրացիայի սերվեր/տվյալների բազայի անունները, անհամապատասխանության դեպքում թարմացումը ընդհատվում է։ Կիրառվում է AutoUpdate գործիքում։ |

## masterdb

Այս բաժինը նախատեսված է տվյալների բազայի կարգավորումները տալու համար։

```json
"masterdb": {
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
