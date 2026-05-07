---
title: DataView
parent: "Մեթոդներ"
grand_parent: "DataView"
---

# DataView.DataView() մեթոդ

## Նկարագիր

**Դաս՝** [DataView](../DataView.md)

```c#
public DataView()
```

Ստեղծում է DataView-ի ինստանս, կարդում է `DataViewAttribute`-ից `Name`-ը,
caption-ը և extension support-ի դրոշը:

Եթե `DataViewAttribute`-ը կիրառված չէ, `name`-ը սահմանվում է `null`,
ինչի հետևանքով `Name` property-ի կանչը կնետի `InvalidOperationException`:
`SuppressExecution`-ը լռությամբ `false` է:

