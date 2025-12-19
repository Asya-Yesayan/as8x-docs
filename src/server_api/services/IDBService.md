---
title: "IDBService սերվիս"
---

## Ներածություն

IDBService դասը նախատեսված է տվյալների պահոցի հետ աշխատանքը ապահովելու համար։
Տալիս է SQL սերվերին միացում, բացում/փակում է տրանզակցիաներ։

## Մեթոդներ

| Անվանում | Նկարագրություն |
|----------|----------------|
| [ActiveTrans()](IDBService/Methods/ActiveTrans.md) | Ստուգում է ակտիվ տրանզակցիայի առկայությունը։ |
| [AppLock(string, string, string, string, int, string)](IDBService/Methods/AppLock.md) | Ստեղծում է SQL արգելափակում (lock) տրված անունով ռեսուրսի վրա։ |
| [BeginSqlServerDistributedTransaction()](IDBService/Methods/BeginSqlServerDistributedTransaction.md) | Բացում է [բաշխված տրանզակցիա](https://learn.microsoft.com/en-us/sql/t-sql/language-elements/begin-distributed-transaction-transact-sql)։ |
| [BeginSqlServerDistributedTransactionAsync()](IDBService/Methods/BeginSqlServerDistributedTransactionAsync.md) | Բացում է [բաշխված տրանզակցիա](https://learn.microsoft.com/en-us/sql/t-sql/language-elements/begin-distributed-transaction-transact-sql)։ |
| [BeginTrans()](IDBService/Methods/BeginTrans.md) | [Սկսում է](https://learn.microsoft.com/en-us/sql/t-sql/language-elements/begin-transaction-transact-sql) SQL տրանզակցիա։ |
| [BeginTransAsync()](IDBService/Methods/BeginTransAsync.md) | [Սկսում է](https://learn.microsoft.com/en-us/sql/t-sql/language-elements/begin-transaction-transact-sql) SQL տրանզակցիա։ |
| [CommitTrans()](IDBService/Methods/CommitTrans.md) | [Ավարտում է](https://learn.microsoft.com/en-us/sql/t-sql/language-elements/commit-transaction-transact-sql) SQL տրանզակցիան։ |
| [CommitTransAsync()](IDBService/Methods/CommitTransAsync.md) | [Ավարտում է](https://learn.microsoft.com/en-us/sql/t-sql/language-elements/commit-transaction-transact-sql) SQL տրանզակցիան։ |
| [CreateAdditionalConnection(bool, string, bool)](IDBService/Methods/CreateAdditionalConnection.md) | Բացում և վերադարձնում է նոր [SQL միացում](https://learn.microsoft.com/en-us/dotnet/api/microsoft.data.sqlclient.sqlconnection) դեպի տվյալների պահոց։ |
| [CreateCommand(TimeoutType)](IDBService/Methods/CreateCommand.md) | Ստեղծում է [SqlCommand](https://learn.microsoft.com/en-us/dotnet/api/microsoft.data.sqlclient.sqlcommand), և անմիջապես լրացնում է [CommandTimeout](https://learn.microsoft.com/en-us/dotnet/api/microsoft.data.sqlclient.sqlcommand.commandtimeout) ըստ օգտագործողի դրույթներում սահմանված հացման առավելագույն ժամանակի։ |
| [CreateReadOnlyConnection(bool)](IDBService/Methods/CreateReadOnlyConnection.md) | Ստեղծում է միայն կարդալու իրավասությամբ լրացուցիչ SQL միացում դեպի հիմնական տվյալների պահոց։ |
| [GetApproximateServerDate()](IDBService/Methods/GetApproximateServerDate.md) | Վերադարձնում է SQL սերվիսի ընթացիկ ամսաթիվը/ժամը որոշակի շեղման հավանականությամբ։ |
| [GetServerDate()](IDBService/Methods/GetServerDate.md) | Վերադարձնում է SQL սերվիսի ընթացիկ ամսաթիվը/ժամը կանչելով SQL-ի [GetDate](https://learn.microsoft.com/en-us/sql/t-sql/functions/getdate-transact-sql) ֆունկցիան։ |
| [RollBackTrans()](IDBService/Methods/RollBackTrans.md) | [Հետարկում է](https://learn.microsoft.com/en-us/sql/t-sql/language-elements/rollback-transaction-transact-sql) SQL տրանզակցիան։ |
| [RollBackTransAsync()](IDBService/Methods/RollBackTransAsync.md) | [Հետարկում է](https://learn.microsoft.com/en-us/sql/t-sql/language-elements/rollback-transaction-transact-sql) SQL տրանզակցիան։ |
| [SetIsolationLevel(IsolationLevel)](IDBService/Methods/SetIsolationLevel.md) | [Փոխում է բաց տրազակցիայի մեկուսացման մակարդակը](https://learn.microsoft.com/en-us/sql/t-sql/statements/set-transaction-isolation-level-transact-sql)։ |
| [SetIsolationLevelAsync(IsolationLevel)](IDBService/Methods/SetIsolationLevelAsync.md) | [Փոխում է բաց տրազակցիայի մեկուսացման մակարդակը](https://learn.microsoft.com/en-us/sql/t-sql/statements/set-transaction-isolation-level-transact-sql)։ |
| [TryAppLock(string, string, string, string)](IDBService/Methods/TryAppLock.md) | Ստեղծում է SQL արգելափակում (lock) տրված անունով ռեսուրսի վրա և վերադարձնում է արժեք, որը ցույց է տալիս արդյոք արգելափակման տեղադրումը հաջողվել է, թե ոչ։ |

## Հատկություններ

| Անվանում | Նկարագրություն |
|----------|----------------|
| [AllowSnapshotIsolation](IDBService/Properties/AllowSnapshotIsolation.md) | Ցույց է տալիս, արդյոք թույլատված է հիմնական տվյալների պահոցում Snapshot [մեկուսացման մակարդակը](https://learn.microsoft.com/en-us/sql/t-sql/statements/set-transaction-isolation-level-transact-sql), տվյալների աղբյուրի հարցումների [կատարման համար](IDBService/Properties/AllowSnapshotIsolation.md)։ |   
| [Connection](IDBService/Properties/Connection.md) | Վերադարձնում է բաց [SQL միացումը](https://learn.microsoft.com/en-us/dotnet/api/microsoft.data.sqlclient.sqlconnection) դեպի տվյալների պահոց։ |
| [CurrentIsolationLevel](IDBService/Properties/CurrentIsolationLevel.md) | Վերադարձնում է տրանզակցիաների կատարման ընթացիկ [մեկուսացման մակարդակը](https://learn.microsoft.com/en-us/dotnet/api/system.data.isolationlevel)։ |
| [Database](IDBService/Properties/Database.md) | Վերադարձնում է ընթացիկ տվյալների պահոցի անունը: |
| [ReadOnly](IDBService/Properties/ReadOnly.md) | Ցույց է տալիս, արդյոք բաց SQL միացումը միայն կարդալու իրավասությամբ է, թե ոչ։ |
| [Server](IDBService/Properties/Server.md) | Վերադարձնում է SQL սերվերի անունը: |
| [TransDeferred](IDBService/Properties/TransDeferred.md) | Վերադարձնում կամ նշանակում է Fact տիպի օբյեկտների տվյալների պահոցում հետաձգված գրանցման հայտանիշը։ |