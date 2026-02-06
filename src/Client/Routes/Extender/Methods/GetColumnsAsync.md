---
title: GetColumnsAsync
nav_exclude: true
---

# ExtenderRoutes.GetColumnsAsync(string, CancellationToken) մեթոդ

```c#
public Task<List<string>> GetColumnsAsync(string name, 
                                          CancellationToken cancellationToken = default)
```

Վերադարձնում է տվյալների աղբյուրի ընդլայնման սյուների ներքին անունների ցուցակը։

**Պարամետրեր**

| Անվանում        | Տվյալների տիպ        | Լռությամբ արժեք | Նկարագրություն |
|-----------------|----------------------|----------------|----------------|
| name            | string               | -              | Տվյալների աղբյուրի ընդլայնման ներքին անունը։ |
| cancellationToken | CancellationToken    | default        | Ընդհատման օբյեկտ: |
