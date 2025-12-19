---
title: "IFolderService սերվիս"
---

## Ներածություն

FolderService դասը նախատեսված է [FOLDERS](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Database/Folders.html) աղյուսակից թղթապանակի տարրերի հետ աշխատանքը ապահովելու համար։

Աղյուսակում գրանցման համար օգտագործվում է [IDocumentService](IDocumentService.md).[StoreInFolder](IDocumentService/Methods/StoreInFolder.md) ֆունկցիայով։

## Մեթոդներ

| Անվանում | Նկարագրություն |
|----------|----------------|
| [Exists(string)](IFactService/Methods/Exists.md) | Ստուգում է որևէ տարրի առկայությունը տվյալների պահոցի [FOLDERS](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Database/Folders.html) աղյուսակում։ |
| [GetElement(string, int)](IFolderService/Methods/GetElement.md) | Վերադարձնում է [թղթապանակի տարրը](../types/FolderElement.md)՝ ըստ թղթապանակի ներքին անվան և փաստաթղթի ներքին նույնականացման համարի։ |
| [GetElement(string, string, bool)](IFolderService/Methods/GetElement.md) | Վերադարձնում է [թղթապանակի տարրը](../types/FolderElement.md)՝ ըստ թղթապանակի ներքին անվան և բանալու։ |
| [GetElements(string)](IFolderService/Methods/GetElements.md) | Վերադարձնում է թղթապանակի բոլոր [տարրերը](../types/FolderElement.md): |
| [GetElements(string, List&lt;string&gt;)](IFolderService/Methods/GetElements.md) | Վերադարձնում է թղթապանակի նշված բանալիներով [տարրերը](../types/FolderElement.md): |
| [GetISN(string, string)](IFolderService/Methods/GetISN.md) | Վերադարձնում է թղթապանակում գրանցված փաստաթղթի ներքին նույնականացման համարը՝ ըստ թղթապանակի ներքին անվան և բանալու։ |
