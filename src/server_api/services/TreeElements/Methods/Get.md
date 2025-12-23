---
title: TreeElementsService.Get(string, string, bool) մեթոդ  
---

## Նկարագիր

**Համարժեքը 4x-ում՝** [AsKernel.TreeElProp](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Functions/Functions/DocumentsCirculation/TreeElProp.html)

**Դաս՝** [TreeElementsService](../TreeElementsService.md)

```c#
public Task<TreeElement> Get(string treeId, 
                             string key, 
                             bool useCache = true)
```

Բեռնում է [ծառի տարրը](../../../Types/TreeElement.md) տվյալների պահոցից կամ քեշից, եթե ծառը քեշավոևվող է։

**Պարամետրեր**

| Անվանում        | Տվյալների տիպ        | Լռությամբ արժեք | Նկարագրություն |
|-----------------|----------------------|----------------|----------------|
| treeId          | string               | -              | Ծառի ներքին անունը։ |
| key             | string               | -              | Ծառի հանգույցի կոդը։ |
| useCache        | bool                 | true           | Քեշում առկայության դեպքում քեշից բեռնման հայտանիշ։ |
