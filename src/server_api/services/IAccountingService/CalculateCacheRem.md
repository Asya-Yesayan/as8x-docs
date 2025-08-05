---
title: IAccountingService.CalculateCacheRem(string, int) մեթոդ
---

## Նկարագիր

**Համարժեքը 4x-ում՝** AsUtil.CalculateCacheRem

```c#
public Task CalculateCacheRem(string accountingType, 
                              int isn)
```

Հաշվում է Հաշվառվող օբյեկտի սկզբնական, վերջնական մնացորդները և գրանցում տվյալների պահոցի [HIREST](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Database/Hirest.html) աղյուսակում։

**Պարամետրեր**

* `accountingType` - Հաշվառման կոդ (ներքին անուն):
* `isn` - Հաշվառման օբյեկտի ներքին նույնականացման համար։
