---
title: "IFoldersService սերվիս"
---

## Ներածություն

FolderService դասը նախատեսված է [FOLDERS](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Database/Folders.html) աղյուսակից թղթապանակի տարրերի հետ աշխատանքը ապահովելու համար։

Աղյուսակում գրանցման համար օգտագործվում է [IDocumentService](IDocumentService.md).[StoreInFolder](IDocumentService/StoreInFolder.md) ֆունկցիայով։

## Մեթոդներ

| Անվանում | Նկարագրություն |
|----------|----------------|
| [Exists(string)](IFoldersService/Exists.md) | Ստուգում է որևէ տարրի առկայությունը տվյալների պահոցի [FOLDERS](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Database/Folders.html) աղյուսակում։ |
| [GetElement(string, int)](IFoldersService/GetElement.md#ifoldersservicegetelementstring-int-մեթոդ) | Վերադարձնում է [թղթապանակի տարրը](../types/FolderElement.md)՝ ըստ թղթապանակի ներքին անվան և փաստաթղթի ներքին նույնականացման համարի։ |
| [GetElement(string, string, bool)](IFoldersService/GetElement.md#ifoldersservicegetelementstring-string-bool-մեթոդ) | Վերադարձնում է [թղթապանակի տարրը](../types/FolderElement.md)՝ ըստ թղթապանակի ներքին անվան և բանալու։ |
| [GetElements(string)](IFoldersService/GetElements.md#ifoldersservicegetelementsstring-մեթոդ) | Վերադարձնում է թղթապանակի բոլոր [տարրերը](../types/FolderElement.md): |
| [GetElements(string, List&lt;string&gt;)](IFoldersService/GetElements.md#ifoldersservicegetelementsstring-list-մեթոդ) | Վերադարձնում է թղթապանակի նշված բանալիներով [տարրերը](../types/FolderElement.md): |
| [GetISN(string, string)](IFoldersService/GetISN.md) | Վերադարձնում է թղթապանակում գրանցված փաստաթղթի ներքին նույնականացման համարը՝ ըստ թղթապանակի ներքին անվան և բանալու։ |
