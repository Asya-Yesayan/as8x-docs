---
title: AddColumn(string, string, string, FieldType, string, string, FieldType, short, short, SupportedEncoding)
nav_exclude: true
---

# Extender.AddColumn(string, string, string, FieldType, string, string, FieldType, short, short, SupportedEncoding) մեթոդ

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

| Անվանում             | Տվյալների տիպ       | Լռությամբ արժեք | Նկարագրություն   |
|---------------------|-------------------|----------------|------|
| name                | string            | —              | Սյան ներքին անունը: |
| armenianCaption     | string            | —              | Սյան հայերեն անվանումը ANSI կոդավորմամբ։ |
| englishCaption      | string            | —              | Սյան անգլերեն անվանումը։    |
| columnType          | FieldType         | —              | Սյան համակարգային տիպը։ Օրինակ՝ FieldTypeProvider.Boolean, FieldTypeProvider.Amount, FieldTypeProvider.GetStringFieldType(10)   |
| armenianDescription | string            | null           | Սյան հայերեն նկարագրությունը ANSI կոդավորմամբ։  |
| englishDescription  | string            | null           | Սյան անգլերեն նկարագրությունը։    |
| showType            | FieldType         | null           | Սահմանում է համակարգային տիպը ցուցադրման ժամանակ։ Եթե բացակայում է, օգտագործվում է columnType հատկության արժեքը։ Օգտագործվում է, երբ տվյալների տիպը հարմար չէ ցուցադրման համար։ Օրինակ՝ columnType = FieldTypeProvider.GetStringFieldType(150), showType = FieldTypeProvider.GetStringFieldType(32) |
| width               | short             | 0              | Սյան լայնությունը։ Արժեք չփոխանցելու դեպքում որոշվում է կախված սյան armenianCaption, englishCaption, columnType, showType հատկություններից։   |
| headlines           | short             | 2              | Սյան անվանման մեջ տողերի քանակ։   |
| supportedEncoding   | SupportedEncoding | SupportedEncoding.ArmenianAnsi | Սյան կոդավորման տեսակը, որը կարող է ընդունել 3 արժեք՝ SupportedEncoding.ArmenianAnsi, SupportedEncoding.RussionAnsi և SupportedEncoding.Unicode։   |
