---
title: ITemplateSubstitutionService.LoadSubstitutionAndGetStorage(IPrintTemplateSubstitution, string, SubstitutionType, HtmlImageOption, string, bool) մեթոդ  
---

## Նկարագիր

**Դաս՝** [ITemplateSubstitutionService](../ITemplateSubstitutionService.md)

```c#
public Task<StorageInfo> LoadSubstitutionAndGetStorage(IPrintTemplateSubstitution printTemplateSubstitution, 
                                                       string name, 
                                                       SubstitutionType type, 
                                                       HtmlImageOption htmlImageOption = default,
                                                       string outputPassword = "", 
                                                       bool check = false)
```

Բեռնում է տպելու ձևանմուշը տվյալների պահոցից, լրացնում `printTemplateSubstitution`-ում պարունակվող նախապես հաշվարկված տվյալներով, պահում ֆայլում և վերադարձնում ֆայլի նույնականացուցիչը սերվերում։

**Պարամետրեր**

| Անվանում        | Տվյալների տիպ        | Լռությամբ արժեք | Նկարագրություն |
|-----------------|----------------------|----------------|----------------|
| printTemplateSubstitution | IPrintTemplateSubstitution | -              | Տպելու ձևանմուշի տեղադրվող արժեքները պարունակող օբյեկտ։ |
| name            | string               | -              | Տպելու ձևանմուշի ներքին անուն: |
| type            | SubstitutionType     | -              | [Տպելու ձևանմուշի տիպ](../../../Types/SubstitutionType.md): |
| htmlImageOption | HtmlImageOption      | default        | Html տպվող տեսքերի [պատկերների տեղադրման եղանակ](../../../Types/HtmlImageOption.md)։ |
| outputPassword  | string               | ""             | Վերջնական ֆայլի բացման գաղտնաբառը։ |
| check           | bool                 | false          | Տպելու ձևանմուշում առկա կոդերի ճիշտ շարահյուսության ստուգման հայտանիշ։ |
