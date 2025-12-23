---
title: IFolderService.GetElement մեթոդ  
---

## Նկարագիր

**Համարժեքը 4x-ում՝** [AsUtil.FolderElByISN](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Functions/Functions/DocumentsCirculation/FolderElByISN.html)

**Դաս՝** [IFolderService](../IFolderService.md)

## Գերբեռնումներ

| Անվանում | Նկարագրություն |
|--|--|
[GetElement(string, int)](#ifolderservicegetelementstring-int-մեթոդ)
[GetElement(string, string, bool)](#ifolderservicegetelementstring-string-bool-մեթոդ)

### IFolderService.GetElement(string, int) մեթոդ

```c#
public virtual Task<FolderElement> GetElement(string folderId, 
                                              int isn);
```

Վերադարձնում է [թղթապանակի տարրը](../../../Types/FolderElement.md)՝ ըստ թղթապանակի ներքին անվան և փաստաթղթի ներքին նույնականացման համարի։

Տարրի առկա չլինելու դեպքում վերադարձնում է **null**։

**Պարամետրեր**

| Անվանում        | Տվյալների տիպ        | Լռությամբ արժեք | Նկարագրություն |
|-----------------|----------------------|----------------|----------------|
| folderId        | string               | -              | Թղթապանակի ներքին անունը։ |
| isn             | int                  | -              | Թղթապանակում գրանցված փաստաթղթի ներքին նույնականացման համարը։ |

### IFolderService.GetElement(string, string, bool) մեթոդ

```c#
public virtual Task<FolderElement> GetElement(string folderId, 
                                              string key, 
                                              bool noLock = false);
```

Վերադարձնում է [թղթապանակի տարրը](../../../Types/FolderElement.md)՝ ըստ թղթապանակի ներքին անվան և բանալու։

Տարրի առկա չլինելու դեպքում վերադարձնում է **null**։

**Պարամետրեր**

| Անվանում        | Տվյալների տիպ        | Լռությամբ արժեք | Նկարագրություն |
|-----------------|----------------------|----------------|----------------|
| folderId        | string               | -              | Թղթապանակի ներքին անունը։ |
| key             | string               | -              | Տարրի բանալին թղթապանակում։ |
| noLock          | bool                 | false          | Թղթապանակի տարրը վերադարձնող Sql հարցման [NOLOCK](https://learn.microsoft.com/en-us/sql/t-sql/queries/hints-transact-sql-table?view=sql-server-ver16#readuncommitted) (READUNCOMMITTED) ռեժիմով կատարման հայտանիշ։ |

