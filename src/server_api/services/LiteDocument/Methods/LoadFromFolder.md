---
title: LoadFromFolder
parent: "Մեթոդներ"
grand_parent: "LiteDocumentService"
---

# LiteDocumentService.LoadFromFolder(string, string, bool) մեթոդ

## Նկարագիր

**Դաս՝** [LiteDocumentService](../LiteDocumentService.md)

```c#
public Task<LiteDocument> LoadFromFolder(string folderID, 
                                         string folderKey, 
                                         bool loadGrids = false);
```

Բեռնում է փաստաթուղթը տվյալների պահոցից ըստ փաստաթուղթը պարունակող թղթապանակի ներքին անվան և թղթապանակի տարրի կոդի։

Վերադարձնում է փաստաթղթի օբյեկտը, եթե հայտնաբերվել է, հակառակ դեպքում վերադարձնում է **null**:

**Պարամետրեր**

| Անվանում        | Տվյալների տիպ        | Լռությամբ արժեք | Նկարագրություն |
|-----------------|----------------------|----------------|----------------|
| folderID        | string               | -              | Փաստաթուղթը պարունակող թղթապանակի ներքին անունը։ |
| folderKey       | string               | -              | Թղթապանակի տարրի կոդը։ |
| loadGrids       | bool                 | false          | Փաստաթղթի աղյուսակների բեռնման հայտանիշ։ |
