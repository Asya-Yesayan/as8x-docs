---
title: DataProcessingRequest.AfterDeserializeParameter(P, JsonElement) մեթոդ
---

## Նկարագիր

**Դաս՝** [DataProcessingRequest](../DataProcessingRequest.md)

```c#
protected virtual Task AfterDeserializeParameter(P parameter, 
                                                 JsonElement jsonElement)
```

Մեթոդը կանչվում է միջուկի կողմից DPR-ը հերթագրման դնելուց առաջ։
Այն հարկավոր է մշակել, եթե հարկավոր է փոխանցված պարամետրերի ստուգումներ կատարել, կամ մուտքային պարամետրերը ձևափոխել։
Մեթոդի կանչից առաջ `parameter`-ը արդեն իսկ ձևավորված է՝ ըստ ցանցով փոխանցված JSON-ի։

**Պարամետրեր**

| Անվանում        | Տվյալների տիպ        | Լռությամբ արժեք | Նկարագրություն |
|-----------------|----------------------|----------------|----------------|
| parameter       | P                    | -              | Մուտքային պարամետրերի նկարագրված դասի օբյեկտ։ |
| jsonElement     | JsonElement          | -              | Փոխանցված JSON օբյեկտի մեջ։ |
