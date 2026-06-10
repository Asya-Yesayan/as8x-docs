---
title: EnableRowProcessing
parent: "Հատկություններ"
grand_parent: "ViewExtension"
---

# ViewExtension.EnableRowProcessing հատկություն

## Նկարագիր

**Դաս՝** [ViewExtension](../ViewExtension.md)

```c#
public virtual bool EnableRowProcessing { get; }
```

Սահմանում է ընդլայնման տողերի մշակման իրավասությունը։ Հատկության լռությամբ արժեքը **false** է։

Հատկության true արժեքի դեպքում դիտելու ձևի յուրաքանչյուր տողի համար կանչվում է [ProcessRow](../Methods/ProcessRow.md) մեթոդը, որի միջոցով հնարավոր է ընդլայնման տողի վրա կատարել լրացուցիչ հաշվարկներ կամ ֆիլտրում։
