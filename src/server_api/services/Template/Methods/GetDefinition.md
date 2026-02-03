---
title: GetDefinition(string, string)
parent: "Մեթոդներ"
grand_parent: "TemplateService"

---

# TemplateService.GetDefinition(string, string) մեթոդ

## Նկարագիր

**Դաս՝** [TemplateService](../TemplateService.md)

```c#
public Task<TemplateDefinition> GetDefinition(string name, 
                                              string type)
```

Վերադարձնում է տպելու ձևանմուշի նկարագրությունը տվյալների պահոցի `TEMPLATES` աղյուսակից՝ ըստ տպելու ձևանմուշի ներքին անվան և տիպի։

Ֆայլի արժքների տեղադրման համար տե՛ս [LoadTemplateFile](../../ITemplateSubstitution/Methods/LoadTemplateFile.md)։

**Պարամետրեր**

| Անվանում        | Տվյալների տիպ        | Լռությամբ արժեք | Նկարագրություն |
|-----------------|----------------------|----------------|----------------|
| name            | string               | -              | Տպելու ձևանմուշի ներքին անուն: |
| type            | string               | -              | [Տպելու ձևանմուշի տիպ](../../../Types/SubstitutionType.md): |
