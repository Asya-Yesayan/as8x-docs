---
title: KeyColumn
parent: "Հատկություններ"
grand_parent: "DropDownView"
---

# DropDownView.KeyColumn հատկություն

## Նկարագիր

**Դաս՝** [DropDownView](../DropDownView.md)

```c#
public virtual ViewColumn KeyColumn { get; }
```

Սահմանում է բացվող ցուցակի դիտելու ձևի բանալի սյունը։ Հատկության լռությամբ արժեքը null է:

**Օրինակ**

```c#
public override ViewColumn KeyColumn => this.Columns[nameof(DataRow.ISN)];
```
