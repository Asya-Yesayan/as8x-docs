---
title: Extender.AlwaysCallBeforeProcess հատկություն
---

## Նկարագիր

**Դաս՝** [Extender](../ds_extender.md)

```c#
public virtual bool AlwaysCallBeforeProcess => false; 
```

[BeforeProcess](../Methods/BeforeProcess.md) մեթոդը կանչվում է միայն տողեր պարունակող տվյալների աղբյուրի համար։ Դատարկ տվյալների աղբյուրի համար մեթոդի կանչը ապահովելու համար անհրաժեշտ է override անել այս հատկությունը և վերադարձնել true արժեք։

