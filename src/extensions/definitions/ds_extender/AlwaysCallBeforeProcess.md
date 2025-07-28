---
title: Extender.AlwaysCallBeforeProcess հատկություն
---

```c#
public virtual bool AlwaysCallBeforeProcess => false; 
```

[BeforeProcess](BeforeProcess.md) մեթոդը կանչվում է միայն տողեր պարունակող տվյալների աղբյուրի համար։ Դատարկ տվյալների աղբյուրի համար մեթոդի կանչը ապահովելու համար անհրաժեշտ է override անել այս հատկությունը և վերադարձնել true արժեք։

