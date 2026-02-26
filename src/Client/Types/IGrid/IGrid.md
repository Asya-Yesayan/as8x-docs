---
title: IGrid ինտերֆեյս
nav_exclude: true
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
| [InsertRow(int)](Methods/InsertRow.md) | Ավելացնում է նոր դատարկ տող ընթացիկ աղյուսակում՝ **index** պարամետրում նշված դիրքում և վերադարձնում ավելացված [տողի նկարագրությունը](../IGridRow/IGridRow.md)։ |
| [OrderBy(string, bool)](Methods/OrderBy.md#igridorderbystring-bool-մեթոդ) | Մեթոդը նախատեսված է աղյուսակի տողերը դասավորելու համար՝ նշված սյան արժեքների հիման վրա։ |
| [OrderBy(IEnumerable&lt;(string ColumnName, bool Descending)&gt;)](Methods/OrderBy.md#igridorderbyienumerablestring-columnname-bool-descending-մեթոդ) | Մեթոդը նախատեսված է աղյուսակի տողերը դասավորելու համար՝ նշված սյան արժեքների հիման վրա։ |
| [RemoveRow(int)](Methods/RemoveRow.md) | Հեռացնում է նշված ինդեքսով (համարով) տողը ընթացիկ աղյուսակից։ |
| [RemoveEmptyRows()](Methods/RemoveEmptyRows.md) | Հեռացնում է աղյուսակի բոլոր դատարկ տողերը։ |

## Հատկություններ

| Անվանում | Նկարագրություն |
|----------|----------------|
| [Document](Properties/Document.md) | Վերադարձնում է այն փաստաթուղթը, որին պատկանում է աղյուսակը։ |
| [Item](Properties/Item.md) | Վերադարձնում է աղյուսակի նշված ինդեքսով տողը։ |
| [Name](Properties/Name.md) | Վերադարձնում է աղյուսակի ներքին անունը։ |
| [RowCount](Properties/RowCount.md) | Վերադարձնում է ընթացիկ աղյուսակի տողերի քանակը։ |
