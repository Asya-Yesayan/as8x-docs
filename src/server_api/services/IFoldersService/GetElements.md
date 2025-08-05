---
title: IFoldersService.GetElements մեթոդ  
---

## Գերբեռնումներ

| Անվանում | Նկարագրություն |
|--|--|
| [GetElements(string)](#ifoldersservicegetelementsstring-մեթոդ) | Վերադարձնում է թղթապանակի բոլոր [տարրերը](../../types/FolderElement.md): |
| [GetElements(string, List)](#ifoldersservicegetelementsstring-liststring-մեթոդ) | Վերադարձնում է թղթապանակի նշված բանալիներով [տարրերը](../../types/FolderElement.md): |

### IFoldersService.GetElements(string) մեթոդ

```c#
public Task<List<FolderElement>> GetElements(string folderID);
```

Վերադարձնում է թղթապանակի բոլոր [տարրերը](../../types/FolderElement.md):

**Պարամետրեր**

* `folderID` - Թղթապանակի ներքին անունը։

### IFoldersService.GetElements(string, List&lt;string&gt;) մեթոդ

```c#
public Task<List<FolderElement>> GetElements(string folderID, 
                                             List<string> keys);
```

Վերադարձնում է թղթապանակի նշված բանալիներով [տարրերը](../../types/FolderElement.md):

**Պարամետրեր**

* `folderID` - Թղթապանակի ներքին անունը։
* `keys` - Թղթապանակի տարրերի բանալիների ցուցակ։

