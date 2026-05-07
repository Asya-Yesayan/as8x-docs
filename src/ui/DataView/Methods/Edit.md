---
title: Edit
parent: "Մեթոդներ"
grand_parent: "DataView"
---

# DataView.Edit() մեթոդ

## Նկարագիր

**Դաս՝** [DataView](../DataView.md)

```c#
public virtual void Edit()
```

Խմբագրման գործողություն՝ ոչ-փաստաթղթային DataView-ի համար:

Լռությամբ ոչինչ չի կատարում: Override-ի դեպքում կատարի custom edit flow:
Փաստաթղթային DataView-ում (`IsDocumentBased=true`) panel-ը
կանչում է `EditDocument(false)`-ը:

