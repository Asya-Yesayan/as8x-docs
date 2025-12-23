---
title: IFolderService.GetElements մեթոդ  
---

## Գերբեռնումներ

| Անվանում | Նկարագրություն |
|--|--|
[GetElements(string)](#ifolderservicegetelementsstring-մեթոդ)
| [GetElements(string, List)](#ifoldersservicegetelementsstring-liststring-մեթոդ) | Վերադարձնում է թղթապանակի նշված բանալիներով [տարրերը](../../../Types/FolderElement.md): |

### IFolderService.GetElements(string) մեթոդ

#### Նկարագիր

**Դաս՝** [IFolderService](../IFolderService.md)

```c#
public virtual Task<List<FolderElement>> GetElements(string folderID);
```

Վերադարձնում է թղթապանակի բոլոր [տարրերը](../../../Types/FolderElement.md):

**Պարամետրեր**

| Անվանում        | Տվյալների տիպ        | Լռությամբ արժեք | Նկարագրություն |
|-----------------|----------------------|----------------|----------------|
| folderID        | string               | -              | Թղթապանակի ներքին անունը։ |

### IFolderService.GetElements(string, List&lt;string&gt;) մեթոդ

#### Նկարագիր

**Դաս՝** [IFolderService](../IFolderService.md)

```c#
public virtual Task<List<FolderElement>> GetElements(string folderID, 
                                                     List<string> keys);
```

Վերադարձնում է թղթապանակի նշված բանալիներով [տարրերը](../../../Types/FolderElement.md):

**Պարամետրեր**

| Անվանում        | Տվյալների տիպ        | Լռությամբ արժեք | Նկարագրություն |
|-----------------|----------------------|----------------|----------------|
| folderID        | string               | -              | Թղթապանակի ներքին անունը։ |
| keys            | List<string>         | -              | Թղթապանակի տարրերի բանալիների ցուցակ։ |

