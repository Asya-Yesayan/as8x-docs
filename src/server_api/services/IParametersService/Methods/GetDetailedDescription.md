---
title: IParametersService.GetDetailedDescription(string) մեթոդ  
---

## Նկարագիր

**Դաս՝** [IParametersService](../../IParametersService.md)

```c#
public Task<string> GetDetailedDescription(string paramId)
```

Վերադարձնում է պարամետրի մանրամասն նկարագրությունը։

Պարամետրի սահմանված չլինելու դեպքում առաջանում է սխալ։

**Պարամետրեր**


| Անվանում | Տեսակ | Լռությամբ արժեք | Նկարագրություն |
|----------|--------|------------------|----------------|
| paramId | string | - | Պարամետրի ներքին անուն (id)։ |
