---
title: IFoldersService.GetElement մեթոդ  
---

## Նկարագիր

**Համարժեքը 4x-ում՝** [AsUtil.FolderElByISN](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Functions/Functions/DocumentsCirculation/FolderElByISN.html)

**Դաս՝** [IFoldersService](../IFoldersService.md)

## Գերբեռնումներ

| Անվանում | Նկարագրություն |
|--|--|
| [GetElement(string, int)](#ifoldersservicegetelementstring-int-մեթոդ) | Վերադարձնում է [թղթապանակի տարրը](../../types/FolderElement.md)՝ ըստ թղթապանակի ներքին անվան և փաստաթղթի ներքին նույնականացման համարի։ |
| [GetElement(string, string, bool)](#ifoldersservicegetelementstring-string-bool-մեթոդ) | Վերադարձնում է [թղթապանակի տարրը](../../types/FolderElement.md)՝ ըստ թղթապանակի ներքին անվան և բանալու։ |

### IFoldersService.GetElement(string, int) մեթոդ

```c#
public Task<FolderElement> GetElement(string folderId, 
                                      int isn);
```

Վերադարձնում է [թղթապանակի տարրը](../../types/FolderElement.md)՝ ըստ թղթապանակի ներքին անվան և փաստաթղթի ներքին նույնականացման համարի։

Տարրի առկա չլինելու դեպքում վերադարձնում է **null**։

**Պարամետրեր**

* `folderId` - Թղթապանակի ներքին անունը։
* `isn` - Թղթապանակում գրանցված փաստաթղթի ներքին նույնականացման համարը։

### IFoldersService.GetElement(string, string, bool) մեթոդ

```c#
public Task<FolderElement> GetElement(string folderId, 
                                      string key, 
                                      bool noLock = false);
```

Վերադարձնում է [թղթապանակի տարրը](../../types/FolderElement.md)՝ ըստ թղթապանակի ներքին անվան և բանալու։

Տարրի առկա չլինելու դեպքում վերադարձնում է **null**։

**Պարամետրեր**

* `folderId` - Թղթապանակի ներքին անունը։
* `key` - Տարրի բանալին թղթապանակում։
* `noLock` - Թղթապանակի տարրը վերադարձնող Sql հարցման [NOLOCK](https://learn.microsoft.com/en-us/sql/t-sql/queries/hints-transact-sql-table?view=sql-server-ver16#readuncommitted) (READUNCOMMITTED) ռեժիմով կատարման հայտանիշ։

