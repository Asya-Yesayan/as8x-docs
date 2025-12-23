---
title: IParametersService.GetDescriptor(string) մեթոդ  
---

## Նկարագիր

**Դաս՝** [IParametersService](../IParametersService.md)

```c#
public Descriptor GetDescriptor(string paramId)
```

Վերադարձնում է համակարգային [պարամետրի նկարագրությունը](../../../Types/Descriptor.md):

Պարամետրի սահմանված չլինելու դեպքում առաջանում է սխալ։

**Պարամետրեր**


| Անվանում | Տեսակ | Լռությամբ արժեք | Նկարագրություն |
|----------|--------|------------------|----------------|
| paramId | string | - | Պարամետրի ներքին անուն (id)։ |
