---
title: AddFirstPhase
parent: "Մեթոդներ"
grand_parent: "DataView"
---

# DataView.AddFirstPhase() մեթոդ

## Նկարագիր

**Դաս՝** [DataView](../DataView.md)

```c#
protected virtual void AddFirstPhase()
```

Սահմանում է դիտելու ձևի կատարման պրոգրեսի առաջին փուլի (phase) տեքստը։ Լռությամբ արժեքը «Տվյալների մշակում» է։

Օրինակ 

```c#
protected override void AddFirstPhase()
{
    AddPhase("Տվյալների բեռնում");
}
```

