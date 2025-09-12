---
title: "SubstituteAndGetContentFromDocument մեթոդ" 
---

```http
POST {{base_url}}/api/TemplateSubstitution/{{docIsn}}/Content?name={{templateName}}&type={{templateType}}
```

Բեռնում է փաստաթղթին կապակցված տպելու ձևանմուշը՝ ըստ ձևանմուշի անվան և տեսակի, հաշվարկում տեղադրվող արժեքները, լրացնում և վերադարձնում ֆայլի պարունակությունը որպես տեքստ։
 
Այս մեթոդը կիրառելի է միայն txt և html տեսակի տպելու ձևանմուշների համար։

## Պարամետրեր

### Path պարամետրեր

{% include Descriptions/TemplateSubstitution/DocIsn.md %}

### Query պարամետրեր

{% include Descriptions/TemplateSubstitution/TemplateSubstitutionRequestBaseWithoutParameters.md %}

### Body պարամետրեր

| Անվանում | Տեսակ | **Պարտադիր/Ոչ պարտադիր** | **Նկարագրություն** |
| --- | --- | --- | --- |
{% include Descriptions/TemplateSubstitution/Parameters.md %}
