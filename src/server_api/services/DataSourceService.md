---
title: "DataSourceService սերվիս"
---

## Ներածություն

DataSourceService դասը նախատեսված է տվյալների աղբյուրի հետ աշխատանքը ապահովելու համար։

## Մեթոդներ

| Անվանում | Նկարագրություն |
|----------|----------------|
| [ExecuteDataSource(string, Dictionary&lt;string, object&gt;, CancellationToken)](DataSourceService/ExecuteDataSource.md#datasourceserviceexecutedatasourcestring-dictionarystring-object-cancellationtoken-մեթոդ) | Կատարում է տվյալների աղբյուրը և վերադարձնում տողերի ցուցակ։ |
| [ExecuteDataSource(Type, Dictionary&lt;string, object&gt;, CancellationToken)](DataSourceService/ExecuteDataSource.md#datasourceserviceexecutedatasourcetype-dictionarystring-object-cancellationtoken-մեթոդ) | Կատարում է տվյալների աղբյուրը և վերադարձնում տողերի ցուցակ։ |
| [GetColumnsDefinition(string)](DataSourceService/GetColumnsDefinition.md) | Վերադարձնում է տվյալների աղբյուրի սյուների նկարագրությունների ցանկը։ |
| [GetDataSource()](DataSourceService/GetDataSource.md) | Ստեղծվում է տրված T տիպի տվյալների աղբյուրի դասի օբյեկտ։ |
| [GetDefinition(string, bool)](DataSourceService/GetDefinition.md) | Վերադարձնում է տվյալների աղբյուրի նկարագրությունը, որը պարունակում է տվյալների աղբյուրի մետատվյալները և հատկությունները(ներքին անուն, հայերեն, անգլերեն անվանումներ, SqlBased է թե ոչ...): |