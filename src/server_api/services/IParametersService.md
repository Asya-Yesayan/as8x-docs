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
| [DefaultBranch()](IParametersService/DefaultBranch.md#iparametersservicedefaultbranch-մեթոդ) | Վերադարձնում է **DEFBRANCH** ներքին անունով [տող տիպի](../types/system_types.md#stringfieldtype) պարամետրի արժեքը, որը ցույց է տալիս ընթացիկ օգտագործողի համար առաջարկվող գրասենյակի կոդը։ |
| [DefaultBranch](IParametersService/DefaultBranch.md#iparametersservicedefaultbranchshort-մեթոդ) | Վերադարձնում է **DEFBRANCH** ներքին անունով [տող տիպի](../types/system_types.md#stringfieldtype) պարամետրի արժեքը, որը ցույց է տալիս `suid` ներքին համարով օգտագործողի համար առաջարկվող գրասենյակի կոդը։ |
| [Exists(string)](IParametersService/Exists.md) | Ստուգում է համակարգային պարամետրի գոյությունը՝ ըստ պարամետրի ներքին անվան։ |
| [ExistsHiPar(string, DateTime, bool, string)](IParametersService/ExistsHiPar.md) | Ստուգում է ժամանակագրական պարամետրի նշանակված արժեքի առկայությունը: |
| [GetBooleanValue(string)](IParametersService/GetBooleanValue.md#iparametersservicegetbooleanvaluestring-մեթոդ) | Վերադարձնում է [տրամաբանական տիպի](../types/system_types.md#booleanfieldtype) պարամետրի արժեքը՝ ըստ պարամետրի ներքին անվան։ |
| [GetBooleanValue(string, short)](IParametersService/GetBooleanValue.md#iparametersservicegetbooleanvaluestring-short-մեթոդ) | Վերադարձնում է [տրամաբանական տիպի](../types/system_types.md#booleanfieldtype) պարամետրի արժեքը՝ ըստ պարամետրի ներքին անվան և օգտագործողի համարի։ |
| [GetDateTimeValue(string)](IParametersService/GetDateTimeValue.md#iparametersservicegetdatetimevaluestring-մեթոդ) | Վերադարձնում է ամսաթիվ տիպի ([DATE](../types/system_types.md#datefieldtype), [DATELONG](../types/system_types.md#datefieldtype)) պարամետրի արժեքը՝ ըստ պարամետրի ներքին անվան։ |
| [GetDateTimeValue(string, short)](IParametersService/GetDateTimeValue.md#iparametersservicegetdatetimevaluestring-short-մեթոդ) | Վերադարձնում է ամսաթիվ տիպի ([DATE](../types/system_types.md#datefieldtype), [DATELONG](../types/system_types.md#datefieldtype)) պարամետրի արժեքը՝ ըստ պարամետրի ներքին անվան և օգտագործողի համարի։ |
| [GetDecimalValue(string)](IParametersService/GetDecimalValue.md#iparametersservicegetdecimalvaluestring-մեթոդ) | Վերադարձնում է կոտորակային թիվ տիպի ([N](../types/system_types.md#numericfieldtype), [NP](../types/system_types.md#numericpositivefieldtype), [SUMMA](../types/system_types.md#amountfieldtype), [SUMMAP](../types/system_types.md#amountpositivefieldtype)) պարամետրի արժեքը՝ ըստ պարամետրի ներքին անվան։ |
| [GetDecimalValue(string, short)](IParametersService/GetDecimalValue.md#iparametersservicegetdecimalvaluestring-short-մեթոդ) | Վերադարձնում է կոտորակային թիվ տիպի ([N](../types/system_types.md#numericfieldtype), [NP](../types/system_types.md#numericpositivefieldtype), [SUMMA](../types/system_types.md#amountfieldtype), [SUMMAP](../types/system_types.md#amountpositivefieldtype)) պարամետրի արժեքը՝ ըստ պարամետրի ներքին անվան և օգտագործողի համարի։ |
| [GetDescriptor(string)](IParametersService/GetDescriptor.md) | Վերադարձնում է համակարգային [պարամետրի նկարագրությունը](../types/Descriptor.md): |
| [GetDetailedDescription(string)](IParametersService/GetDetailedDescription.md) | Վերադարձնում է պարամետրի մանրամասն նկարագրությունը։ |
| [GetHiPar(string, DateTime, bool, string, bool, DateTime?)](IParametersService/GetHiPar.md) | Վերադարձնում է ժամանակագրական պարամետրի արժեքը և նշանակման ամսաթիվը։ |
| [GetIntegerValue(string)](IParametersService/GetIntegerValue.md#iparametersservicegetintegervaluestring-մեթոդ) | Վերադարձնում է ամբողջ թիվ տիպի ([N](../types/system_types.md#numericfieldtype), [NP](../types/system_types.md#numericpositivefieldtype)) պարամետրի արժեքը՝ ըստ պարամետրի ներքին անվան։ |
| [GetIntegerValue(string, short)](IParametersService/GetIntegerValue.md#iparametersservicegetintegervaluestring-short-մեթոդ) | Վերադարձնում է ամբողջ թիվ տիպի ([N](../types/system_types.md#numericfieldtype), [NP](../types/system_types.md#numericpositivefieldtype)) պարամետրի արժեքը՝ ըստ պարամետրի ներքին անվան և օգտագործողի համարի։ |
| [GetShortValue(string)](IParametersService/GetShortValue.md#iparametersservicegetshortvaluestring-մեթոդ) | Վերադարձնում է կարճ ամբողջ թիվ տիպի ([N](../types/system_types.md#numericfieldtype), [NP](../types/system_types.md#numericpositivefieldtype)) պարամետրի արժեքը՝ ըստ պարամետրի ներքին անվան։ |
| [GetShortValue(string, short)](IParametersService/GetShortValue.md#iparametersservicegetshortvaluestring-short-մեթոդ) | Վերադարձնում է կարճ ամբողջ թիվ տիպի ([N](../types/system_types.md#numericfieldtype), [NP](../types/system_types.md#numericpositivefieldtype)) պարամետրի արժեքը՝ ըստ պարամետրի ներքին անվան և օգտագործողի համարի։ |
| [GetStringValue(string)](IParametersService/GetStringValue.md#iparametersservicegetstringvaluestring-մեթոդ) | Վերադարձնում է տող տիպի ([C](../types/system_types.md#stringfieldtype), [CH](../types/system_types.md#chfieldtype), [FOLDER](../types/system_types.md#folderfieldtype), [AMACC](../types/system_types.md#amaccfieldtype), [TREE](../types/system_types.md#treefieldtype), [FULLTREE](../types/system_types.md#treefieldtype), [PATH](../types/system_types.md#pathfieldtype), [FILE](../types/system_types.md#filefieldtype)) պարամետրի արժեքը՝ ըստ պարամետրի ներքին անվան։ |
| [GetStringValue(string, short)](IParametersService/GetStringValue.md#iparametersservicegetstringvaluestring-short-մեթոդ) | Վերադարձնում է տող տիպի ([C](../types/system_types.md#stringfieldtype), [CH](../types/system_types.md#chfieldtype), [FOLDER](../types/system_types.md#folderfieldtype), [AMACC](../types/system_types.md#amaccfieldtype), [TREE](../types/system_types.md#treefieldtype), [FULLTREE](../types/system_types.md#treefieldtype), [PATH](../types/system_types.md#pathfieldtype), [FILE](../types/system_types.md#filefieldtype)) պարամետրի արժեքը՝ ըստ պարամետրի ներքին անվան և օգտագործողի համարի։ |
| [GetTimeSpanValue(string)](IParametersService/GetTimeSpanValue.md#iparametersservicegettimespanvaluestring-մեթոդ) | Վերադարձնում է ժամ տիպի ([TIME](../types/system_types.md#timefieldtype), [TIMELONG](../types/system_types.md#timefieldtype)) պարամետրի արժեքը՝ ըստ պարամետրի ներքին անվան։ |
| [GetTimeSpanValue(string, short)](IParametersService/GetTimeSpanValue.md#iparametersservicegettimespanvaluestring-short-մեթոդ) | Վերադարձնում է ժամ տիպի ([TIME](../types/system_types.md#timefieldtype), [TIMELONG](../types/system_types.md#timefieldtype)) պարամետրի արժեքը՝ ըստ պարամետրի ներքին անվան և օգտագործողի համարի։ |
| [OperEnd()](IParametersService/OperEnd.md#iparametersserviceoperend-մեթոդ) | Վերադարձնում է **OPEREND** ներքին անունով [ամսաթիվ տիպի](../types/system_types.md#datefieldtype) պարամետրի արժեքը, որը ցույց է տալիս գործառնական ժամանակահատվածի վերջի ամսաթիվը ընթացիկ օգտագործողի համար։ |
| [OperEnd(short)](IParametersService/OperEnd.md#iparametersserviceoperendshort-մեթոդ) | Վերադարձնում է **OPEREND** ներքին անունով [ամսաթիվ տիպի](../types/system_types.md#datefieldtype) պարամետրի արժեքը, որը ցույց է տալիս գործառնական ժամանակահատվածի վերջի ամսաթիվը `suid` ներքին համարով օգտագործողի համար։ |
| [OPERHOLIDAYS()](IParametersService/OPERHOLIDAYS.md) | Վերադարձնում է **OPERHOLIDAYS** ներքին անունով [տրամաբանական տիպի](../types/system_types.md#booleanfieldtype) պարամետրի արժեքը, որը ցույց է տալիս, արդյոք բաց գործառնական ժամանակահատվածում հանգստյան օրերի արգելումը ակտիվ է։ |
| [OperStart()](IParametersService/OperStart.md#iparametersserviceoperstart-մեթոդ) | Վերադարձնում է **OPERSTART** ներքին անունով [ամսաթիվ տիպի](../types/system_types.md#datefieldtype) պարամետրի արժեքը, որը ցույց է տալիս գործառնական ժամանակահատվածի սկզբի ամսաթիվը ընթացիկ օգտագործողի համար։ |
| [OperStart(short)](IParametersService/OperStart.md#iparametersserviceoperstartshort-մեթոդ) | Վերադարձնում է **OPERSTART** ներքին անունով [ամսաթիվ տիպի](../types/system_types.md#datefieldtype) պարամետրի արժեքը, որը ցույց է տալիս գործառնական ժամանակահատվածի սկզբի ամսաթիվը `suid` ներքին համարով օգտագործողի համար։ |
| [REPEND()](IParametersService/REPEND.md#iparametersservicerepend-մեթոդ) | Վերադարձնում է **REPEND** ներքին անունով [ամսաթիվ տիպի](../types/system_types.md#datefieldtype) պարամետրի արժեքը, որը ցույց է տալիս հաշվետու ժամանակահատվածի վերջի ամսաթիվը ընթացիկ օգտագործողի համար։ |
| [REPEND(short)](IParametersService/REPEND.md#iparametersservicerependshort-մեթոդ) | Վերադարձնում է **REPEND** ներքին անունով [ամսաթիվ տիպի](../types/system_types.md#datefieldtype) պարամետրի արժեքը, որը ցույց է տալիս հաշվետու ժամանակահատվածի վերջի ամսաթիվը `suid` ներքին համարով օգտագործողի համար։ |
| [REPSTART()](IParametersService/REPSTART.md#iparametersservicerepstart-մեթոդ) | Վերադարձնում է **REPSTART** ներքին անունով [ամսաթիվ տիպի](../types/system_types.md#datefieldtype) պարամետրի արժեքը, որը ցույց է տալիս հաշվետու ժամանակահատվածի սկզբի ամսաթիվը ընթացիկ օգտագործողի համար։ |
| [REPSTART(short)](IParametersService/REPSTART.md#iparametersservicerepstartshort-մեթոդ) | Վերադարձնում է **REPSTART** ներքին անունով [ամսաթիվ տիպի](../types/system_types.md#datefieldtype) պարամետրի արժեքը, որը ցույց է տալիս հաշվետու ժամանակահատվածի սկզբի ամսաթիվը `suid` ներքին համարով օգտագործողի համար։ |
| [SetHiPar(string, DateTime, int, string, string, DateTime?)](IParametersService/SetHiPar.md) | Գրանցում է ժամանակագրական պարամետրի նոր արժեք տրված ամսաթվով: |
| [SetValue(string, object)](IParametersService/SetValue.md) | Փոխում է համակարգային պարամետրի արժեքը։ |
| [SetValueWithAdditionalConnection(string, object)](IParametersService/SetValueWithAdditionalConnection.md) | Փոխում է համակարգային պարամետրի արժեքը [լրացուցիչ sql միացման](IDBService/CreateAdditionalConnection.md) միջոցով։ |

