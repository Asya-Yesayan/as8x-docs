---
title: "LiteDocumentService սերվիս"
---

## Ներածություն

LiteDocumentService դասը նախատեսված է LiteDocument տիպի փաստաթղթերը տվյալների պահոցից բեռնելու, քեշում պահելու և քեշից կարդալու համար։

## Մեթոդներ

| Անվանում | Նկարագրություն |
|----------|----------------|
| [ClearCache()](LiteDocumentService/ClearCache.md) | Հեռացնում է բոլոր փաստաթղթերը քեշից։ |
| [Load(int, bool, bool, bool)](LiteDocumentService/Load.md#litedocumentserviceloadint-bool-bool-bool-մեթոդ) | Բեռնում է փաստաթուղթը տվյալների պահոցից ըստ փաստաթղթի ներքին նույնականացման համարի։ |
| [Load(IEnumerable&lt;int&gt;)](LiteDocumentService/Load.md#litedocumentserviceloadienumerable-bool-մեթոդ) | Բեռնում է նշված ներքին նույնականացման համարներով (isn-ներով) փաստաթղթերը հիմնական տվյալների պահոցից և վերադարձնում Dictionary, որտեղ բանալին փաստաթղթի isn-ն է, իսկ արժեքը՝ տվյալ փաստաթուղթը։ |
| [LoadDocumentsGrids(List&lt;LiteDocument&gt;, bool)](LiteDocumentService/LoadDocumentsGrids.md) | Բեռնում է նշված փաստաթղթերի աղյուսակները տվյալների պահոցից։ |
| [LoadFromFolder(string, string, bool)](LiteDocumentService/LoadFromFolder.md) | Բեռնում է փաստաթուղթը տվյալների պահոցից ըստ փաստաթուղթը պարունակող թղթապանակի ներքին անվան և թղթապանակի տարրի կոդի։ |
| [LoadGrids(LiteDocument, bool)](LiteDocumentService/LoadGrids.md) | Բեռնում է փաստաթղթի աղյուսակները տվյալների պահոցից և ավելացնում նշված փաստաթղթում։ |
| [LookUpInCache(int, TimeSpan, Ref<bool>, bool)](LiteDocumentService/LookUpInCache.md#litedocumentservicelookupincacheint-timespan-ref-bool-մեթոդ) | Փնտրում է փաստաթուղթը քեշում ըստ փաստաթղթի ներքին նույնականացման համարի և վերադարձնում։ |
| [LookUpInCache(string, string, TimeSpan, Ref&lt;bool&gt;)](LiteDocumentService/LookUpInCache.md#litedocumentservicelookupincachestring-string-timespan-ref-մեթոդ) | Փնտրում է փաստաթուղթը քեշում ըստ փաստաթուղթը պարունակող թղթապանակի ներքին անվան և թղթապանակի տարրի կոդի և վերադարձնում։ |
| [RemoveFromCache(int)](LiteDocumentService/RemoveFromCache.md#litedocumentserviceremovefromcacheint-մեթոդ) | Հեռացնում է փաստաթուղթը քեշից՝ ըստ ներքին նույնականացման համարի։ |
| [RemoveFromCache(string)](LiteDocumentService/RemoveFromCache.md#litedocumentserviceremovefromcachestring-մեթոդ) | Հեռացնում է նշված տեսակի բոլոր փաստաթղթերը քեշից։ |

<!-- ### LoadIntoCache

```c#
public virtual Task<LiteDocument> LoadIntoCache(int isn,
                                                bool throwExceptionIfDeleted = true,
                                                Ref<bool> isRefreshed = null,
                                                bool lookInArc = true)
```

Բեռնում է փաստաթուղթը տվյալների պահոցից ըստ փաստաթղթի ներքին նույնականացման համարի և ավելացնում քեշում։

**Պարամետրեր**

* `isn` - Բեռնվող փաստաթղթի ներքին նույնականացման համարը։
* `throwExceptionIfDeleted` - Պահանջվող փաստաթղթի հեռացված լինելու դեպքում սխալի գեներացման հայտանիշ։ 
* `isRefreshed` - Ցույց է տալիս, արդյոք մեթոդի կանչի արդյունքում փաստաթուղթը բեռնվել է տվյալների պահոցից և թարմացվել քեշում, թե ոչ։ 
* `lookInArc` - Արխիվացված փաստաթղթի բեռնման հայտանիշ։ **true** արժեքի դեպքում փաստաթուղթը հիմնական պահոցում չգտնելու դեպքում փորձում է բեռնել նաև արխիվային տվյալների պահոցից։  -->