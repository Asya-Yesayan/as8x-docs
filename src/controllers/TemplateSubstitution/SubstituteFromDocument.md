---
title: "SubstituteFromDocument մեթոդ" 
---

```txt
POST {{base_url}}/api/TemplateSubstitution/{{docIsn}}/Substitute?name={{template_name}}&type={{template_type}}
```

{{ site.data.Constants.TemplateSubstitution.SubstituteFromDocument }}

## Պարամետրեր

### Path պարամետրեր

{% include Descriptions/TemplateSubstitution/DocIsn.md %}

### Query պարամետրեր

{% include Descriptions/TemplateSubstitution/TemplateSubstitutionRequest.md %}

### Body պարամետրեր

{% include Descriptions/TableStructure.md %}
{% include Descriptions/TemplateSubstitution/Parameters.md %}

