---
title: ShowProgressInside
parent: "Մեթոդներ"
grand_parent: "DataView"
---

# DataView.ShowProgressInside() մեթոդ

## Նկարագիր

**Դաս՝** [DataView](../DataView.md)

```c#
public virtual void ShowProgressInside()
```

Ցուցադրում է inline progress control-ը panel-ի ներսում:

Կոչվում է `ShowBrowser`-ի կողմից `LoadIndication.AlwaysInside` ռեժիմում:

DataSource տեսակ.
- `Panel.SetBarStatesDisabled()`:
- Ստեղծում է `DataSourceProgressControl`:
- Subscribe-վում է `ProcessRows` և `BackgroundWorkerDoWorkCompleted`:
- `Panel.ShowProgressContent(control)`:

SelfCalculated տեսակ.
- Ստեղծում է `MultilineProgressControl`:
- `Panel.ShowProgressContent(control)`:

Ավարտին կոչվում է `BackgroundWorkerDoWorkCompleted`-ը, որն
`FitColumns()` կատարում է:

