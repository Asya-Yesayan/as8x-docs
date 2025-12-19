---
title: IFactService.SetAccCrd(Fact, string, bool) մեթոդ
---

## Նկարագիր

**Համարժեքը 4x-ում՝** [AsFact.AccCrd](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Functions/ASFACT/AccCrd.html)

**Դաս՝** [IFactService](../../IFactService.md)

```c#
public Task SetAccCrd(Fact fact, 
                      string value, 
                      bool uncheck = false);
```

Նշանակում է գործառնության կրեդիտային հաշիվը։

**Պարամետրեր**

| Անվանում        | Տվյալների տիպ        | Լռությամբ արժեք | Նկարագրություն |
|-----------------|----------------------|----------------|----------------|
| fact            | Fact                 | -              | Գործառնության օբյեկտ։ |
| value           | string               | -              | Վերագրվող արժեք։ |
| uncheck         | bool                 | false          | `false` արժեքի դեպքում ստուգվում է վերագրվող հաշվի առկայությունը [հաշվառում](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Defs/Accounting.html) համակարգային նկարագրության AccFolder թղթապանակում, որտեղ նշվում են դեբետի կամ կրեդիտի թղթակցությանը մասնակցող հաշիվները։ |
