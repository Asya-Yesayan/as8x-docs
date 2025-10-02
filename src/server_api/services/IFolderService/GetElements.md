---
title: IFolderService.GetElements մեթոդ  
---

## Գերբեռնումներ

| Անվանում | Նկարագրություն |
|--|--|
[GetElements(string)](#ifolderservicegetelementsstring-մեթոդ)
| [GetElements(string, List)](#ifoldersservicegetelementsstring-liststring-մեթոդ) | Վերադարձնում է թղթապանակի նշված բանալիներով [տարրերը](../../types/FolderElement.md): |

### IFolderService.GetElements(string) մեթոդ

#### Նկարագիր

**Դաս՝** [IFolderService](../IFolderService.md)

```c#
public virtual Task<List<FolderElement>> GetElements(string folderID);
```

Վերադարձնում է թղթապանակի բոլոր [տարրերը](../../types/FolderElement.md):

**Պարամետրեր**

* `folderID` - Թղթապանակի ներքին անունը։

### IFolderService.GetElements(string, List&lt;string&gt;) մեթոդ

#### Նկարագիր

**Դաս՝** [IFolderService](../IFolderService.md)

```c#
public virtual Task<List<FolderElement>> GetElements(string folderID, 
                                                     List<string> keys);
```

Վերադարձնում է թղթապանակի նշված բանալիներով [տարրերը](../../types/FolderElement.md):

**Պարամետրեր**

* `folderID` - Թղթապանակի ներքին անունը։
* `keys` - Թղթապանակի տարրերի բանալիների ցուցակ։

