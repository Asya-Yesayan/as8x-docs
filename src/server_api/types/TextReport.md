---
title: TextReport դաս
---

## Ներածություն

Համակարգում տեղեկատուի տեսքով հաշվետվություն ցույց տալու համար նկարագրվում է TextReport։

TextReport-ի ստեղծման, լրացման ու պահման օրինակի համար [տե՛ս](../definitions/dpr_guide.md):

## Մեթոդներ

| Անվանում | Նկարագրություն |
|----------|----------------|
| [AddFooter](TextReport/AddFooter.md) | Ավելացնում է նոր տող հաշվետվության ստորին հատվածում։ |
| [AddFragment](TextReport/AddFragment.md) | Ավելացնում է նշված լայնությամբ հատված հաշվետվությունում։ |
| [AddHeader](TextReport/AddHeader.md) | Ավելացնում է գլխագրի նոր տող հաշվետվության վերին հատվածում։ |
| [AddRow](TextReport/AddRow.md) | Ավելացնում է նոր տող հաշվետվությունում։ |
| [ApplyStyle](TextReport/ApplyStyle.md) | Ֆորմատավորում է նշված տեքստը՝ ավելացնելով հատուկ թեգեր, որի միջոցով տեքստը հնարավոր է դարձնել թավ, շեղատառ, վրագծված կամ ընդգծված։ |
| [Break](TextReport/Break.md) | Ավելացնում է դատարկ նոր տող հաշվետվությունում։ |
| [GetRows](TextReport/GetRows.md) | Վերադարձնում է հաշվետվության նշված տողերի ցուցակը։ |
| [InsertRows](TextReport/InsertRows.md) | Ավելացնում է textReport հաշվետվության նշված տողերը ընթացիկ հաշվետվությունում։ |
| [SaveToStorageAndClose](TextReport/SaveToStorageAndClose.md) | Փակում է հաշվետվությունը և պահպանում [ընթացիկ սեսսիայի կոնտեյներում](../services/IStorageService/Container.md): |
| [SaveToStorageAsText](TextReport/SaveToStorageAsText.md) | Պահպանում է հաշվետվության տեքսը ֆայլի մեջ։ |

## Հատկություններ

| Անվանում | Նկարագրություն |
|----------|----------------|
| [ArmenianCaption](TextReport/ArmenianCaption.md) | Վերադարձնում կամ նշանակում է հաշվետվության հայերեն անվանումը։ |
| [Caption](TextReport/Caption.md) | Վերադարձնում է հաշվետվության անվանումը ծրագրի ընթացիկ լեզվով։ |
| [DocBased](TextReport/DocBased.md) | Վերադարձնում կամ նշանակում է հաշվետվությունում փաստաթղթեր ունենալու հայտանիշը։ |
| [EnglishCaption](TextReport/EnglishCaption.md) | Վերադարձնում կամ նշանակում է հաշվետվության անգլերեն անվանումը։ |
| [FileName](TextReport/FileName.md) | Վերադարձնում է հաշվետվությունը պարունակող ֆայլի ճանապարհը։ |
| [MaxLength](TextReport/MaxLength.md) | Վերադարձնում է հաշվետվություն [AddFragment](TextReport/AddFragment.md) մեթոդի միջոցով ավելացված բոլոր հատվածների լայնությունների գումարը։ |
| [PrintStyle](TextReport/PrintStyle.md) | Վերադարձնում կամ նշանակում է հաշվետվության տպելու կարգավորումները (լուսանցքներ, տառաչափ, պատճենների քանակ...) պարունակող [PrintStyle](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Defs/PrintStyle.html) տիպի համակարգային նկարագրության ներքին անունը։ |
| [RowCount](TextReport/RowCount.md) | Վերադարձնում կամ նշանակում է հաշվետվության տողերի քանակը։ |
| [UnmoveFragment](TextReport/UnmoveFragment.md) | Վերադարձնում կամ նշանակում է չշարժվող հատվածի առկայությունը (հատվածը մնում է նույն դիրքում հորիզոնական շարժման ժամանակ)։ |
| [UnmoveHeadCount](TextReport/UnmoveHeadCount.md) | Վերադարձնում կամ նշանակում է չտեղափոխվող գլխագրերի քանակը, եթե առկա է [անշարժ հատված](TextReport/UnmoveFragment.md)։ |
| [UseFormatting](TextReport/UseFormatting.md) | Վերադարձնում կամ նշանակում է հաշվետվությունում տեքստի ձևաչափեր օգտագործելու հայտանիշը։ |
