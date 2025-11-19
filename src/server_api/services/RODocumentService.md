---
title: "RODocumentService սերվիս"
---

## Ներածություն

RODocumentService դասը նախատեսված է [RODocument](../types/RODocument.md) տիպի փաստաթղթերը տվյալների պահոցից բեռնելու, քեշում պահելու և քեշից կարդալու համար։

## Մեթոդներ

| Անվանում | Նկարագրություն |
|----------|----------------|
| [ClearCache()](RODocumentService/ClearCache.md) | Հեռացնում է բոլոր փաստաթղթերը քեշից։ |
| [Load(int, bool, bool, bool, bool)](RODocumentService/Load.md#rodocumentserviceloadint-bool-bool-bool-bool-մեթոդ) | Բեռնում է փաստաթուղթը պահոցից՝ ըստ ներքին նույնականացման համարի և վերադարձնում այն [RODocument](../types/RODocument.md) բազային դասով։ |
| [Load(int, bool, bool, bool, bool)](RODocumentService/Load.md#rodocumentserviceloadint-bool-bool-bool-bool-մեթոդ-1) | Բեռնում է փաստաթուղթը պահոցից՝ ըստ ներքին նույնականացման համարի և վերադարձնում այն T դասով, որը հանդիսանում է [RODocument](../types/RODocument.md)-ի ժառանգ։ |
| [Load(IEnumerable&lt;int&gt;, bool, bool, bool, bool)](RODocumentService/Load#rodocumentserviceloadienumerableint-bool-bool-bool-bool-մեթոդ) | Բեռնում է նշված ներքին նույնականացման համարներով (isn-ներով) փաստաթղթերը հիմնական տվյալների պահոցից և վերադարձնում Dictionary, որտեղ բանալին փաստաթղթի isn-ն է, իսկ արժեքը՝ տվյալ փաստաթուղթը։ |
| [LookUpInCache(int, bool, Ref&lt;bool&gt;, bool)](RODocumentService/LookUpInCache.md#rodocumentservicelookupincacheint-bool-ref-bool-մեթոդ) | Փնտրում է փաստաթուղթը քեշում ըստ փաստաթղթի ներքին նույնականացման համարի և վերադարձնում։ |
| [LookUpInCache(int, DocumentLoadSession, Ref&ltbool&gt;, bool)](RODocumentService/LookUpInCache.md#rodocumentservicelookupincacheint-documentloadsession-ref-bool-մեթոդ) | Փնտրում է փաստաթուղթը քեշում ըստ փաստաթղթի ներքին նույնականացման համարի և վերադարձնում։ |
| [LookUpInCache(int, TimeSpan, Ref&lt;bool&gt;, bool)](RODocumentService/LookUpInCache.md#rodocumentservicelookupincacheint-timespan-ref-bool-մեթոդ) | Փնտրում է փաստաթուղթը քեշում ըստ փաստաթղթի ներքին նույնականացման համարի և վերադարձնում։ |
| [LookUpInCache(string, string, bool, DocsTableRowLoader, Ref&lt;bool&gt;)](RODocumentService/LookUpInCache.md#rodocumentservicelookupincachestring-string-bool-docstablerowloader-refbool-մեթոդ) | Փնտրում է փաստաթուղթը քեշում ըստ փաստաթուղթը պարունակող թղթապանակի ներքին անվան և թղթապանակի տարրի կոդի և վերադարձնում։ |
| [LookUpInCache(string, string, DocumentLoadSession, DocsTableRowLoader, Ref&lt;bool&gt;)](RODocumentService/LookUpInCache.md#rodocumentservicelookupincachestring-string-documentloadsession-docstablerowloader-ref-մեթոդ) | Փնտրում է փաստաթուղթը քեշում ըստ փաստաթուղթը պարունակող թղթապանակի ներքին անվան և թղթապանակի տարրի կոդի և վերադարձնում։ |
| [LookUpInCache(string, string, TimeSpan, Ref&lt;bool&gt;)](RODocumentService/LookUpInCache.md#rodocumentservicelookupincachestring-string-timespan-ref-մեթոդ) | Փնտրում է փաստաթուղթը քեշում ըստ փաստաթուղթը պարունակող թղթապանակի ներքին անվան և թղթապանակի տարրի կոդի և վերադարձնում։ |
| [RemoveFromCache(int)](RODocumentService/RemoveFromCache.md#rodocumentserviceremovefromcacheint-մեթոդ) | Հեռացնում է փաստաթուղթը քեշից՝ ըստ ներքին նույնականացման համարի։ |
| [RemoveFromCache(string)](RODocumentService/RemoveFromCache.md#rodocumentserviceremovefromcachestring-մեթոդ) | Հեռացնում է նշված տեսակի բոլոր փաստաթղթերը քեշից։ |

<!-- ### LoadIntoCache

```c#
public Task<RODocument> LoadIntoCache(int isn,
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

<!-- ### LoadIntoCache

```c#
public Task<T> LoadIntoCache<T>(int isn,
                                bool throwExceptionIfDeleted = true,
                                Ref<bool> isRefreshed = null,
                                bool lookInArc = true) where T : RODocument, new()
```

Բեռնում է փաստաթուղթը տվյալների պահոցից ըստ փաստաթղթի ներքին նույնականացման համարի և ավելացնում քեշում։

**Պարամետրեր**

* `T` - Վերադարձնում է փաստաթղթի նկարագրված դաս 8X-ում, [RODocument](../../types/RODocument.md) դասի ժառանգ։
* `isn` - Բեռնվող փաստաթղթի ներքին նույնականացման համարը։
* `throwExceptionIfDeleted` - Պահանջվող փաստաթղթի հեռացված լինելու դեպքում սխալի գեներացման հայտանիշ։ 
* `isRefreshed` - Ցույց է տալիս, արդյոք մեթոդի կանչի արդյունքում փաստաթուղթը բեռնվել է տվյալների պահոցից և թարմացվել քեշում, թե ոչ։ 
* `lookInArc` - Արխիվացված փաստաթղթի բեռնման հայտանիշ։ **true** արժեքի դեպքում փաստաթուղթը հիմնական պահոցում չգտնելու դեպքում փորձում է բեռնել նաև արխիվային տվյալների պահոցից։  -->

<!-- ### LoadIntoCache

```c#
public Task<RODocument> LoadIntoCache(int isn,
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

<!-- ### LoadIntoCache

```c#
public Task<T> LoadIntoCache<T>(int isn,
                                bool throwExceptionIfDeleted = true,
                                Ref<bool> isRefreshed = null,
                                bool lookInArc = true) where T : RODocument, new()
```

Բեռնում է փաստաթուղթը տվյալների պահոցից ըստ փաստաթղթի ներքին նույնականացման համարի և ավելացնում քեշում։

**Պարամետրեր**

* `T` - Վերադարձնում է փաստաթղթի նկարագրված դաս 8X-ում, [RODocument](../types/RODocument.md) դասի ժառանգ։
* `isn` - Բեռնվող փաստաթղթի ներքին նույնականացման համարը։
* `throwExceptionIfDeleted` - Պահանջվող փաստաթղթի հեռացված լինելու դեպքում սխալի գեներացման հայտանիշ։ 
* `isRefreshed` - Ցույց է տալիս, արդյոք մեթոդի կանչի արդյունքում փաստաթուղթը բեռնվել է տվյալների պահոցից և թարմացվել քեշում, թե ոչ։ 
* `lookInArc` - Արխիվացված փաստաթղթի բեռնման հայտանիշ։ **true** արժեքի դեպքում փաստաթուղթը հիմնական պահոցում չգտնելու դեպքում փորձում է բեռնել նաև արխիվային տվյալների պահոցից։  -->