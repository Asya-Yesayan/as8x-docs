---
title: DocumentRoutes դաս
---

## Ներածություն

## Մեթոդներ

| Անվանում | Նկարագրություն |
|----------|----------------|
| [Create(string, DocumentCreateRequestModel)](Methods/Create.md) | Ստեղծում է նշված ներքին անունով (տեսակի) փաստաթղթի նոր օբյեկտ և վերադարձնում ստեղծված փաստաթղթի տվյալները (դաշտերի, աղյուսակների անունների  արժեքների ցուցակ..)։ |
| [CreateAsync(string, DocumentCreateRequestModel, CancellationToken)](Methods/CreateAsync.md) | Ստեղծում է նշված ներքին անունով (տեսակի) փաստաթղթի նոր օբյեկտ և վերադարձնում ստեղծված փաստաթղթի տվյալները (դաշտերի, աղյուսակների անունների  արժեքների ցուցակ..)։ |
| [Delete(DocumentDeleteRequestModel)](Methods/Delete.md#documentroutesdeletedocumentdeleterequestmodel-մեթոդ) | Ջնջում է փաստաթուղթը համակարգից։ |
| [Delete(int, DocumentDeleteModel)](Methods/Delete.md#documentroutesdeleteint-documentdeletemodel-մեթոդ) | Ջնջում է փաստաթուղթը համակարգից։ |
| [DeleteAsync(DocumentDeleteRequestModel, CancellationToken)](Methods/DeleteAsync.md#documentroutesdeleteasyncdocumentdeleterequestmodel-cancellationtoken-մեթոդ) | Ջնջում է փաստաթուղթը համակարգից։ |
| [DeleteAsync(int, DocumentDeleteModel, CancellationToken)](Methods/DeleteAsync.md#documentroutesdeleteasyncint-documentdeletemodel-cancellationtoken-մեթոդ) | Ջնջում է փաստաթուղթը համակարգից։ |
| [GetChildren(int, string, DocumentOrder, string)](Methods/GetChildren.md) | Վերադարձնում է փաստաթղթի զավակ փաստաթղերի isn-ների ու ներքին անունների (տեսակների) ցուցակը: |
| [GetChildrenAsync(int, string, DocumentOrder, string, CancellationToken)](Methods/GetChildrenAsync.md) | Վերադարձնում է փաստաթղթի զավակ փաստաթղերի isn-ների ու ներքին անունների (տեսակների) ցուցակը: |
| [GetDocumentParents(int, DocumentParentsRequestModel)](Methods/GetDocumentParents.md) | Վերադարձնում է `List<DocumentResponseInfo>` տիպի օբյեկտ, որը պարունակում փաստաթղթի ծնող փաստաթղերի isn-ների ու ներքին անունների (տեսակների) ցուցակը: |
| [GetDocumentParentsAsync(int, DocumentParentsRequestModel, CancellationToken)](Methods/GetDocumentParentsAsync.md) | Վերադարձնում է `List<DocumentResponseInfo>` տիպի օբյեկտ, որը պարունակում փաստաթղթի ծնող փաստաթղերի isn-ների ու ներքին անունների (տեսակների) ցուցակը: |
| [Load(int, bool, bool)](Methods/Load.md) | Բեռնում է տվյալների պահոցում գոյություն ունեցող փաստաթուղթը ըստ ներքին նույնականացման համարի։ |
| [LoadAsync(int, bool, bool, CancellationToken)](Methods/LoadAsync.md) | Բեռնում է տվյալների պահոցում գոյություն ունեցող փաստաթուղթը ըստ ներքին նույնականացման համարի։ |
| [LoadFromFolder(string, string, bool)](Methods/LoadFromFolder.md) | Բեռնում է փաստաթուղթը ըստ թղթապանակի և բանալու։ Չհաջողվելու դեպքում վերադարձնում է **null**։ |
| [LoadFromFolderAsync(string, string, bool, CancellationToken)](Methods/LoadFromFolderAsync.md) | Բեռնում է փաստաթուղթը ըստ թղթապանակի և բանալու։ Չհաջողվելու դեպքում վերադարձնում է **null**։ |
| [Store(DocumentStoreRequestModel)](Methods/Store.md) | Կատարում է պարտադիր ստուգումներ և գրանցում փաստաթուղթը տվյալների պահոցում։ |
| [StoreAsync(DocumentStoreRequestModel, CancellationToken)](Methods/StoreAsync.md) | Կատարում է պարտադիր ստուգումներ և գրանցում փաստաթուղթը տվյալների պահոցում։ |

