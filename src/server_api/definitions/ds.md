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
| [SupportsSnapshotIsolation](ds/SupportsSnapshotIsolation.md) | Վերադարձնում է տվյալների աղբյուրի հարցման կատարման իզոլյացիայի մակարդակը [snapshot](https://learn.microsoft.com/en-us/dotnet/framework/data/adonet/sql/snapshot-isolation-in-sql-server) է, թե [ReadCommitted](https://learn.microsoft.com/en-us/dotnet/api/system.data.isolationlevel#fields): |
| [Execute](ds/Execute.md) | * `stoppingToken` - ընդհատման օբյեկտը։ |
| [AfterDataReaderClose](ds/AfterDataReaderClose.md) | Մեթոդը կանչվում է միջուկի կողմից SQL հարցման կատարման ավարտից հետո, երբ [SqlDataReader](https://learn.microsoft.com/en-us/dotnet/api/microsoft.data.sqlclient.sqldatareader)-ը արդեն փակ է: |
| [AfterDataReaderClose](ds/AfterDataReaderClose1.md) | Մեթոդը կանչվում է միջուկի կողմից SQL հարցման կատարման ավարտից հետո ամեն մի հաշվարկված տողի համար, երբ [SqlDataReader](https://learn.microsoft.com/en-us/dotnet/api/microsoft.data.sqlclient.sqldatareader)-ը արդեն փակ է: |
| [AfterExecuteSQLCommand](ds/AfterExecuteSQLCommand.md) | Մեթոդը կանչվում է միջուկի կողմից SQL հարցման սկսելուց հետո, երբ [SqlDataReader](https://learn.microsoft.com/en-us/dotnet/api/microsoft.data.sqlclient.sqldatareader)-ը արդեն բաց է: |
| [BeforeExecuteSQLCommand](ds/BeforeExecuteSQLCommand.md) | Մեթոդը կանչվում է միջուկի կողմից [MakeSqlCommand](ds/MakeSqlCommand.md) մեթոդի ավարտից հետո, Նախատեսված է տվյալների աղբյուրի կատարումից առաջ նախապատրաստական աշխատանքներ կատարելու համար: |
| [FillData](ds/FillData.md) | Մեթոդը կանչվում է միջուկի կողմից array-based տվյալների աղբյուրի դեպքում։ |
| [MakeSQLCommand](ds/MakeSQLCommand.md) | Մեթոդը կանչվում է միջուկի կողմից, այն հարկավոր է մշակել և վերադարձնել sql-based տվյալների աղբյուրի sql հարցման կատարող [SqlCommand](https://learn.microsoft.com/en-us/dotnet/api/microsoft.data.sqlclient.sqlcommand)-ը։ |
| [ProcessRow](ds/ProcessRow.md) | Մեթոդը կանչվում է միջուկի կողմից [MakeSqlCommand](ds/MakeSQLCommand.md) մեթոդում ձևավորված SQL հարցման կատարման ընթացքում, երբ հարցման տվյալները կարդացող [SqlDataReader](https://learn.microsoft.com/en-us/dotnet/api/microsoft.data.sqlclient.sqldatareader)-ը դեռ բաց է: |

## Հատկություններ

| Անվանում | Նկարագրություն |
|----------|----------------|
| [ArmenianCaption](ds/ArmenianCaption.md) | Վերադարձնում է տվյալների աղբյուրի հայերեն անվանումը ANSI կոդավորմամբ: |
| [EnglishCaption](ds/EnglishCaption.md) | Վերադարձնում է տվյալների աղբյուրի անգլերեն անվանումը: |
| [Name](ds/Name.md) | Վերադարձնում է տվյալների աղբյուրի ներքին անունը: |
| [Progress](ds/Progress.md) | Վերադարձնում է տվյալների աղբյուրի կատարման պրոգրեսը: |
| [QueryTimeOut](ds/QueryTimeOut.md) | Վերադարձնում կամ արժեքավորում է տվյալների աղբյուրի [MakeSqlCommand](ds/MakeSqlCommand.md)-ում ձևավորված հարցման կատարման առավելագույն ժամանակը (վայրկյաններով): |
| [Rows](ds/Rows.md) | Հաշվարկվող տվյալների աղբյուրի տողերի ցուցակը։ |
| [Schema](ds/Schema.md) | Տվյալների աղբյուրի [սխեման](../types/schema.md), որը պարունակում է ինֆորմացիա տվյալների աղբյուրի սյուների ու պարամետրերի հատկությունների մասին։ |
| [AfterDataReaderCloseMode](ds/AfterDataReaderCloseMode.md) | - Մեկ կանչ բոլոր տողերի մշակման համար։ |
| [CommandBehaviorFlag](ds/CommandBehaviorFlag.md) | Այս հատկության միջոցով ձևավորվում է [MakeSqlCommand](ds/MakeSqlCommand.md)-ում ձևավորված հարցման [ExecuteReaderAsync](https://learn.microsoft.com/en-us/dotnet/api/microsoft.data.sqlclient.sqlcommand.executereaderasync#microsoft-data-sqlclient-sqlcommand-executereaderasync(system-data-commandbehavior-system-threading-cancellationtoken))-ի մեթոդով կատարման ժամանակ `behavior` պարամետրի արժեքը։ |
| [IsSQLBased](ds/IsSQLBased.md) | - array-based (տվյալները ստացվում են այլ աղբյուրներից և ավելացվում տվյալների աղբյուրի [տողերի](ds/Rows.md) զանգվածին): |
| [IsUpdatable](ds/IsUpdatable.md) | Տվյալների աղբյուրում նոր տող ավելացնելու, ջնջելու կամ թարմացնելու հնարավորությունը ապահովելու համար անհրաժեշտ է գերբեռնել այս հատկությունը՝ վերադարձնելով **true** արժեք և [MakeSQLCommand](ds/MakeSQLCommand.md) մեթոդի `args` պարամետրի `IsUpdate` հատկության **true** արժեքի դեպքում ձևավորվող sql հարցման տեքստում ավելացնել ֆիլտրում ըստ տվյալների աղբյուրի տողի նույննականացուցիչի՝ `args.ISN`։ |
| [SupportPrepareExecutionPhase](ds/SupportPrepareExecutionPhase.md) | Ցույց է տալիս տվյալների աղբյուրի պրոգրեսով կատարումը սատարում է «Նախապատրաստում» փուլը, թե ոչ: |