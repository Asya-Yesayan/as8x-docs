---
title: "IStorageService սերվիս"
---

## Ներածություն

IStorageService դասը նախատեսված է ծրագրի աշխատանքի ընթացքում ձևավորվող ժամանակավոր ֆայլերի պահպանման և բեռնման համար։
Համակարգը կարող է կարգավորվել այնպես, որ ֆայլերի պահպանում կատարվի կա՛մ ֆայլային համակարգում, կա՛մ ամպային պահոցում։

Կարգավորվում է [appsettings.json](../../Project/appsettings_json.md) կոնֆիգուրացիոն ֆայլի [Storage](../../Project/appsettings_json.md#storage) բաժնում։

## Մեթոդներ

| Անվանում | Նկարագրություն |
|----------|----------------|
| [DeleteBlobAsync(string, string, CancellationToken)](IStorageService/Methods/DeleteBlobAsync.md#istorageservicedeleteblobasyncstring-string-cancellationtoken-մեթոդ) | Հեռացնում է ֆայլը ժամանակավոր ֆայլերի պահոցից` ըստ անվան և կոնտեյների։ |
| [DeleteBlobAsync(string, CancellationToken)](IStorageService/DeleteBlobAsync.md#istorageservicedeleteblobasyncstring-cancellationtoken-մեթոդ) | Հեռացնում է ֆայլը [ընթացիկ սեսիայի կոնտեյներից](IStorageService/Container.md)։ |
| [GetBlobAsync(string, string, CancellationToken)](IStorageService/Methods/GetBlobAsync.md) | Վերադարձնում է ֆայլի պարունակությունը ժամանակավոր ֆայլերի պահոցից` որպես [Stream](https://learn.microsoft.com/en-us/dotnet/api/system.io.stream): |
| [GetTempBlobUrl(string, string)](IStorageService/GetTempBlobUrl.md) | Վերադարձնում է [ընթացիկ սեսիայի կոնտեյներում](IStorageService/Properties/Container.md) գոյություն չունեցող, պատահականության սկզբունքով ընտրված ֆայլի անուն՝ ներառյալ ընդլայնումը և ֆայլի ամբողջական ճանապարհը։ |
| [UploadBlobAsync(string, string, byte[], CancellationToken)](IStorageService/Methods/UploadBlobAsync.md#istorageserviceuploadblobasyncstring-string-byte-cancellationtoken-մեթոդ) | Պահպանում է `value` պարամետրի պարունակությունը ժամանակավոր ֆայլերի պահոցում` ըստ կոնտեյների և ֆայլի անվան։ |
| [UploadBlobAsync(string, Stream, BlobProperties, CancellationToken)](IStorageService/UploadBlobAsync.md#istorageserviceuploadblobasyncstring-stream-blobproperties-cancellationtoken-մեթոդ) | Պահպանում է `stream` պարամետրի պարունակությունը [ընթացիկ սեսիայի կոնտեյների](IStorageService/Properties/Container.md) նշված ֆայլում։ |
| [UploadBlobAsync(string, string, Stream, BlobProperties, CancellationToken)](IStorageService/Methods/UploadBlobAsync.md#istorageserviceuploadblobasyncstring-string-stream-blobproperties-cancellationtoken-մեթոդ) | Պահպանում է `stream` պարամետրի պարունակությունը ժամանակավոր ֆայլերի պահոցում՝ նշված կոնտեյների նշված ֆայլում։ |
| [UploadTempBlobAsync(string, string, Stream, BlobProperties, CancellationToken)](IStorageService/Methods/UploadTempBlobAsync.md) | Պահպանում է `stream` պարամետրի պարունակությունը [ընթացիկ սեսիայի կոնտեյների](IStorageService/Properties/Container.md) նշված ընդլայնմամբ ֆայլում, որի անունը ձևավորվում է ավտոմատ։ |

## Հատկություններ

| Անվանում | Նկարագրություն |
|----------|----------------|
| [Container](IStorageService/Properties/Container.md) | Վերադարձնում է այն կոնտեյների/թղթապանակի անունը, որտեղ պահվում են ընթացիկ սեսիայի ժամանակավոր ստեղծվող ֆայլերը։ |

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
