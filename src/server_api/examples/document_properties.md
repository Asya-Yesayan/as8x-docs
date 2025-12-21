---
title: "Փաստաթղթի Properties-ի հետ աշխատանքի օրինակ" 
---

Այս օրինակում`
* [ստեղծվում](../services/IDocumentService/Methods/Create.md) է **Doc1** տիպի փաստաթուղթ, [արժեքավորվում](../definitions/Document/Properties/indexer.md) են որոշ դաշտեր և փաստաթուղթը ավելացվում է ընթացիկ փաստաթղթի [Properties](../definitions/Document/Properties/Properties.md)-ում,
* [SerializeComplexObjects](../definitions/Document/Methods/SerializeComplexObjects.md) մեթոդում ստուգվում է [Properties](../definitions/Document/Properties/Properties.md)-ում "DocName" անունով տարրի (փաստաթղթի) առկայությունը և առկայության դեպքում այն սերիալիզացվում է **DocumentModel** տիպի՝ [IDocumentService](../services/IDocumentService.md)-ի [SerializeResponseBody](../services/IDocumentService/Methods/SerializeResponseBody.md) մեթոդի միջոցով,
* սերիալիզացված տարրը ավելացվում է փաստաթղթի նկարագրությունում **args** պարամետրի **Serialize** մեթոդի օգնությամբ։

```c#
public override async Task BeforeCommit(BeforeCommitEventArgs args)
{
    var doc = await this.documentService.Create("Doc1");
	doc["Name"] = "TestName";
	doc["Code"] = "TestCode";
	this.Properties.Add("DocName", doc);
}
```

```c#
public override async Task SerializeComplexObjects(SerializeComplexObjectsEventArgs args)
{
    if (this.Properties.TryGetValue("DocName", out var value))
    {
        args.Serialize("DocName", await this.DocumentService.SerializeResponseBody<DocumentModel>((Document)value));
    }
}
```

**Կարևոր**

8x-ի [Properties](../definitions/Document/Properties/Properties.md)-ում ավելացված բարդ օբյեկտները դեսերիալիզացնելու համար 4x-ում անհրաժեշտ է մշակել **DeserializeComplexObjects** իրադարձությունը։

* **DeserializeComplexObjects** իրադարձության **oEventArgsDocDeserializeObjects** արգումենտի ComplexObjectsJson հատկությունում ստուգվում է "DocName" անունով օբյեկտի առկայությունը՝ [ObjectOf](https://www.chilkatsoft.com/refdoc/xChilkatJsonObjectRef.html#ObjectOf) մեթոդի միջոցով,
* առկայության դեպքում [ստացվում](https://www.chilkatsoft.com/refdoc/xChilkatJsonObjectRef.html#ObjectOf) է օբյեկտի պարունակությունը, [ստեղծվում](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Functions/Functions/DocumentsCirculation/CreateDoc.html) դատարկ փաստաթուղթ և փաստաթղթին վերագրվում օբյեկտի պարունակությունը՝ **DeserialiseResponseBody** մեթոդի միջոցով,
* ստացված փաստաթուղթը ավելացվում է ընթացիկ փաստաթղթի 4x-ական **Properties**-ում՝ այլ մեթոդներում կիրառելու նպատակով:

```vb
Public Sub DeserializeComplexObjects(ByVal oEventArgsDocDeserializeObjects As EventArgsDocDeserializeObjects)
Dim oDoc As AsDoc
Dim sDocType As String
 
    sDocType = "DocType"
    If Not oEventArgsDocDeserializeObjects.ComplexObjectsJson.ObjectOf("DocName") Is Nothing Then
		Set oDoc = CreateDoc(sDocType)
		oDoc.DeserialiseResponseBody(oEventArgsDocDeserializeObjects.ComplexObjectsJson.ObjectOf("DocName"))
		Doc.Properties.Add "DocName", oDoc
	End If
 
End Sub
```

[AfterProcess](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/ScriptProcs/AfterProcess.html) իրադարձությունում ստուգվում է փաստաթղթի **Properties**-ում "DocName" անունով տարրի առկայությունը և առկայության դեպքում այն ցուցադրվում է [Show](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Functions/ASDOC/Show.html) մեթոդի միջոցով։

```vb
Public Sub AfterProcess()
	If Doc.Properties.Exists("DocName") Then
		Doc.Properties("DocName").Show
	End If
	Doc.Properties.RemoveAll()
End Sub
```
