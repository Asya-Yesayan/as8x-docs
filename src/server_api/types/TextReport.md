---
title: TextReport դաս
nav_exclude: true
---

# TextReport դաս

## Ներածություն

Համակարգում տեղեկատուի տեսքով հաշվետվություն ցույց տալու համար նկարագրվում է TextReport։

TextReport-ի ստեղծման, լրացման ու պահման օրինակի համար [տե՛ս](../Definitions/dpr_guide.md#execute):

## Կոնստրուկտորներ

| Անվանում | Նկարագրություն |
|----------|----------------|
| [TextReport(IStorageService, TempFileCleanupMode)](TextReport/TextReport1.md) | Ստեղծում է TextReport դասի օբյեկտ։ |

## Մեթոդներ

| Անվանում | Նկարագրություն |
|----------|----------------|
| [AddFooter(string)](TextReport/Methods/AddFooter.md) | Ավելացնում է նոր տող հաշվետվության ստորին հատվածում։ |
| [AddFragment(int)](TextReport/Methods/AddFragment.md) | Ավելացնում է նշված լայնությամբ հատված հաշվետվությունում։ |
| [AddHeader(string)](TextReport/Methods/AddHeader.md) | Ավելացնում է գլխագրի նոր տող հաշվետվության վերին հատվածում։ |
| [AddRow(string, int, string, int)](TextReport/Methods/AddRow.md) | Ավելացնում է նոր տող հաշվետվությունում։ |
| [ApplyStyle(string, TextReportStyle)](TextReport/Methods/ApplyStyle.md) | Ֆորմատավորում է նշված տեքստը՝ ավելացնելով հատուկ թեգեր, որի միջոցով տեքստը հնարավոր է դարձնել թավ, շեղատառ, վրագծված կամ ընդգծված։ |
| [Break()](TextReport/Methods/Break.md) | Ավելացնում է դատարկ նոր տող հաշվետվությունում։ |
| [GetRows(long, long)](TextReport/Methods/GetRows.md) | Վերադարձնում է հաշվետվության նշված տողերի ցուցակը։ |
| [InsertRows(TextReport, long, long)](TextReport/Methods/InsertRows.md) | Ավելացնում է textReport հաշվետվության նշված տողերը ընթացիկ հաշվետվությունում։ |
| [SaveToStorageAndClose()](TextReport/Methods/SaveToStorageAndClose.md) | Փակում է հաշվետվությունը և պահպանում [ընթացիկ սեսսիայի կոնտեյներում](../Services/IStorage/Properties/Container.md): |
| [SaveToStorageAsText(StorageInfo, bool, bool, bool)](TextReport/Methods/SaveToStorageAsText.md) | Պահպանում է հաշվետվության տեքսը ֆայլի մեջ։ |

## Հատկություններ

| Անվանում | Նկարագրություն |
|----------|----------------|
| [ArmenianCaption](TextReport/Properties/ArmenianCaption.md) | Վերադարձնում կամ նշանակում է հաշվետվության հայերեն անվանումը։ |
| [Caption](TextReport/Properties/Caption.md) | Վերադարձնում է հաշվետվության անվանումը ծրագրի ընթացիկ լեզվով։ |
| [DocBased](TextReport/Properties/DocBased.md) | Վերադարձնում կամ նշանակում է հաշվետվությունում փաստաթղթեր ունենալու հայտանիշը։ |
| [EnglishCaption](TextReport/Properties/EnglishCaption.md) | Վերադարձնում կամ նշանակում է հաշվետվության անգլերեն անվանումը։ |
| [FileName](TextReport/Properties/FileName.md) | Վերադարձնում է հաշվետվությունը պարունակող ֆայլի ճանապարհը։ |
| [MaxLength](TextReport/Properties/MaxLength.md) | Վերադարձնում է հաշվետվություն [AddFragment(int)](TextReport/Methods/AddFragment.md) մեթոդի միջոցով ավելացված բոլոր հատվածների լայնությունների գումարը։ |
| [PrintStyle](TextReport/Properties/PrintStyle.md) | Վերադարձնում կամ նշանակում է հաշվետվության տպելու կարգավորումները (լուսանցքներ, տառաչափ, պատճենների քանակ...) պարունակող [PrintStyle](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Defs/PrintStyle.html) տիպի համակարգային նկարագրության ներքին անունը։ |
| [RowCount](TextReport/Properties/RowCount.md) | Վերադարձնում կամ նշանակում է հաշվետվության տողերի քանակը։ |
| [UnmoveFragment](TextReport/Properties/UnmoveFragment.md) | Վերադարձնում կամ նշանակում է չշարժվող հատվածի առկայությունը (հատվածը մնում է նույն դիրքում հորիզոնական շարժման ժամանակ)։ |
| [UnmoveHeadCount](TextReport/Properties/UnmoveHeadCount.md) | Վերադարձնում կամ նշանակում է չտեղափոխվող գլխագրերի քանակը, եթե առկա է [անշարժ հատված](TextReport/Properties/UnmoveFragment.md)։ |
| [UseFormatting](TextReport/Properties/UseFormatting.md) | Վերադարձնում կամ նշանակում է հաշվետվությունում տեքստի ձևաչափեր օգտագործելու հայտանիշը։ |
