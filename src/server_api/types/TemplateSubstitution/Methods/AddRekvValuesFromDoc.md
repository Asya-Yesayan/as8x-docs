---
title: AddRekvValuesFromDoc(Document.Document, string, string)
nav_exclude: true
---

# TemplateSubstitution.AddRekvValuesFromDoc(Document.Document, string, string) մեթոդ

```c#
public void AddRekvValuesFromDoc(Document.Document document, 
                                 string prefix = "", 
                                 string postfix = "")
```

Տպելու ձևանմուշի տեղադրվող արժեքների բազմությունում ավելացնում է ատոմար արժեքներ՝ ըստ փաստաթղթի բոլոր դաշտերի (ռեկվիզիտների) անունների և արժեքների։

**Պարամետրեր**


| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- |
| document | Document | - | Տպելու ձևանմուշին կապակցված փաստաթղթի օբյեկտը։ |
| prefix | string | "" | Յուրաքանչյուր ատոմար արժեքի անվան համար ավելացվող նախածանց։ |
| postfix | string | "" | Յուրաքանչյուր ատոմար արժեքի անվան համար ավելացվող վերջածանց։ |

```c#
var paymentDoc = await this.DocumentService.Load<PaymentOrder>(isn);
templateSubstitution.AddRekvValuesFromDoc(paymentDoc, "PAR");
```
