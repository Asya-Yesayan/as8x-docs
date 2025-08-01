---
title: IParametersService.SetValue(string, object) մեթոդ  
---

## Նկարագիր

**Համարժեքը 4x-ում՝** [AsKernel.SetParam](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Functions/Functions/ParameterManagment/SetParam.html) ?

```c#
public Task SetValue(string name, object value)
```

Փոխում է համակարգային պարամետրի արժեքը։  
Նոր արժեքի և պարամետրի տիպի անհամապատասխանության դեպքում առաջանում է սխալ։  
Պարամետրի սահմանված չլինելու դեպքում առաջանում է սխալ։

**Պարամետրեր**

* `name` - Պարամետրի ներքին անուն (id)։ 
* `value` - Վերագրվող արժեք։
