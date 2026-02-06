---
title: LoadDefinitionAsync
nav_exclude: true
---

# DataSource.LoadDefinitionAsync(string, CancellationToken) մեթոդ

```c#
public async Task LoadDefinitionAsync(string name, 
                                      CancellationToken cancellationToken = default)
```

Բեռնում է տվյալների աղբյուրի նկարագրությունը և վերագրում [Definition](../Properties/Definition.md) հատկությանը։

**Պարամետրեր**

| Անվանում        | Տվյալների տիպ        | Լռությամբ արժեք | Նկարագրություն |
|-----------------|----------------------|----------------|----------------|
| name            | string               | -              | Տվյալների աղբյուրի ներքին անունը։ |
| cancellationToken | CancellationToken    | default        | Ընդհատման օբյեկտ: |
