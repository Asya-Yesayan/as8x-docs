---
title: TemplateSubstitution.Add(string, object) մեթոդ
---

```c#
public void Add(string code, object value)
```

Ավելացնում է **object** տիպի ատոմար արժեք տպելու ձևանմուշի տեղադրվող արժեքների բազմությունում։

**Պարամետրեր**


| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- |
| code | string | - | Ատոմար արժեքի ներքին անունը (կոդը)։ |
| value | object | - | Տեղադրվող արժեքը։ |

**Օրինակ**

```c#
public async Task<TemplateSubstitution> InnerSubstitute(Document doc)
{
    var result = new TemplateSubstitution();
    result.Add("001", doc["DocNum"].Value);
    result.Add("103", doc["Address"].Value);
    return result;
}
```