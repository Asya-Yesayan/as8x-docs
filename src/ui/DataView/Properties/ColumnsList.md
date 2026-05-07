---
title: ColumnsList
parent: "Հատկություններ"
grand_parent: "DataView"
---

# DataView.ColumnsList հատկություն

## Նկարագիր

**Դաս՝** [DataView](../DataView.md)

```c#
public IReadOnlyList<ViewColumn> ColumnsList { get; }
```

DataView-ի ցուցադրվող սյուների read-only ցուցակը:

Delegate-ում է `Columns.ViewList`-ին: Պարունակում է բոլոր active սյուները՝
ըստ extension-ի կամ կոնֆիգուրացիայի:

