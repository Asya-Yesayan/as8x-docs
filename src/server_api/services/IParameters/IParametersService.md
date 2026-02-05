---
title: "IParametersService"
parent: "Սերվիսներ"
nav_order: 2
has_toc: false
---

# IParametersService սերվիս

## Ներածություն

Համակարգում նկարագրվում են պարամետրեր, որոնց միջոցով հնարավոր է սահմանել օգտագործողների որոշ իրավասություններ, ծրագրի կարգավորումներ։
Պարամետրերի արժեքները կարող են լինել [համակարգային տիպի](../../Types/system_types.md)։  
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
| [DefaultBranch()](Methods/DefaultBranch.md#iparametersservicedefaultbranch-մեթոդ) | Վերադարձնում է **DEFBRANCH** ներքին անունով [տող տիպի](../../Types/system_types.md#stringfieldtype) պարամետրի արժեքը, որը ցույց է տալիս ընթացիկ օգտագործողի համար առաջարկվող գրասենյակի կոդը։ |
| [DefaultBranch](Methods/DefaultBranch.md#iparametersservicedefaultbranchshort-մեթոդ) | Վերադարձնում է **DEFBRANCH** ներքին անունով [տող տիպի](../../Types/system_types.md#stringfieldtype) պարամետրի արժեքը, որը ցույց է տալիս `suid` ներքին համարով օգտագործողի համար առաջարկվող գրասենյակի կոդը։ |
| [Exists(string)](Methods/Exists.md) | Ստուգում է համակարգային պարամետրի գոյությունը՝ ըստ պարամետրի ներքին անվան։ |
| [ExistsHiPar(string, DateTime, bool, string)](Methods/ExistsHiPar.md) | Ստուգում է ժամանակագրական պարամետրի նշանակված արժեքի առկայությունը: |
| [GetBooleanValue(string)](Methods/GetBooleanValue.md#iparametersservicegetbooleanvaluestring-մեթոդ) | Վերադարձնում է [տրամաբանական տիպի](../../Types/system_types.md#booleanfieldtype) պարամետրի արժեքը՝ ըստ պարամետրի ներքին անվան։ |
| [GetBooleanValue(string, short)](Methods/GetBooleanValue.md#iparametersservicegetbooleanvaluestring-short-մեթոդ) | Վերադարձնում է [տրամաբանական տիպի](../../Types/system_types.md#booleanfieldtype) պարամետրի արժեքը՝ ըստ պարամետրի ներքին անվան և օգտագործողի համարի։ |
| [GetDateTimeValue(string)](Methods/GetDateTimeValue.md#iparametersservicegetdatetimevaluestring-մեթոդ) | Վերադարձնում է ամսաթիվ տիպի ([DATE](../../Types/system_types.md#datefieldtype), [DATELONG](../../Types/system_types.md#datefieldtype)) պարամետրի արժեքը՝ ըստ պարամետրի ներքին անվան։ |
| [GetDateTimeValue(string, short)](Methods/GetDateTimeValue.md#iparametersservicegetdatetimevaluestring-short-մեթոդ) | Վերադարձնում է ամսաթիվ տիպի ([DATE](../../Types/system_types.md#datefieldtype), [DATELONG](../../Types/system_types.md#datefieldtype)) պարամետրի արժեքը՝ ըստ պարամետրի ներքին անվան և օգտագործողի համարի։ |
| [GetDecimalValue(string)](Methods/GetDecimalValue.md#iparametersservicegetdecimalvaluestring-մեթոդ) | Վերադարձնում է կոտորակային թիվ տիպի ([N](../../Types/system_types.md#numericfieldtype), [NP](../../Types/system_types.md#numericpositivefieldtype), [SUMMA](../../Types/system_types.md#amountfieldtype), [SUMMAP](../../Types/system_types.md#amountpositivefieldtype)) պարամետրի արժեքը՝ ըստ պարամետրի ներքին անվան։ |
| [GetDecimalValue(string, short)](Methods/GetDecimalValue.md#iparametersservicegetdecimalvaluestring-short-մեթոդ) | Վերադարձնում է կոտորակային թիվ տիպի ([N](../../Types/system_types.md#numericfieldtype), [NP](../../Types/system_types.md#numericpositivefieldtype), [SUMMA](../../Types/system_types.md#amountfieldtype), [SUMMAP](../../Types/system_types.md#amountpositivefieldtype)) պարամետրի արժեքը՝ ըստ պարամետրի ներքին անվան և օգտագործողի համարի։ |
| [GetDescriptor(string)](Methods/GetDescriptor.md) | Վերադարձնում է համակարգային [պարամետրի նկարագրությունը](../../Types/Descriptor.md): |
| [GetDetailedDescription(string)](Methods/GetDetailedDescription.md) | Վերադարձնում է պարամետրի մանրամասն նկարագրությունը։ |
| [GetHiPar(string, DateTime, bool, string, bool, DateTime?)](Methods/GetHiPar.md) | Վերադարձնում է ժամանակագրական պարամետրի արժեքը և նշանակման ամսաթիվը։ |
| [GetIntegerValue(string)](Methods/GetIntegerValue.md#iparametersservicegetintegervaluestring-մեթոդ) | Վերադարձնում է ամբողջ թիվ տիպի ([N](../../Types/system_types.md#numericfieldtype), [NP](../../Types/system_types.md#numericpositivefieldtype)) պարամետրի արժեքը՝ ըստ պարամետրի ներքին անվան։ |
| [GetIntegerValue(string, short)](Methods/GetIntegerValue.md#iparametersservicegetintegervaluestring-short-մեթոդ) | Վերադարձնում է ամբողջ թիվ տիպի ([N](../../Types/system_types.md#numericfieldtype), [NP](../../Types/system_types.md#numericpositivefieldtype)) պարամետրի արժեքը՝ ըստ պարամետրի ներքին անվան և օգտագործողի համարի։ |
| [GetShortValue(string)](Methods/GetShortValue.md#iparametersservicegetshortvaluestring-մեթոդ) | Վերադարձնում է կարճ ամբողջ թիվ տիպի ([N](../../Types/system_types.md#numericfieldtype), [NP](../../Types/system_types.md#numericpositivefieldtype)) պարամետրի արժեքը՝ ըստ պարամետրի ներքին անվան։ |
| [GetShortValue(string, short)](Methods/GetShortValue.md#iparametersservicegetshortvaluestring-short-մեթոդ) | Վերադարձնում է կարճ ամբողջ թիվ տիպի ([N](../../Types/system_types.md#numericfieldtype), [NP](../../Types/system_types.md#numericpositivefieldtype)) պարամետրի արժեքը՝ ըստ պարամետրի ներքին անվան և օգտագործողի համարի։ |
| [GetStringValue(string)](Methods/GetStringValue.md#iparametersservicegetstringvaluestring-մեթոդ) | Վերադարձնում է տող տիպի ([C](../../Types/system_types.md#stringfieldtype), [CH](../../Types/system_types.md#chfieldtype), [FOLDER](../../Types/system_types.md#folderfieldtype), [AMACC](../../Types/system_types.md#amaccfieldtype), [TREE](../../Types/system_types.md#treefieldtype), [FULLTREE](../../Types/system_types.md#treefieldtype), [PATH](../../Types/system_types.md#pathfieldtype), [FILE](../../Types/system_types.md#filefieldtype)) պարամետրի արժեքը՝ ըստ պարամետրի ներքին անվան։ |
| [GetStringValue(string, short)](Methods/GetStringValue.md#iparametersservicegetstringvaluestring-short-մեթոդ) | Վերադարձնում է տող տիպի ([C](../../Types/system_types.md#stringfieldtype), [CH](../../Types/system_types.md#chfieldtype), [FOLDER](../../Types/system_types.md#folderfieldtype), [AMACC](../../Types/system_types.md#amaccfieldtype), [TREE](../../Types/system_types.md#treefieldtype), [FULLTREE](../../Types/system_types.md#treefieldtype), [PATH](../../Types/system_types.md#pathfieldtype), [FILE](../../Types/system_types.md#filefieldtype)) պարամետրի արժեքը՝ ըստ պարամետրի ներքին անվան և օգտագործողի համարի։ |
| [GetTimeSpanValue(string)](Methods/GetTimeSpanValue.md#iparametersservicegettimespanvaluestring-մեթոդ) | Վերադարձնում է ժամ տիպի ([TIME](../../Types/system_types.md#timefieldtype), [TIMELONG](../../Types/system_types.md#timefieldtype)) պարամետրի արժեքը՝ ըստ պարամետրի ներքին անվան։ |
| [GetTimeSpanValue(string, short)](Methods/GetTimeSpanValue.md#iparametersservicegettimespanvaluestring-short-մեթոդ) | Վերադարձնում է ժամ տիպի ([TIME](../../Types/system_types.md#timefieldtype), [TIMELONG](../../Types/system_types.md#timefieldtype)) պարամետրի արժեքը՝ ըստ պարամետրի ներքին անվան և օգտագործողի համարի։ |
| [OperEnd()](Methods/OperEnd.md#iparametersserviceoperend-մեթոդ) | Վերադարձնում է **OPEREND** ներքին անունով [ամսաթիվ տիպի](../../Types/system_types.md#datefieldtype) պարամետրի արժեքը, որը ցույց է տալիս գործառնական ժամանակահատվածի վերջի ամսաթիվը ընթացիկ օգտագործողի համար։ |
| [OperEnd(short)](Methods/OperEnd.md#iparametersserviceoperendshort-մեթոդ) | Վերադարձնում է **OPEREND** ներքին անունով [ամսաթիվ տիպի](../../Types/system_types.md#datefieldtype) պարամետրի արժեքը, որը ցույց է տալիս գործառնական ժամանակահատվածի վերջի ամսաթիվը `suid` ներքին համարով օգտագործողի համար։ |
| [OPERHOLIDAYS()](Methods/OPERHOLIDAYS.md) | Վերադարձնում է **OPERHOLIDAYS** ներքին անունով [տրամաբանական տիպի](../../Types/system_types.md#booleanfieldtype) պարամետրի արժեքը, որը ցույց է տալիս, արդյոք բաց գործառնական ժամանակահատվածում հանգստյան օրերի արգելումը ակտիվ է։ |
| [OperStart()](Methods/OperStart.md#iparametersserviceoperstart-մեթոդ) | Վերադարձնում է **OPERSTART** ներքին անունով [ամսաթիվ տիպի](../../Types/system_types.md#datefieldtype) պարամետրի արժեքը, որը ցույց է տալիս գործառնական ժամանակահատվածի սկզբի ամսաթիվը ընթացիկ օգտագործողի համար։ |
| [OperStart(short)](Methods/OperStart.md#iparametersserviceoperstartshort-մեթոդ) | Վերադարձնում է **OPERSTART** ներքին անունով [ամսաթիվ տիպի](../../Types/system_types.md#datefieldtype) պարամետրի արժեքը, որը ցույց է տալիս գործառնական ժամանակահատվածի սկզբի ամսաթիվը `suid` ներքին համարով օգտագործողի համար։ |
| [REPEND()](Methods/REPEND.md#iparametersservicerepend-մեթոդ) | Վերադարձնում է **REPEND** ներքին անունով [ամսաթիվ տիպի](../../Types/system_types.md#datefieldtype) պարամետրի արժեքը, որը ցույց է տալիս հաշվետու ժամանակահատվածի վերջի ամսաթիվը ընթացիկ օգտագործողի համար։ |
| [REPEND(short)](Methods/REPEND.md#iparametersservicerependshort-մեթոդ) | Վերադարձնում է **REPEND** ներքին անունով [ամսաթիվ տիպի](../../Types/system_types.md#datefieldtype) պարամետրի արժեքը, որը ցույց է տալիս հաշվետու ժամանակահատվածի վերջի ամսաթիվը `suid` ներքին համարով օգտագործողի համար։ |
| [REPSTART()](Methods/REPSTART.md#iparametersservicerepstart-մեթոդ) | Վերադարձնում է **REPSTART** ներքին անունով [ամսաթիվ տիպի](../../Types/system_types.md#datefieldtype) պարամետրի արժեքը, որը ցույց է տալիս հաշվետու ժամանակահատվածի սկզբի ամսաթիվը ընթացիկ օգտագործողի համար։ |
| [REPSTART(short)](Methods/REPSTART.md#iparametersservicerepstartshort-մեթոդ) | Վերադարձնում է **REPSTART** ներքին անունով [ամսաթիվ տիպի](../../Types/system_types.md#datefieldtype) պարամետրի արժեքը, որը ցույց է տալիս հաշվետու ժամանակահատվածի սկզբի ամսաթիվը `suid` ներքին համարով օգտագործողի համար։ |
| [SetDefaultValue(string, object, bool, bool)](Methods/SetDefaultValue.md) | Փոխում է համակարգային պարամետրի լռությամբ արժեքը ([PARAMS](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Database/Params.html) աղյուսակում)։ |
| [SetHiPar(string, DateTime, int, string, string, DateTime?)](Methods/SetHiPar.md) | Գրանցում է ժամանակագրական պարամետրի նոր արժեք տրված ամսաթվով: |
| [SetSerializedDefaultValue(string, string, bool, bool)](Methods/SetSerializedDefaultValue.md) | Փոխում է համակարգային պարամետրի լռությամբ արժեքը ([PARAMS](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Database/Params.html) աղյուսակում)։ |
| [SetValue(string, object)](Methods/SetValue.md) | Փոխում է համակարգային պարամետրի արժեքը։ |
| [SetValueWithAdditionalConnection(string, object)](Methods/SetValueWithAdditionalConnection.md) | Փոխում է համակարգային պարամետրի արժեքը [լրացուցիչ sql միացման](../IDB/Methods/CreateAdditionalConnection.md) միջոցով։ |