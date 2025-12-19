---
title: BlobRoutes դաս
---

## Ներածություն

## Մեթոդներ

| Անվանում | Նկարագրություն |
|----------|----------------|
| [Append(string, string, byte[], int)](BlobRoutes/Append.md) | Ավելացնում է `value` պարամետրի պարունակությունը `file` պարամետրում նշված ֆայլի վերջում։ |
| [AppendAsync(string, string, byte[], int, CancellationToken)](BlobRoutes/AppendAsync.md) | Ավելացնում է `value` պարամետրի պարունակությունը `file` պարամետրում նշված ֆայլի վերջում։ |
| [DeleteBlob(string, string)](BlobRoutes/Methods/DeleteBlob.md) | Հեռացնում է ֆայլը պահոցից ըստ անվան և կոնտեյների։ |
| [DeleteBlobAsync(string, string, CancellationToken)](../../server_api/services/IPermanentStorageService/Methods/DeleteBlobAsync.md) | Հեռացնում է ֆայլը պահոցից ըստ անվան և կոնտեյների։ |
| [Download(string, string)](BlobRoutes/Methods/Download.md) | Բեռնում է նշված կոնտեյների նշված ֆայլը և վերադարձնում ֆայլի պարունակությունը որպես [Stream](https://learn.microsoft.com/en-us/dotnet/api/system.io.stream): |
| [DownloadAsync(string, string, CancellationToken)](BlobRoutes/Methods/DownloadAsync.md) | Բեռնում է նշված կոնտեյների նշված ֆայլը և վերադարձնում ֆայլի պարունակությունը որպես [Stream](https://learn.microsoft.com/en-us/dotnet/api/system.io.stream): |
| [DownloadToFile(string, string, string, bool)](BlobRoutes/Methods/DownloadToFile.md) | Բեռնում է նշված կոնտեյների նշված ֆայլը և ավելացնում `file` պարամետրում նշված ֆայլում։ |
| [DownloadToFileAsync(string, string, string, bool, CancellationToken)](BlobRoutes/Methods/DownloadToFileAsync.md) | Բեռնում է նշված կոնտեյների նշված ֆայլը և ավելացնում `file` պարամետրում նշված ֆայլում։ |
| [Upload(string, string, byte[])](BlobRoutes/Upload.md) | Պահպանում է `value` պարամետրի պարունակությունը նշված կոնտեյների նշված ֆայլում։ |
| [UploadAsync(string, string, byte[], CancellationToken)](BlobRoutes/UploadAsync.md) | Պահպանում է `value` պարամետրի պարունակությունը նշված կոնտեյների նշված ֆայլում։ |
