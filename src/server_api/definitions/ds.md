---
title: DataSource նկարագրություն
---

## Ներածություն

Տվյալների պահոցից աղյուսակային տեսքով տվյալներ կարդալու և ցույց տալու համար նկարագրվում է տվյալների աղբյուր։

8X համակարգում տվյալների աղբյուր նկարագրելու համար հարկավոր է ունենալ
* .as ընդլայնմամբ ֆայլ սկրիպտերում [DATA](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Defs/Data.html) նկարագրությամբ։ 
  Այն անհրաժեշտ է ներմուծել տվյալների բազա `Syscon` գործիքի միջոցով։
* .cs ընդլայնմամբ ֆայլ, որը պարունակում է սերվերում աշխատող տրամաբանությունը։

## Մեթոդներ

| Անվանում | Նկարագրություն |
|----------|----------------|
| [SupportsSnapshotIsolation](ds/Properties/SupportsSnapshotIsolation.md) | Վերադարձնում է տվյալների աղբյուրի հարցման կատարման իզոլյացիայի մակարդակը [snapshot](https://learn.microsoft.com/en-us/dotnet/framework/data/adonet/sql/snapshot-isolation-in-sql-server) է, թե [ReadCommitted](https://learn.microsoft.com/en-us/dotnet/api/system.data.isolationlevel#fields): |
| [Execute(P, HashSet&lt;string&gt;, IExtender, CancellationToken)](dpr/Methods/Execute.md) | Կատարում է տվյալների աղբյուրը: |
| [AfterDataReaderClose(DataSourceArgs&lt;P&gt;, CancellationToken)](ds/Methods/AfterDataReaderClose.md) | Մեթոդը կանչվում է միջուկի կողմից SQL հարցման կատարման ավարտից հետո, երբ [SqlDataReader](https://learn.microsoft.com/en-us/dotnet/api/microsoft.data.sqlclient.sqldatareader)-ը արդեն փակ է: |
| [AfterDataReaderClose(DataSourceArgs&lt;P&gt;, R)](ds/Methods/AfterDataReaderClose.md) | Մեթոդը կանչվում է միջուկի կողմից SQL հարցման կատարման ավարտից հետո ամեն մի հաշվարկված տողի համար, երբ [SqlDataReader](https://learn.microsoft.com/en-us/dotnet/api/microsoft.data.sqlclient.sqldatareader)-ը արդեն փակ է: |
| [AfterExecuteSQLCommand(DataSourceArgs&lt;P&gt;, SqlDataReader)](ds/Methods/AfterExecuteSQLCommand.md) | Մեթոդը կանչվում է միջուկի կողմից SQL հարցման սկսելուց հետո, երբ [SqlDataReader](https://learn.microsoft.com/en-us/dotnet/api/microsoft.data.sqlclient.sqldatareader)-ը արդեն բաց է: |
| [BeforeExecuteSQLCommand(DataSourceArgs&lt;P&gt;, CancellationToken)](ds/Methods/BeforeExecuteSQLCommand.md) | Մեթոդը կանչվում է միջուկի կողմից [MakeSQLCommand(DataSourceArgs&lt;P&gt;, CancellationToken)](ds/Methods/MakeSQLCommand.md) մեթոդի ավարտից հետո, Նախատեսված է տվյալների աղբյուրի կատարումից առաջ նախապատրաստական աշխատանքներ կատարելու համար: |
| [FillData(DataSourceArgs&lt;P&gt;, CancellationToken)](ds/Methods/FillData.md) | Մեթոդը կանչվում է միջուկի կողմից array-based տվյալների աղբյուրի դեպքում։ |
| [MakeSQLCommand(DataSourceArgs&lt;P&gt;, CancellationToken)](ds/Methods/MakeSQLCommand.md) | Մեթոդը կանչվում է միջուկի կողմից, այն հարկավոր է մշակել և վերադարձնել sql-based տվյալների աղբյուրի sql հարցման կատարող [SqlCommand](https://learn.microsoft.com/en-us/dotnet/api/microsoft.data.sqlclient.sqlcommand)-ը։ |
| [ProcessRow(DataSourceArgs&lt;P&gt;, R, SqlDataReader)](ds/Methods/ProcessRow.md) | Մեթոդը կանչվում է միջուկի կողմից [MakeSQLCommand(DataSourceArgs&lt;P&gt;, CancellationToken)](ds/Methods/MakeSQLCommand.md) մեթոդում ձևավորված SQL հարցման կատարման ընթացքում, երբ հարցման տվյալները կարդացող [SqlDataReader](https://learn.microsoft.com/en-us/dotnet/api/microsoft.data.sqlclient.sqldatareader)-ը դեռ բաց է: |

## Հատկություններ

| Անվանում | Նկարագրություն |
|----------|----------------|
| [ArmenianCaption](dpr/Properties/ArmenianCaption.md) | Վերադարձնում է տվյալների աղբյուրի հայերեն անվանումը ANSI կոդավորմամբ: |
| [EnglishCaption](dpr/Properties/EnglishCaption.md) | Վերադարձնում է տվյալների աղբյուրի անգլերեն անվանումը: |
| [Name](dpr/Properties/Name.md) | Վերադարձնում է տվյալների աղբյուրի ներքին անունը: |
| [Progress](document/Properties/Progress.md) | Վերադարձնում է տվյալների աղբյուրի կատարման պրոգրեսը: |
| [QueryTimeOut](ds/Properties/QueryTimeOut.md) | Վերադարձնում կամ արժեքավորում է տվյալների աղբյուրի [MakeSQLCommand(DataSourceArgs&lt;P&gt;, CancellationToken)](ds/Methods/MakeSQLCommand.md)-ում ձևավորված Sql հարցման կատարման առավելագույն ժամանակը (վայրկյաններով): |
| [Rows](ds/Properties/Rows.md) | Վերադարձնում կամ նշանակում է հաշվարկվող տվյալների աղբյուրի տողերի ցուցակը։ |
| [Schema](ds/Properties/Schema.md) | Վերադարձնում կամ նշանակում է տվյալների աղբյուրի [սխեման](ds/Properties/Schema.md), որը պարունակում է ինֆորմացիա տվյալների աղբյուրի սյուների ու պարամետրերի հատկությունների մասին։ |
| [AfterDataReaderCloseMode](ds/Properties/AfterDataReaderCloseMode.md) | - Մեկ կանչ բոլոր տողերի մշակման համար։ |
| [CommandBehaviorFlag](ds/Properties/CommandBehaviorFlag.md) | Այս հատկության միջոցով ձևավորվում է [MakeSQLCommand(DataSourceArgs&lt;P&gt;, CancellationToken)](ds/Methods/MakeSQLCommand.md)-ում ձևավորված հարցման [ExecuteReaderAsync](https://learn.microsoft.com/en-us/dotnet/api/microsoft.data.sqlclient.sqlcommand.executereaderasync#microsoft-data-sqlclient-sqlcommand-executereaderasync(system-data-commandbehavior-system-threading-cancellationtoken))-ի մեթոդով կատարման ժամանակ `behavior` պարամետրի արժեքը։ |
| [IsSQLBased](ds/Properties/IsSQLBased.md) | Որոշում է տվյալների աղբյուրի տեսակը (sql-based, array-based): |
| [IsUpdatable](ds/Properties/IsUpdatable.md) | Տվյալների աղբյուրում նոր տող ավելացնելու, ջնջելու կամ թարմացնելու հնարավորությունը ապահովելու համար անհրաժեշտ է գերբեռնել այս հատկությունը՝ վերադարձնելով **true** արժեք և [MakeSQLCommand(DataSourceArgs&lt;P&gt;, CancellationToken)](ds/Methods/MakeSQLCommand.md) մեթոդի `args` պարամետրի `IsUpdate` հատկության **true** արժեքի դեպքում ձևավորվող sql հարցման տեքստում ավելացնել ֆիլտրում ըստ տվյալների աղբյուրի տողի նույննականացուցիչի՝ `args.ISN`։ |
| [SupportPrepareExecutionPhase](ds/Properties/SupportPrepareExecutionPhase.md) | Ցույց է տալիս տվյալների աղբյուրի պրոգրեսով կատարումը սատարում է «Նախապատրաստում» փուլը, թե ոչ: |