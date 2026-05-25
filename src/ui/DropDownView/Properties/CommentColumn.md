---
title: CommentColumn
parent: "Հատկություններ"
grand_parent: "DropDownView"
---

# DropDownView.CommentColumn հատկություն

## Նկարագիր

**Դաս՝** [DropDownView](../DropDownView.md)

```c#
public abstract ViewColumn CommentColumn { get; }
```

Սահմանում է այն սյունը, որի տվյալները ցուցադրվում են DropDownView-ի «Անվանում» սյունակում։

**Օրինակ**

```c#
public override ViewColumn CommentColumn => this.Columns[nameof(DataRow.Name)];
```
