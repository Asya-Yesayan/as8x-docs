---
title: IAccountingService.CalculateCacheRem(string, int) մեթոդ
---

## Նկարագիր

**Համարժեքը 4x-ում՝** AsUtil.CalculateCacheRem

**Դաս՝** [IAccountingService](../../IAccounting/IAccountingService.md)

```c#
public Task CalculateCacheRem(string accountingType, 
                              int isn)
```

Հաշվում է Հաշվառվող օբյեկտի սկզբնական, վերջնական մնացորդները և գրանցում տվյալների պահոցի [HIREST](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Database/Hirest.html) աղյուսակում։

**Պարամետրեր**

| Անվանում        | Տվյալների տիպ        | Լռությամբ արժեք | Նկարագրություն |
|-----------------|----------------------|----------------|----------------|
| accountingType  | string               | -              | Հաշվառման կոդ (ներքին անուն): |
| isn             | int                  | -              | Հաշվառման օբյեկտի ներքին նույնականացման համար։ |
