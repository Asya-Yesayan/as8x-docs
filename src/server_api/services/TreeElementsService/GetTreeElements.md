---
title: TreeElementsService.GetTreeElements(int, Dictionary<string, TreeElement>, bool, bool) մեթոդ  
---

## Նկարագիր

**Համարժեքը 4x-ում՝** [TreeElements](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Functions/Functions/DocumentsCirculation/TreeElements.html)

**Դաս՝** [TreeElementsService](../TreeElementsService.md)

```c#
public Task<Dictionary<string, TreeElement>> GetTreeElements(string treeId, 
                                                             string nodeType = null, 
                                                             string key = null, 
                                                             CacheUsage cacheUsage = CacheUsage.Use);
```

Վերադարձնում է ծառի տարրերը տվյալների պահոցից կամ քեշից, եթե ծառը քեշավորվող է։  
Վերադարձվող Dictionary-ում որպես բանալի հանդես է գալիս ծառի հանգույցի կոդը։

**Պարամետրեր**

* `treeId` - Ծառի ներքին անունը։
* `nodeType` - Ծառի հանգույցի տեսակը՝  
    `"0"` - Բեռնել միայն տերևները։  
    `"1"` - Բեռնել միայն ոչ տերևները։  
* `key` - Ծառի հանգույցի կոդը։
* `cacheUsage` - Քեշում հանգույցի նկարագրության առկայության դեպքում քեշից բեռնման հայտանիշ։ 

