---
title: AfterExecute
parent: "Մեթոդներ"
grand_parent: "ViewExtension"
---

# ViewExtension.AfterExecute() մեթոդ

## Նկարագիր

**Դաս՝** [ViewExtension](../ViewExtension.md)

```c#
public virtual void AfterExecute()
```

Նախատեսված է ընդլայնման տողերի մշակումից հետո կատարվող գործողությունների սահմանման համար։ Մեթոդը կանչվում է [ProcessRow](ProcessRow.md) մեթոդի վերջին կանչից հետո՝ մեկ անգամ՝ ընդլայնման յուրաքանչյուր կիրառման ընթացքում։

Մեթոդը չմշակելու դեպքում որևէ գործողություն չի կատարվում։
