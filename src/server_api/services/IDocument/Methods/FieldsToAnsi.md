---
title: FieldsToAnsi(string, Dictionary<string, object>)
parent: "Մեթոդներ"
grand_parent: "IDocumentService"
---

# IDocumentService.FieldsToAnsi(string, Dictionary<string, object>) մեթոդ

## Նկարագիր

**Դաս՝** [IDocumentService](../IDocumentService.md)

```c#
public Task<Dictionary<string, object>> FieldsToAnsi(string docType, 
                                                     Dictionary<string, object> fields)
```

<!-- Վերադարձնում է փաստաթղթի դաշտերի արժեքները՝ ձևափոխված  համապատասխան լեզվի ANSI կոդավորման։ -->
Ձևափոխում է ցանցով փոխանցված արժեքների բազմությունը ANSI կոդավորման համարելով, որ դրանք պետք է լինեն փաստաթղթի դաշտերի արժեքներ։ 

Հաշվի է առնվում  
- դաշտը լրացվում է հայերեն, թե ռուսերեն,
- փոխանցող կլինետը օգտագործում է յունկոդ տվյալներ, թե ANSI տվյալներ։

Տե՛ս նաև [FieldToAnsi](FieldToAnsi.md)

**Պարամետրեր**

| Անվանում        | Տվյալների տիպ        | Լռությամբ արժեք | Նկարագրություն |
|-----------------|----------------------|----------------|----------------|
| docType         | string               | -              | Փաստաթղթի ներքին անունը (տեսակը)։ |
| fields          | Dictionary<string, object> | -              | Փաստաթղթի դաշտերի ներքին անունների և արժեքների բազմություն։ |

<!-- ### GetCaption

```c#
public Task<(string caption, string englishCaption)> GetCaption(string docType)
```

Վերադարձնում է փաստաթղթի հայերեն և անգլերեն անվանումները։

**Պարամետրեր**

| Անվանում        | Տվյալների տիպ        | Լռությամբ արժեք | Նկարագրություն |
|-----------------|----------------------|----------------|----------------|
| caption         | string               | -              | — |
| docType         | string englishCaption)> GetCaption(string | -              | Փաստաթղթի տեսակ։ --> |
