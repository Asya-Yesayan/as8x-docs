---
title: DataProcessingRequest.AfterDeserializeParameter(P, JsonElement) մեթոդ
---

```c#
protected virtual Task AfterDeserializeParameter(P parameter, 
                                                 JsonElement jsonElement)
```

Մեթոդը կանչվում է միջուկի կողմից DPR-ը հերթագրման դնելուց առաջ։
Այն հարկավոր է մշակել, եթե հարկավոր է փոխանցված պարամետրերի ստուգումներ կատարել, կամ մուտքային պարամետրերը ձևափոխել։
Մեթոդի կանչից առաջ `parameter`-ը արդեն իսկ ձևավորված է՝ ըստ ցանցով փոխանցված JSON-ի։

**Պարամետրեր**

- `parameter` - Մուտքային պարամետրերի նկարագրված դասի օբյեկտ։ 
- `jsonElement` - Փոխանցված JSON օբյեկտի մեջ։
