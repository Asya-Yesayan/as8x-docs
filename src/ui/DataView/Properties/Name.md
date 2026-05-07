---
title: Name
parent: "Հատկություններ"
grand_parent: "DataView"
---

# DataView.Name հատկություն

## Նկարագիր

**Դաս՝** [DataView](../DataView.md)

```c#
public override string Name { get; }
```

DataView-ի մետա-անունը՝ ստացված `DataViewAttribute`-ից:

Եթե `DataViewAttribute`-ը կիրառված չէ, property-ի կանչը կնետի
`InvalidOperationException`: Օգտագործվում է access control,
statistics, logging և extension-ների կողմից:

**Բացառություններ**

| Տիպ | Նկարագրություն |
| --- | --- |
| `InvalidOperationException` | Նետվում է, երբ `DataViewAttribute`-ը կիրառված չէ: |

