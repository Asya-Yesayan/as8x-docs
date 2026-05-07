---
title: ReloadMode
parent: "Հատկություններ"
grand_parent: "DataView"
---

# DataView.ReloadMode հատկություն

## Նկարագիր

**Դաս՝** [DataView](../DataView.md)

```c#
public virtual ReloadMode ReloadMode { get; }
```

DataView-ի Refresh/Reload ռեժիմը:

Վերադարձնում է `ReloadMode.None` երբ `Type == ViewSource.SmartEnum`,
հակառակ դեպքում `ReloadMode.Reloadable`:
Ազդում է panel-ի toolbar-ի Refresh button-ի ցուցադրման վրա:

