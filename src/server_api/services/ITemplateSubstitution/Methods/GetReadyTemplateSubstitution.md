---
title: GetReadyTemplateSubstitution
parent: "Մեթոդներ"
grand_parent: "ITemplateSubstitutionService"
---

# ITemplateSubstitutionService.GetReadyTemplateSubstitution(Document.Document, string, SubstitutionType, Dictionary<string, object>) մեթոդ

## Նկարագիր

**Դաս՝** [ITemplateSubstitutionService](../ITemplateSubstitutionService.md)

```c#
public Task<ITemplateSubstitution> GetReadyTemplateSubstitution(Document.Document document,
                                                                string templateName,
                                                                SubstitutionType templateType,
                                                                Dictionary<string, object> parameters)
```

Հաշվարկում է փաստաթղթին կապակցված տպելու ձևանմուշի տեղադրվող արժեքները, օգտագործողի կողմից նկարագրված պարամետրերը և վերադարձնում տպելու ձևանմուշի տեղադրվող արժեքները պարունակող օբյեկտը։

Տե՛ս [օրինակը](../../../Examples/ITemplateSubstitutionService.md)։

**Պարամետրեր**

| Անվանում        | Տվյալների տիպ        | Լռությամբ արժեք | Նկարագրություն |
|-----------------|----------------------|----------------|----------------|
| document        | Document.Document    | -              | Տպելու ձևանմուշի հետ կապակցված [փաստաթուղթ](../../../Definitions/Document/Document.md)։ |
| templateName    | string               | -              | Տպելու ձևանմուշի ներքին անունը։ |
| templateType    | SubstitutionType     | -              | [Տպելու ձևանմուշի տիպ](../../../Types/SubstitutionType.md): |
| parameters      | Dictionary<string, object> | -              | Տպելու ձևանմուշի լրացման պարամետրերի Dictionary, որտեղ բանալին՝ պարամետրի անունն է, իսկ արժեքը՝ պարամետրի արժեքը: <br> Այս պարամետրի արժեքը փոխանցվելու է տպելու ձևանմուշի տեղադրվող արժեքները հաշվարկող [TemplateSubstitution](../../../Definitions/Document/Methods/TemplateSubstitution.md) իրադարձության մշակիչին։ |
  
