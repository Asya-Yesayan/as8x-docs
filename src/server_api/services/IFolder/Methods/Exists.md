---
title: Exists(string)
parent: "Մեթոդներ"
grand_parent: "IFolderService"
---

# IFolderService.Exists(string) մեթոդ

## Նկարագիր

**Համարժեքը 4x-ում՝** [AsKernel.ExistsFolder](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Functions/Functions/DocumentsCirculation/ExistsFolder.html)

**Դաս՝** [IFolderService](../IFolderService.md)

```c#
public virtual Task<bool> Exists(string folderId);
```

Ստուգում է որևէ տարրի առկայությունը տվյալների պահոցի [FOLDERS](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Database/Folders.html) աղյուսակում։

**Պարամետրեր**

| Անվանում        | Տվյալների տիպ        | Լռությամբ արժեք | Նկարագրություն |
|-----------------|----------------------|----------------|----------------|
| folderId        | string               | -              | Թղթապանակի ներքին անունը։ |
