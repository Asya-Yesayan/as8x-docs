---
title: CodeColumn
parent: "Հատկություններ"
grand_parent: "DropDownView"
---

# DropDownView.CodeColumn հատկություն

## Նկարագիր

**Դաս՝** [DropDownView](../DropDownView.md)

```c#
public abstract ViewColumn CodeColumn { get; }
```

Սահմանում է այն սյունը, որի տվյալները ցուցադրվում են DropDownView-ի «Կոդ» սյունակում։

**Օրինակ**

```c#
public override ViewColumn CodeColumn => this.Columns[nameof(DataRow.Code)];
```
