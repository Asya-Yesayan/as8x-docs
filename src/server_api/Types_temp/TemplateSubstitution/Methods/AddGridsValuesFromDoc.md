---
title: AddGridsValuesFromDoc
nav_exclude: true
---

# TemplateSubstitution.AddGridsValuesFromDoc(Document.Document, string, string, bool) մեթոդ

```c#
public void AddGridsValuesFromDoc(Document.Document document, 
                                  string prefix = "", 
                                  string postfix = "", 
                                  bool fillLeafColumns = true)
```

Տպելու ձևանմուշի տեղադրվող արժեքների բազմությունում ավելացնում է աղյուսակ և լրացնում այն ըստ փաստաթղթի նշված աղյուսակի։

**Պարամետրեր**


| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- |
| document | Document | - | Տպելու ձևանմուշին կապակցված փաստաթղթի օբյեկտը։ |
| prefix | string | "" | Աղյուսակի ներքին անվան (կոդի) համար ավելացվող նախածանց։ |
| postfix | string | "" | Աղյուսակի ներքին անվան (կոդի) համար ավելացվող վերջածանց։ |
| fillLeafColumns | bool | true | Աղյուսակներում առկա զավակ (ParentCol ունեցող) սյունակների հաշվարկման և տեղադրման հայտանիշ։  |
