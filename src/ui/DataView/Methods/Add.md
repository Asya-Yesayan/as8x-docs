---
title: Add
parent: "Մեթոդներ"
grand_parent: "DataView"
---

# DataView.Add() մեթոդ

## Նկարագիր

**Դաս՝** [DataView](../DataView.md)

```c#
public virtual void Add()
```

Ավելացման գործողություն՝ ոչ-փաստաթղթային DataView-ի համար:

Լռությամբ ոչինչ չի կատարում: Override-ի դեպքում պետք է բացի
ավելացման UI-ը: Փաստաթղթային DataView-ում (IsDocumentBased=true)
panel-ը կանչում է `AddDocument`-ը:

