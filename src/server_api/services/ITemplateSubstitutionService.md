---
title: "ITemplateSubstitutionService սերվիս"
---

## Ներածություն

ITemplateSubstitutionService դասը նախատեսված է տպելու ձևանմուշների լրացման հետ աշխատանքը ապահովելու համար։

Այս դասը օգտագործվում է այն դեպքերում, երբ հարկավոր է տպելու ձևանմուշ լրացնել ոչ կոնկրետ փաստաթղթի համար. օրինակ՝ քաղվածքի ձևավորում, ծանուցման ձևավորում, էլ.նամակի տեքստի ձևավորում։

Տե՛ս նաև [TemplateService](TemplateService.md) տպելու ձևանմուշների հետ աշխատանքի համար։

Տե՛ս [օրինակը](../examples/ITemplateSubstitutionService.md)։

## Մեթոդներ

| Անվանում | Նկարագրություն |
|----------|----------------|
| [EvalAndAddUserDefinedParameters(string, SubstitutionType, PrintTemplateSubstitution, Document.Document)](ITemplateSubstitutionService/EvalAndAddUserDefinedParameters.md) | Հաշվարկում է տպելու ձևանմուշի օգտագործողի կողմից նկարագրված պարամետրերը և ավելացնում տպելու ձևանմուշի տեղադրվող արժեքները պարունակող օբյեկտում՝ `printTemplateSubstitution`: |
| [EvalAndAddUserDefinedParametersEx(string, SubstitutionType, PrintTemplateSubstitutionEx, Document.Document)](ITemplateSubstitutionService/EvalAndAddUserDefinedParametersEx.md) | Հաշվարկում է տպելու ձևանմուշի օգտագործողի կողմից նկարագրված պարամետրերը և ավելացնում տպելու ձևանմուշի տեղադրվող արժեքները պարունակող օբյեկտում՝ `printTemplateSubstitution`: |
| [GetReadyTemplateSubstitution(Document.Document, string, SubstitutionType, Dictionary<string, object>)](ITemplateSubstitutionService/GetReadyTemplateSubstitution.md) | Հաշվարկում է փաստաթղթին կապակցված տպելու ձևանմուշի տեղադրվող արժեքները, օգտագործողի կողմից նկարագրված պարամետրերը և վերադարձնում տպելու ձևանմուշի տեղադրվող արժեքները պարունակող օբյեկտը։ |
| [IsTemplateAvailable(string, string, Document)](ITemplateSubstitutionService/IsTemplateAvailable.md) | Ստուգում է արդյոք նշված ձևանմուշը հասանելի է նշված փաստաթղթի համար, այսինքն փաստաթղթի տիպը նշված է տպվող ձևանմուշի փաստաթղթերի ցանկում և բավարարվում է ակտիվացման բանաձևը սերվիսում։ |
| [LoadAndSubstitute(IPrintTemplateSubstitution, string, SubstitutionType, HtmlImageOption, string, bool)](ITemplateSubstitutionService/LoadAndSubstitute.md) | Բեռնում է տպելու ձևանմուշը տվյալների պահոցից, լրացնում `printTemplateSubstitution`-ում պարունակվող նախապես հաշվարկված տվյալներով և ստացված ֆայլը վերադարձնում որպես [Stream](https://learn.microsoft.com/en-us/dotnet/api/system.io.stream): |
| [LoadSubstituteAndGetContent(IPrintTemplateSubstitution, string, SubstitutionType, HtmlImageOption, bool)](ITemplateSubstitutionService/LoadSubstituteAndGetContent.md) | Բեռնում է տպելու ձևանմուշը տվյալների պահոցից, լրացնում `printTemplateSubstitution`-ում պարունակվող նախապես հաշվարկված տվյալներով և ստացված ֆայլը վերադարձնում որպես տեքստ։ |
| [LoadSubstitutionAndGetStorage(IPrintTemplateSubstitution, string, SubstitutionType, HtmlImageOption, string, bool)](ITemplateSubstitutionService/LoadSubstitutionAndGetStorage.md) | Բեռնում է տպելու ձևանմուշը տվյալների պահոցից, լրացնում `printTemplateSubstitution`-ում պարունակվող նախապես հաշվարկված տվյալներով, պահում ֆայլում և վերադարձնում ֆայլի նույնականացուցիչը սերվերում։ |
| [LoadTemplateFile(string, SubstitutionType)](ITemplateSubstitutionService/LoadTemplateFile.md) | Բեռնում է տպելու ձևանմուշի տվյալները պահոցի `TEMPLATES` աղյուսակից։ Բեռնման ընթացքում կատարվում է լրացուցիչ ստուգումներ, որից հետո հնարավոր է լրացնել ֆայլը։ |
| [MergeFile](ITemplateSubstitutionService/MergeFile.md) | Միավորում է երկու տպելու ձևանմուշից ստեղծված `docx` ֆայլեր՝ տեղադրելով մեկ ընդհանուր ֆայլի մեջ։ |
| [MergeFile](ITemplateSubstitutionService/MergeFile1.md) | Միավորում է երկու տպելու ձևանմուշից ստեղծված `docx` ֆայլեր՝ տեղադրելով մեկ ընդհանուր ֆայլի մեջ։ |
| [Substitute(IPrintTemplateSubstitution, byte[], SubstitutionType, HtmlImageOption, bool, string, bool, bool)](ITemplateSubstitutionService/Substitute.md) | Լրացնում Է տպելու ձևանմուշը `printTemplateSubstitution`-ում պարունակվող նախապես հաշվարկված տվյալներով և վերադարձնում որպես [Stream](https://learn.microsoft.com/en-us/dotnet/api/system.io.stream): |
| [SubstituteAndGetContent(IPrintTemplateSubstitution, byte[], SubstitutionType, HtmlImageOption, bool, bool)](ITemplateSubstitutionService/SubstituteAndGetContent.md) | Լրացնում Է տպելու ձևանմուշը `printTemplateSubstitution`-ում պարունակվող նախապես հաշվարկված տվյալներով և վերադարձնում որպես տեքստ։ |

<!-- ### Substitute

```c#
public Task Substitute(IPrintTemplateSubstitution printTemplateSubstitution, 
                       StorageInfo file, SubstitutionType type,
                       HtmlImageOption htmlImageOption = default, 
                       bool isUnicode = false, bool protect = false,
                       bool check = false)
```

Լրացնում Է տպելու ձևանմուշը `printTemplateSubstitution`-ում պարունակվող նախապես հաշվարկված տվյալներով։

**Պարամետրեր**

* `printTemplateSubstitution` - Տպելու ձևանմուշի տեղադրվող արժեքները պարունակող օբյեկտ։
* `file` - Տպելու ձևանմուշը պարունակող ֆայլի և թղթապանակի անունները։
* `type` - [Տպելու ձևանմուշի տիպ][4XTemplateSubstitution]:
* `htmlImageOption` - Html տպվող տեսքերի [պատկերների տեղադրման եղանակ](../․․/types/HtmlImageOption.md)։
* `isUnicode` - Տպելու ձևանմուշի տվյալների `Unicode` կոդավորմամբ լրացման հայտանիշ։
* `protect` - `true` արժեքի դեպքում տպելու ձևանմուշի ֆայլը բացվում է միայն կարդալու թույլտվությամբ, հակառակ դեպքում՝ կարդալու/խմբագրելու թույլտվությամբ։
* `check` - Տպելու ձևանմուշում առկա կոդերի ճիշտ շարահյուսության ստուգման հայտանիշ։ -->

<!-- ### SubstituteAndGetContent

```c#
public Task<string> SubstituteAndGetContent(IPrintTemplateSubstitution printTemplateSubstitution, 
                                            StorageInfo file, SubstitutionType type, 
                                            HtmlImageOption htmlImageOption = default,
                                            bool isUnicode = false, bool check = false)
```

Լրացնում Է տպելու ձևանմուշը `printTemplateSubstitution`-ում պարունակվող նախապես հաշվարկված տվյալներով և վերադարձնում որպես տեքստ։

**Պարամետրեր**

* `printTemplateSubstitution` - Տպելու ձևանմուշի տեղադրվող արժեքները պարունակող օբյեկտ։
* `file` - Տպելու ձևանմուշը պարունակող ֆայլի և թղթապանակի անունները։
* `type` - [Տպելու ձևանմուշի տիպ][4XTemplateSubstitution]:
* `htmlImageOption` - Html տպվող տեսքերի [պատկերների տեղադրման եղանակ](../../types/HtmlImageOption.md)։
* `isUnicode` - Տպելու ձևանմուշի տվյալների `Unicode` կոդավորմամբ լրացման հայտանիշ։
* `check` - Տպելու ձևանմուշում առկա կոդերի ճիշտ շարահյուսության ստուգման հայտանիշ։ -->