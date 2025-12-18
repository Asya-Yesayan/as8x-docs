---
title: Schema.AddColumn(string, string, string, string, FieldType, bool, short, bool, string, string, FieldType, short, short, bool, bool, SupportedEncoding) մեթոդ
---

```c#
public void AddColumn(string name, string source, string armenianCaption, string englishCaption, FieldType columnType,
                      bool isPermanent = false, short start = 0, bool autoProcess = true,
                      string armenianDescription = null, string englishDescription = null,
                      FieldType showType = null, short width = 0,
                      short headlines = 2, bool isTrimEnd = false, bool mayNotExistInSQL = false,
                      SupportedEncoding supportedEncoding = SupportedEncoding.ArmenianAnsi)
```

Տվյալների աղբյուրի սխեմայում ավելացնում է սյան հատկությունների մասին ինֆորմացիան։

**Պարամետրեր**
| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
|----------|----------------|----------------|----------------|
| name | string | - | Սյան ներքին անունը։ |
| source | string | - | Sql-based տվյալների աղբյուրի դեպքում նշվում է SQL-ից կարդացվող սյան անունը, իսկ Array-based-ի դեպքում՝ սյան համարը։ |
| armenianCaption | string | - | Սյան հայերեն անվանումը `ANSI` կոդավորմամբ։ |
| englishCaption | string | - | Սյան անգլերեն անվանումը։ |
| columnType | FieldType | - | Սյան [համակարգային տիպը](../system_types.md)։ |
| isPermanent | bool | false | Սյունը հավերժական է թե ոչ: Ընթացիկ դիտելու ձևից ծրագրային կարելի է կարդալ միայն հավերժական սյունակները։ |
| start | short | 0 | Սահմանում է մեկնարկային դիրքը, որից սկսած ցույց է տալիս արժեք որևէ ձևաչափված դաշտից։ Նախատեսված է fSPEC-ից կամ այլ տողային դաշտերից տվյալը ճիշտ տիպով կարդալու և ցույց տալու համար։ Կարդացվող արժեքի երկարությունը որոշվում է columnType-ից կախված։ |
| autoProcess | bool | true | Այս հատկության false արժեքի դեպքում սյունը համարվում է հաշվարկային։ Սյան արժեքների հաշվարկը կարելի է իրականացնել գերբեռնելով `ProcessRow` կամ `AfterDataReaderClose` մեթոդը։ Այս հատկությունը ունեցող սյան համար որպես source կարելի է նշել կամայական տեքստ։ |
| armenianDescription | string | null | Սյան հայերեն նկարագրությունը `ANSI` կոդավորմամբ։ |
| englishDescription | string | null | Սյան անգլերեն նկարագրությունը `ANSI` կոդավորմամբ։ |
| showType | FieldType | null | Սահմանում է [համակարգային տիպը](../system_types.md) ցուցադրման ժամանակ։ Եթե այս պարամետրը բացակայում է, ապա օգտագործվում է columnType հատկության արժեքը։ Սովորաբար այս հատկությունը օգտագործում են, եթե տվյալների տիպը, որը համապատասխանում է սյունակի արժեքներին, հարմար չի ցուցադրման համար։ Օրինակ եթե columnType = FieldTypeProvider.GetStringFieldType(150) է, բայց շատ դեպքերում բավական է տեսնել տողի սկիզբը, ապա կարելի է սահմանել showType = FieldTypeProvider.GetStringFieldType(32): |
| width | short | 0 | Սյան լայնությունը: Արժեք չփոխանցելու դեպքում որոշվում է կախված սյան armenianCaption, englishCaption, columnType, showType հատկություններից։ |
| headlines | short | 2 | Սյան անվանման մեջ տողերի քանակ։ |
| isTrimEnd | bool | false | Սյան արժեքների աջակողմյան բացատները հեռացվում են թե ոչ։ |
| mayNotExistInSQL | bool | false | Sql-based տվյալների աղբյուրի sql հարցման մեջ սյան արժեքների լրացման համար նախատեսված սյան վերադարձը պարտադիր է թե ոչ։ Սյան արժեքների լրացման համար անհրաժեշտ sql-ական սյան անվանումը նշվում է source դաշտում։ |
| supportedEncoding | SupportedEncoding | SupportedEncoding.ArmenianAnsi | Սյան կոդավորման տեսակ, որը կարող է ընդունել 3 տեսակի արժեք՝ ArmenianAnsi, RussionAnsi և Unicode։ Unicode արժեքի դեպքում անհրաժեշտ է սխեմայի SupportedExtendedFeatures հատկության արժեքը դնել true։ |

                        
**Օրինակ**

```c#
this.Schema.AddColumn("DocType", "DocType", "Փաստաթղթի տեսակ".ToArmenianANSI(), "Document's type",
                      FieldTypeProvider.GetStringFieldType(8));
```
