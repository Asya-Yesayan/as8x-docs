---
title: ProcessRow
parent: "Մեթոդներ"
grand_parent: "ViewExtension"
---

# ViewExtension.ProcessRow(ExtendableRow) մեթոդ

## Նկարագիր

**Դաս՝** [ViewExtension](../ViewExtension.md)

```c#
public virtual bool ProcessRow(ExtendableRow row)
```

Սահմանում է ընդլայնման՝ յուրաքանչյուր տողի մշակման գործողությունը։ Մեթոդը կանչվում է դիտելու ձևի յուրաքանչյուր տողի համար, երբ [EnableRowProcessing](../Properties/EnableRowProcessing.md) հատկության արժեքը **true** է։

Մեթոդը չմշակելու դեպքում վերադարձնում է **true** և տողերի վրա որևէ փոփոխություն չի կատարվում։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- |
| row | ExtendableRow | - | Դիտելու ձևի ընթացիկ տողը, որի սյուների արժեքները հնարավոր է կարդալ կամ թարմացնել։ |

**Վերադարձնում է**

**bool** արժեք, որը ցույց է տալիս, թե տվյալ տողը ներառվում է դիտելու ձևի արդյունքում։ 
