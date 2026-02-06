---
title: AddParam
nav_exclude: true
---

# Schema.AddParam(string, string, FieldType, string, MultiFilterTypes, bool, string, bool, bool) մեթոդ

```c#
public void AddParam(string name, string description, FieldType fieldType, string userReportValue = null,
                     MultiFilterTypes supportedFilterType = MultiFilterTypes.IsUndefined, bool required = false, 
                     string eDescription = "", bool nullable = false, bool allowTime = false)
```

Տվյալների աղբյուրի սխեմայում ավելացնում է պարամետրի հատկությունների մասին ինֆորմացիան։

**Պարամետրեր**

| Անվանում             | Տվյալների տիպ        | Լռությամբ արժեք                     | Նկարագրություն |
|--------------------|--------------------|------------------------------------|----------------|
| name               | string             | -                                | Պարամետրի ներքին անունը։ |
| description        | string             | -                                | Պարամետրի հայերեն նկարագրությունը `ANSI` կոդավորմամբ։ |
| fieldType          | FieldType          | -                                | Պարամետրի [համակարգային տիպը](../../system_types.md)։ |
| userReportValue    | string             | null                               | Սահմանում է պարամետրի արժեքը օգտագործողի կողմից նկարագրվող հաշվետվություններում։ Այս արժեքը չի կարող փոփոխվել օգտագործողի կողմից։ |
| supportedFilterType| MultiFilterTypes   | MultiFilterTypes.IsUndefined       | Եթե պարամետրի տիպը ժառանգ է ParamValuePair<T> դասից, ապա պետք է նշել պարամետրի ֆիլտրման հասանելի տիպերը։ |
| required           | bool               | false                              | Պարամետրի արժեքի լրացումը պարտադիր է, թե ոչ։ |
| eDescription       | string             | string.Empty                        | Պարամետրի անգլերեն նկարագրությունը։ |
| nullable           | bool               | false                              | Պարամետրը կարող է ընդունել null տիպի արժեք թե ոչ։ |
| allowTime          | bool               | false                              | Եթե պարամետրի [համակարգային տիպը](../../system_types.md) ամսաթվային տիպի է (Date, DateLong, DateRep), ապա ամսաթվի հետ միասին լինի ժամանակը թե ոչ։ |

                
**Օրինակ**

```c#
this.Schema.AddParam("DocType", "Փաստաթղթի տեսակ".ToArmenianANSI(),                         
                     FieldTypeProvider.GetStringFieldType(8), eDescription: "Document's type");
``՝
