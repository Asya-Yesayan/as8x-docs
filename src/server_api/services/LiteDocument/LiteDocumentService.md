---
title: "LiteDocumentService"
parent: "Սերվիսներ"
nav_order: 2
---

# LiteDocumentService սերվիս

## Ներածություն

LiteDocumentService դասը նախատեսված է LiteDocument տիպի փաստաթղթերը տվյալների պահոցից բեռնելու, քեշում պահելու և քեշից կարդալու համար։

## Մեթոդներ

| Անվանում | Նկարագրություն |
|----------|----------------|
| [ClearCache()](Methods/ClearCache.md) | Հեռացնում է բոլոր փաստաթղթերը քեշից։ |
| [Load(int, bool, bool, bool)](Methods/Load.md#litedocumentserviceloadint-bool-bool-bool-մեթոդ) | Բեռնում է փաստաթուղթը տվյալների պահոցից ըստ փաստաթղթի ներքին նույնականացման համարի։ |
| [Load(IEnumerable&lt;int&gt;)](Methods/Load.md#litedocumentserviceloadienumerableint-bool-bool-bool-bool-մեթոդ) | Բեռնում է նշված ներքին նույնականացման համարներով (isn-ներով) փաստաթղթերը հիմնական տվյալների պահոցից և վերադարձնում Dictionary, որտեղ բանալին փաստաթղթի isn-ն է, իսկ արժեքը՝ տվյալ փաստաթուղթը։ |
| [LoadDocumentsGrids(List&lt;LiteDocument&gt;, bool)](Methods/LoadGrids.md) | Բեռնում է նշված փաստաթղթերի աղյուսակները տվյալների պահոցից։ |
| [LoadFromFolder(string, string, bool)](Methods/LoadFromFolder.md) | Բեռնում է փաստաթուղթը տվյալների պահոցից ըստ փաստաթուղթը պարունակող թղթապանակի ներքին անվան և թղթապանակի տարրի կոդի։ |
| [LoadGrids(LiteDocument, bool)](Methods/LoadGrids.md#litedocumentserviceloadgridslistlitedocument-bool-մեթոդ) | Բեռնում է փաստաթղթի աղյուսակները տվյալների պահոցից և ավելացնում նշված փաստաթղթում։ |
| [LoadGrids(List&lt;LiteDocument&gt;, bool)](Methods/LoadGrids.md#litedocumentserviceloadgridslistlitedocument-bool-մեթոդ) | Բեռնում է նշված փաստաթղթերի աղյուսակները տվյալների պահոցից։ |
| [LookUpInCache(int, TimeSpan, Ref&lt;bool&gt;, bool)](Methods/LookUpInCache.md#litedocumentservicelookupincacheint-timespan-ref-bool-մեթոդ) | Փնտրում է փաստաթուղթը քեշում ըստ փաստաթղթի ներքին նույնականացման համարի և վերադարձնում։ |
| [LookUpInCache(string, string, TimeSpan, Ref&lt;bool&gt;)](Methods/LookUpInCache.md#litedocumentservicelookupincachestring-string-timespan-refbool-մեթոդ) | Փնտրում է փաստաթուղթը քեշում ըստ փաստաթուղթը պարունակող թղթապանակի ներքին անվան և թղթապանակի տարրի կոդի և վերադարձնում։ |
| [RemoveFromCache(int)](Methods/RemoveFromCache.md#litedocumentserviceremovefromcacheint-մեթոդ) | Հեռացնում է փաստաթուղթը քեշից՝ ըստ ներքին նույնականացման համարի։ |
| [RemoveFromCache(string)](Methods/RemoveFromCache.md#litedocumentserviceremovefromcachestring-մեթոդ) | Հեռացնում է նշված տեսակի բոլոր փաստաթղթերը քեշից։ |

<!-- ### LoadIntoCache

```c#
public virtual Task<LiteDocument> LoadIntoCache(int isn,
                                                bool throwExceptionIfDeleted = true,
                                                Ref<bool> isRefreshed = null,
                                                bool lookInArc = true)
```

Բեռնում է փաստաթուղթը տվյալների պահոցից ըստ փաստաթղթի ներքին նույնականացման համարի և ավելացնում քեշում։

**Պարամետրեր**

| Անվանում        | Տվյալների տիպ        | Լռությամբ արժեք | Նկարագրություն |
|-----------------|----------------------|----------------|----------------|
| isn             | int                  | -              | Բեռնվող փաստաթղթի ներքին նույնականացման համարը։ |
| throwExceptionIfDeleted | bool                 | true           | Պահանջվող փաստաթղթի հեռացված լինելու դեպքում սխալի գեներացման հայտանիշ։ |
| isRefreshed     | Ref<bool>            | null           | Ցույց է տալիս, արդյոք մեթոդի կանչի արդյունքում փաստաթուղթը բեռնվել է տվյալների պահոցից և թարմացվել քեշում, թե ոչ։ |
| lookInArc       | bool                 | true           | Արխիվացված փաստաթղթի բեռնման հայտանիշ։ **true** արժեքի դեպքում փաստաթուղթը հիմնական պահոցում չգտնելու դեպքում փորձում է բեռնել նաև արխիվային տվյալների պահոցից։  --> |
