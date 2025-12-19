---
title: Document նկարագրություն
---

## Ներածություն

```c#
public class Document : DocumentBase
```

Document դասը հիմք է հանդիսանում է փաստաթղթերի սահմանման համար։ 
Բոլոր փաստաթղթերը ունեն [Document ատրիբուտը](../types/attributes/DocumentAttribute.md) և ժառանգ են հանդիսանում այս դասից, որը տրամադրում է վիրտուալ մեթոդներ սեփական սերվերային տրամաբանության սահմանման համար և հատկություններ փաստաթղթի մետատվյալների ստացման համար։

8X համակարգում փաստաթուղթ նկարագրելու համար հարկավոր է ունենալ՝
* .as ընդլայնմամբ ֆայլ սկրիպտերում [DOCUMENT](#document-նկարագրություն) նկարագրությամբ։ 
  Այն անհրաժեշտ է ներմուծել տվյալների բազա `Syscon` գործիքի միջոցով։
* .cs ընդլայնմամբ ֆայլ, որը պարունակում է սերվերում աշխատող տրամաբանությունը։

[.as և c# ֆայլերի նկարագրման ամբողջական օրինակ](../examples/document_definition.md)

## Մեթոդներ

| Անվանում | Նկարագրություն |
|----------|----------------|
| [Action(ActionEventArgs)](document/Methods/Action.md) | Մեթոդը կանչվում է միջուկի կողմից [IDocumentService](../services/IDocumentService.md).[Store](document/Methods/Store.md) ֆունկցիայով փաստաթուղթը տվյալների պահոցում գրանցելուց առաջ։ |
| [AddParent(int)](document/Methods/AddParent.md) | Ավելացնում է տրված isn-ով փաստաթուղթը փաստաթղթի ծնող փաստաթղթերի ցուցակում։ |
| [AfterCommit(AfterCommitEventArgs)](document/Methods/AfterCommit.md) | Մեթոդը կանչվում է միջուկի կողմից [IDocumentService](../services/IDocumentService.md).[Load](../../controllers/Document/Methods/Load.md) ֆունկցիայով փաստաթուղթը տվյալների պահոցից բեռնելուց անմիջապես հետո։ |
| [AfterCreate(AfterCreateEventArgs)](document/Methods/AfterCreate.md) | Մեթոդը կանչվում է միջուկի կողմից [IDocumentService](../services/IDocumentService.md).[Create](../../Bank/Client/Routes/LoanApplicationsRoutes/Methods/Create.md) ֆունկցիայով փաստաթղթի օբյեկտը ստեղծելուց հետո։ |
| [AfterLoad(AfterLoadEventArgs)](document/Methods/AfterLoad.md) | Մեթոդը կանչվում է միջուկի կողմից [IDocumentService](../services/IDocumentService.md).[Load](../../controllers/Document/Methods/Load.md) ֆունկցիայով փաստաթուղթը տվյալների պահոցից բեռնելուց անմիջապես հետո։ |
| [ApplySnapshot(DocumentSnapshot)](document/Methods/ApplySnapshot.md) | `snapshot` պարամետրում եղած փաստաթղթի քեշավորված պատկերի արժեքները վերագրում է փաստաթղթի դաշտերին և աղյուսակներին։ |
| [BeforeCommit(BeforeCommitEventArgs)](document/Methods/BeforeCommit.md) | Մեթոդը կանչվում է միջուկի կողմից [IDocumentService](../services/IDocumentService.md).[Store](document/Methods/Store.md) ֆունկցիայով փաստաթուղթը տվյալների պահոցում գրանցելուց տրանզակցիան փակելուց առաջ։ |
| [BeforeCopy(BeforeCopyEventArgs)](document/Methods/BeforeCopy.md) | Մեթոդը կանչվում է միջուկի կողմից [IDocumentService](../services/IDocumentService.md).[Copy](../services/IAttachmentService/Methods/Copy.md) ֆունկցիայով փաստաթղթի պատճեն օբյեկտը ստեղծելուց հետո։ |
| [BeforeImportProcessing(BeforeImportProcessingEventArgs)](document/Methods/BeforeImportProcessing.md) | Մեթոդը կանչվում է միջուկի կողմից փաստաթղթերի ներմուծման ժամանակ փաստաթղթի օբյեկտի ստեղծելուց հետո։ |
| [Body()](document/Methods/Body.md) | Վերադարձնում է փաստաթղթի սերիալիզացված դաշտերի բազմությունը որպես տեքստ, ինչպես գրված է ներմուծման .as ընդլայնմամբ ֆայլում կամ [DOCS](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Database/Docs.html) աղյուսակի `fBODY` սյունում։ |
| [BuildEmbeddedUIRequest(T uiRequestExecutionProgress)](document/Methods/BuildEmbeddedUIRequest.md) | Եթե [DPR](dpr.md)-ի [Execute](dpr/Methods/Execute.md) կամ փաստաթղթի կամայական մեթոդում նախատեսվում է կանչել մեկ այլ փաստաթղթի [Store](document/Methods/Store.md)/[Delete](../../controllers/Document/Methods/Delete.md) մեթոդները, և անհրաժեշտ է, որ այդ մեթոդների կանչի ընթացքում առաջացող հաղորդագրությունները ցուցադրվեն UI-ում, ապա այդ մեթոդների կանչից առաջ անհրաժեշտ է կանչել BuildEmbeddedUIRequest մեթոդը՝ փոխանցելով համապատասխան կատարման պրոգրեսը: |
| [ConfigureDCRFieldInclusion(ConfigureDCRFieldInclusionEventArgs)](document/Methods/ConfigureDCRFieldInclusion.md) | Այս մեթոդը թույլ է տալիս որոշել, թե փաստաթղթի որ դաշտերի փոփոխությունները պետք է ցուցադրվեն տեքստային հաշվետվությունում, որը բացվում է **«Փաստաթղթի պատմություն»** դիտելու ձևի **«Դիտել փոփոխությունները տեքստային»**, **«Դիտել փոփոխությունները տեքստային համեմատիչով»** կոնտեքստային ֆունկցիաներով։ |
| [DefaultComment(DefaultCommentEventArgs)](document/Methods/DefaultComment.md) | Մեթոդը կանչվում է միջուկի կողմից փաստաթղթի [թղթապանակի տարր](../types/FolderElement.md) ստեղծելուց մեկնաբանություն լրացնելու համար։ |
| [DefineLimits(string, int, DateTime, decimal, decimal)](document/Methods/DefineLimits.md) | Սահմանում է հաշվառման վերին և ստորին սահմանաչափերը։ |
| [Delete(DeleteEventArgs)](../../controllers/Document/Methods/Delete.md) | Մեթոդը կանչվում է միջուկի կողմից [IDocumentService](../services/IDocumentService.md).[Delete](../../controllers/Document/Methods/Delete.md) ֆունկցիայով փաստաթղթի ջնջելուց առաջ։ |
| [DeserializeComplexObjects(DeserializeComplexObjectsEventArgs)](document/Methods/DeserializeComplexObjects.md) | Մեթոդը անհրաժեշտ է մշակել այն դեպքում, երբ 4X-ական փաստաթղթի [Properties](document/Properties/Properties.md) հատկությունով եկած բարդ օբյեկտները անհրաժեշտ է բերել համապատասխան c#-ական տիպերի 8X-ում։ |
| [ExistsGrid(string)](document/Methods/ExistsGrid.md) | Ստուգում է տրված ներքին անունով աղյուսակի առկայությունը փաստաթղթի նկարագրության մեջ։ |
| [ExistsRekvizit(string)](document/Methods/ExistsRekvizit.md) | Ստուգում է տրված ներքին անունով դաշտի առկայությունը փաստաթղթի նկարագրության մեջ։ |
| [Folders(FoldersEventArgs)](document/Methods/Folders.md) | Մեթոդը կանչվում է միջուկի կողմից [IDocumentService](../services/IDocumentService.md).[Store](document/Methods/Store.md) ֆունկցիայով փաստաթուղթը տվյալների պահոցում գրանցելուց առաջ։ |
| [GetCheckValue(string)](document/Methods/GetCheckValue.md) | Վերադարձնում է փաստաթղթի նշված ներքին անունով դաշտի տիպի ստուգման հայտանիշը: |
| [GetFieldType(string)](document/Methods/GetFieldType.md) | Վերադարձնում է փաստաթղթի տրված ներքին անունով դաշտի [համակարգային տիպը](../types/system_types.md)։ |
| [GetImage(string)](document/Methods/GetImage.md) | Վերադարձնում է փաստաթղթի տրված ներքին անունով նկար դաշտը՝ որպես byte տիպի զանգված։ |
| [GetMemo(string)](document/Methods/GetMemo.md) | Վերադարձնում է փաստաթղթի տրված ներքին անունով մեծ տեքստային դաշտի (մեմոյի) արժեքը։ |
| [GetNextTrans()](document/Methods/GetNextTrans.md) | Վերադարձնում է փաստաթղթի տրանզակցիայի հերթական նոր համարը։ |
| [GetParents()](document/Methods/GetParents.md) | Վերադարձնում է փաստաթղթի ծնող փաստաթղթերի isn-ների ցուցակը։ |
| [Grid(string)](document/Methods/Grid.md) | Վերադարձնում է փաստաթղթի տրված ներքին անունով աղյուսակը։ |
| [InitGrids()](document/Methods/InitGrids.md) | Ձևավորում է փաստաթղթի աղյուսակները՝ առանց տվյալների բեռնելու։ |
| [DoLoadGrids(LoadGridsEventArgs)](document/Methods/DoLoadGrids.md) | Մեթոդը կանչվում է միջուկի կողմից [IDocumentService](../services/IDocumentService.md).[Load](../../controllers/Document/Methods/Load.md) մեթոդի միջոցով փաստաթուղթը բեռնելիս։ |
| [LoadGrids(LoadGridsEventArgs)](document/Methods/LoadGrids.md) | Բեռնում է փաստաթղթի աղյուսակները, եթե մինչ այդ բեռնված չէին [IDocumentService](../services/IDocumentService.md).[Load](../../controllers/Document/Methods/Load.md) մեթոդով: |
| [LoadImagesAndMemos(ArchiveInfo)](document/Methods/LoadImagesAndMemos.md) | Բեռնում է փաստաթղթի նկարները և մեծ տեքստային դաշտերը (մեմոներ) տվյալների պահոցից` մինչև այս բեռնված չլինելու դեպքում։ |
| [LoadParents()](document/Methods/LoadParents.md) | Բեռնում է փաստաթղթի ծնող փաստաթղթերի isn-ների ցուցակը տվյալների պահոցից` անկախ այն փաստից մինչև այդ բեռնված էին թե ոչ։ |
| [OnConfirmDocumentChangeRequest(ConfirmDocumentChangeRequestEventArgs)](document/Methods/OnConfirmDocumentChangeRequest.md) | Մեթոդը կանչվում է միջուկի կողմից փաստաթղթի փոփոխման հայտը `IDocumentChangeRequestService.Confirm` մեթոդով հաստատելիս։ |
| [OnRefuse(RefuseEventArgs)](document/Methods/OnRefuse.md) | Մեթոդը կանչվում է միջուկի կողմից [IDocumentService](../services/IDocumentService.md).[Delete](../../controllers/Document/Methods/Delete.md) մեթոդի միջոցով փաստաթղթի ջնջելուց առաջ, եթե մեթոդի `callDelete` պարամետրի արժեքը `false` է։ |
| [OnRejectDocumentChangeRequest(RejectDocumentChangeRequestEventArgs)](document/Methods/OnRejectDocumentChangeRequest.md) | Մեթոդը կանչվում է միջուկի կողմից՝ [փաստաթղթի փոփոխման հայտը](../types/DocumentChangeRequest.md) մերժելիս։ |
| [PostMessage(PostMessageEventArgs)](document/Methods/PostMessage.md) | Մեթոդը կանչվում է միջուկի կողմից, երբ կից փաստաթղթից այս փաստաթղթին ուղարկվում է ծրագրային հաղորդագրություն [SendMessage(string, int, string, bool, bool)](document/Methods/SendMessage.md) ֆունկցիայի միջոցով, դրանից հետո այս փաստաթուղթը գրանցվում է տվյալների պահոցում։ |
| [RefreshTimeStamp()](document/Methods/RefreshTimeStamp.md) | Բեռնում է փաստաթղթի վերջին փոփոխման ամսաթիվը/ժամանակը տվյալների պահոցից և այն թարմացնում հիշողության մեջ՝ վերագրելով [TimeStamp](document/Properties/TimeStamp.md) հատկությանը։ |
| [SendMessage(string, int, string, bool, bool)](document/Methods/SendMessage.md) | Ուղարկում է հաղորդագրություն այլ փաստաթղթի (կամ ծնող փաստաթղթերին) աշխատացնելով [PostMessage(PostMessageEventArgs)](document/Methods/PostMessage.md) ֆունկցիան: |
| [SerializeComplexObjects(SerializeComplexObjectsEventArgs)](document/Methods/SerializeComplexObjects.md) | Մեթոդը անհրաժեշտ է մշակել այն դեպքում, երբ 8X-ական փաստաթղթի [Properties](document/Properties/Properties.md) հատկությունում եկած բարդ օբյեկտները անհրաժեշտ է բերել 4X-ական տիպերի՝ 4X-ում օգտագործելու համար։ |
| [SetCheckValue(string, bool)](document/Methods/SetCheckValue.md) | Նշանակում է փաստաթղթի նշված ներքին անունով դաշտի [համակարգային տիպի](../types/system_types.md) ստուգման հայտանիշը: |
| [SetDefaultValuesForFields(IList&lt;string&gt;)](document/Methods/SetDefaultValuesForFields.md) | Վերագրում է լռությամբ արժեքներ փաստաթղթի տրված դաշտերին։ |
| [SetDefaultValuesForFields(string[])](document/SetDefaultValuesForFields.md#documentsetdefaultvaluesforfieldsstring-մեթոդ) | Վերագրում է լռությամբ արժեքներ փաստաթղթի տրված դաշտերին։ |
| [SetImage(string, byte[])](document/SetImage.md) | Արժեքավորում է փաստաթղթի տրված ներքին անունով նկար դաշտը։ |
| [SetMemo(string, string)](document/Methods/SetMemo.md) | Արժեքավորում է փաստաթղթի տրված ներքին անունով մեծ տեքստային դաշտը (մեմո)։ |
| [Store(DocumentCheckLevel, string)](document/Methods/Store.md) | Կատարում է պարտադիր ստուգումներ և գրանցում փաստաթուղթը տվյալների պահոցում։ |
| [StoreGrids(StoreGridsEventArgs)](document/Methods/StoreGrids.md) | Մեթոդը կանչվում է միջուկի կողմից փաստաթուղթը [IDocumentService](../services/IDocumentService.md).[Store](document/Methods/Store.md) մեթոդի միջոցով տվյալների պահոցում գրանցելուց։ |
| [StoreValuesHistory()](document/Methods/StoreValuesHistory.md) | Փաստաթղթի դաշտերի արժեքները գրանցում է տվյալների պահոցի `LASTVALUESGROUP` աղյուսակում։ |
| [TakeSnapshot(SnapshotContent, string, bool)](document/Methods/TakeSnapshot.md) | Քեշավորում և պահպանում է փաստաթղթի պատկերը [Snapshots](document/Properties/Snapshots.md)-ում։ |
| [TemplateSubstitution(Dictionary&lt;string, bool&gt;, Dictionary&lt;string, object&gt;)](document/Methods/TemplateSubstitution.md) | Մեթոդը կանչվում է միջուկի կողմից, երբ փաստաթղթի համար ձևավորվում է տպման ձև և անջատված է [TemplateSubstitutionIsExtended](document/Properties/TemplateSubstitutionIsExtended.md) հատկությունը։ |
| [TemplateSubstitutionEx(Dictionary&lt;string, bool&gt;, Dictionary&lt;string, object&gt;)](document/Methods/TemplateSubstitutionEx.md) | Մեթոդը կանչվում է միջուկի կողմից, երբ փաստաթղթի համար ձևավորվում է տպման ձև և միացված է [TemplateSubstitutionIsExtended](document/Properties/TemplateSubstitutionIsExtended.md) հատկությունը։ |
| [Validate(ValidateEventArgs)](document/Methods/Validate.md) | Մեթոդը կանչվում է միջուկի կողմից [IDocumentService](../services/IDocumentService.md).[Store](document/Methods/Store.md) ֆունկցիայով փաստաթուղթը տվյալների պահոցում գրանցելուց առաջ։ |
| [WriteLog(string, int, bool)](document/Methods/WriteLog.md) | Ավելացնում է նոր գրառում [փաստաթղթի պատմության](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Database/DocLog.html) մեջ։ |

## Հատկություններ

| Անվանում | Նկարագրություն |
|----------|----------------|
| [Archived](document/Properties/Archived.md) | Ցույց է տալիս փաստաթղթի արխիվացված լինելը։ |
| [CancellationToken](document/Properties/CancellationToken.md) | Փաստաթղթի գրանցման ժամանակ դադարեցման տոկեն։ |
| [CopiedFrom](document/Properties/CopiedFrom.md) | Վերադարձնում է այն փաստաթղթի isn-ը, որից պատճենվել է տվյալ փաստաթուղթը։ |
| [CreatorSUID](document/Properties/CreatorSUID.md) | Վերադարձնում է փաստաթուղթը ստեղծողի ներքին համարը (user id): |
| [CreationDate](document/Properties/CreationDate.md) | Վերադարձնում է փաստաթղթի ստեղծման ամսաթիվը/ժամանակը։ |
| [Description](document/Properties/Description.md) | Վերադարձնում է փաստաթղթի նկարագրությունը, որը պարունակում է փաստաթղթի աղյուսակների, դաշտերի, մեմոների, նկարների հատկությունները։ |
| [DocumentChangeRequest](document/Properties/DocumentChangeRequest.md) | Վերադարձնում է փաստաթղթի փոփոխման հայտը գրանցման իրադարձություններում ([Validate(ValidateEventArgs)](document/Methods/Validate.md), [Action(ActionEventArgs)](document/Methods/Action.md)), երբ փոփոխման հայտը հաստատվում է։ |
| [DocumentLog](document/Properties/DocumentLog.md) | Նախատեսված է փաստաթղթի լոգերի ժամանակավոր պահպանման համար, որոնք գրանցվում են [փաստաթղթի պատմությունում](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Database/DocLog.html) փաստաթղթի [գրանցման](document/Methods/Store.md) ժամանակ։ |
| [Deleting](document/Properties/Deleting.md) | Ցույց է տալիս, արդյոք փաստաթուղթը հեռացման ընթացքում է [IDocumentService](../services/IDocumentService.md) դասի [Delete](../../controllers/Document/Methods/Delete.md), [DeleteAll](../../controllers/Document/Methods/DeleteAll.md) մեթոդների միջոցով։ |
| [ExistsInDB](document/Properties/ExistsInDB.md) | Ցույց է տալիս փաստաթղթի գրանցված լինելը տվյալների պահոցում։ |
| [Grids](document/Properties/Grids.md) | Վերադարձնում է փաստաթղթի աղյուսակների բազմությունը, որտեղ բանալին աղյուսակի ներքին անունն է, իսկ արժեքը՝ աղյուսակը IGrid ինտերֆեյսով։ |
| [GridsInitialized](document/Properties/GridsInitialized.md) | Ցույց է տալիս փաստաթղթի [աղյուսակների ձևավորված լինելը](document/Methods/InitGrids.md)։ |
| [GridsLoaded](document/Properties/GridsLoaded.md) | Ցույց է տալիս փաստաթղթի աղյուսակների բեռնված լինելը։ |
| [GridsLoading](document/Properties/GridsLoading.md) | Ցույց է տալիս փաստաթղթի աղյուսակները գտնվում են բեռնման պրոցեսում թե ոչ։ |
| [IsLogged](document/Properties/IsLogged.md) | Ցույց է տալիս, արդյոք փաստաթղթի լոգերը գրանցվել են [փաստաթղթի պատմություն](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Database/DocLog.html)-ում [WriteLog(string, int, bool)](document/Methods/WriteLog.md) մեթոդի միջոցով։ |
| [indexer](document/Properties/indexer.md) | Վերադարձնում կամ նշանակում է փաստաթղթի տրված ներքին անունով դաշտի արժեքը։ |
| [InitialSnapshot](document/Properties/InitialSnapshot.md) | [Snapshots](document/Properties/Snapshots.md)-ից վերադարձնում է `"InitialSnapshot"` բանալիով փաստաթղթի քեշավորված պատկերը։ |
| [ISN](document/Properties/ISN.md) | Վերադարձնում է փաստաթղթի ներքին նույնականացման համարը (isn-ը): |
| [IsNew](document/Properties/IsNew.md) | Վերադարձնում է փաստաթղթի նոր կամ սևագիր լինելու հայտանիշը։ |
| [IsUIOrigin](document/Properties/IsUIOrigin.md) | Ցույց է տալիս փաստաթղթի պատուհանը երևում է UI-ում, թե ոչ։ |
| [LastFixedState](document/Properties/LastFixedState.md) | Վերադարձնում է փաստաթղթի տվյալների պահոցում գրանցված վերջին վիճակը։ |
| [LogTransactions](document/Properties/LogTransactions.md) | Վերադարձնում կամ նշանակում է [փաստաթղթի պատմության](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Database/DocLog.html) մեջ հաշվառումների գրանցման վերաբերյալ ավտոմատ լոգավորում կատարելու հայտանիշը։ |
| [NestedTransactionReport](document/Properties/NestedTransactionReport.md) | Վերադարձնում է `DocumentService.NestedTransaction` մեթոդի կատարման արդյունքում առաջացած սխալները պարունակող [TextReport](../types/TextReport.md)-ի տեղակայման թղթապանակի և ֆայլի անունները։ |
| [Origin](document/Properties/Origin.md) | Վերադարձնում է փաստաթուղթը ստեղծման [աղբյուրը](../types/DocumentOrigin.md): |
| [Progress](document/Properties/Progress.md) | Վերադարձնում է փաստաթղթի կատարման պրոգրեսը։ |
| [Properties](document/Properties/Properties.md) | Այս հատկությունը օգտագործվում է 8X-ից 4X օբյեկտներ փոխանցելու կամ 4X-ից 8X եկող օբյեկտների պահպանման համար։ |
| [Snapshots](document/Properties/Snapshots.md) | Վերադարձնում է փաստաթղթի `DocumentSnapshot` տիպի քեշավորված պատկերների բազմությունը։ |
| [State](document/Properties/State.md) | Վերադարձնում կամ նշանակում է փաստաթղթի վիճակը: |
| [StoreMode](document/Properties/StoreMode.md) | Վերադարձնում է տվյալների պահոցում [փաստաթղթի գրանցման ռեժիմը](../types/StoreMode.md) գրանցման մեթոդների ընթացքում։ |
| [StoredFacts](document/Properties/StoredFacts.md) | Վերադարձնում է փաստաթղթի ժամանակավոր պահված հաշվառումների գրառումների ցուցակը, որոնք ավելանում են [DocumentService](../services/IDocumentService.md).[StoreFact](../services/IDocumentService/Methods/StoreFact.md) մեթոդով։ |
| [StoreSnapshot](document/Properties/StoreSnapshot.md) | [Snapshots](document/Properties/Snapshots.md)-ից վերադարձնում է `"StoreSnapshot"` բանալիով փաստաթղթի քեշավորված պատկերը։ |
| [TemplateSubstitutionIsExtended](document/Properties/TemplateSubstitutionIsExtended.md) | Այս հատկության `true` արժեքի դեպքում փաստաթղթի տպելու ձևանմուշի լրացվող արժեքների հաշվարկի համար անհրաժեշտ է մշակել [TemplateSubstitutionEx(Dictionary&lt;string, bool&gt;, Dictionary&lt;string, object&gt;)](document/Methods/TemplateSubstitutionEx.md) մեթոդի միջոցով՝ [TemplateSubstitution(Dictionary&lt;string, bool&gt;, Dictionary&lt;string, object&gt;)](document/Methods/TemplateSubstitution.md)-ի փոխարեն։ |
| [TimeStamp](document/Properties/TimeStamp.md) | Վերադարձնում է փաստաթղթի վերջին փոփոխման ամսաթիվը և ժամանակը` որպես byte տիպի զանգված: |

