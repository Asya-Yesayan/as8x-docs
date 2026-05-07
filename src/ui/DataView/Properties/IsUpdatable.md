---
title: IsUpdatable
parent: "Հատկություններ"
grand_parent: "DataView"
---

# DataView.IsUpdatable հատկություն

## Նկարագիր

**Դաս՝** [DataView](../DataView.md)

```c#
public virtual bool IsUpdatable { get; }
```

Ինդիկացնում է՝ արդյոք DataView-ի rows-ը կարող են թարմացվել `LoadUpdatedRows`-ի միջոցով:

Lazy computed: `true` է, երբ.
- DataSource տեսակի դեպքում. `ds.Definition.IsUpdatable` AND
`typeof(R).GetInterface(nameof(IMatchedUpdateKey)) != null`:
- Այլ տեսակների դեպքում. `typeof(R).GetInterface(nameof(IMatchedUpdateKey)) != null`:

Եթե `false` է, `LoadUpdatedRows()`-ի կանչը կնետի
`NotImplementedException`:

