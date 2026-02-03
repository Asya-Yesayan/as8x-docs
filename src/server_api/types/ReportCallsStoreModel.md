---
title: "ReportCallsStoreModel դաս"
nav_exclude: true
---

# ReportCallsStoreModel դաս

Դասը պարունակում է տվյալներ դիտելու ձևի մասին։

```c#
public class ReportCallsStoreModel
{
    public string DataViewName { get; set; }
    public string DataSourceName { get; set; }
    public double Duration { get; set; }
    public int RowCount { get; set; }
    public bool Cancelled { get; set; }
    public List<ReportParametersModel> ReportParameters { get; set; } = [];
}
```

## Հատկություններ

| Անվանում         | Տվյալների տիպ               | Լռությամբ արժեք | Նկարագրություն  |
| ---------------- | --------------------------- | --------------- | --------- |
| DataViewName     | string                      |       -          | Դիտելու ձևի ներքին անունը։  |
| DataSourceName   | string                      |       -          | Դիտելու ձևի հիմքային տվյալների աղբյուրի ներքին անունը։  |
| Duration         | double                      |       -          | Դիտելու ձևի կատարման տևողությունը վայրկյաններով։ |
| RowCount         | int                         |       -          | Դիտելու ձևի տողերի քանակը։  |
| Cancelled        | bool                        |        -         | UI-ից կատարման ընդհատման հայտանիշ։  |
| ReportParameters | List<ReportParametersModel> | []              | Դիտելու ձևի կատարման [պարամետրերի նկարագրությունների](ReportParametersModel.md) ցուցակը։ |
