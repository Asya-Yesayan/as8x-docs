---
title: TreeElementsService.DeleteNode(string, string) մեթոդ  
---

## Նկարագիր

**Համարժեքը 4x-ում՝** [AsTree.DeleteNode](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Functions/ASTREE/DeleteNode.html)

**Դաս՝** [TreeElementsService](../TreeElementsService.md)

```c#
public Task<TreeNode> DeleteNode(string treeID, 
                                 string key)
```

Հեռացնում է ծառի հանգույցը տվյալների պահոցից։

**Պարամետրեր**

| Անվանում        | Տվյալների տիպ        | Լռությամբ արժեք | Նկարագրություն |
|-----------------|----------------------|----------------|----------------|
| treeID          | string               | -              | Ծառի ներքին անունը։ |
| key             | string               | -              | Ծառի հանգույցի կոդը։ |
