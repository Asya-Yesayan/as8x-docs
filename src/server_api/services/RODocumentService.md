---
title: "RODocumentService սերվիս"
---

## Ներածություն

RODocumentService դասը նախատեսված է [RODocument](../types/RODocument.md) տիպի փաստաթղթերը տվյալների պահոցից բեռնելու, քեշում պահելու և քեշից կարդալու համար։

## Մեթոդներ

| Անվանում | Նկարագրություն |
|----------|----------------|
| [ClearCache()](LiteDocumentService/Methods/ClearCache.md) | Հեռացնում է բոլոր փաստաթղթերը քեշից։ |
| [Load(int, bool, bool, bool, bool)](../../controllers/Document/Methods/Load.md) | Բեռնում է փաստաթուղթը պահոցից՝ ըստ ներքին նույնականացման համարի և վերադարձնում այն [RODocument](../types/RODocument.md) բազային դասով։ |
| [Load(int, bool, bool, bool, bool)](../../controllers/Document/Methods/Load.md) | Բեռնում է փաստաթուղթը պահոցից՝ ըստ ներքին նույնականացման համարի և վերադարձնում այն T դասով, որը հանդիսանում է [RODocument](../types/RODocument.md)-ի ժառանգ։ |
| [Load(IEnumerable&lt;int&gt;, bool, bool, bool, bool)](RODocumentService/Load#rodocumentserviceloadienumerableint-bool-bool-bool-bool-մեթոդ) | Բեռնում է նշված ներքին նույնականացման համարներով (isn-ներով) փաստաթղթերը հիմնական տվյալների պահոցից և վերադարձնում Dictionary, որտեղ բանալին փաստաթղթի isn-ն է, իսկ արժեքը՝ տվյալ փաստաթուղթը։ |
| [LookUpInCache(int, bool, Ref&lt;bool&gt;, bool)](LiteDocumentService/Methods/LookUpInCache.md) | Փնտրում է փաստաթուղթը քեշում ըստ փաստաթղթի ներքին նույնականացման համարի և վերադարձնում։ |
| [LookUpInCache(int, DocumentLoadSession, Ref&ltbool&gt;, bool)](LiteDocumentService/Methods/LookUpInCache.md) | Փնտրում է փաստաթուղթը քեշում ըստ փաստաթղթի ներքին նույնականացման համարի և վերադարձնում։ |
| [LookUpInCache(int, TimeSpan, Ref&lt;bool&gt;, bool)](LiteDocumentService/Methods/LookUpInCache.md) | Փնտրում է փաստաթուղթը քեշում ըստ փաստաթղթի ներքին նույնականացման համարի և վերադարձնում։ |
| [LookUpInCache(string, string, bool, DocsTableRowLoader, Ref&lt;bool&gt;)](LiteDocumentService/Methods/LookUpInCache.md) | Փնտրում է փաստաթուղթը քեշում ըստ փաստաթուղթը պարունակող թղթապանակի ներքին անվան և թղթապանակի տարրի կոդի և վերադարձնում։ |
| [LookUpInCache(string, string, DocumentLoadSession, DocsTableRowLoader, Ref&lt;bool&gt;)](LiteDocumentService/Methods/LookUpInCache.md) | Փնտրում է փաստաթուղթը քեշում ըստ փաստաթուղթը պարունակող թղթապանակի ներքին անվան և թղթապանակի տարրի կոդի և վերադարձնում։ |
| [LookUpInCache(string, string, TimeSpan, Ref&lt;bool&gt;)](LiteDocumentService/Methods/LookUpInCache.md) | Փնտրում է փաստաթուղթը քեշում ըստ փաստաթուղթը պարունակող թղթապանակի ներքին անվան և թղթապանակի տարրի կոդի և վերադարձնում։ |
| [RemoveFromCache(int)](LiteDocumentService/Methods/RemoveFromCache.md) | Հեռացնում է փաստաթուղթը քեշից՝ ըստ ներքին նույնականացման համարի։ |
| [RemoveFromCache(string)](LiteDocumentService/Methods/RemoveFromCache.md) | Հեռացնում է նշված տեսակի բոլոր փաստաթղթերը քեշից։ |

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
