---
title: TextReport.UnmoveHeadCount հատկություն
---

```c#
public int UnmoveHeadCount { get; set; }
```

Վերադարձնում կամ նշանակում է չտեղափոխվող գլխագրերի քանակը, եթե առկա է [անշարժ հատված](անշարժ հատված.md)։

Այս դաշտին հարկավոր է արժեք վերագրել [AddHeader](../Methods/AddHeader.md) մեթոդի կանչերից հետո և նշել այն գլխագրերի քանակը, որ հարկավոր է չշարժել հորիզոնական շարժման ժամանակ։

**Օրինակ**

```c#
var report = new TextReport(storageService);
report.AddHeader("Հաշվետվություն");
report.AddHeader("Շահառուի եկամուտների և ծախսերի վերաբերյալ");
report.UnmoveHeadCount = 1;
```
