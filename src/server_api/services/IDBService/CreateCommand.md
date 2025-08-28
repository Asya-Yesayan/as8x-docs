---
title: IDBService.CreateCommand(TimeoutType) մեթոդ
---

## Նկարագիր

**Համարժեքը 4x-ում՝** AsRdoConnection.CreateSqlCommand

**Դաս՝** [IDBService](../IDBService.md)

```c#
public SqlCommand CreateCommand(TimeoutType timeoutType = TimeoutType.QueryTimeout);
```

Ստեղծում է [SqlCommand](https://learn.microsoft.com/en-us/dotnet/api/microsoft.data.sqlclient.sqlcommand) դասի օբյեկտ՝ sql հարցման կատարման համար, և լրացնում է [CommandTimeout](https://learn.microsoft.com/en-us/dotnet/api/microsoft.data.sqlclient.sqlcommand.commandtimeout) հատկության արժեքը `timeoutType` պարամետրի միջոցով, որով սահմանվում է հարցման կատարման առավելագույն ժամանակը։

**IDBService.Connection.CreateCommand**-ի միջոցով հարցումը կատարելու դեպքում որպես հարցման կատարման առավելագույն ժամանակ ([CommandTimeout](https://learn.microsoft.com/en-us/dotnet/api/microsoft.data.sqlclient.sqlcommand.commandtimeout)) լռությամբ սահմանվում է 30 վայրկյանը։

**Պարամետրեր**

- `timeoutType` - [SQL հարցման կատարման առավելագույն ժամանակի տիպը](../../types/TimeoutType.md)։ 

<!-- ### CreateConnectionString

```c#
public string CreateConnectionString(string sqlServer, string dbName, string login, string password, bool encrypt,
                                     bool pooling = true, string connectionName = Constants.DBConnections.Main,
                                     int? maxPoolSize = null, bool withoutDecrypting = false);
```

Ստեղծում է SQL միացման տողը ([Connection string](https://code-maze.com/aspnetcore-how-to-properly-set-connection-strings/))։
Օգտագործում է [SqlConnectionStringBuilder](https://learn.microsoft.com/en-us/dotnet/api/microsoft.data.sqlclient.sqlconnectionstringbuilder) և փոխանցում է ֆունկցիայի պարամետրերը համապատասխան հատկություններին։

**Պարամետրեր**
* `sqlServer` - Սերվերի անունը։
* `dbName` - Սերվերում տվյալների պահոցի անուն։
* `login` - Օգտագործողի մուտքանունը։
* `password` - Օգտագործողի գաղտնաբառը։
* `encrypt` - Նշում է, թե արդյոք տվյալների պահոցին միացումը ծածկագրվի, թե ոչ։
* `pooling` - Օգտագործել միացումների քեշ, թե ոչ։
* `connectionName` - Ծրագրի անունը։ 
* `maxPoolSize` - Միացումների քեշի առավելագույն քանակ։
* `withoutDecrypting` - Նշվում է որ պետք չէ գաղտնաբառը ապակոդավորվի։ -->
