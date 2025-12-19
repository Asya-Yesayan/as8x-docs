---
title: "Փաստաթղթի Properties-ում առկա զանգվածի հետ աշխատանքի օրինակ" 
---

Այս օրինակում`
* **SerializeComplexObjects** իրադարձությունում ստուգվում է "DocISNs" անունով տարրի (isn-ների զանգվածի) առկայությունը փաստաթղթի **Properties**-ում, առկայության դեպքում
	* իրադարձության **EventArgsDocSerializeObjects** պարամետրի **ComplexObjectsJson** հատկությունում ավելացվում է դատարկ զանգված՝ [ChilkatJsonObject](https://www.chilkatsoft.com/refdoc/goLang_JsonObject_Ref.html)-ի [AppendArray](https://www.chilkatsoft.com/refdoc/goLang_JsonObject_Ref.html#AppendArray) մեթոդի օգնությամբ,
	* ցիկլով վերցվում են փաստաթղթի **Properties**-ի "DocISNs" անունով զանգվածի բոլոր էլեմենտները և ավելացնում են ստեղծված դատարկ զանգվածում՝ [ChilkatJsonObject](https://www.chilkatsoft.com/refdoc/goLang_JsonObject_Ref.html)-ի [ArrayOf](https://www.chilkatsoft.com/refdoc/goLang_JsonObject_Ref.html#ArrayOf) և [AddIntAt](https://www.chilkatsoft.com/refdoc/goLang_JsonObject_Ref.html#AddIntAt) մեթոդների օգնությամբ։ 

```vb
Public Sub SerializeComplexObjects(ByVal oEventArgsDocSerializeObjects As EventArgsDocSerializeObjects)
Dim i As Integer
Dim x As Variant
 
    If Doc.Properties.Exists("DOCISNS") Then
        oEventArgsDocSerializeObjects.ComplexObjectsJson.AppendArray("DOCISNS")
 
        For i = 0 To UBound(Doc.Properties("DOCISNS"))
            oEventArgsDocSerializeObjects.ComplexObjectsJson.ArrayOf("DOCISNS").AddIntAt(i, Doc.Properties("DOCISNS")(i))
        Next

    End If
End Sub
```

**Կարևոր**

4x-ի **Properties**-ում ավելացված բարդ օբյեկտները դեսերիալիզացնելու համար 8x-ում անհրաժեշտ է մշակել [DeserializeComplexObjects](../definitions/document/Methods/DeserializeComplexObjects.md) մեթոդը։

* [DeserializeComplexObjects](../definitions/document/Methods/DeserializeComplexObjects.md) մեթոդի **EventArgsDocSerializeObjects** պարամետրի **ComplexObjectsJson** հատկությունում ստուգում է "DOCISNS" անունով տարրի առկայությունը և առկայության դեպքում այն ավելացվում է փաստաթղթի [Properties](../definitions/document/Properties/Properties.md)-ում՝ այլ մեթոդներում կիրառելու նպատակով:

```c#
public override Task DeserializeComplexObjects(DeserializeComplexObjectsEventArgs args)
{
    if (args.ComplexObjectsJson.ContainsKey("DOCISNS"))
    {
        this.Properties.Add("DOCISNS", args.Deserialize<List<int>>("DOCISNS"));
    }
}
```

Փաստաթղթի [Properties](../definitions/document/Properties/Properties.md)-ում ստուգվում է "DocISNs" անունով տարրի առկայությունը և առկայության դեպքում խմբային հեռացնում է նշված հատկությունում նշված բոլոր փաստաթղթերը։

```c#
private async Task DeleteDocuments()
{
    if (this.Properties.TryGetValue("DocISNs", out var value))
    {
	 await this.DocumentService.DeleteAll(this.DocISNs, true, "Փաստաթղթերի խմբային հեռացում");
    }
}
```