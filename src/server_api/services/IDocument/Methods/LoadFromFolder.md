---
title: IDocumentService.LoadFromFolder մեթոդ
---

## Նկարագիր

**Համարժեքը 4x-ում՝** [AsDocEngine.LoadDocFromFolder](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Functions/Functions/DocumentsCirculation/LoadDocFromFolder.html)

**Դաս՝** [IDocumentService](../IDocument/IDocumentService.md)

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

| Անվանում        | Տվյալների տիպ        | Լռությամբ արժեք | Նկարագրություն |
|-----------------|----------------------|----------------|----------------|
| folder          | string               | -              | Թղթապանակի ներքին անուն։ |
| key             | string               | -              | Թղթապանակի տարրի բանալի։ |
| gridLoadMode    | GridLoadMode         | GridLoadMode.Full | [Աղյուսակների բեռնման հայտանիշ](../../Types/GridLoadMode.md)։ |
| loadImagesAndMemos | bool                 | true           | Նկարների ու մեծ մուտքագրման դաշտերի բեռնման հայտանիշ։ |
| instanceType    | Type                 | null           | Փաստաթղթի նկարագրված դաս 8X-ում, [Document](../../Definitions/Document/Document.md) դասի ժառանգ։։ |
| loadParents     | bool                 | false          | Ծնող փաստաթղթերի ISN-ների ցուցակի բեռնման հայտանիշ։ |

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

| Անվանում        | Տվյալների տիպ        | Լռությամբ արժեք | Նկարագրություն |
|-----------------|----------------------|----------------|----------------|
| folder          | string               | -              | Թղթապանակի ներքին անուն։ |
| key             | string               | -              | Թղթապանակի տարրի բանալի։ |
| gridLoadMode    | GridLoadMode         | GridLoadMode.Full | [Աղյուսակների բեռնման հայտանիշ](../../Types/GridLoadMode.md)։ |
| loadImagesAndMemos | bool                 | true           | Նկարների ու մեծ մուտքագրման դաշտերի բեռնման հայտանիշ։ |
| loadParents     | bool                 | false          | Ծնող փաստաթղթերի ISN-ների ցուցակի բեռնման հայտանիշ։ |

