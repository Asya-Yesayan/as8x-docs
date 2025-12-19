---
title: ITemplateSubstitutionService.LoadAndSubstitute(IPrintTemplateSubstitution, string, SubstitutionType, HtmlImageOption, string, bool) մեթոդ  
---

## Նկարագիր

**Դաս՝** [ITemplateSubstitutionService](../../../examples/ITemplateSubstitutionService.md)

```c#
public Task<Stream> LoadAndSubstitute(IPrintTemplateSubstitution printTemplateSubstitution, 
                                      string name, 
                                      SubstitutionType type, 
                                      HtmlImageOption htmlImageOption = default,
                                      string outputPassword = "", 
                                      bool check = false)
```

Բեռնում է տպելու ձևանմուշը տվյալների պահոցից, լրացնում `printTemplateSubstitution`-ում պարունակվող նախապես հաշվարկված տվյալներով և ստացված ֆայլը վերադարձնում որպես [Stream](https://learn.microsoft.com/en-us/dotnet/api/system.io.stream):

**Պարամետրեր**

| Անվանում        | Տվյալների տիպ        | Լռությամբ արժեք | Նկարագրություն |
|-----------------|----------------------|----------------|----------------|
| printTemplateSubstitution | IPrintTemplateSubstitution | -              | Տպելու ձևանմուշի տեղադրվող արժեքները պարունակող օբյեկտ։ |
| name            | string               | -              | Տպելու ձևանմուշի ներքին անուն: |
| type            | SubstitutionType     | -              | [Տպելու ձևանմուշի տիպ](../../../types/SubstitutionType.md): |
| htmlImageOption | HtmlImageOption      | default        | Html տպվող տեսքերի [պատկերների տեղադրման եղանակ](../../../types/HtmlImageOption.md)։ |
| outputPassword  | string               | ""             | Վերջնական ֆայլի բացման գաղտնաբառը։ |
| check           | bool                 | false          | Տպելու ձևանմուշում առկա կոդերի ճիշտ շարահյուսության ստուգման հայտանիշ։ |
