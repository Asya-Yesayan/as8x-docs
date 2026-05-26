---
title: Validator
parent: "Հատկություններ"
grand_parent: "DropDownView"
---

# DropDownView.Validator հատկություն

## Նկարագիր

**Դաս՝** [DropDownView](../DropDownView.md)

```c#
public IDropDownValidator Validator { get; protected set; }
```

Վերադարձնում է DropDownView-ի արժեքների վալիդատորը։

Վալիդատորի առկայության դեպքում [Validate](../Methods/Validate.md) մեթոդը, տողերը դեռ բեռնված չլինելու դեպքում, կարող է վավերականությունը ստուգել վալիդատորի միջոցով՝ առանց տողերի վերբեռնման։
