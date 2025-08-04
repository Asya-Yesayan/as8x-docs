---
title: DataSource.LongExecuteAsync(P, HashSet<string>, string, bool, CancellationToken, TimeSpan?) մեթոդ
---

```c#
public Task<DataSourceResult<R>> LongExecuteAsync(P param, HashSet<string> columns = default, 
    string isn = null, bool handleEvents = false, 
    CancellationToken cancellationToken = default, TimeSpan? timeout = null)
```

Աշխատացնում է տվյալների աղբյուրը, վերադարձնում ստացված տողերի ցուցակը և կատարման ընթացքում առաջացած սխալների մանրամասն տեղեկությունը։

Այս մեթոդը անհրաժեշտ է օգտագործել այն դեպքերում, երբ կատարման ժամանակը գերազանցում է 180 վայրկյանը կամ անհայտ է։

**Պարամետրեր**

* `R` - Տվյալների աղբյուրի տողը նկարագրող դասի օբյեկտ՝ `ExtendableRow` դասի ժառանգ։
* `param` - Տվյալների աղբյուրի պարամետրերը նկարագրող դասի օբյեկտ՝ `ParameterCollection` դասի ժառանգ։
* `columns` - Տվյալների աղբյուրի վերադարձվող սյուների անունների ցուցակ։ 
  Արժեք չփոխանցելու դեպքում կատարման արդյունքում վերադարձվելու են բոլոր սյուները։
* `isn` - Տվյալների աղբյուրի նշված նույնականացուցիչով ֆիլտրման արժեք։ 
  Տե՛ս [IsUpdatable](../../../server_api/definitions/ds/IsUpdatable.md)։
* `cancellationToken` - Ընդհատման օբյեկտ:
* `timeout` - Տվյալների աղբյուրի աշխատանքի առավելագույն ժամանակը։ 
  Արժեք չփոխանցելու դեպքում առավելագույն ժամանակ համարվելու է 180 վայրկյան (3 րոպե)։

**Oրինակ**

- [Տվյալների աղբյուրի և ընդլայնման կլիենտից կանչի օրինակ ոչ տիպիզացված եղանակով](../../examples/DataSource.md#օրինակ-2)
