---
title: "DataSourceService"
parent: "Սերվիսներ"
nav_order: 2
---

# DataSourceService սերվիս

## Ներածություն

DataSourceService դասը նախատեսված է տվյալների աղբյուրի հետ աշխատանքը ապահովելու համար։

## Մեթոդներ

| Անվանում | Նկարագրություն |
|----------|----------------|
| [ClearDefinitions(IEnumerable&lt;string&gt;)](Methods/ClearDefinitions.md) | Հեռացնում է նշված տվյալների աղբյուրների նկարագրությունների քեշը սերվիսից։ |
| [ExecuteDataSource(string, Dictionary&lt;string, object&gt;, CancellationToken)](Methods/ExecuteDataSource.md#datasourceserviceexecutedatasourcestring-dictionarystring-object-cancellationtoken-մեթոդ) | Կատարում է տվյալների աղբյուրը և վերադարձնում տողերի ցուցակ։ |
| [ExecuteDataSource(Type, Dictionary&lt;string, object&gt;, CancellationToken)](Methods/ExecuteDataSource.md#datasourceserviceexecutedatasourcetype-dictionarystring-object-cancellationtoken-մեթոդ) | Կատարում է տվյալների աղբյուրը և վերադարձնում տողերի ցուցակ։ |
| [GetColumnsDefinition(string)](Methods/GetColumnsDefinition.md) | Վերադարձնում է տվյալների աղբյուրի սյուների նկարագրությունների ցանկը։ |
| [GetDataSource()](Methods/GetDataSource.md) | Ստեղծվում է տրված T տիպի տվյալների աղբյուրի դասի օբյեկտ։ |
| [GetDefinition(string, bool)](Methods/GetDefinition.md) | Վերադարձնում է տվյալների աղբյուրի նկարագրությունը, որը պարունակում է տվյալների աղբյուրի մետատվյալները և հատկությունները(ներքին անուն, հայերեն, անգլերեն անվանումներ, SqlBased է թե ոչ...): |
