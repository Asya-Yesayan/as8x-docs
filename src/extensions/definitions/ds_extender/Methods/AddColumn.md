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


| Անվանում              | Տվյալների տիպ        | Լռությամբ արժեք                                   | Նկարագրություն |
|-----------------------|---------------------|--------------------------------------------------|----------------|
| name                  | string              |         -                                         | Սյան ներքին անուՆը: |
| armenianCaption       | string              |       -                                           | Սյան հայերեն անվանումը ANSI կոդավորմամբ։ |
| englishCaption        | string              |         -                                         | Սյան անգլերեն անվանումը։ |
| columnType            | FieldType           |         -                                         | Սյան համակարգային տիպը։ Օրինակ՝ FieldTypeProvider.Boolean, FieldTypeProvider.Amount, FieldTypeProvider.GetStringFieldType(10) |
| armenianDescription   | string              | null                                             | Սյան հայերեն նկարագրությունը ANSI կոդավորմամբ։ |
| englishDescription    | string              | null                                             | Սյան անգլերեն նկարագրությունը։ |
| showType              | FieldType           | null                                             | Սահմանում է համակարգային տիպը ցուցադրման ժամանակ։ Եթե այս պարամետրը բացակայում է, ապա օգտագործվում է columnType հատկության արժեքը։ Սովորաբար այս հատկությունը օգտագործում են, եթե տվյալների տիպը, որը համապատասխանում է սյունակի արժեքներին, հարմար չի ցուցադրման համար։ Օրինակ եթե columnType = FieldTypeProvider.GetStringFieldType(150) է, բայց շատ դեպքերում բավական է տեսնել տողի սկիզբը, ապա կարելի է սահմանել showType = FieldTypeProvider.GetStringFieldType(32), |
| width                 | short               | 0                                                | Սյան լայնությունը: Արժեք չփոխանցելու դեպքում որոշվում է կախված սյան armenianCaption, englishCaption, columnType, showType հատկություններից կախված։ |
| headlines             | short               | 2                                                | Սյան անվանման մեջ տողերի քանակ։ Լռությամբ արժեքը 2 է։ |
| supportedEncoding     | SupportedEncoding   | SupportedEncoding.ArmenianAnsi                  | Սյան կոդավորման տեսակը, որը կարող է ընդունել 3 արժեք՝ SupportedEncoding.ArmenianAnsi, SupportedEncoding.RussionAnsi և SupportedEncoding.Unicode։ |
