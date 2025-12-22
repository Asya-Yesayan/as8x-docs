---
title: IDocumentService.NestedTransactions(Document, List<T>, TextReport,bool, bool) մեթոդ
---

## Նկարագիր

**Համարժեքը 4x-ում՝** [AsDoc.NestedTransactions](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Functions/ASDOC/NestedTransactions.html)

**Դաս՝** [IDocumentService](../IDocument/IDocumentService.md)

```c#
public Task<int> NestedTransactions<T>(Document document, 
                                       List<T> values, 
                                       TextReport report,
                                       bool checkDocExistence = true, 
                                       bool checkTimeStamp = true)
```

Մեթոդը անցնում է `values` ցուցակի բոլոր տարրերով, յուրաքանչյուրի համար սկսում տրանզակցիա, կանչում [IDocumentNestedTransaction](../../../Types/IDocumentNestedTransaction.md)-ի [NestedTransaction](../../../Types/IDocumentNestedTransaction/NestedTransaction.md)` մեթոդը և ավարտում տրանզակցիան։ Այն անհրաժեշտ է կանչել փաստաթղթի [Action](../../../Definitions/Document/Methods/Action.md) մեթոդում։

Վերադարձնում է այն տարրերի քանակը, որոնց մշակման ընթացքում առաջացել է սխալ։

Եթե մեթոդը կանչվում է այնպիսի փաստաթղթի համար, որը չի իրականացնում [IDocumentNestedTransaction](../../Types/IDocumentNestedTransaction.md) ինտերֆեյսը, ապա առաջանում է սխալ։ 

**Պարամետրեր**

| Անվանում        | Տվյալների տիպ        | Լռությամբ արժեք | Նկարագրություն |
|-----------------|----------------------|----------------|----------------|
| document        | Document             | -              | Մշակման ենթակա փաստաթուղթը։ |
| values          | List<T>              | -              | **T** տիպի արժեքների ցուցակ, որոնցից յուրաքանչյուրը մշակվելու է [IDocumentNestedTransaction](../../Types/IDocumentNestedTransaction.md)-ի [NestedTransaction](../../Types/IDocumentNestedTransaction/NestedTransaction.md) մեթոդի միջոցով։ |
| report          | TextReport           | -              | [Տեքստային հաշվետվություն](../../Types/TextReport.md), որտեղ լրացվում են մեթոդի կատարման ընթացքում առաջացած սխալների մասին հաղորդագրությունները։ [Տեքստային հաշվետվություն](../../Types/TextReport.md)-ում սխալների լրացուցիչ մշակման և այլ հաղորդագրությունների ավելացման համար անհրաժեշտ է, որ **document** պարամետրում նշված փաստաթուղթը իրականացնի [IDocumentNestedTransactionWithError](../../Types/IDocumentNestedTransactionWithError.md) ինտերֆեյսը։ |
| checkDocExistence | bool                 | true           | **document** պարամետրում նշված փաստաթղթի տվյալների պահոցում առկայության ստուգման հայտանիշ։ Եթե պարամետրի արժեքը **true** է, փաստաթուղթը առկա է տվյալների պահոցում և [State](../../../Definitions/Document/Properties/State.md) փոքր է 100-ից, ապա առաջանում է սխալ։ Ստուգումը իրականացվում է մինչև **values** ցուցակի մշակումը։ |
| checkTimeStamp  | bool                 | true           | **document** պարամետրում նշված փաստաթղթի timestampt-ի ստուգման հայտանիշ։ Եթե պարամետրի արժեքը **true** է և timestamp-ը փոփոխվել է, ապա ընդհատում է `values` ցուցակի մշակումը։ Ստուգումը իրականացվում է յուրաքանչյուր իտերացիայի վերջում։ |
