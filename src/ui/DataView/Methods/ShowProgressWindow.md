---
title: ShowProgressWindow
parent: "Մեթոդներ"
grand_parent: "DataView"
---

# DataView.ShowProgressWindow() մեթոդ

## Նկարագիր

**Դաս՝** [DataView](../DataView.md)

```c#
public virtual void ShowProgressWindow()
```

Ցուցադրում է modal progress window՝ data loading-ի ժամանակ:

Կոչվում է `ShowBrowser`-ի կողմից `LoadIndication.Allways` ռեժիմում:

DataSource տեսակ.
- Ստեղծում է `DataSourceProgressWindow`:
- Subscribe-վում է `ProcessRows` event-ին:
- `ShowDialogWithExceptionHandling()` → `AfterLoadData()`:

SelfCalculated տեսակ.
- Ստեղծում է `MultilineProgressWindow`:
- `BackgroundWorkerDoWork += BackgroundWorkerDoWorkEventHandler`:

