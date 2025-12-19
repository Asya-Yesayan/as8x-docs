---
title: TreeElementsService.GetTreeElements(int, Dictionary<string, TreeElement>, bool, bool) մեթոդ  
---

## Նկարագիր

**Համարժեքը 4x-ում՝** [TreeElements](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Functions/Functions/DocumentsCirculation/TreeElements.html)

**Դաս՝** [TreeElementsService](../../TreeElementsService.md)

```c#
public Task<Dictionary<string, TreeElement>> GetTreeElements(string treeId, 
                                                             string nodeType = null, 
                                                             string key = null, 
                                                             CacheUsage cacheUsage = CacheUsage.Use);
```

Վերադարձնում է ծառի տարրերը տվյալների պահոցից կամ քեշից, եթե ծառը քեշավորվող է։  
Վերադարձվող Dictionary-ում որպես բանալի հանդես է գալիս ծառի հանգույցի կոդը։

**Պարամետրեր**

| Անվանում        | Տվյալների տիպ        | Լռությամբ արժեք | Նկարագրություն |
|-----------------|----------------------|----------------|----------------|
| treeId          | string               | -              | Ծառի ներքին անունը։ |
| nodeType        | string               | null           | Ծառի հանգույցի տեսակը՝ |
| key             | string               | null           | Ծառի հանգույցի կոդը։ |
| cacheUsage      | CacheUsage           | CacheUsage.Use | Քեշում հանգույցի նկարագրության առկայության դեպքում քեշից բեռնման հայտանիշ։ |

