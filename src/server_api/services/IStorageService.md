---
title: "IStorageService սերվիս"
---

## Ներածություն

IStorageService դասը նախատեսված է ծրագրի աշխատանքի ընթացքում ձևավորվող ժամանակավոր ֆայլերի պահպանման և բեռնման համար։
Համակարգը կարող է կարգավորվել այնպես, որ ֆայլերի պահպանում կատարվի կա՛մ ֆայլային համակարգում, կա՛մ ամպային պահոցում։

Կարգավորվում է [appsettings.json](../../Project/appsettings_json.md) կոնֆիգուրացիոն ֆայլի [Storage](../../project/appsettings_json.md) բաժնում։

## Մեթոդներ

| Անվանում | Նկարագրություն |
|----------|----------------|
| [DeleteBlobAsync(string, string, CancellationToken)](IPermanentStorageService/Methods/DeleteBlobAsync.md) | Հեռացնում է ֆայլը ժամանակավոր ֆայլերի պահոցից` ըստ անվան և կոնտեյների։ |
| [DeleteBlobAsync(string, CancellationToken)](IPermanentStorageService/Methods/DeleteBlobAsync.md) | Հեռացնում է ֆայլը [ընթացիկ սեսիայի կոնտեյներից](IPermanentStorageService/Properties/Container.md)։ |
| [GetBlobAsync(string, string, CancellationToken)](IPermanentStorageService/Methods/GetBlobAsync.md) | Վերադարձնում է ֆայլի պարունակությունը ժամանակավոր ֆայլերի պահոցից` որպես [Stream](https://learn.microsoft.com/en-us/dotnet/api/system.io.stream): |
| [GetTempBlobUrl(string, string)](IStorageService/Methods/GetTempBlobUrl.md) | Վերադարձնում է [ընթացիկ սեսիայի կոնտեյներում](IPermanentStorageService/Properties/Container.md) գոյություն չունեցող, պատահականության սկզբունքով ընտրված ֆայլի անուն՝ ներառյալ ընդլայնումը և ֆայլի ամբողջական ճանապարհը։ |
| [UploadBlobAsync(string, string, byte[], CancellationToken)](IStorageService/UploadBlobAsync.md#istorageserviceuploadblobasyncstring-string-byte-cancellationtoken-մեթոդ) | Պահպանում է `value` պարամետրի պարունակությունը ժամանակավոր ֆայլերի պահոցում` ըստ կոնտեյների և ֆայլի անվան։ |
| [UploadBlobAsync(string, Stream, BlobProperties, CancellationToken)](IPermanentStorageService/Methods/UploadBlobAsync.md) | Պահպանում է `stream` պարամետրի պարունակությունը [ընթացիկ սեսիայի կոնտեյների](IPermanentStorageService/Properties/Container.md) նշված ֆայլում։ |
| [UploadBlobAsync(string, string, Stream, BlobProperties, CancellationToken)](IPermanentStorageService/Methods/UploadBlobAsync.md) | Պահպանում է `stream` պարամետրի պարունակությունը ժամանակավոր ֆայլերի պահոցում՝ նշված կոնտեյների նշված ֆայլում։ |
| [UploadTempBlobAsync(string, string, Stream, BlobProperties, CancellationToken)](IPermanentStorageService/Methods/UploadTempBlobAsync.md) | Պահպանում է `stream` պարամետրի պարունակությունը [ընթացիկ սեսիայի կոնտեյների](IPermanentStorageService/Properties/Container.md) նշված ընդլայնմամբ ֆայլում, որի անունը ձևավորվում է ավտոմատ։ |

## Հատկություններ

| Անվանում | Նկարագրություն |
|----------|----------------|
| [Container](IPermanentStorageService/Properties/Container.md) | Վերադարձնում է այն կոնտեյների/թղթապանակի անունը, որտեղ պահվում են ընթացիկ սեսիայի ժամանակավոր ստեղծվող ֆայլերը։ |

<!-- ### GetTempBlobUrlAsync

```c#
public Task<string> GetTempBlobUrlAsync(string fileExtension, out string blobName)
```

Վերադարձնում է [Container](#container) հատկությամբ սահմանված ենթաթղթապանակում գոյություն չունեցող, պատահականության սկզբունքով ընտրված ֆայլի անունը՝ ներառյալ ընդլայնումը և ֆայլի ամբողջական ճանապարհը։

**Օրինակ** `C:\\Storage\\Files\\76dfc298-66c0-4b41-8981-434582400aeb\\lsrbuqgy.jay.txt`:

**Պարամետրեր**

| Անվանում        | Տվյալների տիպ        | Լռությամբ արժեք | Նկարագրություն |
|-----------------|----------------------|----------------|----------------|
| fileExtension   | string               | -              | Ֆայլի ընդլայնումը։ |
| blobName        | string               | -              | Վերադարձնում է ֆայլի անունը՝ նշված ընդլայնմամբ։ --> |
