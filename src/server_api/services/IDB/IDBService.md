---
title: "IDBService"
parent: "Սերվիսներ"
nav_order: 2
---

# IDBService սերվիս

## Ներածություն

IDBService դասը նախատեսված է տվյալների պահոցի հետ աշխատանքը ապահովելու համար։
Տալիս է SQL սերվերին միացում, բացում/փակում է տրանզակցիաներ։

## Մեթոդներ

| Անվանում | Նկարագրություն |
|----------|----------------|
| [ActiveTrans()](Methods/ActiveTrans.md) | Ստուգում է ակտիվ տրանզակցիայի առկայությունը։ |
| [AppLock(string, string, string, string, int, string)](Methods/AppLock.md) | Ստեղծում է SQL արգելափակում (lock) տրված անունով ռեսուրսի վրա։ |
| [BeginSqlServerDistributedTransaction()](Methods/BeginSqlServerDistributedTransaction.md) | Բացում է [բաշխված տրանզակցիա](https://learn.microsoft.com/en-us/sql/t-sql/language-elements/begin-distributed-transaction-transact-sql)։ |
| [BeginSqlServerDistributedTransactionAsync()](Methods/BeginSqlServerDistributedTransactionAsync.md) | Բացում է [բաշխված տրանզակցիա](https://learn.microsoft.com/en-us/sql/t-sql/language-elements/begin-distributed-transaction-transact-sql)։ |
| [BeginTrans()](Methods/BeginTrans.md) | [Սկսում է](https://learn.microsoft.com/en-us/sql/t-sql/language-elements/begin-transaction-transact-sql) SQL տրանզակցիա։ |
| [BeginTransAsync()](Methods/BeginTransAsync.md) | [Սկսում է](https://learn.microsoft.com/en-us/sql/t-sql/language-elements/begin-transaction-transact-sql) SQL տրանզակցիա։ |
| [CommitTrans()](Methods/CommitTrans.md) | [Ավարտում է](https://learn.microsoft.com/en-us/sql/t-sql/language-elements/commit-transaction-transact-sql) SQL տրանզակցիան։ |
| [CommitTransAsync()](Methods/CommitTransAsync.md) | [Ավարտում է](https://learn.microsoft.com/en-us/sql/t-sql/language-elements/commit-transaction-transact-sql) SQL տրանզակցիան։ |
| [CreateAdditionalConnection(bool, string, bool)](Methods/CreateAdditionalConnection.md) | Բացում և վերադարձնում է նոր [SQL միացում](https://learn.microsoft.com/en-us/dotnet/api/microsoft.data.sqlclient.sqlconnection) դեպի տվյալների պահոց։ |
| [CreateCommand(TimeoutType)](Methods/CreateCommand.md) | Ստեղծում է [SqlCommand](https://learn.microsoft.com/en-us/dotnet/api/microsoft.data.sqlclient.sqlcommand), և անմիջապես լրացնում է [CommandTimeout](https://learn.microsoft.com/en-us/dotnet/api/microsoft.data.sqlclient.sqlcommand.commandtimeout) ըստ օգտագործողի դրույթներում սահմանված հացման առավելագույն ժամանակի։ |
| [CreateReadOnlyConnection(bool)](Methods/CreateReadOnlyConnection.md) | Ստեղծում է միայն կարդալու իրավասությամբ լրացուցիչ SQL միացում դեպի հիմնական տվյալների պահոց։ |
| [GetApproximateServerDate()](Methods/GetApproximateServerDate.md) | Վերադարձնում է SQL սերվիսի ընթացիկ ամսաթիվը/ժամը որոշակի շեղման հավանականությամբ։ |
| [GetServerDate()](Methods/GetServerDate.md) | Վերադարձնում է SQL սերվիսի ընթացիկ ամսաթիվը/ժամը կանչելով SQL-ի [GetDate](https://learn.microsoft.com/en-us/sql/t-sql/functions/getdate-transact-sql) ֆունկցիան։ |
| [RollBackTrans()](Methods/RollBackTrans.md) | [Հետարկում է](https://learn.microsoft.com/en-us/sql/t-sql/language-elements/rollback-transaction-transact-sql) SQL տրանզակցիան։ |
| [RollBackTransAsync()](Methods/RollBackTransAsync.md) | [Հետարկում է](https://learn.microsoft.com/en-us/sql/t-sql/language-elements/rollback-transaction-transact-sql) SQL տրանզակցիան։ |
| [SetIsolationLevel(IsolationLevel)](Methods/SetIsolationLevel.md) | [Փոխում է բաց տրազակցիայի մեկուսացման մակարդակը](https://learn.microsoft.com/en-us/sql/t-sql/statements/set-transaction-isolation-level-transact-sql)։ |
| [SetIsolationLevelAsync(IsolationLevel)](Methods/SetIsolationLevelAsync.md) | [Փոխում է բաց տրազակցիայի մեկուսացման մակարդակը](https://learn.microsoft.com/en-us/sql/t-sql/statements/set-transaction-isolation-level-transact-sql)։ |
| [TryAppLock(string, string, string, string)](Methods/TryAppLock.md) | Ստեղծում է SQL արգելափակում (lock) տրված անունով ռեսուրսի վրա և վերադարձնում է արժեք, որը ցույց է տալիս արդյոք արգելափակման տեղադրումը հաջողվել է, թե ոչ։ |

## Հատկություններ

| Անվանում | Նկարագրություն |
|----------|----------------|
| [AllowSnapshotIsolation](Properties/AllowSnapshotIsolation.md) | Ցույց է տալիս, արդյոք թույլատված է հիմնական տվյալների պահոցում Snapshot [մեկուսացման մակարդակը](https://learn.microsoft.com/en-us/sql/t-sql/statements/set-transaction-isolation-level-transact-sql), տվյալների աղբյուրի հարցումների [կատարման համար](Properties/AllowSnapshotIsolation.md)։ |   
| [Connection](Properties/Connection.md) | Վերադարձնում է բաց [SQL միացումը](https://learn.microsoft.com/en-us/dotnet/api/microsoft.data.sqlclient.sqlconnection) դեպի տվյալների պահոց։ |
| [CurrentIsolationLevel](Properties/CurrentIsolationLevel.md) | Վերադարձնում է տրանզակցիաների կատարման ընթացիկ [մեկուսացման մակարդակը](https://learn.microsoft.com/en-us/dotnet/api/system.data.isolationlevel)։ |
| [Database](Properties/Database.md) | Վերադարձնում է ընթացիկ տվյալների պահոցի անունը: |
| [ReadOnly](Properties/ReadOnly.md) | Ցույց է տալիս, արդյոք բաց SQL միացումը միայն կարդալու իրավասությամբ է, թե ոչ։ |
| [Server](Properties/Server.md) | Վերադարձնում է SQL սերվերի անունը: |
| [TransDeferred](Properties/TransDeferred.md) | Վերադարձնում կամ նշանակում է Fact տիպի օբյեկտների տվյալների պահոցում հետաձգված գրանցման հայտանիշը։ |