---
title: "RODocumentService"
parent: "Սերվիսներ"
nav_order: 2
has_toc: false
---

# RODocumentService սերվիս

## Ներածություն

RODocumentService դասը նախատեսված է [RODocument](../../Types/RODocument.md) տիպի փաստաթղթերը տվյալների պահոցից բեռնելու, քեշում պահելու և քեշից կարդալու համար։

## Մեթոդներ

| Անվանում | Նկարագրություն |
|----------|----------------|
| [ClearCache()](Methods/ClearCache.md) | Հեռացնում է բոլոր փաստաթղթերը քեշից։ |
| [Load(int, bool, bool, bool, bool)](Methods/Load.md#rodocumentserviceloadint-bool-bool-bool-bool-մեթոդ) | Բեռնում է փաստաթուղթը պահոցից՝ ըստ ներքին նույնականացման համարի և վերադարձնում այն [RODocument](../../Types/RODocument.md) բազային դասով։ |
| [Load(int, bool, bool, bool, bool)](Methods/Load.md#rodocumentserviceloadint-bool-bool-bool-bool-մեթոդ-1) | Բեռնում է փաստաթուղթը պահոցից՝ ըստ ներքին նույնականացման համարի և վերադարձնում այն T դասով, որը հանդիսանում է [RODocument](../../Types/RODocument.md)-ի ժառանգ։ |
| [Load(IEnumerable&lt;int&gt;, bool, bool, bool, bool)](Methods/Load#rodocumentserviceloadienumerableint-bool-bool-bool-bool-մեթոդ) | Բեռնում է նշված ներքին նույնականացման համարներով (isn-ներով) փաստաթղթերը հիմնական տվյալների պահոցից և վերադարձնում Dictionary, որտեղ բանալին փաստաթղթի isn-ն է, իսկ արժեքը՝ տվյալ փաստաթուղթը։ |
| [LookUpInCache(int, bool, Ref&lt;bool&gt;, bool)](Methods/LookUpInCache.md#rodocumentservicelookupincacheint-bool-refbool-bool-մեթոդ) | Փնտրում է փաստաթուղթը քեշում ըստ փաստաթղթի ներքին նույնականացման համարի և վերադարձնում։ |
| [LookUpInCache(int, DocumentLoadSession, Ref&ltbool&gt;, bool)](Methods/LookUpInCache.md#rodocumentservicelookupincacheint-documentloadsession-refltbool-bool-մեթոդ) | Փնտրում է փաստաթուղթը քեշում ըստ փաստաթղթի ներքին նույնականացման համարի և վերադարձնում։ |
| [LookUpInCache(int, TimeSpan, Ref&lt;bool&gt;, bool)](Methods/LookUpInCache.md#rodocumentservicelookupincacheint-timespan-refbool-bool-մեթոդ) | Փնտրում է փաստաթուղթը քեշում ըստ փաստաթղթի ներքին նույնականացման համարի և վերադարձնում։ |
| [LookUpInCache(string, string, bool, DocsTableRowLoader, Ref&lt;bool&gt;)](Methods/LookUpInCache.md#rodocumentservicelookupincachestring-string-bool-docstablerowloader-refbool-մեթոդ) | Փնտրում է փաստաթուղթը քեշում ըստ փաստաթուղթը պարունակող թղթապանակի ներքին անվան և թղթապանակի տարրի կոդի և վերադարձնում։ |
| [LookUpInCache(string, string, DocumentLoadSession, DocsTableRowLoader, Ref&lt;bool&gt;)](Methods/LookUpInCache.md#rodocumentservicelookupincachestring-string-documentloadsession-docstablerowloader-refbool-մեթոդ) | Փնտրում է փաստաթուղթը քեշում ըստ փաստաթուղթը պարունակող թղթապանակի ներքին անվան և թղթապանակի տարրի կոդի և վերադարձնում։ |
| [LookUpInCache(string, string, TimeSpan, Ref&lt;bool&gt;)](Methods/LookUpInCache.md#rodocumentservicelookupincachestring-string-timespan-refbool-մեթոդ) | Փնտրում է փաստաթուղթը քեշում ըստ փաստաթուղթը պարունակող թղթապանակի ներքին անվան և թղթապանակի տարրի կոդի և վերադարձնում։ |
| [RemoveFromCache(int)](Methods/RemoveFromCache.md#rodocumentserviceremovefromcacheint-մեթոդ) | Հեռացնում է փաստաթուղթը քեշից՝ ըստ ներքին նույնականացման համարի։ |
| [RemoveFromCache(string)](Methods/RemoveFromCache.md#rodocumentserviceremovefromcachestring-մեթոդ) | Հեռացնում է նշված տեսակի բոլոր փաստաթղթերը քեշից։ |

<!-- ### LoadIntoCache

```c#
public Task<RODocument> LoadIntoCache(int isn,
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

<!-- ### LoadIntoCache

```c#
public Task<T> LoadIntoCache<T>(int isn,
                                bool throwExceptionIfDeleted = true,
                                Ref<bool> isRefreshed = null,
                                bool lookInArc = true) where T : RODocument, new()
```

Բեռնում է փաստաթուղթը տվյալների պահոցից ըստ փաստաթղթի ներքին նույնականացման համարի և ավելացնում քեշում։

**Պարամետրեր**

| Անվանում        | Տվյալների տիպ        | Լռությամբ արժեք | Նկարագրություն |
|-----------------|----------------------|----------------|----------------|
| isn             | int                  | -              | Բեռնվող փաստաթղթի ներքին նույնականացման համարը։ |
| throwExceptionIfDeleted | bool                 | true           | Պահանջվող փաստաթղթի հեռացված լինելու դեպքում սխալի գեներացման հայտանիշ։ |
| isRefreshed     | Ref<bool>            | null           | Ցույց է տալիս, արդյոք մեթոդի կանչի արդյունքում փաստաթուղթը բեռնվել է տվյալների պահոցից և թարմացվել քեշում, թե ոչ։ |
| lookInArc       | bool                 | true) where T : RODocument | Արխիվացված փաստաթղթի բեռնման հայտանիշ։ **true** արժեքի դեպքում փաստաթուղթը հիմնական պահոցում չգտնելու դեպքում փորձում է բեռնել նաև արխիվային տվյալների պահոցից։  --> |

<!-- ### LoadIntoCache

```c#
public Task<RODocument> LoadIntoCache(int isn,
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

<!-- ### LoadIntoCache

```c#
public Task<T> LoadIntoCache<T>(int isn,
                                bool throwExceptionIfDeleted = true,
                                Ref<bool> isRefreshed = null,
                                bool lookInArc = true) where T : RODocument, new()
```

Բեռնում է փաստաթուղթը տվյալների պահոցից ըստ փաստաթղթի ներքին նույնականացման համարի և ավելացնում քեշում։

**Պարամետրեր**

| Անվանում        | Տվյալների տիպ        | Լռությամբ արժեք | Նկարագրություն |
|-----------------|----------------------|----------------|----------------|
| isn             | int                  | -              | Բեռնվող փաստաթղթի ներքին նույնականացման համարը։ |
| throwExceptionIfDeleted | bool                 | true           | Պահանջվող փաստաթղթի հեռացված լինելու դեպքում սխալի գեներացման հայտանիշ։ |
| isRefreshed     | Ref<bool>            | null           | Ցույց է տալիս, արդյոք մեթոդի կանչի արդյունքում փաստաթուղթը բեռնվել է տվյալների պահոցից և թարմացվել քեշում, թե ոչ։ |
| lookInArc       | bool                 | true) where T : RODocument | Արխիվացված փաստաթղթի բեռնման հայտանիշ։ **true** արժեքի դեպքում փաստաթուղթը հիմնական պահոցում չգտնելու դեպքում փորձում է բեռնել նաև արխիվային տվյալների պահոցից։  --> |
