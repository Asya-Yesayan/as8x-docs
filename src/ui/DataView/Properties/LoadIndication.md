---
title: LoadIndication
parent: "Հատկություններ"
grand_parent: "DataView"
---

# DataView.LoadIndication հատկություն

## Նկարագիր

**Դաս՝** [DataView](../DataView.md)

```c#
public virtual LoadIndication LoadIndication { get; }
```

Տվյալների բեռնման progress ցուցադրման ռեժիմը:

Կախված է `Type`-ից և `Settings.UseAlwaysInsideIndication`-ից.
- `Type != DataSource` → `LoadIndication.None` (inline, without progress):
- `Type == DataSource` AND `UseAlwaysInsideIndication=true` →
`LoadIndication.AlwaysInside` (progress panel-ի ներսում):
- `Type == DataSource` AND `UseAlwaysInsideIndication=false` →
`LoadIndication.Allways` (modal progress window):

`None` → `LoadData()` synchronous:
`Allways` → `ShowProgressWindow()`:
`AlwaysInside` → `ShowProgressInside()`:

