---
title: Substitute(IPrintTemplateSubstitution, byte[], SubstitutionType, HtmlImageOption, bool, string, bool, bool)
parent: "Մեթոդներ"
grand_parent: "ITemplateSubstitutionService"
---

# ITemplateSubstitutionService.Substitute(IPrintTemplateSubstitution, byte[], SubstitutionType, HtmlImageOption, bool, string, bool, bool) մեթոդ

## Նկարագիր

**Դաս՝** [ITemplateSubstitutionService](../ITemplateSubstitutionService.md)

```c#
public Task<Stream> Substitute(IPrintTemplateSubstitution printTemplateSubstitution, 
                               byte[] file, 
                               SubstitutionType type,
                               HtmlImageOption htmlImageOption = default, 
                               bool isUnicode = false, 
                               string outputPassword = "",
                               bool protect = false, 
                               bool check = false)
```

Լրացնում Է տպելու ձևանմուշը `printTemplateSubstitution`-ում պարունակվող նախապես հաշվարկված տվյալներով և վերադարձնում որպես [Stream](https://learn.microsoft.com/en-us/dotnet/api/system.io.stream):

**Պարամետրեր**

| Անվանում        | Տվյալների տիպ        | Լռությամբ արժեք | Նկարագրություն |
|-----------------|----------------------|----------------|----------------|
| printTemplateSubstitution | IPrintTemplateSubstitution | -              | Տպելու ձևանմուշի տեղադրվող արժեքները պարունակող օբյեկտ։ |
| file            | byte[]               | -              | Տպելու ձևանմուշի պարունակությունը որպես բայտերի զանգված։ |
| type            | SubstitutionType     | -              | [Տպելու ձևանմուշի տիպ](../../../Types/SubstitutionType.md): |
| htmlImageOption | HtmlImageOption      | default        | Html տպվող տեսքերի [պատկերների տեղադրման եղանակ](../../../Types/HtmlImageOption.md)։ |
| isUnicode       | bool                 | false          | Տպելու ձևանմուշը արտահանել յունիկոդ կոդավորմամբ։ |
| outputPassword  | string               | ""             | Վերջնական ֆայլի բացման գաղտնաբառը։ |
| protect         | bool                 | false          | `true` արժեքի դեպքում տպելու ձևանմուշի ֆայլը բացվում է միայն կարդալու թույլտվությամբ, հակառակ դեպքում՝ կարդալու/խմբագրելու թույլտվությամբ։ |
| check           | bool                 | false          | Տպելու ձևանմուշում առկա կոդերի ճիշտ շարահյուսության ստուգման հայտանիշ։ |
