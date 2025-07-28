---
title: IFoldersService.GetElement(string, int) մեթոդ  
---

## Նկարագիր

Համարժեքը 4x-ում։ [AsUtil.FolderElByISN](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Functions/Functions/DocumentsCirculation/FolderElByISN.html)

```c#
public Task<FolderElement> GetElement(string folderId, int isn);
```

Վերադարձնում է [թղթապանակի տարրը](../../types/FolderElement.md)՝ ըստ թղթապանակի ներքին անվան և փաստաթղթի ներքին նույնականացման համարի։

Տարրի առկա չլինելու դեպքում վերադարձնում է **null**։

**Պարամետրեր**

* `folderId` - Թղթապանակի ներքին անունը։
* `isn` - Թղթապանակում գրանցված փաստաթղթի ներքին նույնականացման համարը։
