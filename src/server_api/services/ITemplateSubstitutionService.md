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
| [EvalAndAddUserDefinedParameters(string, SubstitutionType, PrintTemplateSubstitution, Document.Document)](ITemplateSubstitutionService/Methods/EvalAndAddUserDefinedParameters.md) | Հաշվարկում է տպելու ձևանմուշի օգտագործողի կողմից նկարագրված պարամետրերը և ավելացնում տպելու ձևանմուշի տեղադրվող արժեքները պարունակող օբյեկտում՝ `printTemplateSubstitution`: |
| [EvalAndAddUserDefinedParametersEx(string, SubstitutionType, PrintTemplateSubstitutionEx, Document.Document)](ITemplateSubstitutionService/Methods/EvalAndAddUserDefinedParametersEx.md) | Հաշվարկում է տպելու ձևանմուշի օգտագործողի կողմից նկարագրված պարամետրերը և ավելացնում տպելու ձևանմուշի տեղադրվող արժեքները պարունակող օբյեկտում՝ `printTemplateSubstitution`: |
| [GetReadyTemplateSubstitution(Document.Document, string, SubstitutionType, Dictionary<string, object>)](ITemplateSubstitutionService/Methods/GetReadyTemplateSubstitution.md) | Հաշվարկում է փաստաթղթին կապակցված տպելու ձևանմուշի տեղադրվող արժեքները, օգտագործողի կողմից նկարագրված պարամետրերը և վերադարձնում տպելու ձևանմուշի տեղադրվող արժեքները պարունակող օբյեկտը։ |
| [IsTemplateAvailable(string, string, Document)](ITemplateSubstitutionService/Methods/IsTemplateAvailable.md) | Ստուգում է արդյոք նշված ձևանմուշը հասանելի է նշված փաստաթղթի համար, այսինքն փաստաթղթի տիպը նշված է տպվող ձևանմուշի փաստաթղթերի ցանկում և բավարարվում է ակտիվացման բանաձևը սերվիսում։ |
| [LoadAndSubstitute(IPrintTemplateSubstitution, string, SubstitutionType, HtmlImageOption, string, bool)](ITemplateSubstitutionService/Methods/LoadAndSubstitute.md) | Բեռնում է տպելու ձևանմուշը տվյալների պահոցից, լրացնում `printTemplateSubstitution`-ում պարունակվող նախապես հաշվարկված տվյալներով և ստացված ֆայլը վերադարձնում որպես [Stream](https://learn.microsoft.com/en-us/dotnet/api/system.io.stream): |
| [LoadSubstituteAndGetContent(IPrintTemplateSubstitution, string, SubstitutionType, HtmlImageOption, bool)](ITemplateSubstitutionService/Methods/LoadSubstituteAndGetContent.md) | Բեռնում է տպելու ձևանմուշը տվյալների պահոցից, լրացնում `printTemplateSubstitution`-ում պարունակվող նախապես հաշվարկված տվյալներով և ստացված ֆայլը վերադարձնում որպես տեքստ։ |
| [LoadSubstitutionAndGetStorage(IPrintTemplateSubstitution, string, SubstitutionType, HtmlImageOption, string, bool)](ITemplateSubstitutionService/Methods/LoadSubstitutionAndGetStorage.md) | Բեռնում է տպելու ձևանմուշը տվյալների պահոցից, լրացնում `printTemplateSubstitution`-ում պարունակվող նախապես հաշվարկված տվյալներով, պահում ֆայլում և վերադարձնում ֆայլի նույնականացուցիչը սերվերում։ |
| [LoadTemplateFile(string, SubstitutionType)](ITemplateSubstitutionService/Methods/LoadTemplateFile.md) | Բեռնում է տպելու ձևանմուշի տվյալները պահոցի `TEMPLATES` աղյուսակից։ Բեռնման ընթացքում կատարվում է լրացուցիչ ստուգումներ, որից հետո հնարավոր է լրացնել ֆայլը։ |
| [MergeFile(SubstitutionType, byte[], byte[], bool, bool)](ITemplateSubstitutionService/Methods/MergeFile.md#itemplatesubstitutionservicemergefilesubstitutiontype-byte-byte-bool-bool-մեթոդ) | Միավորում է երկու տպելու ձևանմուշից ստեղծված `docx` ֆայլեր՝ տեղադրելով մեկ ընդհանուր ֆայլի մեջ։ |
| [MergeFile(SubstitutionType, StorageInfo, StorageInfo, bool, bool)](ITemplateSubstitutionService/Methods/MergeFile.md#itemplatesubstitutionservicemergefilesubstitutiontype-storageinfo-storageinfo-bool-bool-մեթոդ) | Միավորում է երկու տպելու ձևանմուշից ստեղծված `docx` ֆայլեր՝ տեղադրելով մեկ ընդհանուր ֆայլի մեջ։ |
| [Substitute(IPrintTemplateSubstitution, byte[], SubstitutionType, HtmlImageOption, bool, string, bool, bool)](ITemplateSubstitutionService/Methods/Substitute.md) | Լրացնում Է տպելու ձևանմուշը `printTemplateSubstitution`-ում պարունակվող նախապես հաշվարկված տվյալներով և վերադարձնում որպես [Stream](https://learn.microsoft.com/en-us/dotnet/api/system.io.stream): |
| [SubstituteAndGetContent(IPrintTemplateSubstitution, byte[], SubstitutionType, HtmlImageOption, bool, bool)](ITemplateSubstitutionService/Methods/SubstituteAndGetContent.md) | Լրացնում Է տպելու ձևանմուշը `printTemplateSubstitution`-ում պարունակվող նախապես հաշվարկված տվյալներով և վերադարձնում որպես տեքստ։ |

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

| Անվանում        | Տվյալների տիպ        | Լռությամբ արժեք | Նկարագրություն |
|-----------------|----------------------|----------------|----------------|
| printTemplateSubstitution | IPrintTemplateSubstitution | -              | Տպելու ձևանմուշի տեղադրվող արժեքները պարունակող օբյեկտ։ |
| file            | StorageInfo          | -              | Տպելու ձևանմուշը պարունակող ֆայլի և թղթապանակի անունները։ |
| type            | SubstitutionType     | -              | [Տպելու ձևանմուշի տիպ][4XTemplateSubstitution]: |
| htmlImageOption | HtmlImageOption      | default        | Html տպվող տեսքերի [պատկերների տեղադրման եղանակ](../․․/types/HtmlImageOption.md)։ |
| isUnicode       | bool                 | false          | Տպելու ձևանմուշի տվյալների `Unicode` կոդավորմամբ լրացման հայտանիշ։ |
| protect         | bool                 | false          | `true` արժեքի դեպքում տպելու ձևանմուշի ֆայլը բացվում է միայն կարդալու թույլտվությամբ, հակառակ դեպքում՝ կարդալու/խմբագրելու թույլտվությամբ։ |
| check           | bool                 | false          | Տպելու ձևանմուշում առկա կոդերի ճիշտ շարահյուսության ստուգման հայտանիշ։ --> |

<!-- ### SubstituteAndGetContent

```c#
public Task<string> SubstituteAndGetContent(IPrintTemplateSubstitution printTemplateSubstitution, 
                                            StorageInfo file, SubstitutionType type, 
                                            HtmlImageOption htmlImageOption = default,
                                            bool isUnicode = false, bool check = false)
```

Լրացնում Է տպելու ձևանմուշը `printTemplateSubstitution`-ում պարունակվող նախապես հաշվարկված տվյալներով և վերադարձնում որպես տեքստ։

**Պարամետրեր**

| Անվանում        | Տվյալների տիպ        | Լռությամբ արժեք | Նկարագրություն |
|-----------------|----------------------|----------------|----------------|
| printTemplateSubstitution | IPrintTemplateSubstitution | -              | Տպելու ձևանմուշի տեղադրվող արժեքները պարունակող օբյեկտ։ |
| file            | StorageInfo          | -              | Տպելու ձևանմուշը պարունակող ֆայլի և թղթապանակի անունները։ |
| type            | SubstitutionType     | -              | [Տպելու ձևանմուշի տիպ][4XTemplateSubstitution]: |
| htmlImageOption | HtmlImageOption      | default        | Html տպվող տեսքերի [պատկերների տեղադրման եղանակ](../../types/HtmlImageOption.md)։ |
| isUnicode       | bool                 | false          | Տպելու ձևանմուշի տվյալների `Unicode` կոդավորմամբ լրացման հայտանիշ։ |
| check           | bool                 | false          | Տպելու ձևանմուշում առկա կոդերի ճիշտ շարահյուսության ստուգման հայտանիշ։ --> |
