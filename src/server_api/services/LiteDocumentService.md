---
title: "LiteDocumentService սերվիս"
---

## Ներածություն

LiteDocumentService դասը նախատեսված է LiteDocument տիպի փաստաթղթերը տվյալների պահոցից բեռնելու, քեշում պահելու և քեշից կարդալու համար։

## Մեթոդներ

| Անվանում | Նկարագրություն |
|----------|----------------|
| [ClearCache()](LiteDocumentService/Methods/ClearCache.md) | Հեռացնում է բոլոր փաստաթղթերը քեշից։ |
| [Load(int, bool, bool, bool)](../../controllers/Document/Methods/Load.md) | Բեռնում է փաստաթուղթը տվյալների պահոցից ըստ փաստաթղթի ներքին նույնականացման համարի։ |
| [Load(IEnumerable&lt;int&gt;)](../../controllers/Document/Methods/Load.md) | Բեռնում է նշված ներքին նույնականացման համարներով (isn-ներով) փաստաթղթերը հիմնական տվյալների պահոցից և վերադարձնում Dictionary, որտեղ բանալին փաստաթղթի isn-ն է, իսկ արժեքը՝ տվյալ փաստաթուղթը։ |
| [LoadDocumentsGrids(List&lt;LiteDocument&gt;, bool)](LiteDocumentService/LoadDocumentsGrids.md) | Բեռնում է նշված փաստաթղթերի աղյուսակները տվյալների պահոցից։ |
| [LoadFromFolder(string, string, bool)](IDocumentService/Methods/LoadFromFolder.md) | Բեռնում է փաստաթուղթը տվյալների պահոցից ըստ փաստաթուղթը պարունակող թղթապանակի ներքին անվան և թղթապանակի տարրի կոդի։ |
| [LoadGrids(LiteDocument, bool)](../definitions/document/Methods/LoadGrids.md) | Բեռնում է փաստաթղթի աղյուսակները տվյալների պահոցից և ավելացնում նշված փաստաթղթում։ |
| [LoadGrids(List&lt;LiteDocument&gt;, bool)](../definitions/document/Methods/LoadGrids.md) | Բեռնում է նշված փաստաթղթերի աղյուսակները տվյալների պահոցից։ |
| [LookUpInCache(int, TimeSpan, Ref&lt;bool&gt;, bool)](LiteDocumentService/Methods/LookUpInCache.md) | Փնտրում է փաստաթուղթը քեշում ըստ փաստաթղթի ներքին նույնականացման համարի և վերադարձնում։ |
| [LookUpInCache(string, string, TimeSpan, Ref&lt;bool&gt;)](LiteDocumentService/Methods/LookUpInCache.md) | Փնտրում է փաստաթուղթը քեշում ըստ փաստաթուղթը պարունակող թղթապանակի ներքին անվան և թղթապանակի տարրի կոդի և վերադարձնում։ |
| [RemoveFromCache(int)](LiteDocumentService/Methods/RemoveFromCache.md) | Հեռացնում է փաստաթուղթը քեշից՝ ըստ ներքին նույնականացման համարի։ |
| [RemoveFromCache(string)](LiteDocumentService/Methods/RemoveFromCache.md) | Հեռացնում է նշված տեսակի բոլոր փաստաթղթերը քեշից։ |

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
