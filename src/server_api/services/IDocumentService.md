---
title: "IDocumentService սերվիս"
---

## Ներածություն

IDocumentService դասը նախատեսված է փաստաթղթի ([Document](../definitions/document.md)) հետ աշխատանքը ապահովելու համար։

## Մեթոդներ

| Անվանում | Նկարագրություն |
|----------|----------------|
| [Approve(Document, DocumentCheckLevel, string)](IDocumentService/Approve.md) | Հաստատում է փաստաթուղթը և գրանցում տվյալների պահոցում։ |
| [CheckProcessingMode(string)](IDocumentService/CheckProcessingMode.md) | Ստուգում է տրված տեսակի փաստաթղթերի գրանցման/հեռացման հնարավորությունը 8X սերվիսում (փաստաթղթի կատարման ռեժիմը (ProcessingMode) չլինի `0`)։ |
| [CleanDeleted(DateTime, DateTime, string)](IDocumentService/CleanDeleted.md) | Ջնջված փաստաթղթերը լրիվ հեռացնում է համակարգից ըստ ջնջման ժամանակահատվածի։ |
| [Copy(int, object, int)](IDocumentService/Copy.md) | Ստեղծում է արդեն գոյություն ունեցող փաստաթղթի պատճեն օբյեկտը։ |
| [Create(int, bool, object[])](IDocumentService/Create.md#idocumentservicecreateint-bool-object-մեթոդ) | Ստեղծում է նշված տիպի փաստաթղթի նոր օբյեկտ և վերադարձնում այն T դասով, որը հանդիսանում է [Document](../definitions/document.md)-ի ժառանգ։ |
| [Create(int, object[])](IDocumentService/Create.md#idocumentservicecreateint-object-մեթոդ) | Ստեղծում է նշված տիպի փաստաթղթի նոր օբյեկտ և վերադարձնում այն T դասով, որը հանդիսանում է [Document](../definitions/document.md)-ի ժառանգ։ |
| [Create(List&lt;int&gt;, bool, object[])](IDocumentService/Create.md#idocumentservicecreatelistint-bool-object-մեթոդ) | Ստեղծում է նշված տիպի փաստաթղթի նոր օբյեկտ և վերադարձնում այն T դասով, որը հանդիսանում է [Document](../definitions/document.md)-ի ժառանգ։ |
| [Create(List&lt;int&gt;, object[])](IDocumentService/Create.md#idocumentservicecreatelistint-object-մեթոդ) | Ստեղծում է նշված տիպի փաստաթղթի նոր օբյեկտ և վերադարձնում այն T դասով, որը հանդիսանում է [Document](../definitions/document.md)-ի ժառանգ։ |
| [Create(string, List&lt;int&gt;, Type, Dictionary&lt;string, object&gt;, bool, object[])](IDocumentService/Create.md#idocumentservicecreatestring-listint-type-dictionarystring-object-bool-object-մեթոդ) | Ստեղծում է նշված տեսակի (ներքին անունով) փաստաթղթի նոր օբյեկտ և վերադարձնում այն [Document](../definitions/document.md) բազային դասով։ |
| [Create(string, List&lt;int&gt;, Type, Dictionary&lt;string, object&gt;, object[])](IDocumentService/Create.md#idocumentservicecreatestring-listint-type-dictionarystring-object-object-մեթոդ) | Ստեղծում է նշված տեսակի (ներքին անունով) փաստաթղթի նոր օբյեկտ և վերադարձնում այն [Document](../definitions/document.md) բազային դասով։  |
| [CreateFactsUsingStateMoverFrom(Document, int)](IDocumentService/CreateFactsUsingStateMoverFrom.md) | Ֆունկցիան կանչելուց հետո [Action](../definitions/document/Action.md)-ում [StoreFact(Document, Fact)](IDocumentService/StoreFact.md) ֆունկցիայով գրանցվող հաշվառումների ստեղծող օգատգործող է լրացվում այն օգտագործողը, որը վերջինն է փաստաթուղթը բերել նշված վիճակ։ |
| [CreateParentLinkDB(int, int)](IDocumentService/CreateParentLinkDB.md) | Փաստաթղթերի միջև ստեղծում է ծնող-զավակ կապ։ |
| [CreateParentLinksDB(int, List<int>)](IDocumentService/CreateParentLinksDB.md) | Փաստաթղթի և տրված ծնող փաստաթղթերի միջև ստեղծում է ծնող-զավակ կապ։ |
| [CreationDate(int, bool)](IDocumentService/CreationDate.md) | Վերադարձնում է փաստաթղթի ստեղծման ամսաթիվը և ստեղծողի ներքին համարը։ |
| [CutChildLink(int, int)](IDocumentService/CutChildLink.md) | Ջնջում է փաստաթղթի և իրա զավակների միջև կապերը, կամ մեկ նշված զավակ փաստաթղթի հետ կապը։ |
| [CutParentLink(int, int)](IDocumentService/CutParentLink.md) | Ջնջում է փաստաթղթի և իրա ծնողների միջև կապերը, կամ մեկ նշված ծնող փաստաթղթի հետ կապը։ |
| [Delete(Document, bool, string, bool, bool)](IDocumentService/Delete.md#idocumentservicedeletedocument-bool-string-bool-bool-մեթոդ) | Ջնջում է փաստաթուղթը համակարգից։ |
| [Delete(int, bool, string, bool, bool)](IDocumentService/Delete.md#idocumentservicedeleteint-bool-string-bool-bool-մեթոդ) | Ջնջում է փաստաթուղթը համակարգից։ |
| [DeleteAll(List<int>, bool, string, bool, bool)](IDocumentService/DeleteAll.md) | Ջնջում է տրված փաստաթղթերը համակարգից։ |
| [DeserializeRequestBody(DocumentModel, bool)](IDocumentService/DeserializeRequestBody.md) | նախատեսված է կլիենտից դեպի սերվեր փաստաթղթի ուղարկման ժամանակ դեսերիալիզազիայի և [Document](../definitions/document.md) տիպի օբյեկտի վերածեու համար։ |
| [ExistInDb(int)](IDocumentService/ExistInDb.md) | Ստուգում է փաստաթղթի առկայությունը տվյալների պահոցում։ |
| [FieldToAnsi(string, string, object)](IDocumentService/FieldToAnsi.md) | Ձևափոխում է ցանցով փոխանցված արժեքը ANSI կոդավորման համարելով, որ այն պետք է լինի փաստաթղթի դաշտի արժեք։ |
| [FieldsToAnsi(string, Dictionary<string, object>)](IDocumentService/FieldsToAnsi.md) | Ձևափոխում է ցանցով փոխանցված արժեքների բազմությունը ANSI կոդավորման համարելով, որ դրանք պետք է լինեն փաստաթղթի դաշտերի արժեքներ։ |
| [GetDocsInfo()](IDocumentService/GetDocsInfo.md) | Վերադարձնում է փաստաթղթերի արխիվը պարունակող տվյալների պահոցի անունը և Sql միացումը դեպի այդ տվյալների պահոց։ |
| [GetDocumentChildren(int, string, DocumentChildrenOrder, string)](IDocumentService/GetDocumentChildren.md) | Վերադարձնում է փաստաթղթի զավակ փաստաթղերի isn-ների ու ներքին անունների (տեսակների) ցուցակը: |
| [GetDocumentParents(int, string, DocumentChildrenOrder, string)](IDocumentService/GetDocumentParents.md) | Վերադարձնում է փաստաթղթի ծնող փաստաթղերի isn-ների ու ներքին անունների (տեսակների) ցուցակը: |
| [GetDocumentState(int)](IDocumentService/GetDocumentState.md) | Վերադարձնում է փաստաթղթի վիճակը։ |
| [GetDocumentStatus(string, int)](IDocumentService/GetDocumentStatus.md) | Վերադարձնում է թղթապանակի տարրի վիճակը։ |
| [GetDocumentType(int)](IDocumentService/GetDocumentType.md) | Վերադարձնում է նշված ներքին նույնականացման համարով փաստաթղթի ներքին անունը (տեսակը)։ |
| [GetDocumentTypeFromFolder(string, string)](IDocumentService/GetDocumentTypeFromFolder.md) | Վերադարձնում է նշված թղթապանակից փաստաթղթի ներքին անունը (տեսակը): |
| [GetGrandChildren(int, string, string, string, string)](IDocumentService/GetGrandChildren.md) | Նշված փաստաթղթի համար վերադարձնում է «թոռնիկների» ցուցակը։ |
| [GetParentIsn(int)](IDocumentService/GetParentIsn.md#idocumentservicegetparentisnint-մեթոդ) | Վերադարձնում է փաստաթղթի միակ(առաջին) ծնող փաստաթղթի ներքին նույնականացման համարը։ |
| [GetParentIsn(int, string)](IDocumentService/GetParentIsn.md#idocumentservicegetparentisnint-string-մեթոդ) | Վերադարձնում է փաստաթղթի առաջին ծնող փաստաթղթի ներքին նույնականացման համարը, որը ունի նշված ներքին անունը (տեսակը)։ |
| [GetPassedState(int, List&lt;short&gt;, bool, bool)](IDocumentService/GetPassedState.md#idocumentservicegetpassedstateint-listshort-bool-bool-մեթոդ) | Ստուգում է և վերադարձնում փաստաթղթի վերջին կամ առաջին նշանակված վիճակը տրված վիճակների ցուցակից։ |
| [GetPassedState(int, string, bool, bool)](IDocumentService/GetPassedState.md#idocumentservicegetpassedstateint-string-bool-bool-մեթոդ) | Ստուգում է և վերադարձնում փաստաթղթի վերջին կամ առաջին նշանակված վիճակը վիճակների ցուցակը սահմանող sql հարցում արդյունքից։ |
| [GetPassedState(int, short, bool, bool)](IDocumentService/GetPassedState.md#idocumentservicegetpassedstateint-short-bool-bool-մեթոդ) | Ստուգում է տրված վիճակը հանդիանում է փաստաթղթի վերջին կամ առաջին նշանակված վիճակը, թե ոչ։ |
| [GetPassedState(int, bool)](IDocumentService/GetPassedState.md#idocumentservicegetpassedstateint-bool-մեթոդ) | Վերադարձնում է փաստաթղթի վերջին կամ առաջին նշանակված վիճակը։ |
| [GetProcessingModes(string)](IDocumentService/GetProcessingModes.md) | Վերադարձնում է փաստաթղթի կատարման ռեժիմները ըստ փաստաթղթի ներքին անվան (տեսակի)։ |
| [GetSUIDAndDate(int, int, bool)](IDocumentService/GetSUIDAndDate.md) | Փնտրում է նշված վիճակին համապատասխան տողի առկայությունը փաստաթղթի պատմության մեջ ([DOCLOG](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Database/DocLog.html) աղյուսակում) և վերադարձնում ստեղծողին և ամսաթիվը։ |
| [HiDelete(Document, bool)](IDocumentService/HiDelete.md) | Ջնջում է փաստաթղթի նախկինում գրանցած հաշվառումները [HI](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Database/Hi.html) աղյուսակից։ |
| [HiDeleteAll(Document)](IDocumentService/HiDeleteAll.md) | Ջնջում է փաստաթղթի նախկինում գրանցած հաշվառումները [HI](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Database/Hi.html), [HI2](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Database/Hi2.html) և այլ համարժեք աղյուսակներից։ |
| [HiParDelete(Document)](IDocumentService/HiParDelete.md) | [HIPAR](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Database/HiPar.html) աղյուսակից ջնջում է այս փաստաթղթի նախկինում գրանցած պարամետրերի արժեքները։ |
| [IsArchived(int)](IDocumentService/IsArchived.md) | Ստուգում է փաստաթղթի արխիվացված լինելը։ |
| [Load(int, GridLoadMode, bool, bool, bool, bool, bool)](IDocumentService/Load.md#idocumentserviceloadint-gridloadmode-bool-bool-bool-bool-bool-մեթոդ) | Բեռնում է տվյալների պահոցում գոյություն ունեցող փաստաթուղթը ըստ ներքին նույնականացման համարի։ |
| [Load(int, GridLoadMode, bool, bool, bool, bool, Type, bool)](IDocumentService/Load.md#idocumentserviceloadint-gridloadmode-bool-bool-bool-bool-type-bool-մեթոդ) | Բեռնում է տվյալների պահոցում գոյություն ունեցող փաստաթուղթը ըստ ներքին նույնականացման համարի։ |
| [LoadFromFolder(string, string, GridLoadMode, bool, bool)](IDocumentService/LoadFromFolder.md#idocumentserviceloadfromfolderstring-string-gridloadmode-bool-bool-մեթոդ) | Բեռնում է փաստաթուղթը ըստ թղթապանակի և բանալու։ |
| [LoadFromFolder(string, string, GridLoadMode, bool, Type, bool)](IDocumentService/LoadFromFolder.md#idocumentserviceloadfromfolderstring-string-gridloadmode-bool-type-bool-մեթոդ) | Բեռնում է փաստաթուղթը ըստ թղթապանակի և բանալու։ |
| [MakeParentLink(Document, int, bool)](IDocumentService/MakeParentLink.md) | Ընթացիկ փաստաթղթի համար սահմանում է ծնողի հետ կապ։ |
| [NestedTransactions(Document, List<T>, TextReport,bool, bool)](IDocumentService/NestedTransactions.md) | Մեթոդը անցնում է `values` ցուցակի բոլոր տարրերով, յուրաքանչյուրի համար սկսում տրանզակցիա, կանչում [IDocumentNestedTransaction](../types/IDocumentNestedTransaction.md)-ի [NestedTransaction](../types/IDocumentNestedTransaction/NestedTransaction.md)` մեթոդը և ավարտում տրանզակցիան։ Այն անհրաժեշտ է կանչել փաստաթղթի [Action](../definitions/document/Action.md) մեթոդում։ |
| [ReFolder(Document, StoreMode)](IDocumentService/ReFolder.md) | Իրականացնում է փաստաթղթի վերաինդեքսավորումը թղթապանակներում: |
| [SetGridDefaultValues(Document, Dictionary<string, HashSet<string>>)](IDocumentService/SetGridDefaultValues.md) | Վերագրում է լռությամբ արժեքներ փաստաթղթի տրված աղյուսակների տրված սյուներին։ |
| [Store(Document, DocumentCheckLevel, string)](IDocumentService/Store.md) | Անցկացնում է պարտադիր ստուգումներ և գրանցում փաստաթուղթը տվյալների պահոցում։ |
| [StoreFact(Document, Fact)](IDocumentService/StoreFact.md) | Գրանցում է փաստաթղթի հաշվառումը տվյալների պահոցում: |
| [StoreInFolder(Document, FolderElement)](IDocumentService/StoreInFolder.md) | Գրանցում է թղթապանակի տարրը տվյալների պահոցում: |
| [StoreInTree(Document, TreeElement)](IDocumentService/StoreInTree.md) | Գրանցում է ծառի տարրը տվյալների պահոցում: |






