---
title: GetISN(string, string)
parent: "Մեթոդներ"
grand_parent: "IFolderService"
---

# IFolderService.GetISN(string, string) մեթոդ

## Նկարագիր

**Համարժեքը 4x-ում՝** [AsKernel.GetISN](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Functions/Functions/DocumentsCirculation/GetISN.html)

**Դաս՝** [IFolderService](../IFolderService.md)

```c#
public virtual Task<int> GetISN(string folderId, 
                                string key);
```

Վերադարձնում է թղթապանակում գրանցված փաստաթղթի ներքին նույնականացման համարը՝ ըստ թղթապանակի ներքին անվան և բանալու։

Տարրի առկա չլինելու դեպքում վերադարձնում է **-1**։

**Պարամետրեր**

| Անվանում        | Տվյալների տիպ        | Լռությամբ արժեք | Նկարագրություն |
|-----------------|----------------------|----------------|----------------|
| folderId        | string               | -              | Թղթապանակի ներքին անունը։ |
| key             | string               | -              | Տարրի բանալին թղթապանակում։ |

<!-- ### Store

```c#
public Task Store(int isn, List<FolderElement> folderElements, string defaultComment, bool existsInDb);
```

Գրանցում է ՝folderElements՝ արգումենտում նշված [թղթապանակների տարրերը](../../../Types/FolderElement.md) տվյալների պահոցի [FOLDERS](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Database/Folders.html) աղյուսակում։

**Պարամետրեր**

| Անվանում        | Տվյալների տիպ        | Լռությամբ արժեք | Նկարագրություն |
|-----------------|----------------------|----------------|----------------|
| isn             | int                  | -              | Գրանցման ենթակա թղթապանակի տարրերին կապակցված փաստաթղթի ներքին նույնակականացման համարը։ |
| folderElements  | List<FolderElement>  | -              | Գրանցման ենթակա թղթապանակի տարրերի ցուցակը։ |
| defaultComment  | string               | -              | Թղթապանակի տարրերում Comment դաշտի դատարկ արժեքի դեպքում թղթապանակի տարրերին տրվող հայերեն անվանում։ |
| existsInDb      | bool                 | -              | `isn` ներքին նույնականացման համարով փաստաթղթին կապակցված թղթապանակի տարրերի տվյալների պահոցից հեռացման հայտանիշ։ --> |
