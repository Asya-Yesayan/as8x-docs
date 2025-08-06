---
title: ITemplateSubstitutionService.Substitute(IPrintTemplateSubstitution, byte[], SubstitutionType, HtmlImageOption, bool, string, bool, bool) մեթոդ  
---

## Նկարագիր

**Համարժեքը 4x-ում՝** --

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

* `printTemplateSubstitution` - Տպելու ձևանմուշի տեղադրվող արժեքները պարունակող օբյեկտ։
* `file` - Տպելու ձևանմուշի պարունակությունը որպես բայտերի զանգված։
* `type` - [Տպելու ձևանմուշի տիպ](../../types/SubstitutionType.md):
* `htmlImageOption` - Html տպվող տեսքերի [պատկերների տեղադրման եղանակ](../../types/HtmlImageOption.md)։
* `isUnicode` - Տպելու ձևանմուշը արտահանել յունիկոդ կոդավորմամբ։
* `outputPassword` - Վերջնական ֆայլի բացման գաղտնաբառը։
* `protect` - `true` արժեքի դեպքում տպելու ձևանմուշի ֆայլը բացվում է միայն կարդալու թույլտվությամբ, հակառակ դեպքում՝ կարդալու/խմբագրելու թույլտվությամբ։
* `check` - Տպելու ձևանմուշում առկա կոդերի ճիշտ շարահյուսության ստուգման հայտանիշ։
