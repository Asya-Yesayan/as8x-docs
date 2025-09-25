---
title: IDocumentService.Load մեթոդ
---

## Նկարագիր

**Համարժեքը 4x-ում՝** [AsDocEngine.LoadDoc](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Functions/Functions/DocumentsCirculation/LoadDoc.html)

**Դաս՝** [IDocumentService](../IDocumentService.md)

<div class="version-block" data-product-id="bank" data-version="250626.000" markdown="1">

## Գերբեռնումներ

| Անվանում | Նկարագրություն |
|--|--|
| [Load(int, GridLoadMode, bool, bool, bool, bool, Type, bool)](#idocumentserviceloadint-gridloadmode-bool-bool-bool-bool-type-bool-մեթոդ) | Բեռնում է փաստաթուղթը տվյալների պահոցից՝ ըստ ներքին նույնականացման համարի (isn): |
| [Load(int, GridLoadMode, bool, bool, bool, bool, bool)](#idocumentserviceloadint-gridloadmode-bool-bool-bool-bool-bool-մեթոդ) | Բեռնում է փաստաթուղթը տվյալների պահոցից՝ ըստ ներքին նույնականացման համարի (isn): |

### IDocumentService.Load(int, GridLoadMode, bool, bool, bool, bool, Type, bool) մեթոդ

```c#
public Task<Document> Load(int isn, 
                           GridLoadMode gridLoadMode = GridLoadMode.Full,
                           bool loadImagesAndMemos = true, 
                           bool lockTableRow = false,
                           bool throwExceptionIfDeleted = true, 
                           bool lookInArc = true,
                           Type instanceType = null, 
                           bool loadParents = false)
```

{{ site.data.Constants.Document.LoadWithIsn }}

**Պարամետրեր**

| Անվանում | Տեսակ | Լռությամբ արժեք | Նկարագրություն |
|-----------|-------|-----------------|----------------|
| `isn` | int | – | Բեռնվող փաստաթղթի ներքին նույնականացման համարը։ |
| `gridLoadMode` | [GridLoadMode](../../types/GridLoadMode.md) | GridLoadMode.Full | [Աղյուսակների բեռնման հայտանիշ](../../types/GridLoadMode.md)։ |
| `loadImagesAndMemos` | bool | true | Նկարների ու մեծ մուտքագրման դաշտերի (մեմո) բեռնման հայտանիշ։ |
| `lockTableRow` | bool | false | Տվյալների պահոցում արգելափակման (lock) միացման հայտանիշ։ <br> true արժեքի դեպքում դրվում է թարմացման (update) արգելափակում։  |
| `throwExceptionIfDeleted` | bool | true | Պահանջվող փաստաթղթի հեռացված լինելու դեպքում սխալի առաջացման հայտանիշ։ |
| `lookInArc` | bool | true | Հիմնական տվյալների պահոցում փաստաթղթի բացակայության դեպքում արխիվայինում փնտրման հայտանիշ։ <br> Պարամետրի **true** արժեքի և արխիվային տվյալների պահոցում փաստաթղթի բացակայության դեպքում առաջանում է սխալ։ |
| `instanceType` | Type | Document | Փաստաթղթի նկարագրված դաս 8X-ում։ [Document](../../definitions/document.md) դասից ժառանգ հանդիսացող դաս, որի օբյեկտ պետք է ստեղծվի։ |
| `loadParents` | bool | false | Ծնող փաստաթղթերի ISN-ների ցուցակի բեռնման հայտանիշ։ |

### IDocumentService.Load(int, GridLoadMode, bool, bool, bool, bool, bool) մեթոդ

```c#
public Task<T> Load<T>(int isn, 
                       GridLoadMode gridLoadMode = GridLoadMode.Full, 
                       bool loadImagesAndMemos = true, 
                       bool lockTableRow = false, 
                       bool throwExceptionIfDeleted = true, 
                       bool lookInArc = true, 
                       bool loadParents = false) where T : Document
```

{{ site.data.Constants.Document.LoadWithIsn }}

**Պարամետրեր**

| Անվանում | Տեսակ | Լռությամբ արժեք | Նկարագրություն |
|-----------|-------|-----------------|----------------|
| `T` | Type (`Document` ժառանգ) | Document | Փաստաթղթի նկարագրված դաս 8X-ում, [Document](../../definitions/document.md) դասի ժառանգ։ |
| `isn` | int | – | Բեռնվող փաստաթղթի ներքին նույնականացման համարը։ |
| `gridLoadMode` | [GridLoadMode](../../types/GridLoadMode.md) | GridLoadMode.Full | [Աղյուսակների բեռնման հայտանիշ](../../types/GridLoadMode.md)։ |
| `loadImagesAndMemos` | bool | true | Նկարների ու մեծ մուտքագրման դաշտերի (մեմո) բեռնման հայտանիշ։ |
| `lockTableRow` | bool | false | Տվյալների պահոցում արգելափակման (lock) միացման հայտանիշ։ <br> true արժեքի դեպքում դրվում է թարմացման (update) արգելափակում։  |
| `throwExceptionIfDeleted` | bool | true | Պահանջվող փաստաթղթի հեռացված լինելու դեպքում սխալի առաջացման հայտանիշ։ |
| `lookInArc` | bool | true | Հիմնական տվյալների պահոցում փաստաթղթի բացակայության դեպքում արխիվայինում փնտրման հայտանիշ։ <br> Պարամետրի **true** արժեքի և արխիվային տվյալների պահոցում փաստաթղթի բացակայության դեպքում առաջանում է սխալ։ |
| `loadParents` | bool | false | Ծնող փաստաթղթերի ISN-ների ցուցակի բեռնման հայտանիշ։ |

</div>

<div class="version-block" data-product-id="bank" data-version-exclude="250626.000" markdown="1">

## Գերբեռնումներ

| Անվանում | Նկարագրություն |
|--|--|
| [Load(int, GridLoadMode, bool, DocumentLockMode, bool, bool, Type, bool)](#idocumentserviceloadint-gridloadmode-bool-documentlockmode-bool-bool-type-bool-մեթոդ) | Բեռնում է փաստաթուղթը տվյալների պահոցից՝ ըստ ներքին նույնականացման համարի (isn): |
| [Load(int, GridLoadMode, bool, DocumentLockMode, bool, bool, bool)](#idocumentserviceloadint-gridloadmode-bool-documentlockmode-bool-bool-bool-մեթոդ) | Բեռնում է փաստաթուղթը տվյալների պահոցից՝ ըստ ներքին նույնականացման համարի (isn): |

### IDocumentService.Load(int, GridLoadMode, bool, DocumentLockMode, bool, bool, Type, bool) մեթոդ

```c#
public Task<Document> Load(int isn, 
                           GridLoadMode gridLoadMode = GridLoadMode.Full,
                           bool loadImagesAndMemos = true, 
                           DocumentLockMode lockMode = DocumentLockMode.ReadLock,
                           bool throwExceptionIfDeleted = true, 
                           bool lookInArc = true,
                           Type instanceType = null, 
                           bool loadParents = false)
```

{{ site.data.Constants.Document.LoadWithIsn }}

**Պարամետրեր**

| Անվանում | Տեսակ | Լռությամբ արժեք | Նկարագրություն |
|-----------|-------|-----------------|----------------|
| `isn` | int | – | Բեռնվող փաստաթղթի ներքին նույնականացման համարը։ |
| `gridLoadMode` | [GridLoadMode](../../types/GridLoadMode.md) | GridLoadMode.Full | [Աղյուսակների բեռնման հայտանիշ](../../types/GridLoadMode.md)։ |
| `loadImagesAndMemos` | bool | true | Նկարների ու մեծ մուտքագրման դաշտերի (մեմո) բեռնման հայտանիշ։ |
| `lockMode` | [DocumentLockMode](../../types/DocumentLockMode.md) | DocumentLockMode.ReadLock | Տվյալների պահոցում արգելափակման (lock) միացման [ռեժիմը](../../types/DocumentLockMode.md)։ |
| `throwExceptionIfDeleted` | bool | true | Պահանջվող փաստաթղթի հեռացված լինելու դեպքում սխալի առաջացման հայտանիշ։ |
| `lookInArc` | bool | true | Հիմնական տվյալների պահոցում փաստաթղթի բացակայության դեպքում արխիվայինում փնտրման հայտանիշ։ <br> Պարամետրի **true** արժեքի և արխիվային տվյալների պահոցում փաստաթղթի բացակայության դեպքում առաջանում է սխալ։ |
| `instanceType` | Type | Document | Փաստաթղթի նկարագրված դաս 8X-ում։ [Document](../../definitions/document.md) դասից ժառանգ հանդիսացող դաս, որի օբյեկտ պետք է ստեղծվի։ |
| `loadParents` | bool | false | Ծնող փաստաթղթերի ISN-ների ցուցակի բեռնման հայտանիշ։ |

### IDocumentService.Load(int, GridLoadMode, bool, DocumentLockMode, bool, bool, bool) մեթոդ

```c#
public Task<T> Load<T>(int isn, 
                       GridLoadMode gridLoadMode = GridLoadMode.Full, 
                       bool loadImagesAndMemos = true, 
                       DocumentLockMode lockMode = DocumentLockMode.ReadLock, 
                       bool throwExceptionIfDeleted = true, 
                       bool lookInArc = true, 
                       bool loadParents = false) where T : Document
```

{{ site.data.Constants.Document.LoadWithIsn }}

**Պարամետրեր**

| Անվանում | Տեսակ | Լռությամբ արժեք | Նկարագրություն |
|-----------|-------|-----------------|----------------|
| `T` | Type (`Document` ժառանգ) | Document | Փաստաթղթի նկարագրված դաս 8X-ում, [Document](../../definitions/document.md) դասի ժառանգ։ |
| `isn` | int | – | Բեռնվող փաստաթղթի ներքին նույնականացման համարը։ |
| `gridLoadMode` | [GridLoadMode](../../types/GridLoadMode.md) | GridLoadMode.Full | [Աղյուսակների բեռնման հայտանիշ](../../types/GridLoadMode.md)։ |
| `loadImagesAndMemos` | bool | true | Նկարների ու մեծ մուտքագրման դաշտերի (մեմո) բեռնման հայտանիշ։ |
| `lockMode` | [DocumentLockMode](../../types/DocumentLockMode.md) | DocumentLockMode.ReadLock | Տվյալների պահոցում արգելափակման (lock) միացման [ռեժիմը](../../types/DocumentLockMode.md)։ |
| `throwExceptionIfDeleted` | bool | true | Պահանջվող փաստաթղթի հեռացված լինելու դեպքում սխալի առաջացման հայտանիշ։ |
| `lookInArc` | bool | true | Հիմնական տվյալների պահոցում փաստաթղթի բացակայության դեպքում արխիվայինում փնտրման հայտանիշ։ <br> Պարամետրի **true** արժեքի և արխիվային տվյալների պահոցում փաստաթղթի բացակայության դեպքում առաջանում է սխալ։ |
| `loadParents` | bool | false | Ծնող փաստաթղթերի ISN-ների ցուցակի բեռնման հայտանիշ։ |

</div>
