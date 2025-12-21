---
title: DataSource դաս
---

## Ներածություն

DataSource դասը նախատեսված է կլիենտական ծրագրից տվյալների աղբյուրը աշխատացնելու և արդյունքը վերադարձնելու ֆունկցիոնալությունը ապահովելու համար։

Տվյալների աղբյուրը աշխատում է հերթագրման միջոցով։
Տե՛ս [Ասինխրոն մշակում կիրառությունների սերվերի վրա](../../Architecture/appserver_async.md):

Օգտագործման [օրինակներ](../examples/DataSource.md)։

## Մեթոդներ

| Անվանում | Նկարագրություն |
|----------|----------------|
| [ExecuteAsync(P, HashSet&lt;string&gt;, string, CancellationToken, TimeSpan?)](DataSource/Methods/ExecuteAsync.md) | Աշխատացնում է տվյալների աղբյուրը, վերադարձնում ստացված տողերի ցուցակը և կատարման ընթացքում առաջացած սխալների մանրամասն տեղեկությունը։ |
| [LoadDefinitionAsync(string, CancellationToken)](DataSource/Methods/LoadDefinitionAsync.md) | Բեռնում է տվյալների աղբյուրի նկարագրությունը և վերագրում [Definition](DataSource/Properties/Definition.md) հատկությանը։ |
| [LongExecuteAsync(P, HashSet&lt;string&gt;, string, bool, CancellationToken, TimeSpan?)](DataSource/Methods/LongExecuteAsync.md) | Աշխատացնում է տվյալների աղբյուրը, վերադարձնում ստացված տողերի ցուցակը և կատարման ընթացքում առաջացած սխալների մանրամասն տեղեկությունը։ |

## Հատկություններ

| Անվանում | Նկարագրություն |
|----------|----------------|
| [Client](DataSource/Properties/Client.md) | Վերադարձնում կամ նշանակում է [ApiClient](../types/ApiClient.md) դասի օբյեկտ, որը նախատեսված է տվյալների աղբյուրի կատարման ընթացքում կլիենտից դեպի սերվեր անհրաժեշտ հարցումներ կատարելու համար։ |
| [Definition](DataSource/Properties/Definition.md) | Վերադարձնում կամ նշանակում է տվյալների աղբյուրի նկարագրությունը, որը պարունակում է տվյալների աղբյուրի, սյուների և պարամետրերի հատկությունները։ |
| [ExtenderSchema](DataSource/Properties/ExtenderSchema.md) | Վերադարձնում կամ նշանակում է [տվյալների աղբյուրի ընդլայնման](../../extensions/Definitions/ds_extender.md) նկարագրությունը, որը պարունակում է ընդլայնման ներքին անունը, պարամետրերի ու սյուների հատկությունները։ |
| [FetchSize](DataSource/Properties/FetchSize.md) | Տվյալների աղբյուրի կատարման արդյունքում վերադարձվող տողերը սերվիսից կլիենտ բեռնվում են կտոր առ կտոր։ |
| [FirstFetchSize](DataSource/Properties/FirstFetchSize.md) | Տվյալների աղբյուրի կատարման արդյունքում վերադարձվող տողերը սերվիսից կլիենտ բեռնվում են կտոր առ կտոր։ |
| [EncodeResultUnicode](DataSource/Properties/EncodeResultUnicode.md) | Վերադարձնում կամ նշանակում է տվյալների աբյուրի արդյունքների յունիկոդ կոդավորմամբ լինելը։ |