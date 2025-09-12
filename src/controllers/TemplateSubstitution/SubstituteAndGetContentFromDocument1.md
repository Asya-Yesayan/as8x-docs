---
title: "SubstituteAndGetContentFromDocument մեթոդ" 
---

```http
POST {{base_url}}/api/TemplateSubstitution/{{docIsn}}/Content
```

Բեռնում է փաստաթղթին կապակցված տպելու ձևանմուշը՝ ըստ ձևանմուշի անվան և տեսակի, հաշվարկում տեղադրվող արժեքները, լրացնում և **TemplateSubstitutionWithContentInfo** տիպի օբյեկտ։
 
Այս մեթոդը կիրառելի է միայն txt և html տեսակի տպելու ձևանմուշների համար։

## Պարամետրեր

### Path պարամետրեր

{% include Descriptions/TemplateSubstitution/DocIsn.md %}

### Body պարամետրեր

{% include Descriptions/TemplateSubstitution/TemplateSubstitutionRequestBase.md %}