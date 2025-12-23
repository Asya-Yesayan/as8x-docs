---
title: ITemplateSubstitutionService.LoadSubstituteAndGetContent(IPrintTemplateSubstitution, string, SubstitutionType, HtmlImageOption, bool) մեթոդ  
---

## Նկարագիր

**Դաս՝** [ITemplateSubstitutionService](../ITemplateSubstitutionService.md)

```c#
public Task<string> LoadSubstituteAndGetContent(IPrintTemplateSubstitution printTemplateSubstitution, 
                                                string name, 
                                                SubstitutionType type, 
                                                HtmlImageOption htmlImageOption = default,
                                                bool check = false)
```

Բեռնում է տպելու ձևանմուշը տվյալների պահոցից, լրացնում `printTemplateSubstitution`-ում պարունակվող նախապես հաշվարկված տվյալներով և ստացված ֆայլը վերադարձնում որպես տեքստ։

Նախատեսված է `htm` և `txt` տիպի ձևանմուշների լրացումից հետո վերջնական տեքստը ստանալու համար։

Տե՛ս [օրինակը](../../../Examples/ITemplateSubstitutionService.md)։

**Պարամետրեր**

| Անվանում        | Տվյալների տիպ        | Լռությամբ արժեք | Նկարագրություն |
|-----------------|----------------------|----------------|----------------|
| printTemplateSubstitution | IPrintTemplateSubstitution | -              | Տպելու ձևանմուշի տեղադրվող արժեքները պարունակող օբյեկտ։ |
| name            | string               | -              | Տպելու ձևանմուշի ներքին անուն: |
| type            | SubstitutionType     | -              | [Տպելու ձևանմուշի տիպ](../../../Types/SubstitutionType.md): |
| htmlImageOption | HtmlImageOption      | default        | Html տպվող տեսքերի [պատկերների տեղադրման եղանակ](../../../Types/HtmlImageOption.md)։ |
| check           | bool                 | false          | Տպելու ձևանմուշում առկա կոդերի ճիշտ շարահյուսության ստուգման հայտանիշ։ |
