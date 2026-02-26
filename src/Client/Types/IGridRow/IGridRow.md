---
title: "IGridRow"
nav_exclude: true
---

# IGridRow դաս

## Մեթոդներ

| Անվանում | Նկարագրություն |
|----------|----------------|
| [ColumnHasValidationError(string)](Methods/ColumnHasValidationError.md) | Մեթոդը վերադարձնում է bool տիպի արժեք, որը ցույց է տալիս արդյոք աղյուսակի տրված սյան վալիդացիայի ընթացքում տեղի են ունեցել սխալներ, թե ոչ։  |
| [Correct](Methods/Correct.md) | Ստուգում է սյան տրված արժեքի վալիդությունը։ |
| [EnforcePropertyChanged](Methods/EnforcePropertyChanged.md) | Կանչում է աղյուսակի առաջին սյան [PropertyChanged](https://learn.microsoft.com/en-us/dotnet/api/system.componentmodel.inotifypropertychanged.propertychanged#system-componentmodel-inotifypropertychanged-propertychanged) իրադարձությունը։ |
| [EnforceValidation()](Methods/EnforceValidation.md#igridrowenforcevalidation-մեթոդ-1) |  Թարմացվում է նշված ներքին անունով սյան վալիդատորների քեշը, որպեսզի հաջորդ վալիդացիայի ժամանակ նորից կատարվի ստուգում՝ առանց քեշի օգտագործման։ Հետո կանչվում է EnforcePropertyChanged մեթոդը, որի արդյունքում սկսվում է ընթացիկ տողի վալիդացիան։ |
| [EnforceValidation(string[])](Methods/EnforceValidation.md#igridrowenforcevalidationstring-մեթոդ) |  Թարմացվում է նշված ներքին անուններով սյուների վալիդատորների քեշը, որպեսզի հաջորդ վալիդացիայի ժամանակ նորից կատարվի ստուգում՝ առանց քեշի օգտագործման։ Հետո կանչվում է EnforcePropertyChanged մեթոդը, որի արդյունքում սկսվում է ընթացիկ տողի վալիդացիան։ |
| [ResetForceValidationBit()](Methods/ResetForceValidationBit.md#igridrowresetforcevalidationbit-մեթոդ-1) | Թարմացվում է աղյուսակի բոլոր սյուների վալիդատորների քեշը, որպեսզի հաջորդ վալիդացիայի ժամանակ նորից կատարվի ստուգում՝ առանց քեշի օգտագործման։ |
| [ResetForceValidationBit(string)](Methods/ResetForceValidationBit.md#igridrowresetforcevalidationbitstring-մեթոդ) | Թարմացվում է նշված ներքին անունով սյան վալիդատորների քեշը, որպեսզի հաջորդ վալիդացիայի ժամանակ նորից կատարվի ստուգում՝ առանց քեշի օգտագործման։ |
| [ResetForceValidationBit(string[])](Methods/ResetForceValidationBit.md#igridrowresetforcevalidationbitstring-մեթոդ-1) | Թարմացվում է նշված ներքին անուններով սյուների վալիդատորների քեշը, որպեսզի հաջորդ վալիդացիայի ժամանակ նորից կատարվի ստուգում՝ առանց քեշի օգտագործման։ |
| [Validate()](Methods/Validate.md) | Իրականացնում է ընթացիկ տողի բոլոր սյուների վալիդացիա և վերադարձնում առաջին հայտնաբերված սխալի հաղորդագրությունը։ |

## Հատկություններ

| Անվանում | Նկարագրություն |
|----------|----------------|
| [Document](Properties/Document.md) | Վերադարձնում է այն փաստաթուղթը, որին պատկանում է աղյուսակը։ |
| [Grid](Properties/Grid.md) | Վերադարձնում է այն աղյուսակի նկարագրությունը, որին պատկանում է ընթացիկ տողը։ |
| [GridInfo](Properties/GridInfo.md) | Վերադարձնում է աղյուսակի ընթացիկ տողի մետաինֆորմացիան։ |
| [HasValidationError](Properties/HasValidationError.md) | Մեթոդը վերադարձնում է bool տիպի արժեք, որը ցույց է տալիս արդյոք ընթացիկ տողի [վալիդացիայի](Methods/Validate.md) ընթացքում տեղի են ունեցել սխալներ, թե ոչ։ |
| [IndexInGrid](Properties/IndexInGrid.md) | Վերադարձնում է աղյուսակում ընթացիկ տողի ինդեքսը (համարը)։ |
| [IsEmpty](Properties/IsEmpty.md) | Ստուգում է աղյուսակի ընթացիկ տողի դատարկությունը։ Տողը համարվում է դատարկ, եթե տողի բոլոր սյուների արժեքները բացակայում են։ |
| [Item](Properties/Item.md) | Վերադարձնում է աղյուսակի ընթացիկ տողի նշված ներքին անունով սյան արժեքը։ |

