---
title: IAccountingService.CalculateCacheRemFull(string, DateTime?, DateTime?, DateTime?, DateTime?, DateTime?) մեթոդ
---

## Նկարագիր

**Համարժեքը 4x-ում՝** AsUtil.CalculateCacheRemFull

**Դաս՝** [IAccountingService](../../IAccountingService.md)

```c#
public Task CalculateCacheRemFull(string accountingType, 
                                  DateTime? cacheDate1, 
                                  DateTime? cacheDate2, 
                                  DateTime? cacheDate3, 
                                  DateTime? cacheDate4, 
                                  DateTime? cacheDate5)
```

Հաշվում է հաշվառվող օբյեկտի միջանկյալ մնացորդները նշված ամսաթվերի դրությամբ և գրանցում տվյալների պահոցի [HIREST](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Database/Hirest.html) աղյուսակում։

**Պարամետրեր**

| Անվանում        | Տվյալների տիպ        | Լռությամբ արժեք | Նկարագրություն |
|-----------------|----------------------|----------------|----------------|
| accountingType  | string               | -              | Հաշվառման կոդ (ներքին անուն): |
| cacheDate1      | DateTime?            | -              | Առաջին ամսաթիվը, որի համար հաշվարկվում է մնացորդը: |
| cacheDate2      | DateTime?            | -              | Երկրորդ ամսաթիվը, որի համար հաշվարկվում է մնացորդը։ |
| cacheDate3      | DateTime?            | -              | Երրորդ ամսաթիվը, որի համար հաշվարկվում է մնացորդը։ |
| cacheDate4      | DateTime?            | -              | Չորրորդ ամսաթիվը, որի համար հաշվարկվում է մնացորդը։ |
| cacheDate5      | DateTime?            | -              | Հինգերորդ ամսաթիվը, որի համար հաշվարկվում է մնացորդը։ |
