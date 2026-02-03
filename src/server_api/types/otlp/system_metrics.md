---
title: "Համակարգում գրանցվող մետրիկաների նկարագրություն"
nav_exclude: true
---

# Համակարգում գրանցվող մետրիկաների նկարագրություն

| **Անվանում** | **Տեսակ** | **Label-ներ** | **Նկարագրություն** |
| --- | --- | --- | --- |
| armsoft_process_enqueued_counter | counter | `ApiClientId`, `Application`, `CustomerId`, `Database`, `MachineName`, `Name`, `Server`, `ServiceVersion`, `Type`, `UserId` | Գրանցում է հերթում սպասող երկար տևող հարցումների ([փաստաթղթերի](../../Definitions/Document/Document.md) [գրանցում](../../Definitions/Document/Methods/Store.md)/[հեռացում](../../Definitions/Document/Methods/Delete.md), [տվյալների աղբյուրների](../../Definitions/DataSource/DataSource.md), [DPR](../../Definitions/DataProcessingRequest/DataProcessingRequest.md)-ների կատարում) քանակը։ <br> Կիրառելի է [OTLPPROCMETERENABLED](parameters.md#otlpprocmeterenabled) պարամետրի **true** արժեքի դեպքում։ |
| armsoft_process_executing_counter | counter | `ApiClientId`, `Application`, `CustomerId`, `Database`, `MachineName`, `Name`, `Server`, `ServiceVersion`, `Type`, `UserId` | Գրանցում է կատարվող երկար տևող հարցումների ([փաստաթղթերի](../../Definitions/Document/Document.md) [գրանցում](../../Definitions/Document/Methods/Store.md)/[հեռացում](../../Definitions/Document/Methods/Delete.md), [տվյալների աղբյուրների](../../Definitions/DataSource/DataSource.md), [DPR](../../Definitions/DataProcessingRequest/DataProcessingRequest.md)-ների կատարում) քանակը։ <br> Կիրառելի է [OTLPPROCMETERENABLED](parameters.md#otlpprocmeterenabled) պարամետրի **true** արժեքի դեպքում։ |
| armsoft_process_completed_counter | counter | `ApiClientId`, `Application`, `CustomerId`, `Database`, `MachineName`, `Name`, `Server`, `ServiceVersion`, `State`, `Type`, `UserId` | Գրանցում է ավարտված երկար տևող հարցումների ([փաստաթղթերի](../../Definitions/Document/Document.md) [գրանցում](../../Definitions/Document/Methods/Store.md)/[հեռացում](../../Definitions/Document/Methods/Delete.md), [տվյալների աղբյուրների](../../Definitions/DataSource/DataSource.md), [DPR](../../Definitions/DataProcessingRequest/DataProcessingRequest.md)-ների կատարում) քանակը։ <br> Կիրառելի է [OTLPPROCMETERENABLED](parameters.md#otlpprocmeterenabled) պարամետրի **true** արժեքի դեպքում։ |
| armsoft_process_in_cache | histogram | `ApiClientId`, `Application`, `CustomerId`, `Database`, `MachineName`, `Name`, `Server`, `ServiceVersion`, `Type`, `UserId`, `State` | Գրանցում է քեշում գտնվող երկար տևող հարցումների ([փաստաթղթերի](../../Definitions/Document/Document.md) [գրանցում](../../Definitions/Document/Methods/Store.md)/[հեռացում](../../Definitions/Document/Methods/Delete.md), [տվյալների աղբյուրների](../../Definitions/DataSource/DataSource.md), [DPR](../../Definitions/DataProcessingRequest/DataProcessingRequest.md)-ների կատարում) քանակը։ <br> Կիրառելի է [OTLPPROCMETERENABLED](parameters.md#otlpprocmeterenabled) պարամետրի **true** արժեքի դեպքում։ |
| armsoft_docs_stored_counter | counter | `ApiClientId`, `Application`, `CustomerId`, `Database`, `DocType`, `MachineName`, `Server`, `ServiceVersion`, `State`, `UserId` | Արձանագրում է համակարգում գրանցված փաստաթղթերի քանակը։ <br> Կիրառելի է [OTLPDOCSMETERENABLED](parameters.md#otlpdocsmeterenabled) պարամետրի **true** արժեքի դեպքում։ |
| armsoft_docs_store_histogram | histogram | `ApiClientId`, `Application`, `CustomerId`, `Database`, `DocType`, `MachineName`, `Server`, `ServiceVersion`, `State`, `UserId` | Արձանագրում է փաստաթղթերի գրանցման տևողությունները։ <br> Կիրառելի է [OTLPDOCSMETERENABLED](parameters.md#otlpdocsmeterenabled) պարամետրի **true** արժեքի դեպքում։ |
| armsoft_cached_items_count_gauge | gauge | `ApiClientId`, `Application`, `CustomerId`, `Database`, `MachineName`, `Name`, `Server`, `ServiceVersion`, `UserId` | Գրանցում է քեշավորվող փաստաթղթերի ([LiteDocument](../LiteDocument.md), [RODocument](../RODocument.md)) քանակը։ Կիրառելի է [OTLP:Metrics:CachedItemsCountEnabled](../../../Project/appsettings_json.md#otlp) կոնֆիգուրացիայի **true** արժեքի դեպքում։ |
| armsoft_ds_execution_histogram | histogram | `ApiClientId`, `Application`, `CustomerId`, `Database`, `MachineName`, `Name`, `Server`, `ServiceVersion`, `UserId` | Գրանցում է [տվյալների աղբյուրների](../../Definitions/DataSource/DataSource.md) կատարման տևողությունները: <br> Կիրառելի է [OTLPDSMETERENABLED](parameters.md#otlpdsmeterenabled) պարամետրի **true** արժեքի դեպքում։ |
| armsoft_dpr_execution_histogram | histogram | `ApiClientId`, `Application`, `CustomerId`, `Database`, `MachineName`, `Name`, `Server`, `ServiceVersion`, `UserId` | Գրանցում է [DPR](../../Definitions/DataProcessingRequest/DataProcessingRequest.md)-ների կատարման տևողությունները: <br> Կիրառելի է [OTLPDPRMETERENABLED](parameters.md#otlpdprmeterenabled) պարամետրի **true** արժեքի դեպքում։ |

## Օրինակ

```
armsoft_ds_execution_histogram Total 42{
    ApiClientId="1",
    Application="Bank",
    Database="test_db",
    MachineName="SERVICES8X",
    Name="Accounts",
    Server="TEST-SERVER",
    ServiceVersion="25.929.0",
    UserId="10",
    exported_instance="75f0b340-38c3-4ab9-a117-29c1d3feb916",
    exported_job="ArmSoft.Bank.Service",
    job="otel-collector",
    otel_scope_name="ArmSoft.Bank.Service",
    service_instance_id="75f0b340-38c3-4ab9-a117-29w1d3feb918",
    service_name="ArmSoft.Bank.Service",
    telemetry_sdk_language="dotnet",
    telemetry_sdk_name="opentelemetry",
    telemetry_sdk_version="1.12.0"
}
```
