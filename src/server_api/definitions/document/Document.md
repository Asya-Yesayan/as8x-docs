---
layout: page
title: Փաստաթուղթ
parent: "Համակարգային նկարագրություններ"
nav_order: 2
has_toc: false
---

# Document նկարագրություն

## Ներածություն

```c#
public class Document : DocumentBase
```

Document դասը հիմք է հանդիսանում է փաստաթղթերի սահմանման համար։ 
Բոլոր փաստաթղթերը ունեն [Document ատրիբուտը](../../Types/attributes/DocumentAttribute.md) և ժառանգ են հանդիսանում այս դասից, որը տրամադրում է վիրտուալ մեթոդներ սեփական սերվերային տրամաբանության սահմանման համար և հատկություններ փաստաթղթի մետատվյալների ստացման համար։

8X համակարգում փաստաթուղթ նկարագրելու համար հարկավոր է ունենալ՝
* .as ընդլայնմամբ ֆայլ սկրիպտերում [DOCUMENT](#document-նկարագրություն) նկարագրությամբ։ 
  Այն անհրաժեշտ է ներմուծել տվյալների բազա `Syscon` գործիքի միջոցով։
* .cs ընդլայնմամբ ֆայլ, որը պարունակում է սերվերում աշխատող տրամաբանությունը։

[.as և c# ֆայլերի նկարագրման ամբողջական օրինակ](../../Examples/document_definition.md)

## Մեթոդներ

| Անվանում | Նկարագրություն |
|----------|----------------|
| [Action(ActionEventArgs)](Methods/Action.md) | Մեթոդը կանչվում է միջուկի կողմից [IDocumentService](../../Services/IDocument/IDocumentService.md).[Store](../../Services/IDocument/Methods/Store.md) ֆունկցիայով փաստաթուղթը տվյալների պահոցում գրանցելուց առաջ։ |
| [AddParent(int)](Methods/AddParent.md) | Ավելացնում է տրված isn-ով փաստաթուղթը փաստաթղթի ծնող փաստաթղթերի ցուցակում։ |
| [AfterCommit(AfterCommitEventArgs)](Methods/AfterCommit.md) | Մեթոդը կանչվում է միջուկի կողմից [IDocumentService](../../Services/IDocument/IDocumentService.md).[Load](../../Services/IDocument/Methods/Load.md) ֆունկցիայով փաստաթուղթը տվյալների պահոցից բեռնելուց անմիջապես հետո։ |
| [AfterCreate(AfterCreateEventArgs)](Methods/AfterCreate.md) | Մեթոդը կանչվում է միջուկի կողմից [IDocumentService](../../Services/IDocument/IDocumentService.md).[Create](../../Services/IDocument/Methods/Create.md) ֆունկցիայով փաստաթղթի օբյեկտը ստեղծելուց հետո։ |
| [AfterLoad(AfterLoadEventArgs)](Methods/AfterLoad.md) | Մեթոդը կանչվում է միջուկի կողմից [IDocumentService](../../Services/IDocument/IDocumentService.md).[Load](../../Services/IDocument/Methods/Load.md) ֆունկցիայով փաստաթուղթը տվյալների պահոցից բեռնելուց անմիջապես հետո։ |
| [ApplySnapshot(DocumentSnapshot)](Methods/ApplySnapshot.md) | `snapshot` պարամետրում եղած փաստաթղթի քեշավորված պատկերի արժեքները վերագրում է փաստաթղթի դաշտերին և աղյուսակներին։ |
| [BeforeCommit(BeforeCommitEventArgs)](Methods/BeforeCommit.md) | Մեթոդը կանչվում է միջուկի կողմից [IDocumentService](../../Services/IDocument/IDocumentService.md).[Store](../../Services/IDocument/Methods/Store.md) ֆունկցիայով փաստաթուղթը տվյալների պահոցում գրանցելուց տրանզակցիան փակելուց առաջ։ |
| [BeforeCopy(BeforeCopyEventArgs)](Methods/BeforeCopy.md) | Մեթոդը կանչվում է միջուկի կողմից [IDocumentService](../../Services/IDocument/IDocumentService.md).[Copy](../../Services/IDocument/Methods/Copy.md) ֆունկցիայով փաստաթղթի պատճեն օբյեկտը ստեղծելուց հետո։ |
| [BeforeImportProcessing(BeforeImportProcessingEventArgs)](Methods/BeforeImportProcessing.md) | Մեթոդը կանչվում է միջուկի կողմից փաստաթղթերի ներմուծման ժամանակ փաստաթղթի օբյեկտի ստեղծելուց հետո։ |
| [Body()](Methods/Body.md) | Վերադարձնում է փաստաթղթի սերիալիզացված դաշտերի բազմությունը որպես տեքստ, ինչպես գրված է ներմուծման .as ընդլայնմամբ ֆայլում կամ [DOCS](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Database/Docs.html) աղյուսակի `fBODY` սյունում։ |
| [BuildEmbeddedUIRequest(T uiRequestExecutionProgress)](Methods/BuildEmbeddedUIRequest.md) | Եթե [DPR](../DataProcessingRequest/DataProcessingRequest.md)-ի [Execute](../DataProcessingRequest/Methods/Execute.md) կամ փաստաթղթի կամայական մեթոդում նախատեսվում է կանչել մեկ այլ փաստաթղթի [Store](../../Services/IDocument/Methods/Store.md)/[Delete](../../Services/IDocument/Methods/Delete.md) մեթոդները, և անհրաժեշտ է, որ այդ մեթոդների կանչի ընթացքում առաջացող հաղորդագրությունները ցուցադրվեն UI-ում, ապա այդ մեթոդների կանչից առաջ անհրաժեշտ է կանչել BuildEmbeddedUIRequest մեթոդը՝ փոխանցելով համապատասխան կատարման պրոգրեսը: |
| [ConfigureDCRFieldInclusion(ConfigureDCRFieldInclusionEventArgs)](Methods/ConfigureDCRFieldInclusion.md) | Այս մեթոդը թույլ է տալիս որոշել, թե փաստաթղթի որ դաշտերի փոփոխությունները պետք է ցուցադրվեն տեքստային հաշվետվությունում, որը բացվում է **«Փաստաթղթի պատմություն»** դիտելու ձևի **«Դիտել փոփոխությունները տեքստային»**, **«Դիտել փոփոխությունները տեքստային համեմատիչով»** կոնտեքստային ֆունկցիաներով։ |
| [DefaultComment(DefaultCommentEventArgs)](Methods/DefaultComment.md) | Մեթոդը կանչվում է միջուկի կողմից փաստաթղթի [թղթապանակի տարր](../../Types/FolderElement.md) ստեղծելուց մեկնաբանություն լրացնելու համար։ |
| [DefineLimits(string, int, DateTime, decimal, decimal)](Methods/DefineLimits.md) | Սահմանում է հաշվառման վերին և ստորին սահմանաչափերը։ |
| [Delete(DeleteEventArgs)](../../Services/IDocument/Methods/Delete.md) | Մեթոդը կանչվում է միջուկի կողմից [IDocumentService](../../Services/IDocument/IDocumentService.md).[Delete](../../Services/IDocument/Methods/Delete.md) ֆունկցիայով փաստաթղթի ջնջելուց առաջ։ |
| [DeserializeComplexObjects(DeserializeComplexObjectsEventArgs)](Methods/DeserializeComplexObjects.md) | Մեթոդը անհրաժեշտ է մշակել այն դեպքում, երբ 4X-ական փաստաթղթի [Properties](Properties/Properties.md) հատկությունով եկած բարդ օբյեկտները անհրաժեշտ է բերել համապատասխան c#-ական տիպերի 8X-ում։ |
| [ExistsGrid(string)](Methods/ExistsGrid.md) | Ստուգում է տրված ներքին անունով աղյուսակի առկայությունը փաստաթղթի նկարագրության մեջ։ |
| [ExistsRekvizit(string)](Methods/ExistsRekvizit.md) | Ստուգում է տրված ներքին անունով դաշտի առկայությունը փաստաթղթի նկարագրության մեջ։ |
| [Folders(FoldersEventArgs)](Methods/Folders.md) | Մեթոդը կանչվում է միջուկի կողմից [IDocumentService](../../Services/IDocument/IDocumentService.md).[Store](../../Services/IDocument/Methods/Store.md) ֆունկցիայով փաստաթուղթը տվյալների պահոցում գրանցելուց առաջ։ |
| [GetCheckValue(string)](Methods/GetCheckValue.md) | Վերադարձնում է փաստաթղթի նշված ներքին անունով դաշտի տիպի ստուգման հայտանիշը: |
| [GetBooleanValue(string)](Methods/GetBooleanValue.md) | Վերադարձնում է փաստաթղթի նշված ներքին անունով դաշտի (ռեկվիզիտի) արժեքը՝ բերված bool տիպի։ |
| [GetDateValue(string)](Methods/GetDateValue.md) | Վերադարձնում է փաստաթղթի նշված ներքին անունով դաշտի (ռեկվիզիտի) արժեքը՝ բերված DateTime? տիպի։ |
| [GetDecimalValue(string)](Methods/GetDecimalValue.md) | Վերադարձնում է փաստաթղթի նշված ներքին անունով դաշտի (ռեկվիզիտի) արժեքը՝ բերված decimal տիպի։ |
| [GetDefaultValue(string)](Methods/GetDefaultValue.md) | Վերադարձնում է փաստաթղթի նշված ներքին անունով դաշտի (ռեկվիզիտի) լռությամբ (default) արժեքը:  |
| [GetIntegerValue(string)](Methods/GetIntegerValue.md) | Վերադարձնում է փաստաթղթի նշված ներքին անունով դաշտի (ռեկվիզիտի) արժեքը՝ բերված int տիպի։ |
| [GetShortValue(string)](Methods/GetShortValue.md) | Վերադարձնում է փաստաթղթի նշված ներքին անունով դաշտի (ռեկվիզիտի) արժեքը՝ բերված short տիպի։ |
| [GetStringValue(string)](Methods/GetStringValue.md) | Վերադարձնում է փաստաթղթի նշված ներքին անունով դաշտի (ռեկվիզիտի) արժեքը՝ բերված string տիպի։ |
| [GetValue&lt;T&gt;(string, T)](Methods/GetValue.md) | Վերադարձնում է փաստաթղթի նշված ներքին անունով դաշտի (ռեկվիզիտի) արժեքը՝ բերված T տիպի։ |
| [SetDefaultValues(IEnumerable&lt;string&gt;)](Methods/SetDefaultValues.md) | Վերագրում է լռությամբ (default) արժեքներ փաստաթղթի նշված ներքին անուններով դաշտերին (ռեկվիզիտներին)։ |
| [GetFieldType(string)](Methods/GetFieldType.md) | Վերադարձնում է փաստաթղթի տրված ներքին անունով դաշտի [համակարգային տիպը](../../Types/system_types.md)։ |
| [GetImage(string)](Methods/GetImage.md) | Վերադարձնում է փաստաթղթի տրված ներքին անունով նկար դաշտը՝ որպես byte տիպի զանգված։ |
| [GetMemo(string)](Methods/GetMemo.md) | Վերադարձնում է փաստաթղթի տրված ներքին անունով մեծ տեքստային դաշտի (մեմոյի) արժեքը։ |
| [GetNextTrans()](Methods/GetNextTrans.md) | Վերադարձնում է փաստաթղթի տրանզակցիայի հերթական նոր համարը։ |
| [GetParents()](Methods/GetParents.md) | Վերադարձնում է փաստաթղթի ծնող փաստաթղթերի isn-ների ցուցակը։ |
| [Grid(string)](Methods/Grid.md) | Վերադարձնում է փաստաթղթի տրված ներքին անունով աղյուսակը։ |
| [InitGrids()](Methods/InitGrids.md) | Ձևավորում է փաստաթղթի աղյուսակները՝ առանց տվյալների բեռնելու։ |
| [DoLoadGrids(LoadGridsEventArgs)](Methods/DoLoadGrids.md) | Մեթոդը կանչվում է միջուկի կողմից [IDocumentService](../../Services/IDocument/IDocumentService.md).[Load](../../Services/IDocument/Methods/Load.md) մեթոդի միջոցով փաստաթուղթը բեռնելիս։ |
| [IsHidden(string)](Methods/IsHidden.md) | Ստուգում է փաստաթղթի նշված ներքին անունով դաշտի (ռեկվիզիտի) անտեսանելի լինելու հայտանիշը (H ատրիբուտի առկայությունը)։ |
| [IsNumPairField(string)](Methods/IsNumPairField.md) | Ստուգում է փաստաթղթի նշված ներքին անունով դաշտը (ռեկվիզիտը) [NumPair](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Types/NumPair.html) տիպի է, թե ոչ։ |
| [LoadGrids(LoadGridsEventArgs)](Methods/LoadGrids.md) | Բեռնում է փաստաթղթի աղյուսակները, եթե մինչ այդ բեռնված չէին [IDocumentService](../../Services/IDocument/IDocumentService.md).[Load](../../Services/IDocument/Methods/Load.md) մեթոդով: |
| [LoadImagesAndMemos(ArchiveInfo)](Methods/LoadImagesAndMemos.md) | Բեռնում է փաստաթղթի նկարները և մեծ տեքստային դաշտերը (մեմոներ) տվյալների պահոցից` մինչև այս բեռնված չլինելու դեպքում։ |
| [LoadParents()](Methods/LoadParents.md) | Բեռնում է փաստաթղթի ծնող փաստաթղթերի isn-ների ցուցակը տվյալների պահոցից` անկախ այն փաստից մինչև այդ բեռնված էին թե ոչ։ |
| [OnConfirmDocumentChangeRequest(ConfirmDocumentChangeRequestEventArgs)](Methods/OnConfirmDocumentChangeRequest.md) | Մեթոդը կանչվում է միջուկի կողմից փաստաթղթի փոփոխման հայտը `IDocumentChangeRequestService.Confirm` մեթոդով հաստատելիս։ |
| [OnRefuse(RefuseEventArgs)](Methods/OnRefuse.md) | Մեթոդը կանչվում է միջուկի կողմից [IDocumentService](../../Services/IDocument/IDocumentService.md).[Delete](../../Services/IDocument/Methods/Delete.md) մեթոդի միջոցով փաստաթղթի ջնջելուց առաջ, եթե մեթոդի `callDelete` պարամետրի արժեքը `false` է։ |
| [OnRejectDocumentChangeRequest(RejectDocumentChangeRequestEventArgs)](Methods/OnRejectDocumentChangeRequest.md) | Մեթոդը կանչվում է միջուկի կողմից՝ [փաստաթղթի փոփոխման հայտը](../../Types/DocumentChangeRequest.md) մերժելիս։ |
| [PostMessage(PostMessageEventArgs)](Methods/PostMessage.md) | Մեթոդը կանչվում է միջուկի կողմից, երբ կից փաստաթղթից այս փաստաթղթին ուղարկվում է ծրագրային հաղորդագրություն [SendMessage(string, int, string, bool, bool)](Methods/SendMessage.md) ֆունկցիայի միջոցով, դրանից հետո այս փաստաթուղթը գրանցվում է տվյալների պահոցում։ |
| [RefreshTimeStamp()](Methods/RefreshTimeStamp.md) | Բեռնում է փաստաթղթի վերջին փոփոխման ամսաթիվը/ժամանակը տվյալների պահոցից և այն թարմացնում հիշողության մեջ՝ վերագրելով [TimeStamp](Properties/TimeStamp.md) հատկությանը։ |
| [SendMessage(string, int, string, bool, bool)](Methods/SendMessage.md) | Ուղարկում է հաղորդագրություն այլ փաստաթղթի (կամ ծնող փաստաթղթերին) աշխատացնելով [PostMessage(PostMessageEventArgs)](Methods/PostMessage.md) ֆունկցիան: |
| [SerializeComplexObjects(SerializeComplexObjectsEventArgs)](Methods/SerializeComplexObjects.md) | Մեթոդը անհրաժեշտ է մշակել այն դեպքում, երբ 8X-ական փաստաթղթի [Properties](Properties/Properties.md) հատկությունում եկած բարդ օբյեկտները անհրաժեշտ է բերել 4X-ական տիպերի՝ 4X-ում օգտագործելու համար։ |
| [SetCheckValue(string, bool)](Methods/SetCheckValue.md) | Նշանակում է փաստաթղթի նշված ներքին անունով դաշտի [համակարգային տիպի](../../Types/system_types.md) ստուգման հայտանիշը: |
| [SetDefaultValuesForFields(IList&lt;string&gt;)](Methods/SetDefaultValuesForFields.md#documentsetdefaultvaluesforfieldsiliststring-մեթոդ) | Վերագրում է լռությամբ արժեքներ փաստաթղթի տրված դաշտերին։ |
| [SetDefaultValuesForFields(string[])](Document/Methods/SetDefaultValuesForFields.md#documentsetdefaultvaluesforfieldsstring-մեթոդ) | Վերագրում է լռությամբ արժեքներ փաստաթղթի տրված դաշտերին։ |
| [SetImage(string, byte[])](Document/Methods/SetImage.md) | Արժեքավորում է փաստաթղթի տրված ներքին անունով նկար դաշտը։ |
| [SetMemo(string, string)](Methods/SetMemo.md) | Արժեքավորում է փաստաթղթի տրված ներքին անունով մեծ տեքստային դաշտը (մեմո)։ |
| [Store(DocumentCheckLevel, string)](../../Services/IDocument/Methods/Store.md) | Կատարում է պարտադիր ստուգումներ և գրանցում փաստաթուղթը տվյալների պահոցում։ |
| [StoreGrids(StoreGridsEventArgs)](Methods/StoreGrids.md) | Մեթոդը կանչվում է միջուկի կողմից փաստաթուղթը [IDocumentService](../../Services/IDocument/IDocumentService.md).[Store](../../Services/IDocument/Methods/Store.md) մեթոդի միջոցով տվյալների պահոցում գրանցելուց։ |
| [StoreValuesHistory()](Methods/StoreValuesHistory.md) | Փաստաթղթի դաշտերի արժեքները գրանցում է տվյալների պահոցի `LASTVALUESGROUP` աղյուսակում։ |
| [TakeSnapshot(SnapshotContent, string, bool)](Methods/TakeSnapshot.md) | Քեշավորում և պահպանում է փաստաթղթի պատկերը [Snapshots](Properties/Snapshots.md)-ում։ |
| [TemplateSubstitution(Dictionary&lt;string, bool&gt;, Dictionary&lt;string, object&gt;)](Methods/TemplateSubstitution.md) | Մեթոդը կանչվում է միջուկի կողմից, երբ փաստաթղթի համար ձևավորվում է տպման ձև և անջատված է [TemplateSubstitutionIsExtended](Properties/TemplateSubstitutionIsExtended.md) հատկությունը։ |
| [TemplateSubstitutionEx(Dictionary&lt;string, bool&gt;, Dictionary&lt;string, object&gt;)](Methods/TemplateSubstitutionEx.md) | Մեթոդը կանչվում է միջուկի կողմից, երբ փաստաթղթի համար ձևավորվում է տպման ձև և միացված է [TemplateSubstitutionIsExtended](Properties/TemplateSubstitutionIsExtended.md) հատկությունը։ |
| [Validate(ValidateEventArgs)](Methods/Validate.md) | Մեթոդը կանչվում է միջուկի կողմից [IDocumentService](../../Services/IDocument/IDocumentService.md).[Store](../../Services/IDocument/Methods/Store.md) ֆունկցիայով փաստաթուղթը տվյալների պահոցում գրանցելուց առաջ։ |
| [WriteLog(string, int, bool)](Methods/WriteLog.md) | Ավելացնում է նոր գրառում [փաստաթղթի պատմության](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Database/DocLog.html) մեջ։ |

## Հատկություններ

| Անվանում | Նկարագրություն |
|----------|----------------|
| [Archived](Properties/Archived.md) | Ցույց է տալիս փաստաթղթի արխիվացված լինելը։ |
| [CancellationToken](Properties/CancellationToken.md) | Փաստաթղթի գրանցման ժամանակ դադարեցման տոկեն։ |
| [CopiedFrom](Properties/CopiedFrom.md) | Վերադարձնում է այն փաստաթղթի isn-ը, որից պատճենվել է տվյալ փաստաթուղթը։ |
| [CreatorSUID](Properties/CreatorSUID.md) | Վերադարձնում է փաստաթուղթը ստեղծողի ներքին համարը (user id): |
| [CreationDate](Properties/CreationDate.md) | Վերադարձնում է փաստաթղթի ստեղծման ամսաթիվը/ժամանակը։ |
| [Description](Properties/Description.md) | Վերադարձնում է փաստաթղթի նկարագրությունը, որը պարունակում է փաստաթղթի աղյուսակների, դաշտերի, մեմոների, նկարների հատկությունները։ |
| [DocumentChangeRequest](Properties/DocumentChangeRequest.md) | Վերադարձնում է փաստաթղթի փոփոխման հայտը գրանցման իրադարձություններում ([Validate(ValidateEventArgs)](Methods/Validate.md), [Action(ActionEventArgs)](Methods/Action.md)), երբ փոփոխման հայտը հաստատվում է։ |
| [DocumentLog](Properties/DocumentLog.md) | Նախատեսված է փաստաթղթի լոգերի ժամանակավոր պահպանման համար, որոնք գրանցվում են [փաստաթղթի պատմությունում](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Database/DocLog.html) փաստաթղթի [գրանցման](../../Services/IDocument/Methods/Store.md) ժամանակ։ |
| [Deleting](Properties/Deleting.md) | Ցույց է տալիս, արդյոք փաստաթուղթը հեռացման ընթացքում է [IDocumentService](../../Services/IDocument/IDocumentService.md) դասի [Delete](../../Services/IDocument/Methods/Delete.md), [DeleteAll](../../Services/IDocument/Methods/DeleteAll.md) մեթոդների միջոցով։ |
| [ExistsInDB](Properties/ExistsInDB.md) | Ցույց է տալիս փաստաթղթի գրանցված լինելը տվյալների պահոցում։ |
| [Grids](Properties/Grids.md) | Վերադարձնում է փաստաթղթի աղյուսակների բազմությունը, որտեղ բանալին աղյուսակի ներքին անունն է, իսկ արժեքը՝ աղյուսակը IGrid ինտերֆեյսով։ |
| [GridsInitialized](Properties/GridsInitialized.md) | Ցույց է տալիս փաստաթղթի [աղյուսակների ձևավորված լինելը](Methods/InitGrids.md)։ |
| [GridsLoaded](Properties/GridsLoaded.md) | Ցույց է տալիս փաստաթղթի աղյուսակների բեռնված լինելը։ |
| [GridsLoading](Properties/GridsLoading.md) | Ցույց է տալիս փաստաթղթի աղյուսակները գտնվում են բեռնման պրոցեսում թե ոչ։ |
| [IsLogged](Properties/IsLogged.md) | Ցույց է տալիս, արդյոք փաստաթղթի լոգերը գրանցվել են [փաստաթղթի պատմություն](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Database/DocLog.html)-ում [WriteLog(string, int, bool)](Methods/WriteLog.md) մեթոդի միջոցով։ |
| [indexer](Properties/indexer.md) | Վերադարձնում կամ նշանակում է փաստաթղթի տրված ներքին անունով դաշտի արժեքը։ |
| [InitialSnapshot](Properties/InitialSnapshot.md) | [Snapshots](Properties/Snapshots.md)-ից վերադարձնում է `"InitialSnapshot"` բանալիով փաստաթղթի քեշավորված պատկերը։ |
| [ISN](Properties/ISN.md) | Վերադարձնում է փաստաթղթի ներքին նույնականացման համարը (isn-ը): |
| [IsNew](Properties/IsNew.md) | Վերադարձնում է փաստաթղթի նոր կամ սևագիր լինելու հայտանիշը։ |
| [IsUIOrigin](Properties/IsUIOrigin.md) | Ցույց է տալիս փաստաթղթի պատուհանը երևում է UI-ում, թե ոչ։ |
| [LastFixedState](Properties/LastFixedState.md) | Վերադարձնում է փաստաթղթի տվյալների պահոցում գրանցված վերջին վիճակը։ |
| [LogTransactions](Properties/LogTransactions.md) | Վերադարձնում կամ նշանակում է [փաստաթղթի պատմության](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Database/DocLog.html) մեջ հաշվառումների գրանցման վերաբերյալ ավտոմատ լոգավորում կատարելու հայտանիշը։ |
| [NestedTransactionReport](Properties/NestedTransactionReport.md) | Վերադարձնում է `DocumentService.NestedTransaction` մեթոդի կատարման արդյունքում առաջացած սխալները պարունակող [TextReport](../../Types/TextReport.md)-ի տեղակայման թղթապանակի և ֆայլի անունները։ |
| [Origin](Properties/Origin.md) | Վերադարձնում է փաստաթուղթը ստեղծման [աղբյուրը](../../Types/DocumentOrigin.md): |
| [Progress](../DataProcessingRequest/Properties/Progress.md) | Վերադարձնում է փաստաթղթի կատարման պրոգրեսը։ |
| [Properties](Properties/Properties.md) | Այս հատկությունը օգտագործվում է 8X-ից 4X օբյեկտներ փոխանցելու կամ 4X-ից 8X եկող օբյեկտների պահպանման համար։ |
| [Snapshots](Properties/Snapshots.md) | Վերադարձնում է փաստաթղթի `DocumentSnapshot` տիպի քեշավորված պատկերների բազմությունը։ |
| [State](Properties/State.md) | Վերադարձնում կամ նշանակում է փաստաթղթի վիճակը: |
| [StoreMode](Properties/StoreMode.md) | Վերադարձնում է տվյալների պահոցում [փաստաթղթի գրանցման ռեժիմը](Properties/StoreMode.md) գրանցման մեթոդների ընթացքում։ |
| [StoredFacts](Properties/StoredFacts.md) | Վերադարձնում է փաստաթղթի ժամանակավոր պահված հաշվառումների գրառումների ցուցակը, որոնք ավելանում են [DocumentService](../../Services/IDocument/IDocumentService.md).[StoreFact](../../Services/IDocument/Methods/StoreFact.md) մեթոդով։ |
| [StoreSnapshot](Properties/StoreSnapshot.md) | [Snapshots](Properties/Snapshots.md)-ից վերադարձնում է `"StoreSnapshot"` բանալիով փաստաթղթի քեշավորված պատկերը։ |
| [TemplateSubstitutionIsExtended](Properties/TemplateSubstitutionIsExtended.md) | Այս հատկության `true` արժեքի դեպքում փաստաթղթի տպելու ձևանմուշի լրացվող արժեքների հաշվարկի համար անհրաժեշտ է մշակել [TemplateSubstitutionEx(Dictionary&lt;string, bool&gt;, Dictionary&lt;string, object&gt;)](Methods/TemplateSubstitutionEx.md) մեթոդի միջոցով՝ [TemplateSubstitution(Dictionary&lt;string, bool&gt;, Dictionary&lt;string, object&gt;)](Methods/TemplateSubstitution.md)-ի փոխարեն։ |
| [TimeStamp](Properties/TimeStamp.md) | Վերադարձնում է փաստաթղթի վերջին փոփոխման ամսաթիվը և ժամանակը` որպես byte տիպի զանգված: |

