---
title: "IParametersService սերվիս"
---

## Ներածություն

Համակարգում նկարագրվում են պարամետրեր, որոնց միջոցով հնարավոր է սահմանել օգտագործողների որոշ իրավասություններ, ծրագրի կարգավորումներ։
Պարամետրերի արժեքները կարող են լինել [համակարգային տիպի](../types/system_types.md)։  
Պարամետրի արժեքը կարող է պահվել մեկը, կամ ըստ օգտագործողի կտրվածքի՝ այս դեպքում ամեն օգտագործող կարող է ունենալ պարամետրի սեփական արժեքը։  
Համակարգային պարամետրերը պահվում են տվյալների պահոցի [PARAMS](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Database/Params.html) աղյուսակում։ Ըստ օգտագործողի արժեքները պահվում են [USERPARAMS](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Database/User%20Params.html) աղյուսակում:  
Համակարգային պարամետրերը ստեղծվում են տեքստային ֆայլով [ներմուծման միջոցով](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Import_Files/Parameter_Import.html)։

Բացի համակարգային պարամետրերից առկա են նաև ժամանակագրական պարամետրեր։ Արժեքներ պահվում են ըստ ամսաթվի, և մեկ օրվա ընթացքում կարող է գրանցվել մի քանի արժեք։  
Պարամետրերի արժեքները կարող են լինել միայն տողային։
Ժամանակագրական պարամետրերը պահվում են տվյալների պահոցի [HIPAR](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Database/HiPar.html) աղյուսակում։

ՀԾ-Բանկի, ՀԾ-Ձեռնարկության և ՀԾ-Աշխատավարձի պրոյեկտներում առկա են բազային IParametersService-ի ժառանգ դասեր (BankParametersService, EnterpriseParametersService, WagesParametersService), որոնցում առկա են խիստ տիպիզացված մեթոդներ պարամետրերի արժեքները ստանալու համար։

## Մեթոդներ

| Անվանում | Նկարագրություն |
|----------|----------------|
| [DefaultBranch()](IParametersService/Methods/DefaultBranch.md) | Վերադարձնում է **DEFBRANCH** ներքին անունով [տող տիպի](../types/system_types.md) պարամետրի արժեքը, որը ցույց է տալիս ընթացիկ օգտագործողի համար առաջարկվող գրասենյակի կոդը։ |
| [DefaultBranch](IParametersService/Methods/DefaultBranch.md) | Վերադարձնում է **DEFBRANCH** ներքին անունով [տող տիպի](../types/system_types.md) պարամետրի արժեքը, որը ցույց է տալիս `suid` ներքին համարով օգտագործողի համար առաջարկվող գրասենյակի կոդը։ |
| [Exists(string)](IFactService/Methods/Exists.md) | Ստուգում է համակարգային պարամետրի գոյությունը՝ ըստ պարամետրի ներքին անվան։ |
| [ExistsHiPar(string, DateTime, bool, string)](IParametersService/Methods/ExistsHiPar.md) | Ստուգում է ժամանակագրական պարամետրի նշանակված արժեքի առկայությունը: |
| [GetBooleanValue(string)](IParametersService/Methods/GetBooleanValue.md) | Վերադարձնում է [տրամաբանական տիպի](../types/system_types.md) պարամետրի արժեքը՝ ըստ պարամետրի ներքին անվան։ |
| [GetBooleanValue(string, short)](IParametersService/Methods/GetBooleanValue.md) | Վերադարձնում է [տրամաբանական տիպի](../types/system_types.md) պարամետրի արժեքը՝ ըստ պարամետրի ներքին անվան և օգտագործողի համարի։ |
| [GetDateTimeValue(string)](IParametersService/Methods/GetDateTimeValue.md) | Վերադարձնում է ամսաթիվ տիպի ([DATE](../types/system_types.md), [DATELONG](../types/system_types.md)) պարամետրի արժեքը՝ ըստ պարամետրի ներքին անվան։ |
| [GetDateTimeValue(string, short)](IParametersService/Methods/GetDateTimeValue.md) | Վերադարձնում է ամսաթիվ տիպի ([DATE](../types/system_types.md), [DATELONG](../types/system_types.md)) պարամետրի արժեքը՝ ըստ պարամետրի ներքին անվան և օգտագործողի համարի։ |
| [GetDecimalValue(string)](IParametersService/Methods/GetDecimalValue.md) | Վերադարձնում է կոտորակային թիվ տիպի ([N](../types/system_types.md), [NP](../types/system_types.md), [SUMMA](../types/system_types.md), [SUMMAP](../types/system_types.md)) պարամետրի արժեքը՝ ըստ պարամետրի ներքին անվան։ |
| [GetDecimalValue(string, short)](IParametersService/Methods/GetDecimalValue.md) | Վերադարձնում է կոտորակային թիվ տիպի ([N](../types/system_types.md), [NP](../types/system_types.md), [SUMMA](../types/system_types.md), [SUMMAP](../types/system_types.md)) պարամետրի արժեքը՝ ըստ պարամետրի ներքին անվան և օգտագործողի համարի։ |
| [GetDescriptor(string)](IParametersService/Methods/GetDescriptor.md) | Վերադարձնում է համակարգային [պարամետրի նկարագրությունը](../types/Descriptor.md): |
| [GetDetailedDescription(string)](IParametersService/Methods/GetDetailedDescription.md) | Վերադարձնում է պարամետրի մանրամասն նկարագրությունը։ |
| [GetHiPar(string, DateTime, bool, string, bool, DateTime?)](IParametersService/Methods/GetHiPar.md) | Վերադարձնում է ժամանակագրական պարամետրի արժեքը և նշանակման ամսաթիվը։ |
| [GetIntegerValue(string)](IParametersService/Methods/GetIntegerValue.md) | Վերադարձնում է ամբողջ թիվ տիպի ([N](../types/system_types.md), [NP](../types/system_types.md)) պարամետրի արժեքը՝ ըստ պարամետրի ներքին անվան։ |
| [GetIntegerValue(string, short)](IParametersService/Methods/GetIntegerValue.md) | Վերադարձնում է ամբողջ թիվ տիպի ([N](../types/system_types.md), [NP](../types/system_types.md)) պարամետրի արժեքը՝ ըստ պարամետրի ներքին անվան և օգտագործողի համարի։ |
| [GetShortValue(string)](IParametersService/Methods/GetShortValue.md) | Վերադարձնում է կարճ ամբողջ թիվ տիպի ([N](../types/system_types.md), [NP](../types/system_types.md)) պարամետրի արժեքը՝ ըստ պարամետրի ներքին անվան։ |
| [GetShortValue(string, short)](IParametersService/Methods/GetShortValue.md) | Վերադարձնում է կարճ ամբողջ թիվ տիպի ([N](../types/system_types.md), [NP](../types/system_types.md)) պարամետրի արժեքը՝ ըստ պարամետրի ներքին անվան և օգտագործողի համարի։ |
| [GetStringValue(string)](IParametersService/Methods/GetStringValue.md) | Վերադարձնում է տող տիպի ([C](../types/system_types.md), [CH](../types/system_types.md), [FOLDER](../types/system_types.md), [AMACC](../types/system_types.md), [TREE](../types/system_types.md), [FULLTREE](../types/system_types.md), [PATH](../types/system_types.md), [FILE](../types/system_types.md)) պարամետրի արժեքը՝ ըստ պարամետրի ներքին անվան։ |
| [GetStringValue(string, short)](IParametersService/Methods/GetStringValue.md) | Վերադարձնում է տող տիպի ([C](../types/system_types.md), [CH](../types/system_types.md), [FOLDER](../types/system_types.md), [AMACC](../types/system_types.md), [TREE](../types/system_types.md), [FULLTREE](../types/system_types.md), [PATH](../types/system_types.md), [FILE](../types/system_types.md)) պարամետրի արժեքը՝ ըստ պարամետրի ներքին անվան և օգտագործողի համարի։ |
| [GetTimeSpanValue(string)](IParametersService/Methods/GetTimeSpanValue.md) | Վերադարձնում է ժամ տիպի ([TIME](../types/system_types.md), [TIMELONG](../types/system_types.md)) պարամետրի արժեքը՝ ըստ պարամետրի ներքին անվան։ |
| [GetTimeSpanValue(string, short)](IParametersService/Methods/GetTimeSpanValue.md) | Վերադարձնում է ժամ տիպի ([TIME](../types/system_types.md), [TIMELONG](../types/system_types.md)) պարամետրի արժեքը՝ ըստ պարամետրի ներքին անվան և օգտագործողի համարի։ |
| [OperEnd()](IParametersService/Methods/OperEnd.md) | Վերադարձնում է **OPEREND** ներքին անունով [ամսաթիվ տիպի](../types/system_types.md) պարամետրի արժեքը, որը ցույց է տալիս գործառնական ժամանակահատվածի վերջի ամսաթիվը ընթացիկ օգտագործողի համար։ |
| [OperEnd(short)](IParametersService/Methods/OperEnd.md) | Վերադարձնում է **OPEREND** ներքին անունով [ամսաթիվ տիպի](../types/system_types.md) պարամետրի արժեքը, որը ցույց է տալիս գործառնական ժամանակահատվածի վերջի ամսաթիվը `suid` ներքին համարով օգտագործողի համար։ |
| [OPERHOLIDAYS()](IParametersService/Methods/OPERHOLIDAYS.md) | Վերադարձնում է **OPERHOLIDAYS** ներքին անունով [տրամաբանական տիպի](../types/system_types.md) պարամետրի արժեքը, որը ցույց է տալիս, արդյոք բաց գործառնական ժամանակահատվածում հանգստյան օրերի արգելումը ակտիվ է։ |
| [OperStart()](IParametersService/Methods/OperStart.md) | Վերադարձնում է **OPERSTART** ներքին անունով [ամսաթիվ տիպի](../types/system_types.md) պարամետրի արժեքը, որը ցույց է տալիս գործառնական ժամանակահատվածի սկզբի ամսաթիվը ընթացիկ օգտագործողի համար։ |
| [OperStart(short)](IParametersService/Methods/OperStart.md) | Վերադարձնում է **OPERSTART** ներքին անունով [ամսաթիվ տիպի](../types/system_types.md) պարամետրի արժեքը, որը ցույց է տալիս գործառնական ժամանակահատվածի սկզբի ամսաթիվը `suid` ներքին համարով օգտագործողի համար։ |
| [REPEND()](IParametersService/Methods/REPEND.md) | Վերադարձնում է **REPEND** ներքին անունով [ամսաթիվ տիպի](../types/system_types.md) պարամետրի արժեքը, որը ցույց է տալիս հաշվետու ժամանակահատվածի վերջի ամսաթիվը ընթացիկ օգտագործողի համար։ |
| [REPEND(short)](IParametersService/Methods/REPEND.md) | Վերադարձնում է **REPEND** ներքին անունով [ամսաթիվ տիպի](../types/system_types.md) պարամետրի արժեքը, որը ցույց է տալիս հաշվետու ժամանակահատվածի վերջի ամսաթիվը `suid` ներքին համարով օգտագործողի համար։ |
| [REPSTART()](IParametersService/Methods/REPSTART.md) | Վերադարձնում է **REPSTART** ներքին անունով [ամսաթիվ տիպի](../types/system_types.md) պարամետրի արժեքը, որը ցույց է տալիս հաշվետու ժամանակահատվածի սկզբի ամսաթիվը ընթացիկ օգտագործողի համար։ |
| [REPSTART(short)](IParametersService/Methods/REPSTART.md) | Վերադարձնում է **REPSTART** ներքին անունով [ամսաթիվ տիպի](../types/system_types.md) պարամետրի արժեքը, որը ցույց է տալիս հաշվետու ժամանակահատվածի սկզբի ամսաթիվը `suid` ներքին համարով օգտագործողի համար։ |
| [SetDefaultValue(string, object, bool, bool)](IParametersService/Methods/SetDefaultValue.md) | Փոխում է համակարգային պարամետրի լռությամբ արժեքը ([PARAMS](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Database/Params.html) աղյուսակում)։ |
| [SetHiPar(string, DateTime, int, string, string, DateTime?)](IParametersService/Methods/SetHiPar.md) | Գրանցում է ժամանակագրական պարամետրի նոր արժեք տրված ամսաթվով: |
| [SetSerializedDefaultValue(string, string, bool, bool)](IParametersService/Methods/SetSerializedDefaultValue.md) | Փոխում է համակարգային պարամետրի լռությամբ արժեքը ([PARAMS](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Database/Params.html) աղյուսակում)։ |
| [SetValue(string, object)](IParametersService/Methods/SetValue.md) | Փոխում է համակարգային պարամետրի արժեքը։ |
| [SetValueWithAdditionalConnection(string, object)](IParametersService/Methods/SetValueWithAdditionalConnection.md) | Փոխում է համակարգային պարամետրի արժեքը [լրացուցիչ sql միացման](IDBService/Methods/CreateAdditionalConnection.md) միջոցով։ |