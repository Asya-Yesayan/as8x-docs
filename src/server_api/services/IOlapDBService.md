---
title: "IOlapDBService սերվիս"
---

## Ներածություն

IOlapDBService դասը նախատեսված է **OLAP** տվյալների պահոցի հետ աշխատանքը ապահովելու համար։
Այն ապահովում է SQL սերվերին միացում և տրանզակցիաների բացում/փակում:

**OLAP** տվյալների պահոցը կարող է լինել նույն սերվերում, որտեղ գտնվում է հիմնական տվյալների պահոցը, կամ այն կարող է տեղակայված լինել այլ սերվերում:

**OLAP** տվյալների պահոցի ուրիշ սերվերում տեղակայված լինելը որոշվում է `OLPDB` պարամետրի միջոցով։ Պարամետրի դատարկ արժեքի դեպքում **OLAP** տվյալների պահոցը գտնվում է նույն սերվերում, ինչ հիմնական տվյալների պահոցը, հակառակ դեպքում ուրիշ սերվերում։

**OLAP** տվյալների պահոցի անունը հիմնական տվյալների պահոցից միշտ տարբերվում է միայն `_OLAP` վերջավորությամբ։

**OLAP** միացման կարգավորումները անհրաժեշտ է տալ [appsettings.json](../../Project/appsettings_json.md) կոնֆիգուրացիոն ֆայլի [db](../../project/appsettings_json.md) բաժնում` որպես տվյալների պահոցի անուն նշելով **OLAP** տվյալների պահոցին համապատասխան հիմնական պահոցի անունը։

Օրինակ եթե **OLAP** տվյալների պահոցի անունը `test_bank_Olap` է, ապա [appsettings.json](../../Project/appsettings_json.md) կոնֆիգուրացիոն ֆայլի [db](../../project/appsettings_json.md) բաժնի `database` բաժնում անհրաժեշտ է նշել `test_bank`։

## Մեթոդներ

| Անվանում | Նկարագրություն |
|----------|----------------|
| [BeginTrans()](IDBService/Methods/BeginTrans.md) | [Սկսում է](https://learn.microsoft.com/en-us/sql/t-sql/language-elements/begin-transaction-transact-sql) SQL տրանզակցիա **OLAP** տվյալների պահոցում։ |
| [BeginTransAsync()](IDBService/Methods/BeginTransAsync.md) | [Սկսում է](https://learn.microsoft.com/en-us/sql/t-sql/language-elements/begin-transaction-transact-sql) SQL տրանզակցիա **OLAP** տվյալների պահոցում։ |
| [CommitTrans()](IDBService/Methods/CommitTrans.md) | [Ավարտում է](https://learn.microsoft.com/en-us/sql/t-sql/language-elements/commit-transaction-transact-sql) SQL տրանզակցիան **OLAP** տվյալների պահոցում։ |
| [CommitTransAsync()](IDBService/Methods/CommitTransAsync.md) | [Ավարտում է](https://learn.microsoft.com/en-us/sql/t-sql/language-elements/commit-transaction-transact-sql) SQL տրանզակցիան **OLAP** տվյալների պահոցում։ |
| [CreateAdditionalConnection(bool, string, bool)](IDBService/Methods/CreateAdditionalConnection.md) | Բացում և վերադարձնում է նոր [SQL միացում](https://learn.microsoft.com/en-us/dotnet/api/microsoft.data.sqlclient.sqlconnection) դեպի **OLAP** տվյալների պահոց։ |
| [GetApproximateServerDate()](IDBService/Methods/GetApproximateServerDate.md) | Վերադարձնում է SQL սերվերի ընթացիկ ամսաթիվը/ժամը որոշակի շեղման հավանականությամբ։ |
| [GetServerDate()](IDBService/Methods/GetServerDate.md) | Վերադարձնում է SQL սերվերի ընթացիկ ամսաթիվը/ժամը կանչելով SQL-ի [GetDate](https://learn.microsoft.com/en-us/sql/t-sql/functions/getdate-transact-sql) ֆունկցիան։ |
| [RollBackTrans()](IDBService/Methods/RollBackTrans.md) | [Հետարկում է](https://learn.microsoft.com/en-us/sql/t-sql/language-elements/rollback-transaction-transact-sql) SQL տրանզակցիան **OLAP** տվյալների պահոցում։ |
| [RollBackTransAsync()](IDBService/Methods/RollBackTransAsync.md) | [Հետարկում է](https://learn.microsoft.com/en-us/sql/t-sql/language-elements/rollback-transaction-transact-sql) SQL տրանզակցիան **OLAP** տվյալների պահոցում։ |

## Հատկություններ

| Անվանում | Նկարագրություն |
|----------|----------------|
| [Connection](IDBService/Properties/Connection.md) | Վերադարձնում է բաց [SQL միացումը](https://learn.microsoft.com/en-us/dotnet/api/microsoft.data.sqlclient.sqlconnection) դեպի **OLAP** տվյալների պահոց։ |