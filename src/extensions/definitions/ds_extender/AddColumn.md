---
title: Extender.AddColumn(string, string, string, FieldType, string, string, FieldType, short, short, SupportedEncoding) մեթոդ
---

## Նկարագիր

**Դաս՝** [Extender](../ds_extender.md)

```c#
public void AddColumn(string name, 
                      string armenianCaption, 
                      string englishCaption, 
                      FieldType columnType,
                      string armenianDescription = null, 
                      string englishDescription = null,
                      FieldType showType = null, 
                      short width = 0, 
                      short headlines = 2,
                      SupportedEncoding supportedEncoding = SupportedEncoding.ArmenianAnsi)
```

Ընդլայնման միջոցով ավելացող նոր սյան հատկությունները սահմանելու համար անհրաժեշտ է կոնստրուկտորում կանչել այս մեթոդը։

**Պարամետրեր**

* `name` - Սյան ներքին անուՆը:
* `armenianCaption` - Սյան հայերեն անվանումը ANSI կոդավորմամբ։
* `englishCaption` - Սյան անգլերեն անվանումը։
* `columnType` - Սյան համակարգային տիպը։  
  Օրինակ՝  
  FieldTypeProvider.Boolean  
  FieldTypeProvider.Amount  
  FieldTypeProvider.GetStringFieldType(10)  
* `armenianDescription` - Սյան հայերեն նկարագրությունը ANSI կոդավորմամբ։
* `englishDescription` - Սյան անգլերեն նկարագրությունը։
* `showType` - Սահմանում է համակարգային տիպը ցուցադրման ժամանակ։  
  Եթե այս պարամետրը բացակայում է, ապա օգտագործվում է columnType հատկության արժեքը։
  Սովորաբար այս հատկությունը օգտագործում են, եթե տվյալների տիպը, որը համապատասխանում է սյունակի արժեքներին, հարմար չի ցուցադրման համար։
  Օրինակ եթե columnType = FieldTypeProvider.GetStringFieldType(150) է, բայց շատ դեպքերում բավական է տեսնել տողի սկիզբը, ապա կարելի է սահմանել showType = 
  FieldTypeProvider.GetStringFieldType(32),
* `width` - Սյան լայնությունը:
  Արժեք չփոխանցելու դեպքում որոշվում է կախված սյան armenianCaption, englishCaption, columnType, showType հատկություններից կախված։
* `headlines` - Սյան անվանման մեջ տողերի քանակ։ Լռությամբ արժեքը 2 է։
* `supportedEncoding` - Սյան կոդավորման տեսակը, որը կարող է ընդունել 3 արժեք՝ SupportedEncoding.ArmenianAnsi, SupportedEncoding.RussionAnsi և SupportedEncoding.Unicode։
