---
title: Schema.AddColumn(string, string, string, string, FieldType, bool, short, bool, string, string, FieldType, short, short, bool, bool, SupportedEncoding) մեթոդ
---

Սխեմայում տվյալների աղբյուրի սյան հատկությունների մասին ինֆորմացիան ավելացնելու համար պետք է կանչել AddColumn մեթոդը, որն ունի հետևյալ շարահյուսությունը՝

```c#
public void AddColumn(string name, string source, string armenianCaption, string englishCaption, FieldType columnType,
                      bool isPermanent = false, short start = 0, bool autoProcess = true,
                      string armenianDescription = null, string englishDescription = null,
                      FieldType showType = null, short width = 0,
                      short headlines = 2, bool isTrimEnd = false, bool mayNotExistInSQL = false,
                      SupportedEncoding supportedEncoding = SupportedEncoding.ArmenianAnsi)
```

**Պարամետրեր**

* `name` - Սյան ներքին անունը։
* `source` - Sql-based տվյալների աղբյուրի դեպքում նշվում է SQL-ից կարդացվող սյան անունը, իսկ Array-based-ի դեպքում՝ սյան համարը։
* `armenianCaption` - Սյան հայերեն անվանումը `ANSI` կոդավորմամբ։
* `englishCaption` - Սյան անգլերեն անվանումը։
* `columnType` - Սյան [համակարգային տիպը](../system_types.md)։
* `isPermanent` - Սյունը հավերժական է թե ոչ: 
                  Ընթացիկ դիտելու ձևից ծրագրային կարելի է կարդալ միայն հավերժական սյունակները։ Լռությամբ արժեքը false է։
* `start` - Սահմանում է մեկնարկային դիրքը, որից սկսած ցույց է տալիս արժեք որևէ ձևաչափված դաշտից։ 
            Նախատեսված է fSPEC-ից կամ այլ տողային դաշտերից տվյալը ճիշտ տիպով կարդալու և ցույց տալու համար։ 
            Կարդացվող արժեքի երկարությունը որոշվում է columnType-ից կախված։ Լռությամբ արժեքը 0-ն է։
* `autoProcess` - Այս հատկության false արժեքի դեպքում սյունը համարվում է հաշվարկային։ 
                  Սյան արժեքների հաշվարկը կարելի է իրականացնել գերբեռնելով `ProcessRow` կամ `AfterDataReaderClose` մեթոդը։ 
                  Այս հատկությունը ունեցող սյան համար որպես source կարելի է նշել կամայական տեքստ։
                  Լռությամբ արժեքը true է։
* `armenianDescription` - Սյան հայերեն նկարագրությունը `ANSI` կոդավորմամբ։ Լռությամբ արժեքը null է։
* `englishDescription` - Սյան անգլերեն նկարագրությունը `ANSI` կոդավորմամբ։ Լռությամբ արժեքը null է։
* `showType` - Սահմանում է [համակարգային տիպը](../system_types.md) ցուցադրման ժամանակ։ 
               Եթե այս պարամետրը բացակայում է, ապա օգտագործվում է columnType հատկության արժեքը։ 
               Սովորոբար այս հատկությունը օգտագործում են, եթե տվյալների տիպը, որը համապատասխանում է սյունակի արժեքներին, հարմար չի ցուցադրման համար։
               Օրինակ եթե columnType = FieldTypeProvider.GetStringFieldType(150) է, բայց շատ դեպքերում բավական է տեսնել տողի սկիզբը, ապա կարելի է սահմանել showType = FieldTypeProvider.GetStringFieldType(32):
               Լռությամբ արժեքը null է։
* `width` - Սյան լայնությունը: Արժեք չփոխանցելու դեպքում որոշվում է կախված սյան armenianCaption, englishCaption, columnType, showType       հատկություններից:
* `headlines` - Սյան անվանման մեջ տողերի քանակ: Լռությամբ արժեքը 2 է։
* `isTrimEnd` - Սյան արժեքների աջակողմյան բացատները հեռացվում են թե ոչ: Լռությամբ արժեքը false է։
* `mayNotExistInSQL` - Sql-based տվյալների աղբյուրի sql հարցման մեջ սյան արժեքների լրացման համար նախատեսված սյան վերադարձը պարտադիր է թե ոչ։ 
                       Սյան արժեքների լրացման համար անհրաժեշտ sql-ական սյան անվանումը նշվում է source դաշտում։
                       Լռությամբ արժեքը false է։
* `supportedEncoding` - Սյան կոդավորման տեսակ, որը կարող է ընդունել 3 տեսակի արժեք՝ ArmenianAnsi, RussionAnsi և Unicode։  
                        Unicode արժեքի դեպքում անհրաժեշտ է սխեմայի SupportedExtendedFeatures հատկության արժեքը դնել true:
                        Լռությամբ արժեքը SupportedEncoding.ArmenianAnsi է։
                        
**Օրինակ**

```c#
this.Schema.AddColumn("DocType", "DocType", "Փաստաթղթի տեսակ".ToArmenianANSI(), "Document's type",
                      FieldTypeProvider.GetStringFieldType(8));
```
