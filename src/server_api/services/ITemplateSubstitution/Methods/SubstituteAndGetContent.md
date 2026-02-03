---
title: SubstituteAndGetContent(IPrintTemplateSubstitution, byte[], SubstitutionType, HtmlImageOption, bool, bool)
parent: "Մեթոդներ"
grand_parent: "ITemplateSubstitutionService"
---

# ITemplateSubstitutionService.SubstituteAndGetContent(IPrintTemplateSubstitution, byte[], SubstitutionType, HtmlImageOption, bool, bool) մեթոդ

## Նկարագիր

**Դաս՝** [ITemplateSubstitutionService](../ITemplateSubstitutionService.md)

```c#
public string SubstituteAndGetContent(IPrintTemplateSubstitution printTemplateSubstitution, 
                                      byte[] file, 
                                      SubstitutionType type, 
                                      HtmlImageOption htmlImageOption = default,
                                      bool isUnicode = false, 
                                      bool check = false)
```

Լրացնում Է տպելու ձևանմուշը `printTemplateSubstitution`-ում պարունակվող նախապես հաշվարկված տվյալներով և վերադարձնում որպես տեքստ։

**Պարամետրեր**

| Անվանում        | Տվյալների տիպ        | Լռությամբ արժեք | Նկարագրություն |
|-----------------|----------------------|----------------|----------------|
| printTemplateSubstitution | IPrintTemplateSubstitution | -              | Տպելու ձևանմուշի տեղադրվող արժեքները պարունակող օբյեկտ։ |
| file            | byte[]               | -              | Տպելու ձևանմուշի պարունակությունը որպես byte տիպի զանգված։ |
| type            | SubstitutionType     | -              | [Տպելու ձևանմուշի տիպ](../../../Types/SubstitutionType.md): |
| htmlImageOption | HtmlImageOption      | default        | Html տպվող տեսքերի [պատկերների տեղադրման եղանակ](../../../Types/HtmlImageOption.md)։ |
| isUnicode       | bool                 | false          | Տպելու ձևանմուշի տվյալների `Unicode` կոդավորմամբ լրացման հայտանիշ։ |
| check           | bool                 | false          | Տպելու ձևանմուշում առկա կոդերի ճիշտ շարահյուսության ստուգման հայտանիշ։ |
