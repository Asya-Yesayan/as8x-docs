---
title: IDocumentService.LoadFromFolder մեթոդ
---

## Նկարագիր

**Համարժեքը 4x-ում՝** [AsDocEngine.LoadDocFromFolder](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Functions/Functions/DocumentsCirculation/LoadDocFromFolder.html)

**Դաս՝** [IDocumentService](../IDocumentService.md)

## Գերբեռնումներ

| Անվանում | Նկարագրություն |
|--|--|
| [LoadFromFolder(string, string, GridLoadMode, bool, Type, bool)](#idocumentserviceloadfromfolderstring-string-gridloadmode-bool-type-bool-մեթոդ) | Բեռնում է փաստաթուղթը ըստ թղթապանակի և բանալու։ |
| [LoadFromFolder(string, string, GridLoadMode, bool, bool)](#idocumentserviceloadfromfolderstring-string-gridloadmode-bool-bool-մեթոդ) | Բեռնում է փաստաթուղթը ըստ թղթապանակի և բանալու։ |

### IDocumentService.LoadFromFolder(string, string, GridLoadMode, bool, Type, bool) մեթոդ

```c#
public Task<Document> LoadFromFolder(string folder, 
                                     string key, 
                                     GridLoadMode gridLoadMode = GridLoadMode.Full,
                                     bool loadImagesAndMemos = true, 
                                     Type instanceType = null, 
                                     bool loadParents = false)
```

Բեռնում է փաստաթուղթը ըստ թղթապանակի և բանալու։

**Պարամետրեր**

* `folder` - Թղթապանակի ներքին անուն։
* `key` - Թղթապանակի տարրի բանալի։
* `gridLoadMode` - [Աղյուսակների բեռնման հայտանիշ](../../types/GridLoadMode.md)։
* `loadImagesAndMemos` - Նկարների ու մեծ մուտքագրման դաշտերի բեռնման հայտանիշ։ 
* `instanceType` - Փաստաթղթի նկարագրված դաս 8X-ում, [Document](../../definitions/document.md) դասի ժառանգ։։
* `loadParents` - Ծնող փաստաթղթերի ISN-ների ցուցակի բեռնման հայտանիշ։

### IDocumentService.LoadFromFolder(string, string, GridLoadMode, bool, bool) մեթոդ

```c#
public Task<T> LoadFromFolder<T>(string folder, 
                                 string key, 
                                 GridLoadMode gridLoadMode = GridLoadMode.Full,
                                 bool loadImagesAndMemos = true, 
                                 bool loadParents = false) where T : Document
```

Բեռնում է փաստաթուղթը ըստ թղթապանակի և բանալու։

**Պարամետրեր**

* `T` - Փաստաթղթի նկարագրված դաս 8X-ում, [Document](../../definitions/document.md) դասի ժառանգ։
* `folder` - Թղթապանակի ներքին անուն։
* `key` - Թղթապանակի տարրի բանալի։
* `gridLoadMode` - [Աղյուսակների բեռնման հայտանիշ](../../types/GridLoadMode.md)։
* `loadImagesAndMemos` - Նկարների ու մեծ մուտքագրման դաշտերի բեռնման հայտանիշ։ 
* `loadParents` - Ծնող փաստաթղթերի ISN-ների ցուցակի բեռնման հայտանիշ։

