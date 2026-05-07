---
title: Delete
parent: "Մեթոդներ"
grand_parent: "DataView"
---

# DataView.Delete() մեթոդ

## Նկարագիր

**Դաս՝** [DataView](../DataView.md)

```c#
public virtual void Delete()
```

Ջնջման գործողություն՝ ոչ-փաստաթղթային DataView-ի համար: Լռությամբ ոչինչ չի կատարում:

Override-ի դեպքում կատարի custom delete flow: Փաստաթղթային
DataView-ում panel-ը կանչում է `DeleteDocument()`-ը:

