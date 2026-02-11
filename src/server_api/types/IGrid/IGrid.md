---
title: IGrid ինտերֆեյս
---

# IGrid ինտերֆեյս

## Ներածություն

IGrid դասը նախատեսված է փաստաթղթի աղյուսակների հետ աշխատանքը ապահովելու համար։

## Մեթոդներ

| Անվանում | Նկարագրություն |
|----------|----------------|
| [AddRow()](Methods/AddRow.md) | Ավելացնում է նոր դատարկ տող ընթացիկ աղյուսակում և վերադարձնում է ավելացված [տողի նկարագրությունը](../IGridRow/IGridRow.md)։ |
| [Clear()](Methods/Clear.md) | Հեռացնում է ընթացիկ աղյուսակի բոլոր տողերը։ |
| [CopyData(IGrid)](Methods/CopyData.md) | Պատճենում է grid պարամետրում տրված աղյուսակի պարունակությունը ընթացիկ աղյուսակ։ Պատճենվող և ընթացիկ աղյուսակների տիպերի անհամապատասխանության դեպքում առաջանում է սխալ։ |
| [ExistsColumn(string)](Methods/ExistsColumn.md) | Ստուգում է նշված ներքին անունով սյան առկայությունը ընթացիկ աղյուսակում։ Սյան բացակայության դեպքում վերադարձնում է false: |
| [FindUsingLike(Dictionary&lt;string, object&gt;, string, string)](Methods/FindUsingLike.md) | Վերադարձնում է աղյուսակի առաջին տողի ինդեքսը, որը համապատասխանում է տրված ֆիլտրին՝ օգտագործելով Like համեմատման պայմանը։ Եթե համապատասխանող տող չի գտնվել, վերադարձվում է -1։ |
| [GetRows()](Methods/GetRows.md) | Վերադարձնում է ընթացիկ աղյուսակի բոլոր [տողերի նկարագրությունների](../IGridRow/IGridRow.md) ցուցակը։ |
| [IndexOfRow(IGridRow)](Methods/IndexOfRow.md) | Վերադարձնում է նշված տողի ինդեքսը (համարը) ընթացիկ աղյուսակում։ |
| [InsertRow(int)](Methods/InsertRow.md) | Ավելացնում է նոր դատարկ տող ընթացիկ աղյուսակում՝ **index** պարամետրում նշված դիրքում և վերադարձնում ավելացված [տողի նկարագրությունը](../IGridRow/IGridRow.md)։ |
| [OrderBy(string, bool, Func&lt;IGridRow, string, object&gt;)](Methods/OrderBy.md#igridorderbystring-bool-funcigridrow-string-object-մեթոդ) | Մեթոդը նախատեսված է աղյուսակի տողերը դասավորելու համար՝ նշված սյան արժեքների հիման վրա։ |
| [OrderBy(IEnumerable&lt;(string ColumnName, bool Descending)&gt;, Func&lt;IGridRow, string, object&gt;)](Methods/OrderBy.md#igridorderbyienumerablestring-columnname-bool-descending-funcigridrow-string-object-մեթոդ) | Մեթոդը նախատեսված է աղյուսակի տողերը դասավորելու համար՝ նշված սյան արժեքների հիման վրա։ |
| [RemoveRow(int)](Methods/RemoveRow.md) | Հեռացնում է նշված ինդեքսով (համարով) տողը ընթացիկ աղյուսակից։ |

## Հատկություններ

| Անվանում | Նկարագրություն |
|----------|----------------|
| [ColCount](Properties/ColCount.md) | Վերադարձնում է ընթացիկ աղյուսակի սյուների քանակը։ |
| [ColumnsInfo](Properties/ColumnsInfo.md) | Վերադարձնում է Dictionary, որտեղ բանալին սյան ներքին անունն է, իսկ արժեքը` սյան նկարագրությունը։ |
| [DocumentBase](Properties/DocumentBase.md) | Վերադարձնում է ընթացիկ աղյուսակը պարունակող փաստաթղթի նկարագրությունը։ |
| [GridDescription](Properties/GridDescription.md) | Վերադարձնում է ընթացիկ աղյուսակի նկարագրությունը։ |
| [RowCount](Properties/RowCount.md) | Վերադարձնում է ընթացիկ աղյուսակի տողերի քանակը։ |