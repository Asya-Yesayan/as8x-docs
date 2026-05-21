---
layout: page
title: DataView
parent: "UI"
has_toc: false
---

# DataView նկարագրություն

## Ներածություն

Այս դասը նախատեսված է դիտելու ձևի նկարագրման համար։

# Կոնստրուկտորներ

| Անվանում | Նկարագրություն |
|----------|----------------|
| [DataView()](Methods/DataView.md) | Ստեղծում է DataView դասի նոր օբյեկտ։ |

## Հատկություններ

| Անվանում | Նկարագրություն |
|----------|----------------|
| [Name](Properties/Name.md) | Սահմանում է դիտելու ձևի ներքին անունը: |
| [SupportsExtensions](Properties/SupportsExtensions.md) | Սահմանում է դիտելու ձևի ընդլայնման իրավասությունը։   |
| [TitleString](Properties/TitleString.md) | Ֆորմատավորված վերնագրի տեքստը՝ ստացված `FormattedStoredValues`-ի `TitleFlag=true` |
| [IsDocumentBased](Properties/IsDocumentBased.md) | Սահմանում է դիտելու ձևի տողերի փաստաթուղթ հանդիսանալու հատկությունը։ |
| [IsUpdatable](Properties/IsUpdatable.md) | Սահմանում է դիտելու ձևի խմբագրված տվյալների թարմացման իրավասությունը։ |
| [Enable2LineHeaders](Properties/Enable2LineHeaders.md) | Սահմանում է, արդյոք դիտելու ձևում սյուների վերնագրերը ցուցադրվելու են 2 տողով։ |
| [AllowAdd](Properties/AllowAdd.md) | Սահմանում է դիտելու ձևում նոր տող ավելացնելու իրավասությունը` IsAddEnabled հատկության հետ համատեղ: |
| [IsAddEnabled](Properties/IsAddEnabled.md) | Սահմանում է դիտելու ձևում նոր տող ավելացնելու իրավասությունը` AllowAdd հատկության հետ համատեղ: |
| [IsEditEnabled](Properties/IsEditEnabled.md) | Սահմանում է դիտելու ձևի ընթացիկ տողը խմբագրման իրավասությունը` IsEditEnabled հատկության հետ համատեղ: |
| [AllowEdit](Properties/AllowEdit.md) | Սահմանում է դիտելու ձևի ընթացիկ տողը խմբագրման իրավասությունը` IsEditEnabled հատկության հետ համատեղ: |
| [AllowDelete](Properties/AllowDelete.md) | Սահմանում է դիտելու ձևի ընթացիկ տողի հեռացման իրավասությունը` IsDeleteEnabled հատկության հետ համատեղ: |
| [AllowView](Properties/AllowView.md) | Սահմանում է դիտելու ձևի ընթացիկ տողի դիտման իրավասությունը: |
| [IsDeleteEnabled](Properties/IsDeleteEnabled.md) | Սահմանում է դիտելու ձևի ընթացիկ տողի հեռացման իրավասությունը` AllowDelete հատկության հետ համատեղ: |
| [AllowCallDocumentFunctions](Properties/AllowCallDocumentFunctions.md) | Սահմանում է դիտելու ձևում ընթացիկ տողում պարունակվող փաստաթղթի և փաստաթղթի ընդլայնման կոնտեքստային ֆունկցիաների ցուցադրման իրավասությունը՝ IsDocumentBased հատկության հետ համատեղ։ |
| [AllowCreateCopy](Properties/AllowCreateCopy.md) | Սահմանում է դիտելու ձևի ընթացիկ տողի պատճենման իրավասությունը` IsCreateCopyEnabled հատկության հետ համատեղ: |
| [IsCreateCopyEnabled](Properties/IsCreateCopyEnabled.md) | Սահմանում է դիտելու ձևի ընթացիկ տողի պատճենման իրավասությունը` AllowCreateCopy հատկության հետ համատեղ: |
| [AllowExport](Properties/AllowExport.md) | Սահմանում է դիտելու ձևի արտահանման իրավասությունը: |
| [AllowDocumentHistory](Properties/AllowDocumentHistory.md) | Սահմանում է դիտելու ձևի ընթացիկ տողի պատմությունը դիտելու իրավասությունը` AllowDocHistory համակարգային պարամետրի համատեղ: |
| [LoadIndication](Properties/LoadIndication.md) | Սահմանում է դիտելու ձևի կատարման պրոգրեսի ցուցադրման ռեժիմը։ |
| [AllowedDocumentsToAdd](Properties/AllowedDocumentsToAdd.md) | Սահմանում է այն փաստաթղթերի ներքին անունների (տեսակների) ցանկը, որոնք թույլատրվում է ավելացնել դիտելու ձևից՝ «Ավելացնել» կոնտեքստային ֆունկցիայի միջոցով։ |
| [AllowEditUDR](Properties/AllowEditUDR.md) | Սահմանում է դիտելու ձևի ընտրված տողերի (փաստաթղթերի) «Օգտագործողի կողմից նկարագրված դաշտերի» խմբագրման իրավասությունը: |
| [AllowDocumentParents](Properties/AllowDocumentParents.md) | Սահմանում է դիտելու ձևի ընթացիկ տողի (փաստաթղթի) ծնող փաստաթղթերի դիտման իրավասությունը: |
| [AllowDocumentChildren](Properties/AllowDocumentChildren.md) | Սահմանում է դիտելու ձևի ընթացիկ տողի (փաստաթղթի) զավակ փաստաթղթերի դիտման իրավասությունը: |
| [ColumnsList](Properties/ColumnsList.md) | Վերադարձնում է դիտելու ձևի սյուների նկարագրությունների ցուցակը։  |
| [CaptionRefreshColumns](Properties/CaptionRefreshColumns.md) | Վերադարձնում է դիտելու ձևի այն սյուների ներքին անունների ցուցակը, որոնց վերնագրերը պետք է թարմացվեն ծրագրի Toolbar-ի «Փոխել պարամետրերը» կոճակով բացվող նախնական ֆիլտրման դիալոգի կատարման արդյունքում։ |

## Մեթոդներ

| Անվանում | Նկարագրություն |
|----------|----------------|
| [Add()](Methods/Add.md) | Սահմանում է դիտելու ձևի «Ավելացնել» կոնտեքստային ֆունկցիայի կատարման արդյունքում բացվող պատուհանը՝ IsDocumentBased հատկության false արժեքի դեպքում։ |
| [AddDocument(string)](Methods/AddDocument.md) | Սահմանում է դիտելու ձևի «Ավելացնել» կոնտեքստային ֆունկցիայի կատարման արդյունքում բացվող պատուհանը՝ IsDocumentBased հատկության true արժեքի դեպքում։ |
| [AddFirstPhase()](Methods/AddFirstPhase.md) | Սահմանում է դիտելու ձևի կատարման պրոգրեսի առաջին փուլի (phase) տեքստը։ |
| [AddRow(R)](Methods/AddRow.md) | Ավելացնում է նոր տող դիտելու ձևում։ |
| [AfterLoadData()](Methods/AfterLoadData.md) | Մեթոդը կանչվում է դիտելու ձևի տվյալները բեռնելուց առաջ։ |
| [AfterLoadUpdatedRows(List&lt;R&gt;)](Methods/AfterLoadUpdatedRows.md) | Կոչվում է `LoadUpdatedRows`-ի կողմից server-ից rows ստանալուց հետո: |
| [ApplyDialog(DataViewDialogWindow, bool)](Methods/ApplyDialog.md) | Այս մեթոդը նախատեսված է դիտելու ձևի CreateDialog մեթոդի միջոցով ստեղծված նախնական ֆիլտրման դիալոգի ցուցադրման և control-ների արժեքները որպես դիտելու ձևի պարամետրեր փոխանցելու համար։ |
| [BeforeLoadData(BeforeLoadDataEventArgs)](Methods/BeforeLoadData.md) | Կոչվում է data loading-ից անմիջապես առաջ: |
| [CaptionToolTip()](Methods/CaptionToolTip.md) | Սահմանում է դիտելու ձևի tooltip-ում ցուցադրվող տեքստը: |
| [ComposeTitle()](Methods/ComposeTitle.md) | Սահմանում է դիտելու ձևի վերնագիրը։ |
| [CreateCopy()](Methods/CreateCopy.md) | Սահմանում է դիտելու ձևի «Պատճենել» կոնտեքստային ֆունկցիայի կատարման արդյունքում բացվող պատուհանը՝ IsDocumentBased հատկության false արժեքի դեպքում: |
| [CreateDialog(bool)](Methods/CreateDialog.md) | Այս մեթոդը նախատեսված է դիտելու ձևի նախնական ֆիլտրման դիալոգի ստեղծման և վերադարձման համար։ |
| [Delete()](Methods/Delete.md) | Սահմանում է դիտելու ձևի «Հեռացնել» կոնտեքստային ֆունկցիայի կատարման արդյունքում բացվող պատուհանը՝ IsDocumentBased հատկության false արժեքի դեպքում։ |
| [DeleteDocument()](Methods/DeleteDocument.md) | Սահմանում է դիտելու ձևի «Հեռացնել» կոնտեքստային ֆունկցիայի կատարման արդյունքում բացվող պատուհանը՝ IsDocumentBased հատկության true արժեքի դեպքում։ |
| [DocumentHistory()](Methods/DocumentHistory.md) | Սահմանում է դիտելու ձևի «Պատմություն» կոնտեքստային ֆունկցիայի կատարման արդյունքում բացվող պատուհանը։ |
| [Edit()](Methods/Edit.md) | Սահմանում է դիտելու ձևի «Դիտել/Խմբագրել» կոնտեքստային ֆունկցիայի կատարման արդյունքում բացվող պատուհանը՝ IsDocumentBased հատկության false արժեքի դեպքում։ |
| [EditDocument(bool)](Methods/EditDocument.md) | Սահմանում է դիտելու ձևի «Դիտել/Խմբագրել» կոնտեքստային ֆունկցիայի կատարման արդյունքում բացվող պատուհանը՝ IsDocumentBased հատկության true արժեքի դեպքում։ |
| [ExecutionSuppressed()](Methods/ExecutionSuppressed.md) | Կոչվում է, երբ `SuppressExecution=true` և data loading-ը ճնշվում է: |
| [FillData(object)](Methods/FillData.md) | Ավելացնում է նշված տողերի ցուցակը դիտելու ձևում: |
| [GetDefaultFunction()](Methods/GetDefaultFunction.md) | Սահմանում է լռությամբ բացվող կոնտեքստային ֆունկցիան` դիտելու ձևի ընթացիկ տողի կրկնակի սեղմում կատարելիս։ |
| [GetDynamicValue(object, string)](Methods/GetDynamicValue.md) | Վերադարձնում է դիտելու ձևի cell-ի արժեքը՝ ըստ փոխանցված տողի և սյան անվան։ |
| [GetISN(object)](Methods/GetISN.md) | Վերադարձնում է դիտելու ձևի տրված տողում պարունակվող փաստաթղթի isn-ը։ |
| [GetUpdatedRows(object)](Methods/GetUpdatedRows.md) | Ստանում է server-ից թարմ rows-ը ըստ `key`-ի: |
| [GridSource()](Methods/GridSource.md) | Վերադարձնում է դիտելու ձևի տողերի ցուցակը։ |
| [InitContextFunctions()](Methods/InitContextFunctions.md) | Ստեղծում և վերադարձնում է դիտելու ձևի կոնտեքստային մենյուն։ |
| [IsProgressCanceled()](Methods/IsProgressCanceled.md) | Ցույց է տալիս, արդյոք դիտելու ձևի կատարման պրոգրեսը ընդհատվել է օգտագործողի կողմից։ |
| [LoadUpdatedRows(object)](Methods/LoadUpdatedRows.md) | Թարմացնում է `key`-ին համապատասխան row(ներ)ը Rows հավաքածուում: |
| [OpenTree()](Methods/OpenTree.md) | Բացում է ֆոկուսավորված row-ի tree ներկայացումը: Լռությամբ ոչինչ չի կատարում: |
| [ReloadRows(LoadSource)](Methods/ReloadRows.md) | Վերբեռնում է դիտելու ձևի տողերը։  |
| [ReportTitle()](Methods/ReportTitle.md) | Վերադարձնում է DataView-ի հիմնական վերնագիրը՝ `Caption`-ը: |
| [ReportTitle(IEnumerable&lt;StoredValueInfo&gt;)](Methods/ReportTitle_2.md) | Ստեղծում է վերնագիր՝ ներառելով `storedValueInfos` արժեքները: |
| [ToolTipItemsHandle(IEnumerable&lt;StoredValueInfo&gt;)](Methods/ToolTipItemsHandle.md) | Մշակում է `StoredValueInfo` արժեքները tooltip ցուցադրման համար: |
| [View()](Methods/View.md) | Սահմանում է դիտելու ձևի «Դիտել/Խմբագրել» կոնտեքստային ֆունկցիայի կատարման արդյունքում բացվող դիտման պատուհանը՝ IsDocumentBased հատկության false արժեքի դեպքում։ |