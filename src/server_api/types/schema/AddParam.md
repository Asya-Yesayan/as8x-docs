---
title: Schema.AddParam(string, string, FieldType, string, MultiFilterTypes, bool, string, bool, bool) մեթոդ
---



```c#
public void AddParam(string name, string description, FieldType fieldType, string userReportValue = null,
                     MultiFilterTypes supportedFilterType = MultiFilterTypes.IsUndefined, bool required = false, 
                     string eDescription = "", bool nullable = false, bool allowTime = false)
```

Տվյալների աղբյուրի սխեմայում ավելացնում է պարամետրի հատկությունների մասին ինֆորմացիան։

**Պարամետրեր**

* `name` - Պարամետրի ներքին անունը։
* `description` - Պարամետրի հայերեն նկարագրությունը `ANSI` կոդավորմամբ։
* `fieldType` - Պարամետրի [համակարգային տիպը](../system_types.md):
* `userReportValue` - Սահմանում է պարամետրի արժեքը օգտագործողի կողմից նկարագրվող հաշվետվություններում։ 
                      Այս արժեքը չի կարող փոփոխվել օգտագործողի կողմից: Լռությամբ արժեքը null է։
* `supportedFilterType` - Եթե պարամետրի տիպը ժառանգ է ParamValuePair<T> դասից, ապա պետք է նշել պարամետրի ֆիլտրման հասանելի  տիպերը: 
                          Լռությամբ արժեքը MultiFilterTypes.IsUndefined է։
* `required` - Պարամետրի արժեքի լրացումը պարտադիր է, թե ոչ: Լռությամբ արժեքը false է։
* `eDescription` - Պարամետրի անգլերեն նկարագրությունը: Լռությամբ արժեքը string.Empty է։
* `nullable` - Պարամետրը կարող է ընդունել null տիպի արժեք թե ոչ: Լռությամբ արժեքը false է։
* `allowTime` - Եթե պարամետրի [համակարգային տիպը](../system_types.md) ամսաթվային տիպի է (Date, DateLong, DateRep), ապա ամսաթվի հետ միասին լինի ժամանակը թե ոչ: Լռությամբ արժեքը false է։
                
**Օրինակ**

```c#
this.Schema.AddParam("DocType", "Փաստաթղթի տեսակ".ToArmenianANSI(),                         
                     FieldTypeProvider.GetStringFieldType(8), eDescription: "Document's type");
``՝
