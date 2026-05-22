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

Վերադարձնում է բացվող ցուցակի դիտելու ձևի արժեքների վավերականության ստուգիչը։

Ստուգիչի առկայության դեպքում [Validate](../Methods/Validate.md) մեթոդը, տողերը դեռ բեռնված չլինելու դեպքում, կարող է վավերականությունը ստուգել Validator-ի միջոցով առանց տողերի վերբեռնման։
