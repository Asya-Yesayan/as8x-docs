---
title: "ReportCallsStoreModel դաս" 
---

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

* `DataViewName` - Դիտելու ձևի ներքին անունը։
* `DataSourceName` - Դիտելու ձևի հիմքային տվյալների աղբյուրի ներքին անունը։
* `Duration` - Դիտելու ձևի կատարման տևողությունը վայրկյաններով։
* `RowCount` - Դիտելու ձևի տողերի քանակը։
* `Cancelled` - UI-ից կատարման ընդհատման հայտանիշ։
* `ReportParameters` - Տվյալների աղբյուրի կատարման [պարամետրերի նկարագրությունների](ReportParametersModel.md) ցուցակը։