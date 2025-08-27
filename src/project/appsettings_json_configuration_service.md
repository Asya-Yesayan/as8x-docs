---
layout: page
title: "appsettings.json: Կարգավորման ֆայլ"
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
---

## Բովանդակություն
- [Ներածություն](#ներածություն)
- [Autentication](#autentication)
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

* `Alternative` - Սահմանում է օգտագործողի նույնականացման եղանակը՝ `AD` կամ `ADFS`։
* `AD` - Կարգավորում է Azure Active Directory-ով նույնականացման կարգավորումները։
  * `Authority` - **Պարտադիր**։ Oգտագործողի նույնականացման համար անհրաժեշտ URL-ը։
  * `ClientId` - **Պարտադիր**։ Ծրագրի Client ID-ն, որը գրանցված է Azure AD-ում:
  * `RedirectUri` - **Պարտադիր**։ Նույնականացումից հետո վերահղման համար URL-ը:
  * `TokenMapping` - **Պարտադիր**։ Նույնականացման համար անհրաժեշտ տոկենի տեսակը` OID:
  * `ResourceID` - **Պարտադիր**։ Ծրագրի կողմից մուտքագրվող ռեսուրսի URL-ը:
* `ADFS` - Կարգավորում է Active Directory Federation Services (ADFS)-ով նույնականացման կարգավորումները։
  * `Authority` - **Պարտադիր**։ Oգտագործողի նույնականացման համար անհրաժեշտ URL-ը։
  * `ClientId` - **Պարտադիր**։ Ծրագրի Client ID-ն, որը գրանցված է ADFS-ում:
  * `RedirectUri` - **Պարտադիր**։ Նույնականացումից հետո վերահղման համար URL-ը:
  * `TokenMapping` - **Պարտադիր**։ Նույնականացման համար անհրաժեշտ տոկենի տեսակը` [SID](https://www.techtarget.com/searchsecurity/definition/security-identifier):

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

* `server` - **Պարտադիր**։ Սերվերի անուն։
* `database` - **Պարտադիր**։ Սերվերում գտնվող տվյալների բազայի անուն։
* `login` - **Պարտադիր**։ Տվյալների բազայի սերվերին մուտք գործելու համար օգտագործվող մուտքանունը։
* `password` - **Պարտադիր**։ Տվյալների բազայի սերվերին մուտք գործելու համար օգտագործվող գաղտնաբառը։
* `readOnly` - **Ոչ պարտադիր**։ Նշում է, թե արդյոք տվյալների բազային միացումը միայն կարդալու իրավասությամբ է, թե ոչ։ Ընդունում է "0" կամ "1" արժեք։ Լռությամբ արժեքը **"0"** է։
* `maxPoolSize` - **Ոչ պարտադիր**։ Տվյալների բազային [միացումների Pool](https://www.linkedin.com/pulse/how-sql-connection-pool-works-prashant-pathak/)-ում միացումների առավելագույն քանակը։ Լռությամբ արժեքը **100** է։
* `customerId` - **Ոչ պարտադիր**։ Պատվիրատուի նույնակացման համար։ Օգտագորվում է ՀԾ-Ձեռնարկության և ՀԾ-Աշխատավարձի 8X սերվիսների կողմից։
* `encrypt` - **Ոչ պարտադիր**։ Նշում է, թե արդյոք տվյալների բազային միացումը ծածկագրվի, թե ոչ։ Լռությամբ արժեքը **false** է։

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

* `IsHangfireServer` - **Ոչ պարտադիր**: Hangfire Server-ի միացման հայտանիշ։ Լռությամբ արժեքը **false** է։

"Hangfire" բաժնի դաշտերը կիրառելի են `IsHangfireServer` հայտանիշի **true** արժեքի դեպքում։

* `server` - **Պարտադիր**։ Սերվերի անունը, որտեղ գտնվում է Hangfire-ի տվյալների բազան:
* `database` - **Պարտադիր**։ Տվյալների բազայի անունը, որը օգտագործում է Hangfire-ը:
* `login` -  **Պարտադիր**։ Տվյալների բազայի սերվերին մուտք գործելու համար օգտագործվող մուտքանունը։
* `password` - **Պարտադիր**։ Տվյալների բազայի սերվերին մուտք գործելու համար օգտագործվող գաղտնաբառը։
* `workerCount` - **Ոչ պարտադիր**: Ֆոնային աշխատող պրոցեսների քանակը, որոնք Hangfire-ը պետք է օգտագործի առաջադրանքները մշակելու համար։ Լռությամբ արժեքը **Environment.ProcessorCount * 5** է։
* `expirationInDays` - **Ոչ պարտադիր**: Նշում է օրերի քանակը, որից հետո մշակված առաջադրանքները կհամարվեն ժամկետանց և կջնջվեն տվյալների բազայից։ Լռությամբ արժեքը **24 ժամ** է։

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

* `secret` - **Պարտադիր**։ JWT Token-ի վավերականացման ու ստորագրման համար նախատեսված բանալի։ Առավելագույն երկարությունը **32** է (երկարության գերազանցման դեպքում հաշվի են առնվում միայն առաջին 32 սիմվոլները)։
* `issuer` - **Պարտադիր**։ Token-ը թողարկող տվյալների բազայի անունը։
* `expirationInMinutes` - **Պարտադիր**։ JWT Token-ի վավերականության տևողությունը րոպեներով։
* `refreshExpirationInMinutes` - **Ոչ պարտադիր**։ Թարմացման Token-ի վավերականության տևողությունը րոպեներով: Լռությամբ արժեքը **43200 րոպե** է (1 ամիս)։

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

* `MinimumLevel:Default` - **Ոչ պարտադիր**։ Կարգավորում է լոգի պահպանման մակարդակը (Information, Warning, Error, Debug, Trace) ընդհանուր դեպքում։ Լռությամբ արժեքը **"Information"** է։
* `MinimumLevel:Override` - **Ոչ պարտադիր**։ Կարգավորում է լոգի պահպանման մակարդակը առանձին աղբյուրների համար։

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

* `Name` - **Պարտադիր**։ Գրելով `File` նշում են, որ լոգավորումը կատարվում է ֆայլում։
* `Args` - Գրանցման ֆայլի կարգավորումները։
  * `path` - **Պարտադիր**։ Ֆայլի հարաբերական ճանապարհը appsettings.json ֆայլի նկատմամբ։
  * `rollingInterval` - **Ոչ պարտադիր**։ Լոգերի գրանցման համար անհրաժեշտ նոր ֆայլի ստեղծման հաճախականությունը։
    Այս օրինակում նշված է Day, որ նշանակում է, որ ամեն օրվա լոգերի համար ստեղծվում է նոր ֆայլ։
  * `formatter` - **Ոչ պարտադիր**։ Լոգերի գրանցման ֆորմատը (JSON, XAML, ...): Լռությամբ ֆորմատը **TXT** է։
    Օրինակում նշված արժեքը առավել հարմար է լոգերի հետ հետագա աշխատանքի համար։

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

* `Name` - **Պարտադիր**։ Գրելով `Seq` նշում են, որ լոգավորումը կատարվում է Seq սերվերում։
* `Args` - Գրանցման Seq-ի կարգավորումները։
  * `serverUrl` - **Պարտադիր**։ Seq-ի սերվերի հասցեն։
  * `bufferBaseFilename` - **Ոչ պարտադիր**։ Սերվերի անհասանելի լինելու դեպքում լոգերի գրանցման համար անհրաժեշտ ֆայլի հարաբերական ճանապարհը appsettings.json ֆայլի նկատմամբ։
    Սերվերը հասանելի դառնալուն պես ֆայլում գրանցված լոգերը գրանցվում են Seq-ում։

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

Վերև լոգի կարգավորման մեջ կարևոր են՝
* `"Name": "Logger"` - Նշում է որ բարդ լոգ է։
* `"Filter"` - **Ոչ պարտադիր**։ Կարգավորում է ֆիլտրը։ Տե՛ս նաև [Serilog Expressions](https://github.com/serilog/serilog-expressions)։


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
