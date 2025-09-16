---
title: "Delete մեթոդ" 
---

`POST {{base_url}}/api/Document/{{doc_isn}}`

{{ site.data.Constants.Document.Delete }}

## Պարամետրեր

### Path պարամետրեր

{% include Descriptions/Document/Isn.md %}

### Query պարամետրեր

{% include Descriptions/Document/DocumentDeleteModel.md %}

## Վերադարձվող արժեք

{% include Descriptions/Document/DeletedDoc.md %}
