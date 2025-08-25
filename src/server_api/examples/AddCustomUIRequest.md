---
title: "Փաստաթղթի Custom UI Request-ի ավելացման օրինակ" 
---

Այս օրինակում՝
* բեռնվում են փաստաթղթի ծնող փաստաթղթերի isn-ների ու տեսակների ցուցակը՝ [IDocumentService](../services/IDocumentService.md)-ի [GetDocumentParents](../services/IDocumentService/GetDocumentParents.md) մեթոդի միջոցով,
* [բեռնվում](../services/IDocumentService/Load.md) են բոլոր ծնող փաստաթղթերը՝ ըստ isn-ի,
* յուրաքանչյուր ծնող փաստաթղթի մասին ինֆորմացիան (տեսակը, հայերեն, անգլերեն անվանումները, [ստեղծման ամսաթիվը](../definitions/document/CreationDate.md)) ավելացվում է [տեքստային հաշվետվությունում](../types/TextReport.md),
* փակվում է հաշվետվությունը, պահպանվում [ընթացիկ սեսսիայի կոնտեյներում](../services/IStorageService/Container.md) [TextReport](../types/TextReport.md)-ի [SaveToStorageAndClose](../types/TextReport/SaveToStorageAndClose.md) մեթոդի միջոցով, որը վերադարձնում է հաշվետվությունը պարունակող թղթապանակի, ֆայլի անունները `StoragInfo` տիպի օբյեկտով,
* `StoragInfo` տիպի օբյեկտը ուղարկվում է կլիենտական հատված `AddCustomUIRequest` մեթոդի միջոցով։

```c#
public override async Task<TemplateSubstitution> TemplateSubstitution(Dictionary<string, bool> mode,
                                                                   Dictionary<string, object> parameters = null)
{
    var parents = await this.documentService.GetDocumentParents(this.ISN);
    var infoReport = new TextReport(this.storageService)
    {
        ArmenianCaption = "Փաստաթղթի ծնող փաստաթղթերի նկարագրություն".ToArmenianANSI(),
        EnglishCaption = "Description of the document's parent documents"
    };
    foreach (var parent in parents)
    {
        var parentDocument = await this.documentService.Load(parent.isn);
        infoReport.AddRow($"Ծնող փաստաթղթի տեսակ {this.Description.DocType}".ToArmenianANSI());
        infoReport.AddRow($"Ծնող փաստաթղթի հայերեն անվանում {this.Description.ArmenianCaption}".ToArmenianANSI());
        infoReport.AddRow($"Ծնող փաստաթղթի անգլերեն անվանում {this.Description.EnglishCaption}".ToArmenianANSI());
        infoReport.AddRow($"Ծնող փաստաթղթի ստեղծման ամսաթիվ {this.CreationDate}".ToArmenianANSI());
        infoReport.Break();
    }
    var storageInfo = await infoReport.SaveToStorageAndClose();
    var result = await this.Progress.AddCustomUIRequest<NoResult, StorageInfo>(storageInfo, 1);
}
```

4x-ում անհրաժեշտ է մշակել [FillUIRequestConfig](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/ScriptProcs/FillUIRequestConfig.html) իրադարձությունը, որում պետք է սահմանել Custom UI Request-ի մշակման կոնֆիգուրացիան։ 

```vb
Public Sub FillUIRequestConfig(ByVal oEventArgsUIRequestConfig As EventArgsUIRequestConfig)

	Dim oCustomUIRequestInfo As CustomUIRequestConfig
	Set oCustomUIRequestInfo = New CustomUIRequestConfig
	oCustomUIRequestInfo.Module = "Module" 'Custom UI Request-ը մշակող մոդուլի անունը
	oCustomUIRequestInfo.AddSub 1, "UIRequestHandler" 'Custom UI Request-ը մշակող պրոցեդուրայի անունը

	oEventArgsUIRequestConfig.Configuration = oCustomUIRequestInfo
End Sub
```

Custom UI Request-ը մշակող UIRequestHandler պրոցեդուրան ստանում է `EventArgsUIRequest` օբյեկտ, որը պարունակում է սերվիսից եկող պարամետրերը dictionary ձևաչափով։

* UIRequestHandler-ում ստեղծվում է `StorageInfo` տիպի օբյեկտ, որին փոխանցվում է սերվիսից եկած `StorageInfo`-ի ֆայլի և թղթապանակի անունները,
* ստեղծվում է տեքստային հաշվետվություն [CreateRepViewer](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Functions/Functions/CreateRepViewer.html) մեթոդի միջոցով,
* բեռնվում է սերվիսում հավաքված տեքստային հաշվետվությունը `LoadFromStorageInService` մեթոդի միջոցով,
* եթե բեռնված հաշվետվությունը դատարկ չի, ապա այն ցուցադրվում է [Show](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Functions/AsRepViewer/Show.html) մեթոդի միջոցով։

```vb
Public Sub UIRequestHandler(ByVal args As EventArgsUIRequest)

	Dim Report As AsRepViewer
	Dim oStorageInfo As StorageInfo

	oStorageInfo.BlobName = args.REQUEST("BlobName")
	oStorageInfo.Container = args.REQUEST("Container")
	Set Report = CreateRepViewer()
	Report.LoadFromStorageInService(oStorageInfo)

	If Not Report Is Nothing AndAlso Report.RowCount > 0 Then
		Report.Show
	End If
```
