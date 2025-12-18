---
title: TemplateService.ExistsTemplate(string, string) մեթոդ  
---

## Նկարագիր

**Համարժեքը 4x-ում՝** [AsKernel.ExistsTemplate](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Functions/Functions/ExistsTemplate.html)

**Դաս՝** [TemplateService](../TemplateService.md)

```c#
public Task<bool> ExistsTemplate(string name, 
                                 string type)
```

Ստուգում է տպելու ձևանմուշի նկարագրության առկայությունը տվյալների պահոցի `TEMPLATES` աղյուսակում։

**Պարամետրեր**
| Անվանում        | Տվյալների տիպ        | Լռությամբ արժեք | Նկարագրություն |
|-----------------|----------------------|----------------|----------------|
| name            | string               | -              | Տպելու ձևանմուշի ներքին անուն: |
| type            | string               | -              | [Տպելու ձևանմուշի տիպ](../../types/SubstitutionType.md): |

**Օրինակ**

```c#
// templateNameType  =>  "AgrState\7"

var (_, templateName, templateType) = TemplateService.GetTemplateNameAndType(templateNameType);
if (!await templateService.ExistsTemplate(templateName, templateType))
{
  throw new RESTException(string.Format("'{0}' անունով և '{1}' տիպով ձևանմուշ գոյություն չունի".ToArmenianANSI(), templateName, templateType));
}
```
