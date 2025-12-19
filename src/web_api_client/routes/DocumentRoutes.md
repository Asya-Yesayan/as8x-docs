---
title: DocumentRoutes դաս
---

## Ներածություն

## Մեթոդներ

| Անվանում | Նկարագրություն |
|----------|----------------|
| [Create(string, DocumentCreateRequestModel)](DocumentRoutes/Methods/Create.md) | Ստեղծում է նշված ներքին անունով (տեսակի) փաստաթղթի նոր օբյեկտ և վերադարձնում ստեղծված փաստաթղթի տվյալները (դաշտերի, աղյուսակների անունների  արժեքների ցուցակ..)։ |
| [CreateAsync(string, DocumentCreateRequestModel, CancellationToken)](DocumentRoutes/Methods/CreateAsync.md) | Ստեղծում է նշված ներքին անունով (տեսակի) փաստաթղթի նոր օբյեկտ և վերադարձնում ստեղծված փաստաթղթի տվյալները (դաշտերի, աղյուսակների անունների  արժեքների ցուցակ..)։ |
| [Delete(DocumentDeleteRequestModel)](DocumentRoutes/Methods/Delete.md#documentroutesdeletedocumentdeleterequestmodel-մեթոդ) | Ջնջում է փաստաթուղթը համակարգից։ |
| [Delete(int, DocumentDeleteModel)](DocumentRoutes/Methods/Delete.md#documentroutesdeleteint-documentdeletemodel-մեթոդ) | Ջնջում է փաստաթուղթը համակարգից։ |
| [DeleteAsync(DocumentDeleteRequestModel, CancellationToken)](DocumentRoutes/Methods/DeleteAsync.md#documentroutesdeleteasyncdocumentdeleterequestmodel-cancellationtoken-մեթոդ) | Ջնջում է փաստաթուղթը համակարգից։ |
| [DeleteAsync(int, DocumentDeleteModel, CancellationToken)](DocumentRoutes/Methods/DeleteAsync.md#documentroutesdeleteasyncint-documentdeletemodel-cancellationtoken-մեթոդ) | Ջնջում է փաստաթուղթը համակարգից։ |
| [GetChildren(int, string, DocumentOrder, string)](DocumentRoutes/Methods/GetChildren.md) | Վերադարձնում է փաստաթղթի զավակ փաստաթղերի isn-ների ու ներքին անունների (տեսակների) ցուցակը: |
| [GetChildrenAsync(int, string, DocumentOrder, string, CancellationToken)](DocumentRoutes/Methods/GetChildrenAsync.md) | Վերադարձնում է փաստաթղթի զավակ փաստաթղերի isn-ների ու ներքին անունների (տեսակների) ցուցակը: |
| [GetDocumentParents(int, DocumentParentsRequestModel)](DocumentRoutes/Methods/GetDocumentParents.md) | Վերադարձնում է `List<DocumentResponseInfo>` տիպի օբյեկտ, որը պարունակում փաստաթղթի ծնող փաստաթղերի isn-ների ու ներքին անունների (տեսակների) ցուցակը: |
| [GetDocumentParentsAsync(int, DocumentParentsRequestModel, CancellationToken)](DocumentRoutes/Methods/GetDocumentParentsAsync.md) | Վերադարձնում է `List<DocumentResponseInfo>` տիպի օբյեկտ, որը պարունակում փաստաթղթի ծնող փաստաթղերի isn-ների ու ներքին անունների (տեսակների) ցուցակը: |
| [Load(int, bool, bool)](DocumentRoutes/Methods/Load.md) | Բեռնում է տվյալների պահոցում գոյություն ունեցող փաստաթուղթը ըստ ներքին նույնականացման համարի։ |
| [LoadAsync(int, bool, bool, CancellationToken)](DocumentRoutes/Methods/LoadAsync.md) | Բեռնում է տվյալների պահոցում գոյություն ունեցող փաստաթուղթը ըստ ներքին նույնականացման համարի։ |
| [LoadFromFolder(string, string, bool)](DocumentRoutes/Methods/LoadFromFolder.md) | Բեռնում է փաստաթուղթը ըստ թղթապանակի և բանալու։ Չհաջողվելու դեպքում վերադարձնում է **null**։ |
| [LoadFromFolderAsync(string, string, bool, CancellationToken)](DocumentRoutes/Methods/LoadFromFolderAsync.md) | Բեռնում է փաստաթուղթը ըստ թղթապանակի և բանալու։ Չհաջողվելու դեպքում վերադարձնում է **null**։ |
| [Store(DocumentStoreRequestModel)](DocumentRoutes/Methods/Store.md) | Կատարում է պարտադիր ստուգումներ և գրանցում փաստաթուղթը տվյալների պահոցում։ |
| [StoreAsync(DocumentStoreRequestModel, CancellationToken)](DocumentRoutes/Methods/StoreAsync.md) | Կատարում է պարտադիր ստուգումներ և գրանցում փաստաթուղթը տվյալների պահոցում։ |
