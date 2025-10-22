---
title: TreeEventHandler.BeforeDeleteNode(BeforeDeleteNodeEventArgs) մեթոդ
---

```c#
public virtual Task BeforeDeleteNode(BeforeDeleteNodeEventArgs args)
```

Մեթոդը կանչվում է ծառը հանգույցը [հեռացնելիս](../TreeElementsService/DeleteNode.md)՝ նախքան հանգույցը տվյալների պահոցից հեռացնելը։

**Պարամետրեր**

| Անվանում | Տեսակ | Լռությամբ արժեք | Նկարագրություն |
|-----------|-------|-----------------|----------------|
| args | BeforeDeleteNodeEventArgs | - | BeforeDeleteNodeEventArgs դասի օբյեկտ, որը պարունակում է ծառի [հանգույցի նկարագրությունը](../../types/TreeElement.md)։ |
