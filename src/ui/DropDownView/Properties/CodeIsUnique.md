---
title: CodeIsUnique
parent: "Հատկություններ"
grand_parent: "DropDownView"
---

# DropDownView.CodeIsUnique հատկություն

## Նկարագիր

**Դաս՝** [DropDownView](../DropDownView.md)

```c#
public abstract bool CodeIsUnique { get; }
```

Սահմանում է, արդյոք DropDownView-ի «Կոդ» սյան արժեքները չկրկնվող են։

Հատկության true արժեքի դեպքում նշված կոդով տողի որոնումը ([GetRowByCode](../Methods/GetRowByCode.md)) իրականացվում է [CodeDictionary](CodeDictionary.md) Dictionary-ի միջոցով, ինչը զգալիորեն արագացնում է որոնումը։ Հակառակ դեպքում որոնումը իրականացվում է բոլոր տողերով, և վերադարձվում է տրված կոդին համապատասխան առաջին տողը։