---
title: AddGridValuesFromDoc
nav_exclude: true
---

# TemplateSubstitution.AddGridValuesFromDoc(Document.Document, string, string, string, bool) մեթոդ

```c#
public void AddGridValuesFromDoc(Document.Document document, 
                                 string name, 
                                 string prefix = "", 
                                 string postfix = "", 
                                 bool fillLeafColumns = true)
```

Տպելու ձևանմուշի տեղադրվող արժեքների բազմությունում ավելացնում է աղյուսակ և լրացնում այն ըստ փաստաթղթի նշված աղյուսակի։

**Պարամետրեր**


| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- |
| document | Document | - | Տպելու ձևանմուշին կապակցված փաստաթղթի օբյեկտը։ |
| name | string | - | Տեղադրվող աղյուսակի ներքին անունը (կոդը)։ |
| prefix | string | "" | Աղյուսակի ներքին անվան (կոդի) համար ավելացվող նախածանց։ |
| postfix | string | "" | Աղյուսակի ներքին անվան (կոդի) համար ավելացվող վերջածանց։ |
| fillLeafColumns | bool | true | Աղյուսակում առկա զավակ (ParentCol ունեցող) սյունակների հաշվարկման և տեղադրման հայտանիշ։  |

**Օրինակ**

```c#
public async Task<TemplateSubstitution> InnerSubstitute(Document doc)
{
    var result = new TemplateSubstitution();
    result.AddGridValuesFromDoc(doc, "VISITORS");
    return result;
}
```
