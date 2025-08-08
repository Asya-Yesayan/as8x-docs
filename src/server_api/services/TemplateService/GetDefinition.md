---
title: TemplateService.GetDefinition(string, string) մեթոդ  
---

## Նկարագիր

**Դաս՝** [TemplateService](../TemplateService.md)

```c#
public Task<TemplateDefinition> GetDefinition(string name, 
                                              string type)
```

Վերադարձնում է տպելու ձևանմուշի նկարագրությունը տվյալների պահոցի `TEMPLATES` աղյուսակից՝ ըստ տպելու ձևանմուշի ներքին անվան և տիպի։

Ֆայլի արժքների տեղադրման համար տե՛ս [LoadTemplateFile](../ITemplateSubstitutionService/LoadTemplateFile.md)։

**Պարամետրեր**

* `name` - Տպելու ձևանմուշի ներքին անուն:
* `type` - [Տպելու ձևանմուշի տիպ](../../types/SubstitutionType.md):
