---
title: TreeElementsService.AddNode(TreeElement, bool) մեթոդ  
---

## Նկարագիր

**Համարժեքը 4x-ում՝** [AsTree.AddNode](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Functions/ASTREE/AddNode.html)

**Դաս՝** [TreeElementsService](../TreeElementsService/TreeElementsService.md)

```c#
public Task<List<TreeNode>> AddNode(TreeElement treeElement, 
                                    bool overwrite = false)
```

Ավելացնում է ծառի նոր հանգույց տվյալների պահոցում։

**Պարամետրեր**

| Անվանում        | Տվյալների տիպ        | Լռությամբ արժեք | Նկարագրություն |
|-----------------|----------------------|----------------|----------------|
| treeElement     | TreeElement          | -              | [Ծառի տարր](../../Types/TreeElement.md)։ |
| overwrite       | bool                 | false          | Տվյալների պահոցում ծառի հանգույցի առկայության դեպքում հանգույցի վերագրանցման հայտանիշ։ Այս հնարավորությունը հասանելի է միայն փաստաթղթի հետ չկապակցված ծառի հանգույցների համար։ |
   
