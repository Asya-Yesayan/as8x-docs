---
title: "IDocumentService սերվիս"
---

## Ներածություն

IDocumentService դասը նախատեսված է փաստաթղթի ([Document](../definitions/Document.md)) հետ աշխատանքը ապահովելու համար։

## Մեթոդներ

| Անվանում | Նկարագրություն |
|----------|----------------|
| [Approve(Document, DocumentCheckLevel, string)](IDocumentService/Methods/Approve.md) | Հաստատում է փաստաթուղթը և գրանցում տվյալների պահոցում։ |
| [CheckProcessingMode(string)](IDocumentService/Methods/CheckProcessingMode.md) | Ստուգում է տրված տեսակի փաստաթղթերի գրանցման/հեռացման հնարավորությունը 8X սերվիսում (փաստաթղթի կատարման ռեժիմը (ProcessingMode) չլինի `0`)։ |
| [CleanDeleted(DateTime, DateTime, string)](IDocumentService/Methods/CleanDeleted.md) | Ջնջված փաստաթղթերը լրիվ հեռացնում է համակարգից ըստ ջնջման ժամանակահատվածի։ |
| [Copy(int, object, int)](IDocumentService/Methods/Copy.md) | Ստեղծում է արդեն գոյություն ունեցող փաստաթղթի պատճեն օբյեկտը։ |
| [Create(int, bool, object[])](IDocumentService/Methods/Create.md#idocumentservicecreateint-bool-object-մեթոդ) | Ստեղծում է նշված տիպի փաստաթղթի նոր օբյեկտ և վերադարձնում այն T դասով, որը հանդիսանում է [Document](../definitions/Document.md)-ի ժառանգ։ |
| [Create(int, object[])](IDocumentService/Methods/Create.md#idocumentservicecreateint-object-մեթոդ) | Ստեղծում է նշված տիպի փաստաթղթի նոր օբյեկտ և վերադարձնում այն T դասով, որը հանդիսանում է [Document](../definitions/Document.md)-ի ժառանգ։ |
| [Create(List&lt;int&gt;, bool, object[])](IDocumentService/Methods/Create.md#idocumentservicecreatelistint-bool-object-մեթոդ) | Ստեղծում է նշված տիպի փաստաթղթի նոր օբյեկտ և վերադարձնում այն T դասով, որը հանդիսանում է [Document](../definitions/Document.md)-ի ժառանգ։ |
| [Create(List&lt;int&gt;, object[])](IDocumentService/Methods/Create.md#idocumentservicecreatelistint-object-մեթոդ) | Ստեղծում է նշված տիպի փաստաթղթի նոր օբյեկտ և վերադարձնում այն T դասով, որը հանդիսանում է [Document](../definitions/Document.md)-ի ժառանգ։ |
| [Create(string, List&lt;int&gt;, Type, Dictionary&lt;string, object&gt;, bool, object[])](IDocumentService/Methods/Create.md#idocumentservicecreatestring-listint-type-dictionarystring-object-bool-object-մեթոդ) | Ստեղծում է նշված տեսակի (ներքին անունով) փաստաթղթի նոր օբյեկտ և վերադարձնում այն [Document](../definitions/Document.md) բազային դասով։ |
| [Create(string, List&lt;int&gt;, Type, Dictionary&lt;string, object&gt;, object[])](IDocumentService/Methods/Create.md#idocumentservicecreatestring-listint-type-dictionarystring-object-object-մեթոդ) | Ստեղծում է նշված տեսակի (ներքին անունով) փաստաթղթի նոր օբյեկտ և վերադարձնում այն [Document](../definitions/Document.md) բազային դասով։  |
| [CreateFactsUsingStateMoverFrom(Document, int)](IDocumentService/Methods/CreateFactsUsingStateMoverFrom.md) | Ֆունկցիան կանչելուց հետո [Action](../definitions/Document/Methods/Action.md)-ում [StoreFact(Document, Fact)](IDocumentService/Methods/StoreFact.md) ֆունկցիայով գրանցվող հաշվառումների ստեղծող օգատգործող է լրացվում այն օգտագործողը, որը վերջինն է փաստաթուղթը բերել նշված վիճակ։ |
| [CreateParentLinkDB(int, int)](IDocumentService/Methods/CreateParentLinkDB.md) | Փաստաթղթերի միջև ստեղծում է ծնող-զավակ կապ։ |
| [CreateParentLinksDB(int, List<int>)](IDocumentService/Methods/CreateParentLinksDB.md) | Փաստաթղթի և տրված ծնող փաստաթղթերի միջև ստեղծում է ծնող-զավակ կապ։ |
| [CreationDate(int, bool)](IDocumentService/Methods/CreationDate.md) | Վերադարձնում է փաստաթղթի ստեղծման ամսաթիվը և ստեղծողի ներքին համարը։ |
| [CutChildLink(int, int)](IDocumentService/Methods/CutChildLink.md) | Ջնջում է փաստաթղթի և իրա զավակների միջև կապերը, կամ մեկ նշված զավակ փաստաթղթի հետ կապը։ |
| [CutParentLink(int, int)](IDocumentService/Methods/CutParentLink.md) | Ջնջում է փաստաթղթի և իրա ծնողների միջև կապերը, կամ մեկ նշված ծնող փաստաթղթի հետ կապը։ |
| [Delete(Document, bool, string, bool, bool)](IDocumentService/Methods/Delete.md#idocumentservicedeletedocument-bool-string-bool-bool-մեթոդ) | Ջնջում է փաստաթուղթը համակարգից։ |
| [Delete(int, bool, string, bool, bool)](IDocumentService/Methods/Delete.md#idocumentservicedeleteint-bool-string-bool-bool-մեթոդ) | Ջնջում է փաստաթուղթը համակարգից։ |
| [DeleteAll(List<int>, bool, string, bool, bool)](IDocumentService/Methods/DeleteAll.md) | Ջնջում է տրված փաստաթղթերը համակարգից։ |
| [DeserializeRequestBody(DocumentModel, bool)](IDocumentService/Methods/DeserializeRequestBody.md) | նախատեսված է կլիենտից դեպի սերվեր փաստաթղթի ուղարկման ժամանակ դեսերիալիզազիայի և [Document](../definitions/Document.md) տիպի օբյեկտի վերածեու համար։ |
| [ExistInDb(int)](IDocumentService/Methods/ExistInDb.md) | Ստուգում է փաստաթղթի առկայությունը տվյալների պահոցում։ |
| [FieldToAnsi(string, string, object)](IDocumentService/Methods/FieldToAnsi.md) | Ձևափոխում է ցանցով փոխանցված արժեքը ANSI կոդավորման համարելով, որ այն պետք է լինի փաստաթղթի դաշտի արժեք։ |
| [FieldsToAnsi(string, Dictionary<string, object>)](IDocumentService/Methods/FieldsToAnsi.md) | Ձևափոխում է ցանցով փոխանցված արժեքների բազմությունը ANSI կոդավորման համարելով, որ դրանք պետք է լինեն փաստաթղթի դաշտերի արժեքներ։ |
| [GetDocsInfo()](IDocumentService/Methods/GetDocsInfo.md) | Վերադարձնում է փաստաթղթերի արխիվը պարունակող տվյալների պահոցի անունը և Sql միացումը դեպի այդ տվյալների պահոց։ |
| [GetDocumentChildren(int, string, DocumentChildrenOrder, string)](IDocumentService/Methods/GetDocumentChildren.md) | Վերադարձնում է փաստաթղթի զավակ փաստաթղերի isn-ների ու ներքին անունների (տեսակների) ցուցակը: |
| [GetDocumentParents(int, string, DocumentChildrenOrder, string)](IDocumentService/Methods/GetDocumentParents.md) | Վերադարձնում է փաստաթղթի ծնող փաստաթղերի isn-ների ու ներքին անունների (տեսակների) ցուցակը: |
| [GetDocumentState(int)](IDocumentService/Methods/GetDocumentState.md) | Վերադարձնում է փաստաթղթի վիճակը։ |
| [GetDocumentStatus(string, int)](IDocumentService/Methods/GetDocumentStatus.md) | Վերադարձնում է թղթապանակի տարրի վիճակը։ |
| [GetDocumentType(int)](IDocumentService/Methods/GetDocumentType.md) | Վերադարձնում է նշված ներքին նույնականացման համարով փաստաթղթի ներքին անունը (տեսակը)։ |
| [GetDocumentTypeFromFolder(string, string)](IDocumentService/Methods/GetDocumentTypeFromFolder.md) | Վերադարձնում է նշված թղթապանակից փաստաթղթի ներքին անունը (տեսակը): |
| [GetGrandChildren(int, string, string, string, string)](IDocumentService/Methods/GetGrandChildren.md) | Նշված փաստաթղթի համար վերադարձնում է «թոռնիկների» ցուցակը։ |
| [GetParentIsn(int)](IDocumentService/Methods/GetParentIsn.md#idocumentservicegetparentisnint-մեթոդ) | Վերադարձնում է փաստաթղթի միակ(առաջին) ծնող փաստաթղթի ներքին նույնականացման համարը։ |
| [GetParentIsn(int, string)](IDocumentService/Methods/GetParentIsn.md#idocumentservicegetparentisnint-string-մեթոդ) | Վերադարձնում է փաստաթղթի առաջին ծնող փաստաթղթի ներքին նույնականացման համարը, որը ունի նշված ներքին անունը (տեսակը)։ |
| [GetPassedState(int, List&lt;short&gt;, bool, bool)](IDocumentService/Methods/GetPassedState.md#idocumentservicegetpassedstateint-listshort-bool-bool-մեթոդ) | Ստուգում է և վերադարձնում փաստաթղթի վերջին կամ առաջին նշանակված վիճակը տրված վիճակների ցուցակից։ |
| [GetPassedState(int, string, bool, bool)](IDocumentService/Methods/GetPassedState.md#idocumentservicegetpassedstateint-string-bool-bool-մեթոդ) | Ստուգում է և վերադարձնում փաստաթղթի վերջին կամ առաջին նշանակված վիճակը վիճակների ցուցակը սահմանող sql հարցում արդյունքից։ |
| [GetPassedState(int, short, bool, bool)](IDocumentService/Methods/GetPassedState.md#idocumentservicegetpassedstateint-short-bool-bool-մեթոդ) | Ստուգում է տրված վիճակը հանդիանում է փաստաթղթի վերջին կամ առաջին նշանակված վիճակը, թե ոչ։ |
| [GetPassedState(int, bool)](IDocumentService/Methods/GetPassedState.md#idocumentservicegetpassedstateint-bool-մեթոդ) | Վերադարձնում է փաստաթղթի վերջին կամ առաջին նշանակված վիճակը։ |
| [GetProcessingModes(string)](IDocumentService/Methods/GetProcessingModes.md) | Վերադարձնում է փաստաթղթի կատարման ռեժիմները ըստ փաստաթղթի ներքին անվան (տեսակի)։ |
| [GetSUIDAndDate(int, int, bool)](IDocumentService/Methods/GetSUIDAndDate.md) | Փնտրում է նշված վիճակին համապատասխան տողի առկայությունը փաստաթղթի պատմության մեջ ([DOCLOG](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Database/DocLog.html) աղյուսակում) և վերադարձնում ստեղծողին և ամսաթիվը։ |
| [GetSystemDocuments()](IDocumentService/Methods/GetSystemDocuments.md) | Վերադարձնում է այն փաստաթղթերի տեսակների (ներքին անունների) ցուցակը, որոնք չեն ցուցադրվելու **«Ստեղծված փաստաթղթեր»**, **«Հեռացված փաստաթղթեր»**, **«Փաստաթղթերի պատմություն»** դիտելու ձևերում։ |
| [HiDelete(Document, bool)](IDocumentService/Methods/HiDelete.md) | Ջնջում է փաստաթղթի նախկինում գրանցած հաշվառումները [HI](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Database/Hi.html) աղյուսակից։ |
| [HiDeleteAll(Document)](IDocumentService/Methods/HiDeleteAll.md) | Ջնջում է փաստաթղթի նախկինում գրանցած հաշվառումները [HI](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Database/Hi.html), [HI2](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Database/Hi2.html) և այլ համարժեք աղյուսակներից։ |
| [HiParDelete(Document)](IDocumentService/Methods/HiParDelete.md) | [HIPAR](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Database/HiPar.html) աղյուսակից ջնջում է այս փաստաթղթի նախկինում գրանցած պարամետրերի արժեքները։ |
| [IsArchived(int)](IDocumentService/Methods/IsArchived.md) | Ստուգում է փաստաթղթի արխիվացված լինելը։ |
| [Load(int, GridLoadMode, bool, bool, bool, bool, bool)](IDocumentService/Methods/Load.md#idocumentserviceloadint-gridloadmode-bool-bool-bool-bool-bool-մեթոդ) | Բեռնում է տվյալների պահոցում գոյություն ունեցող փաստաթուղթը ըստ ներքին նույնականացման համարի։ |
| [Load(int, GridLoadMode, bool, bool, bool, bool, Type, bool)](IDocumentService/Methods/Load.md#idocumentserviceloadint-gridloadmode-bool-bool-bool-bool-type-bool-մեթոդ) | Բեռնում է տվյալների պահոցում գոյություն ունեցող փաստաթուղթը ըստ ներքին նույնականացման համարի։ |
| [LoadFromFolder(string, string, GridLoadMode, bool, bool)](IDocumentService/Methods/LoadFromFolder.md#idocumentserviceloadfromfolderstring-string-gridloadmode-bool-bool-մեթոդ) | Բեռնում է փաստաթուղթը ըստ թղթապանակի և բանալու։ |
| [LoadFromFolder(string, string, GridLoadMode, bool, Type, bool)](IDocumentService/Methods/LoadFromFolder.md#idocumentserviceloadfromfolderstring-string-gridloadmode-bool-type-bool-մեթոդ) | Բեռնում է փաստաթուղթը ըստ թղթապանակի և բանալու։ |
| [MakeParentLink(Document, int, bool)](IDocumentService/Methods/MakeParentLink.md) | Ընթացիկ փաստաթղթի համար սահմանում է ծնողի հետ կապ։ |
| [NestedTransactions(Document, List<T>, TextReport,bool, bool)](IDocumentService/Methods/NestedTransactions.md) | Մեթոդը անցնում է `values` ցուցակի բոլոր տարրերով, յուրաքանչյուրի համար սկսում տրանզակցիա, կանչում [IDocumentNestedTransaction](../types/IDocumentNestedTransaction.md)-ի [NestedTransaction](../types/IDocumentNestedTransaction/Methods/NestedTransaction.md)` մեթոդը և ավարտում տրանզակցիան։ Այն անհրաժեշտ է կանչել փաստաթղթի [Action](../definitions/Document/Methods/Action.md) մեթոդում։ |
| [ReFolder(Document, StoreMode)](IDocumentService/Methods/ReFolder.md) | Իրականացնում է փաստաթղթի վերաինդեքսավորումը թղթապանակներում: |
| [SetGridDefaultValues(Document, Dictionary<string, HashSet<string>>)](IDocumentService/Methods/SetGridDefaultValues.md) | Վերագրում է լռությամբ արժեքներ փաստաթղթի տրված աղյուսակների տրված սյուներին։ |
| [Store(Document, DocumentCheckLevel, string)](IDocumentService/Methods/Store.md) | Անցկացնում է պարտադիր ստուգումներ և գրանցում փաստաթուղթը տվյալների պահոցում։ |
| [StoreFact(Document, Fact)](IDocumentService/Methods/StoreFact.md) | Գրանցում է փաստաթղթի հաշվառումը տվյալների պահոցում: |
| [StoreInFolder(Document, FolderElement)](IDocumentService/Methods/StoreInFolder.md) | Գրանցում է թղթապանակի տարրը տվյալների պահոցում: |
| [StoreInTree(Document, TreeElement)](IDocumentService/Methods/StoreInTree.md) | Գրանցում է ծառի տարրը տվյալների պահոցում: |






