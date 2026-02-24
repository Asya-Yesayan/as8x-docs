---
title: GetRows
nav_exclude: true
---

# TextReport.GetRows(long, long) մեթոդ

```c#
public Task<List<TextReportRow>> GetRows(long startRow, long rowCount)
```

Վերադարձնում է հաշվետվության նշված տողերի ցուցակը։

**Պարամետրեր**

| Անվանում        | Տվյալների տիպ        | Լռությամբ արժեք | Նկարագրություն |
|-----------------|----------------------|----------------|----------------|
| startRow        | long                 | -              | Տողի համար, որից սկսած վերադարձվում են հաշվետվության տողերը։ |
| rowCount        | long                 | -              | Վերադարձվող տողերի քանակը՝ սկսած `startRow` համարի տողից։ |
