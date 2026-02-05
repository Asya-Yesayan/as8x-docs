---
title: "IFolderService"
parent: "Սերվիսներ"
nav_order: 2
has_toc: false
---

# IFolderService սերվիս

## Ներածություն

FolderService դասը նախատեսված է [FOLDERS](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Database/Folders.html) աղյուսակից թղթապանակի տարրերի հետ աշխատանքը ապահովելու համար։

Աղյուսակում գրանցման համար օգտագործվում է [IDocumentService](../IDocument/IDocumentService.md).[StoreInFolder](../IDocument/Methods/StoreInFolder.md) ֆունկցիայով։

## Մեթոդներ

| Անվանում | Նկարագրություն |
|----------|----------------|
| [Exists(string)](Methods/Exists.md) | Ստուգում է որևէ տարրի առկայությունը տվյալների պահոցի [FOLDERS](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Database/Folders.html) աղյուսակում։ |
| [GetElement(string, int)](Methods/GetElement.md#ifolderservicegetelementstring-int-մեթոդ) | Վերադարձնում է [թղթապանակի տարրը](../../Types/FolderElement.md)՝ ըստ թղթապանակի ներքին անվան և փաստաթղթի ներքին նույնականացման համարի։ |
| [GetElement(string, string, bool)](Methods/GetElement.md#ifolderservicegetelementstring-string-bool-մեթոդ) | Վերադարձնում է [թղթապանակի տարրը](../../Types/FolderElement.md)՝ ըստ թղթապանակի ներքին անվան և բանալու։ |
| [GetElements(string)](Methods/GetElements.md#ifolderservicegetelementsstring-մեթոդ) | Վերադարձնում է թղթապանակի բոլոր [տարրերը](../../Types/FolderElement.md): |
| [GetElements(string, List&lt;string&gt;)](Methods/GetElements.md#ifolderservicegetelementsstring-liststring-մեթոդ) | Վերադարձնում է թղթապանակի նշված բանալիներով [տարրերը](../../Types/FolderElement.md): |
| [GetISN(string, string)](Methods/GetISN.md) | Վերադարձնում է թղթապանակում գրանցված փաստաթղթի ներքին նույնականացման համարը՝ ըստ թղթապանակի ներքին անվան և բանալու։ |
