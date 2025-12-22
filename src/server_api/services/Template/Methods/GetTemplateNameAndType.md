---
title: TemplateService.GetTemplateNameAndType(string, bool) մեթոդ  
---

## Նկարագիր

**Համարժեքը 4x-ում՝** [AsKernel.GetTemplateNameAndType](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Functions/Functions/GetTemplateNameAndType.html)

**Դաս՝** [TemplateService](../TemplateService/TemplateService.md)

```c#
public static (bool result, 
               string templateName, 
               string templateType) GetTemplateNameAndType(string templateNameWithType, 
                                                           bool isBackSlash = true)
```

Բաժանում է `templateNameWithType` պարամետրում միավորված տպելու ձևանմուշի ներքին անունը (կոդը) և տիպը:  
Վերադարձնում է՝
* `result` - Ցույց է տալիս, արդյոք բաժանումը հաջողվել է:
* `templateName` - Տպելու ձևանմուշի ներքին անուն: Բաժանման չհաջողվելու դեպքում վերադարձնում է `templateNameWithType` պարամետրի արժեքը։
* `templateType` - [Տպելու ձևանմուշի տիպ](../../Types/SubstitutionType.md): Բաժանման չհաջողվելու դեպքում վերադարձնում է `string.Empty`։

**Պարամետրեր**

| Անվանում        | Տվյալների տիպ        | Լռությամբ արժեք | Նկարագրություն |
|-----------------|----------------------|----------------|----------------|
| templateNameWithType          | string                 | -              | Տպելու ձևանմուշի միավորված ներքին անուն (կոդ) և տիպ։ |
| isBackSlash    | bool               | true              | `true` արժեքի դեպքում բաժանումը կատարվում է ըստ `"\"` նիշի, հակառակ դեպքում՝ ըստ `"/"` նիշի։ |


**Օրինակ**

```c#
// templateNameType  =>  "AgrState\7"

var (_, templateName, templateType) = TemplateService.GetTemplateNameAndType(templateNameType);
// templateName  =>  "AgrState"
// templateType  =>  "7"

if (templateType != Constants.TempTypeHTML) 
{
  throw new RESTException("Ձևանմուշի տիպը պետք է լինի Html".ToArmenianANSI());
}
```

<!-- ### GetType

```c#
public Task<string> GetType(string name)
```

Վերադարձնում է [տպելու ձևանմուշի տիպը](../../Types/SubstitutionType.md)՝ ըստ տպելու ձևանմուշի ներքին անվան։

**Պարամետրեր**

| Անվանում        | Տվյալների տիպ        | Լռությամբ արժեք | Նկարագրություն |
|-----------------|----------------------|----------------|----------------|
| name            | string               | -              | Տպելու ձևանմուշի ներքին անուն: |
