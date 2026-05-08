---
layout: page
title: DataView
parent: "UI"
has_toc: false
---

# DataView նկարագրություն

## Ներածություն

DataView-ի աբստրակտ հիմնական դաս՝ WPF grid-ի ցուցադրման, CRUD գործողությունների,
progress-ի, dialog-ի, extension-ի և tooltip-ի ամբողջ ենթակառուցվածքով:

## Մեթոդներ

| Անվանում | Նկարագրություն |
|----------|----------------|
| [Add()](Methods/Add.md) | Ավելացման գործողություն՝ ոչ-փաստաթղթային DataView-ի համար: |
| [AddDocument(string docType)](Methods/AddDocument.md) | Ստեղծում և ցուցադրում է նոր փաստաթուղթ: |
| [AddFirstPhase()](Methods/AddFirstPhase.md) | Ավելացնում է progress-ի առաջին (initial) փուլը "ProcessingData" անվամբ: |
| [AddRow(R row)](Methods/AddRow.md) | Thread-safe կերպով ավելացնում է `row`-ը Rows հավաքածուին: |
| [AfterLoadData()](Methods/AfterLoadData.md) | Կոչվում է data loading-ի ավարտին: |
| [AfterLoadUpdatedRows(List<R> rows)](Methods/AfterLoadUpdatedRows.md) | Կոչվում է `LoadUpdatedRows`-ի կողմից server-ից rows ստանալուց հետո: |
| [ApplyDialog(DataViewDialogWindow dialog, bool isRefreshMode)](Methods/ApplyDialog.md) | Կիրառում է dialog-ի ընտրված պարամետրերը DataView-ի Parameters-ի վրա: |
| [BeforeLoadData(BeforeLoadDataEventArgs args)](Methods/BeforeLoadData.md) | Կոչվում է data loading-ից անմիջապես առաջ: |
| [CaptionToolTip()](Methods/CaptionToolTip.md) | Վերադարձնում է DataView-ի tooltip-ում ցուցադրվող վերնագիրը: |
| [ComposeTitle()](Methods/ComposeTitle.md) | Ստեղծում է ֆորմատավորված բազմատող վերնագիր՝ `IncludeCaptionToolTip=true` |
| [CreateCopy()](Methods/CreateCopy.md) | Ստեղծում է ֆոկուսավորված row-ի/փաստաթղթի պատճենը: Լռությամբ ոչինչ չի կատարում: |
| [CreateDialog(bool isRefresh)](Methods/CreateDialog.md) | Ստեղծում է DataView-ի պարամետրային dialog-ը: |
| [DataView()](Methods/DataView.md) | Ստեղծում է DataView-ի ինստանս, կարդում է `DataViewAttribute`-ից `Name`-ը, |
| [Delete()](Methods/Delete.md) | Ջնջման գործողություն՝ ոչ-փաստաթղթային DataView-ի համար: Լռությամբ ոչինչ չի կատարում: |
| [DeleteDocument()](Methods/DeleteDocument.md) | Ջնջում է ֆոկուսավորված row-ի փաստաթուղթը՝ կատարելով վիճակի ստուգումներ: |
| [DocumentHistory()](Methods/DocumentHistory.md) | Ցուցադրում է ֆոկուսավորված row-ի փաստաթղթի փոփոխությունների պատմությունը: |
| [Edit()](Methods/Edit.md) | Խմբագրման գործողություն՝ ոչ-փաստաթղթային DataView-ի համար: |
| [EditDocument(bool isReadOnly)](Methods/EditDocument.md) | Բացում է ֆոկուսավորված row-ի փաստաթղթի պատուհանը: |
| [ExecutionSuppressed()](Methods/ExecutionSuppressed.md) | Կոչվում է, երբ `SuppressExecution=true` և data loading-ը ճնշվում է: |
| [FillData(object filledList)](Methods/FillData.md) | Փոխարինում է Rows հավաքածուն `filledList`-ի բովանդակությամբ: |
| [GetDefaultFunction()](Methods/GetDefaultFunction.md) | Վերադարձնում է DataView-ի լռային կոնտեքստային ֆունկցիայի անունը: |
| [GetDynamicValue(object row, string columnName)](Methods/GetDynamicValue.md) | Վերադարձնում է `ExtendableRow`-ի դինամիկ column-ի արժեքը: |
| [GetISN(object row)](Methods/GetISN.md) | Վերադարձնում է տրված row-ի ISN արժեքը: |
| [GetUpdatedRows(object key)](Methods/GetUpdatedRows.md) | Ստանում է server-ից թարմ rows-ը ըստ `key`-ի: |
| [GridSource()](Methods/GridSource.md) | Վերադարձնում է DataView-ի Rows հավաքածուն grid binding-ի համար: |
| [IncrementCurrentPhaseRow()](Methods/IncrementCurrentPhaseRow.md) | Ավելացնում է 1 ընթացիկ progress փուլի row count-ին: |
| [InitContextFunctions()](Methods/InitContextFunctions.md) | Ստեղծում և վերադարձնում է DataView-ի կոնտեքստային ֆունկցիաների popup menu-ն: |
| [IsProgressCanceled()](Methods/IsProgressCanceled.md) | Ստուգում է՝ արդյոք progress-ը չեղարկվել է օգտագործողի կողմից: |
| [LoadUpdatedRows(object key)](Methods/LoadUpdatedRows.md) | Թարմացնում է `key`-ին համապատասխան row(ներ)ը Rows հավաքածուում: |
| [OpenTree()](Methods/OpenTree.md) | Բացում է ֆոկուսավորված row-ի tree ներկայացումը: Լռությամբ ոչինչ չի կատարում: |
| [ReloadRows(LoadSource source)](Methods/ReloadRows.md) | Ամբողջականորեն թարմացնում է Rows հավաքածուն՝ մաքրելով հին rows-ը և վերաբեռնելով: |
| [ReportTitle()](Methods/ReportTitle.md) | Վերադարձնում է DataView-ի հիմնական վերնագիրը՝ `Caption`-ը: |
| [ReportTitle(IEnumerable<StoredValueInfo> storedValueInfos)](Methods/ReportTitle_2.md) | Ստեղծում է վերնագիր՝ ներառելով `storedValueInfos` արժեքները: |
| [ShowProgressInside()](Methods/ShowProgressInside.md) | Ցուցադրում է inline progress control-ը panel-ի ներսում: |
| [ShowProgressWindow()](Methods/ShowProgressWindow.md) | Ցուցադրում է modal progress window՝ data loading-ի ժամանակ: |
| [ToolTipItemsHandle(IEnumerable<StoredValueInfo> items)](Methods/ToolTipItemsHandle.md) | Մշակում է `StoredValueInfo` արժեքները tooltip ցուցադրման համար: |
| [UpdateCurrentPhaseRow(int row)](Methods/UpdateCurrentPhaseRow.md) | Թարմացնում է ընթացիկ progress փուլի row count-ը: |
| [View()](Methods/View.md) | Դիտման գործողություն: Լռությամբ ոչինչ չի կատարում: |
| [ViewParametersReport()](Methods/ViewParametersReport.md) | Ցուցադրում է DataView-ի բոլոր parameters-ի textual report-ը: |

## Հատկություններ

| Անվանում | Նկարագրություն |
|----------|----------------|
| [Name](Properties/Name.md) | DataView-ի մետա-անունը՝ ստացված `DataViewAttribute`-ից: |
| [SupportsExtensions](Properties/SupportsExtensions.md) | Ինդիկացնում է՝ արդյոք DataView-ն աջակցում է extension-ներին: |
| [TitleString](Properties/TitleString.md) | Ֆորմատավորված վերնագրի տեքստը՝ ստացված `FormattedStoredValues`-ի `TitleFlag=true` |
| [IsDocumentBased](Properties/IsDocumentBased.md) | Ինդիկացնում է՝ արդյոք DataView-ի rows-ը փաստաթղթային ռեկորդներ են: |
| [IsUpdatable](Properties/IsUpdatable.md) | Ինդիկացնում է՝ արդյոք DataView-ի rows-ը կարող են թարմացվել `LoadUpdatedRows`-ի միջոցով: |
| [Enable2LineHeaders](Properties/Enable2LineHeaders.md) | DataView-ի grid-ը միշտ ցուցադրում է 2-տողանի header-ներ: |
| [ReloadMode](Properties/ReloadMode.md) | DataView-ի Refresh/Reload ռեժիմը: |
| [AllowAdd](Properties/AllowAdd.md) | Սահմանում է դիտելու ձևում նոր տող ավելացնելու իրավասությունը` IsAddEnabled հատկության հետ համատեղ: |
| [IsAddEnabled](Properties/IsAddEnabled.md) | Սահմանում է դիտելու ձևում նոր տող ավելացնելու իրավասությունը` AllowAdd հատկության հետ համատեղ: |
| [IsEditEnabled](Properties/IsEditEnabled.md) | Սահմանում է դիտելու ձևի ընթացիկ տողը խմբագրման իրավասությունը` IsEditEnabled հատկության հետ համատեղ: |
| [AllowView](Properties/AllowView.md) | Ինդիկացնում է՝ արդյոք DataView-ից թույլատրված է փաստաթղթի read-only դիտումը: |
| [IsDeleteEnabled](Properties/IsDeleteEnabled.md) | Սահմանում է դիտելու ձևի ընթացիկ տողի հեռացման իրավասությունը` AllowDelete հատկության հետ համատեղ: |
| [AllowCallDocumentFunctions](Properties/AllowCallDocumentFunctions.md) | Ինդիկացնում է՝ արդյոք DataView-ի կոնտեքստից թույլատրված է փաստաթղթի կոնտեքստային ֆունկցիաների կանչը: |
| [AllowCreateCopy](Properties/AllowCreateCopy.md) | Ինդիկացնում է՝ արդյոք DataView-ից թույլատրված է ընթացիկ row-ի/փաստաթղթի պատճենի ստեղծումը: |
| [IsCreateCopyEnabled](Properties/IsCreateCopyEnabled.md) | Սահմանում է դիտելու ձևի ընթացիկ տողի պատճենման իրավասությունը` IsCreateCopyEnabled հատկության հետ համատեղ: |
| [AllowPreview](Properties/AllowPreview.md) | Ինդիկացնում է՝ արդյոք DataView-ից թույլատրված է print preview-ն: |
| [AllowExport](Properties/AllowExport.md) | Ինդիկացնում է՝ արդյոք DataView-ից թույլատրված է տվյալների export-ը: |
| [AllowDocumentHistory](Properties/AllowDocumentHistory.md) | Սահմանում է դիտելու ձևի ընթացիկ տողի պատմությունը դիտելու իրավասությունը` AllowDocHistory համակարգային պարամետրի համատեղ: |
| [LoadIndication](Properties/LoadIndication.md) | Տվյալների բեռնման progress ցուցադրման ռեժիմը: |
| [AllowedDocumentsToAdd](Properties/AllowedDocumentsToAdd.md) | `AddDocument`-ի կողմից թույլատրված փաստաթղթային տիպերի ցանկ: |
| [AllowEditUDR](Properties/AllowEditUDR.md) | Ինդիկացնում է՝ արդյոք թույլատրված է UDR (user-defined reports) խմբագրումը: |
| [AllowPrintPreview](Properties/AllowPrintPreview.md) | Ինդիկացնում է՝ արդյոք DataView-ից հասանելի է print preview-ն: |
| [AllowDocumentParents](Properties/AllowDocumentParents.md) | Ինդիկացնում է՝ արդյոք DataView-ից հասանելի է փաստաթղթի parent-ների դիտումը: |
| [AllowDocumentChildren](Properties/AllowDocumentChildren.md) | Ինդիկացնում է՝ արդյոք DataView-ից հասանելի է փաստաթղթի children-ների դիտումը: |
| [ColumnsList](Properties/ColumnsList.md) | DataView-ի ցուցադրվող սյուների read-only ցուցակը: |
| [CaptionRefreshColumns](Properties/CaptionRefreshColumns.md) | Այն սյուների անուններն, որոնց caption-ները թարմացվում են dialog-ի կատարման ավարտից հետո: |
