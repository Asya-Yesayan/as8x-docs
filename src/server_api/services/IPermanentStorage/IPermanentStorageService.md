---
title: "IPermanentStorageService սերվիս"
---

## Ներածություն

IPermanentStorageService դասը նախատեսված է ծրագրի աշխատանքի ընթացքում ձևավորվող մշտական ֆայլերի պահպանման և բեռնման համար։
Համակարգը կարող է կարգավորվել այնպես, որ ֆայլերի պահպանում կատարվի կա՛մ ֆայլային համակարգում, կա՛մ ամպային պահոցում։

Կարգավորվում է [appsettings.json](../../../Project/appsettings_json.md) կոնֆիգուրացիոն ֆայլի [Storage](../../../Project/appsettings_json.md#storage) բաժնի `Permanent` ենթաբաժնում։

## Մեթոդներ

| Անվանում | Նկարագրություն |
|----------|----------------|
| [DeleteBlobAsync(string, string, CancellationToken)](Methods/DeleteBlobAsync.md#ipermanentstorageservicedeleteblobasyncstring-string-cancellationtoken-մեթոդ) | Հեռացնում է ֆայլը մշտական ֆայլերի պահոցից՝ ըստ անվան և կոնտեյների։ |
| [DeleteBlobAsync(string, CancellationToken)](Methods/DeleteBlobAsync.md#ipermanentstorageservicedeleteblobasyncstring-cancellationtoken) | Հեռացնում է ֆայլը մշտական ֆայլերի պահոցի [Container](Properties/Container.md) հատկությամբ նշված թղթապանակից։ |
| [GetBlobAsync(string, string, CancellationToken)](Methods/GetBlobAsync.md) | Վերադարձնում է ֆայլի պարունակությունը մշտական ֆայլերից պահոցից՝ որպես [Stream](https://learn.microsoft.com/en-us/dotnet/api/system.io.stream): |
| [UploadBlobAsync(string, string, byte[], CancellationToken)](Methods/UploadBlobAsync.md#ipermanentstorageserviceuploadblobasyncstring-string-byte-cancellationtoken-մեթոդ) | Պահպանում է `value` պարամետրի պարունակությունը մշտական ֆայլերի պահոցում՝ նշված կոնտեյների նշված ֆայլում։ |
| [UploadBlobAsync(string, Stream, BlobProperties, CancellationToken)](Methods/UploadBlobAsync.md#ipermanentstorageserviceuploadblobasyncstring-stream-blobproperties-cancellationtoken-մեթոդ) | Պահպանում է `value` պարամետրի պարունակությունը մշտական ֆայլերի պահոցի [Container](Properties/Container.md) հատկությամբ նշված թղթապանակում՝ `blobName` պարամետրում նշված ֆայլում։ |
| [UploadBlobAsync(string, string, Stream, BlobProperties, CancellationToken)](Methods/UploadBlobAsync.md#ipermanentstorageserviceuploadblobasyncstring-string-stream-blobproperties-cancellationtoken-մեթոդ) | Պահպանում է `stream` պարամետրի պարունակությունը մշտական ֆայլերի պահոցում՝ նշված կոնտեյների նշված ֆայլում։ |
| [UploadTempBlobAsync(string, string, Stream, BlobProperties, CancellationToken)](Methods/UploadTempBlobAsync.md) | Պահպանում է `stream` պարամետրի պարունակությունը մշտական ֆայլերի պահոցի [Container](Properties/Container.md) հատկությամբ նշված թղթապանակում` տրված ընդլայնմամբ ֆայլում, որի անունը ձևավորվում է ավտոմատ։ |

## Հատկություններ

| Անվանում | Նկարագրություն |
|----------|----------------|
| [Container](Properties/Container.md) | Վերադարձնում կամ նշանակում է մշտական ֆայլերի պահպանման ընթացիկ թղթապանակը, որը հանդիսանում է մշտական ֆայլերի պահոցի ենթաթղթապանակ։ |