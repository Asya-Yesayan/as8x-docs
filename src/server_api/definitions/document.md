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
| [Action(ActionEventArgs)](document/Action.md) | Մեթոդը կանչվում է միջուկի կողմից [IDocumentService](../services/IDocumentService.md).[Store](../services/IDocumentService/Store.md) ֆունկցիայով փաստաթուղթը տվյալների պահոցում գրանցելուց առաջ։ |
| [AddParent(int)](document/AddParent.md) | Ավելացնում է տրված isn-ով փաստաթուղթը փաստաթղթի ծնող փաստաթղթերի ցուցակում։ |
| [AfterCommit(AfterCommitEventArgs)](document/AfterCommit.md) | Մեթոդը կանչվում է միջուկի կողմից [IDocumentService](../services/IDocumentService.md).[Load](../services/IDocumentService/Load.md) ֆունկցիայով փաստաթուղթը տվյալների պահոցից բեռնելուց անմիջապես հետո։ |
| [AfterCreate(AfterCreateEventArgs)](document/AfterCreate.md) | Մեթոդը կանչվում է միջուկի կողմից [IDocumentService](../services/IDocumentService.md).[Create](../services/IDocumentService/Create.md) ֆունկցիայով փաստաթղթի օբյեկտը ստեղծելուց հետո։ |
| [AfterLoad(AfterLoadEventArgs)](document/AfterLoad.md) | Մեթոդը կանչվում է միջուկի կողմից [IDocumentService](../services/IDocumentService.md).[Load](../services/IDocumentService/Load.md) ֆունկցիայով փաստաթուղթը տվյալների պահոցից բեռնելուց անմիջապես հետո։ |
| [ApplySnapshot(DocumentSnapshot)](document/ApplySnapshot.md) | `snapshot` պարամետրում եղած փաստաթղթի քեշավորված պատկերի արժեքները վերագրում է փաստաթղթի դաշտերին և աղյուսակներին։ |
| [BeforeCommit(BeforeCommitEventArgs)](document/BeforeCommit.md) | Մեթոդը կանչվում է միջուկի կողմից [IDocumentService](../services/IDocumentService.md).[Store](../services/IDocumentService/Store.md) ֆունկցիայով փաստաթուղթը տվյալների պահոցում գրանցելուց տրանզակցիան փակելուց առաջ։ |
| [BeforeCopy(BeforeCopyEventArgs)](document/BeforeCopy.md) | Մեթոդը կանչվում է միջուկի կողմից [IDocumentService](../services/IDocumentService.md).[Copy](../services/IDocumentService/Copy.md) ֆունկցիայով փաստաթղթի պատճեն օբյեկտը ստեղծելուց հետո։ |
| [BeforeImportProcessing(BeforeImportProcessingEventArgs)](document/BeforeImportProcessing.md) | Մեթոդը կանչվում է միջուկի կողմից փաստաթղթերի ներմուծման ժամանակ փաստաթղթի օբյեկտի ստեղծելուց հետո։ |
| [Body()](document/Body.md) | Վերադարձնում է փաստաթղթի սերիալիզացված դաշտերի բազմությունը որպես տեքստ, ինչպես գրված է ներմուծման .as ընդլայնմամբ ֆայլում կամ [DOCS](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Database/Docs.html) աղյուսակի `fBODY` սյունում։ |
| [BuildEmbeddedUIRequest(T uiRequestExecutionProgress)](document/BuildEmbeddedUIRequest.md) | Եթե [DPR](dpr.md)-ի [Execute](dpr/Execute.md) կամ փաստաթղթի կամայական մեթոդում նախատեսվում է կանչել մեկ այլ փաստաթղթի [Store](../services/IDocumentService/Store.md)/[Delete](../services/IDocumentService/Delete.md) մեթոդները, և անհրաժեշտ է, որ այդ մեթոդների կանչի ընթացքում առաջացող հաղորդագրությունները ցուցադրվեն UI-ում, ապա այդ մեթոդների կանչից առաջ անհրաժեշտ է կանչել BuildEmbeddedUIRequest մեթոդը՝ փոխանցելով համապատասխան կատարման պրոգրեսը: |
| [DefaultComment(DefaultCommentEventArgs)](document/DefaultComment.md) | Մեթոդը կանչվում է միջուկի կողմից փաստաթղթի [թղթապանակի տարր](../types/FolderElement.md) ստեղծելուց մեկնաբանություն լրացնելու համար։ |
| [DefineLimits(string, int, DateTime, decimal, decimal)](document/DefineLimits.md) | Սահմանում է հաշվառման վերին և ստորին սահմանաչափերը։ |
| [Delete(DeleteEventArgs)](document/Delete.md) | Մեթոդը կանչվում է միջուկի կողմից [IDocumentService](../services/IDocumentService.md).[Delete](../services/IDocumentService/Delete.md) ֆունկցիայով փաստաթղթի ջնջելուց առաջ։ |
| [DeserializeComplexObjects(DeserializeComplexObjectsEventArgs)](document/DeserializeComplexObjects.md) | Մեթոդը անհրաժեշտ է մշակել այն դեպքում, երբ 4X-ական փաստաթղթի [Properties](document/Properties.md) հատկությունով եկած բարդ օբյեկտները անհրաժեշտ է բերել համապատասխան c#-ական տիպերի 8X-ում։ |
| [ExistsGrid(string)](document/ExistsGrid.md) | Ստուգում է տրված ներքին անունով աղյուսակի առկայությունը փաստաթղթի նկարագրության մեջ։ |
| [ExistsRekvizit(string)](document/ExistsRekvizit.md) | Ստուգում է տրված ներքին անունով դաշտի առկայությունը փաստաթղթի նկարագրության մեջ։ |
| [Folders(FoldersEventArgs)](document/Folders.md) | Մեթոդը կանչվում է միջուկի կողմից [IDocumentService](../services/IDocumentService.md).[Store](../services/IDocumentService/Store.md) ֆունկցիայով փաստաթուղթը տվյալների պահոցում գրանցելուց առաջ։ |
| [GetCheckValue(string)](document/GetCheckValue.md) | Վերադարձնում է փաստաթղթի նշված ներքին անունով դաշտի տիպի ստուգման հայտանիշը: |
| [GetFieldType(string)](document/GetFieldType.md) | Վերադարձնում է փաստաթղթի տրված ներքին անունով դաշտի [համակարգային տիպը](../types/system_types.md)։ |
| [GetImage(string)](document/GetImage.md) | Վերադարձնում է փաստաթղթի տրված ներքին անունով նկար դաշտը՝ որպես byte տիպի զանգված։ |
| [GetMemo(string)](document/GetMemo.md) | Վերադարձնում է փաստաթղթի տրված ներքին անունով մեծ տեքստային դաշտի (մեմոյի) արժեքը։ |
| [GetNextTrans()](document/GetNextTrans.md) | Վերադարձնում է փաստաթղթի տրանզակցիայի հերթական նոր համարը։ |
| [GetParents()](document/GetParents.md) | Վերադարձնում է փաստաթղթի ծնող փաստաթղթերի isn-ների ցուցակը։ |
| [Grid(string)](document/Grid.md) | Վերադարձնում է փաստաթղթի տրված ներքին անունով աղյուսակը։ |
| [InitGrids()](document/InitGrids.md) | Ձևավորում է փաստաթղթի աղյուսակները՝ առանց տվյալների բեռնելու։ |
| [DoLoadGrids(LoadGridsEventArgs)](document/DoLoadGrids.md) | Մեթոդը կանչվում է միջուկի կողմից [IDocumentService](../services/IDocumentService.md).[Load](../services/IDocumentService/Load.md) մեթոդի միջոցով փաստաթուղթը բեռնելիս։ |
| [LoadGrids(LoadGridsEventArgs)](document/LoadGrids.md) | Բեռնում է փաստաթղթի աղյուսակները, եթե մինչ այդ բեռնված չէին [IDocumentService](../services/IDocumentService.md).[Load](../services/IDocumentService/Load.md) մեթոդով: |
| [LoadImagesAndMemos(ArchiveInfo)](document/LoadImagesAndMemos.md) | Բեռնում է փաստաթղթի նկարները և մեծ տեքստային դաշտերը (մեմոներ) տվյալների պահոցից` մինչև այս բեռնված չլինելու դեպքում։ |
| [LoadParents()](document/LoadParents.md) | Բեռնում է փաստաթղթի ծնող փաստաթղթերի isn-ների ցուցակը տվյալների պահոցից` անկախ այն փաստից մինչև այդ բեռնված էին թե ոչ։ |
| [OnConfirmDocumentChangeRequest(ConfirmDocumentChangeRequestEventArgs)](document/OnConfirmDocumentChangeRequest.md) | Մեթոդը կանչվում է միջուկի կողմից փաստաթղթի փոփոխման հայտը `IDocumentChangeRequestService.Confirm` մեթոդով հաստատելիս։ |
| [OnRefuse(RefuseEventArgs)](document/OnRefuse.md) | Մեթոդը կանչվում է միջուկի կողմից [IDocumentService](../services/IDocumentService.md).[Delete](../services/IDocumentService/Delete.md) մեթոդի միջոցով փաստաթղթի ջնջելուց առաջ, եթե մեթոդի `callDelete` պարամետրի արժեքը `false` է։ |
| [OnRejectDocumentChangeRequest(RejectDocumentChangeRequestEventArgs)](document/OnRejectDocumentChangeRequest.md) | Մեթոդը կանչվում է միջուկի կողմից՝ [փաստաթղթի փոփոխման հայտը](../types/DocumentChangeRequest.md) մերժելիս։ |
| [PostMessage(PostMessageEventArgs)](document/PostMessage.md) | Մեթոդը կանչվում է միջուկի կողմից, երբ կից փաստաթղթից այս փաստաթղթին ուղարկվում է ծրագրային հաղորդագրություն [SendMessage(string, int, string, bool, bool)](document/SendMessage.md) ֆունկցիայի միջոցով, դրանից հետո այս փաստաթուղթը գրանցվում է տվյալների պահոցում։ |
| [RefreshTimeStamp()](document/RefreshTimeStamp.md) | Բեռնում է փաստաթղթի վերջին փոփոխման ամսաթիվը/ժամանակը տվյալների պահոցից և այն թարմացնում հիշողության մեջ՝ վերագրելով [TimeStamp](document/TimeStamp.md) հատկությանը։ |
| [SendMessage(string, int, string, bool, bool)](document/SendMessage.md) | Ուղարկում է հաղորդագրություն այլ փաստաթղթի (կամ ծնող փաստաթղթերին) աշխատացնելով [PostMessage(PostMessageEventArgs)](document/PostMessage.md) ֆունկցիան: |
| [SerializeComplexObjects(SerializeComplexObjectsEventArgs)](document/SerializeComplexObjects.md) | Մեթոդը անհրաժեշտ է մշակել այն դեպքում, երբ 8X-ական փաստաթղթի [Properties](document/Properties.md) հատկությունում եկած բարդ օբյեկտները անհրաժեշտ է բերել 4X-ական տիպերի՝ 4X-ում օգտագործելու համար։ |
| [SetCheckValue(string, bool)](document/SetCheckValue.md) | Նշանակում է փաստաթղթի նշված ներքին անունով դաշտի [համակարգային տիպի](../types/system_types.md) ստուգման հայտանիշը: |
| [SetDefaultValuesForFields(IList&lt;string&gt;)](document/SetDefaultValuesForFields.md#documentsetdefaultvaluesforfieldsiliststring-մեթոդ) | Վերագրում է լռությամբ արժեքներ փաստաթղթի տրված դաշտերին։ |
| [SetDefaultValuesForFields(string[])](document/SetDefaultValuesForFields.md#documentsetdefaultvaluesforfieldsstring-մեթոդ) | Վերագրում է լռությամբ արժեքներ փաստաթղթի տրված դաշտերին։ |
| [SetImage(string, byte[])](document/SetImage.md) | Արժեքավորում է փաստաթղթի տրված ներքին անունով նկար դաշտը։ |
| [SetMemo(string, string)](document/SetMemo.md) | Արժեքավորում է փաստաթղթի տրված ներքին անունով մեծ տեքստային դաշտը (մեմո)։ |
| [Store(DocumentCheckLevel, string)](document/Store.md) | Կատարում է պարտադիր ստուգումներ և գրանցում փաստաթուղթը տվյալների պահոցում։ |
| [StoreGrids(StoreGridsEventArgs)](document/StoreGrids.md) | Մեթոդը կանչվում է միջուկի կողմից փաստաթուղթը [IDocumentService](../services/IDocumentService.md).[Store](../services/IDocumentService/Store.md) մեթոդի միջոցով տվյալների պահոցում գրանցելուց։ |
| [StoreValuesHistory()](document/StoreValuesHistory.md) | Փաստաթղթի դաշտերի արժեքները գրանցում է տվյալների պահոցի `LASTVALUESGROUP` աղյուսակում։ |
| [TakeSnapshot(SnapshotContent, string, bool)](document/TakeSnapshot.md) | Քեշավորում և պահպանում է փաստաթղթի պատկերը [Snapshots](document/Snapshots.md)-ում։ |
| [TemplateSubstitution(Dictionary&lt;string, bool&gt;, Dictionary&lt;string, object&gt;)](document/TemplateSubstitution.md) | Մեթոդը կանչվում է միջուկի կողմից, երբ փաստաթղթի համար ձևավորվում է տպման ձև և անջատված է [TemplateSubstitutionIsExtended](document/TemplateSubstitutionIsExtended.md) հատկությունը։ |
| [TemplateSubstitutionEx(Dictionary&lt;string, bool&gt;, Dictionary&lt;string, object&gt;)](document/TemplateSubstitutionEx.md) | Մեթոդը կանչվում է միջուկի կողմից, երբ փաստաթղթի համար ձևավորվում է տպման ձև և միացված է [TemplateSubstitutionIsExtended](document/TemplateSubstitutionIsExtended.md) հատկությունը։ |
| [Validate(ValidateEventArgs)](document/Validate.md) | Մեթոդը կանչվում է միջուկի կողմից [IDocumentService](../services/IDocumentService.md).[Store](../services/IDocumentService/Store.md) ֆունկցիայով փաստաթուղթը տվյալների պահոցում գրանցելուց առաջ։ |
| [WriteLog(string, int, bool)](document/WriteLog.md) | Ավելացնում է նոր գրառում [փաստաթղթի պատմության](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Database/DocLog.html) մեջ։ |

## Հատկություններ

| Անվանում | Նկարագրություն |
|----------|----------------|
| [Archived](document/Archived.md) | Ցույց է տալիս փաստաթղթի արխիվացված լինելը։ |
| [CancellationToken](document/CancellationToken.md) | Փաստաթղթի գրանցման ժամանակ դադարեցման տոկեն։ |
| [CopiedFrom](document/CopiedFrom.md) | Վերադարձնում է այն փաստաթղթի isn-ը, որից պատճենվել է տվյալ փաստաթուղթը։ |
| [CreatorSUID](document/CreatorSUID.md) | Վերադարձնում է փաստաթուղթը ստեղծողի ներքին համարը (user id): |
| [CreationDate](document/CreationDate.md) | Վերադարձնում է փաստաթղթի ստեղծման ամսաթիվը/ժամանակը։ |
| [Description](document/Description.md) | Վերադարձնում է փաստաթղթի նկարագրությունը, որը պարունակում է փաստաթղթի աղյուսակների, դաշտերի, մեմոների, նկարների հատկությունները։ |
| [DocumentChangeRequest](document/DocumentChangeRequest.md) | Վերադարձնում է փաստաթղթի փոփոխման հայտը գրանցման իրադարձություններում ([Validate(ValidateEventArgs)](document/Validate.md), [Action(ActionEventArgs)](document/Action.md)), երբ փոփոխման հայտը հաստատվում է։ |
| [DocumentLog](document/DocumentLog.md) | Նախատեսված է փաստաթղթի լոգերի ժամանակավոր պահպանման համար, որոնք գրանցվում են [փաստաթղթի պատմությունում](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Database/DocLog.html) փաստաթղթի [գրանցման](document/Store.md) ժամանակ։ |
| [Deleting](document/Deleting.md) | Ցույց է տալիս, արդյոք փաստաթուղթը հեռացման ընթացքում է [IDocumentService](../services/IDocumentService.md) դասի [Delete](../services/IDocumentService/Delete.md), [DeleteAll](../services/IDocumentService/DeleteAll.md) մեթոդների միջոցով։ |
| [ExistsInDB](document/ExistsInDB.md) | Ցույց է տալիս փաստաթղթի գրանցված լինելը տվյալների պահոցում։ |
| [Grids](document/Grids.md) | Վերադարձնում է փաստաթղթի աղյուսակների բազմությունը, որտեղ բանալին աղյուսակի ներքին անունն է, իսկ արժեքը՝ աղյուսակը IGrid ինտերֆեյսով։ |
| [GridsInitialized](document/GridsInitialized.md) | Ցույց է տալիս փաստաթղթի [աղյուսակների ձևավորված լինելը](document/InitGrids.md)։ |
| [GridsLoaded](document/GridsLoaded.md) | Ցույց է տալիս փաստաթղթի աղյուսակների բեռնված լինելը։ |
| [GridsLoading](document/GridsLoading.md) | Ցույց է տալիս փաստաթղթի աղյուսակները գտնվում են բեռնման պրոցեսում թե ոչ։ |
| [IsLogged](document/IsLogged.md) | Ցույց է տալիս, արդյոք փաստաթղթի լոգերը գրանցվել են [փաստաթղթի պատմություն](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Database/DocLog.html)-ում [WriteLog(string, int, bool)](document/WriteLog.md) մեթոդի միջոցով։ |
| [indexer](document/indexer.md) | Վերադարձնում կամ նշանակում է փաստաթղթի տրված ներքին անունով դաշտի արժեքը։ |
| [InitialSnapshot](document/InitialSnapshot.md) | [Snapshots](document/Snapshots.md)-ից վերադարձնում է `"InitialSnapshot"` բանալիով փաստաթղթի քեշավորված պատկերը։ |
| [ISN](document/ISN.md) | Վերադարձնում է փաստաթղթի ներքին նույնականացման համարը (isn-ը): |
| [IsNew](document/IsNew.md) | Վերադարձնում է փաստաթղթի նոր կամ սևագիր լինելու հայտանիշը։ |
| [IsUIOrigin](document/IsUIOrigin.md) | Ցույց է տալիս փաստաթղթի պատուհանը երևում է UI-ում, թե ոչ։ |
| [LastFixedState](document/LastFixedState.md) | Վերադարձնում է փաստաթղթի տվյալների պահոցում գրանցված վերջին վիճակը։ |
| [LogTransactions](document/LogTransactions.md) | Վերադարձնում կամ նշանակում է [փաստաթղթի պատմության](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Database/DocLog.html) մեջ հաշվառումների գրանցման վերաբերյալ ավտոմատ լոգավորում կատարելու հայտանիշը։ |
| [NestedTransactionReport](document/NestedTransactionReport.md) | Վերադարձնում է `DocumentService.NestedTransaction` մեթոդի կատարման արդյունքում առաջացած սխալները պարունակող [TextReport](../types/TextReport.md)-ի տեղակայման թղթապանակի և ֆայլի անունները։ |
| [Origin](document/Origin.md) | Վերադարձնում է փաստաթուղթը ստեղծման [աղբյուրը](../types/DocumentOrigin.md): |
| [Progress](document/Progress.md) | Վերադարձնում է փաստաթղթի կատարման պրոգրեսը։ |
| [Properties](document/Properties.md) | Այս հատկությունը օգտագործվում է 8X-ից 4X օբյեկտներ փոխանցելու կամ 4X-ից 8X եկող օբյեկտների պահպանման համար։ |
| [Snapshots](document/Snapshots.md) | Վերադարձնում է փաստաթղթի `DocumentSnapshot` տիպի քեշավորված պատկերների բազմությունը։ |
| [State](document/State.md) | Վերադարձնում կամ նշանակում է փաստաթղթի վիճակը: |
| [StoreMode](document/StoreMode.md) | Վերադարձնում է տվյալների պահոցում [փաստաթղթի գրանցման ռեժիմը](../types/StoreMode.md) գրանցման մեթոդների ընթացքում։ |
| [StoredFacts](document/StoredFacts.md) | Վերադարձնում է փաստաթղթի ժամանակավոր պահված հաշվառումների գրառումների ցուցակը, որոնք ավելանում են [DocumentService](../services/IDocumentService.md).[StoreFact](../services/IDocumentService/StoreFact.md) մեթոդով։ |
| [StoreSnapshot](document/StoreSnapshot.md) | [Snapshots](document/Snapshots.md)-ից վերադարձնում է `"StoreSnapshot"` բանալիով փաստաթղթի քեշավորված պատկերը։ |
| [TemplateSubstitutionIsExtended](document/TemplateSubstitutionIsExtended.md) | Այս հատկության `true` արժեքի դեպքում փաստաթղթի տպելու ձևանմուշի լրացվող արժեքների հաշվարկի համար անհրաժեշտ է մշակել [TemplateSubstitutionEx(Dictionary&lt;string, bool&gt;, Dictionary&lt;string, object&gt;)](document/TemplateSubstitutionEx.md) մեթոդի միջոցով՝ [TemplateSubstitution(Dictionary&lt;string, bool&gt;, Dictionary&lt;string, object&gt;)](document/TemplateSubstitution.md)-ի փոխարեն։ |
| [TimeStamp](document/TimeStamp.md) | Վերադարձնում է փաստաթղթի վերջին փոփոխման ամսաթիվը և ժամանակը` որպես byte տիպի զանգված: |

