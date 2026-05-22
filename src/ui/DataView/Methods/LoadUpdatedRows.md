---
title: LoadUpdatedRows
parent: "Մեթոդներ"
grand_parent: "DataView"
---

# DataView.LoadUpdatedRows(object key) մեթոդ

## Նկարագիր

**Դաս՝** [DataView](../DataView.md)

```c#
public int LoadUpdatedRows(object key)
```

Թարմացնում է դիտելու ձևի՝ տրված բանալիին համապատասխանող տողերը։ 

Վերադարձնում է թարմացված տողերի քանակը։ Թարմացված տողերի բացակայության դեպքում վերադարձնում է -1։

Սերվերից ստանում է թարմացված տողերը ([GetUpdatedRows](GetUpdatedRows.md)), կանչում է [AfterLoadUpdatedRows](AfterLoadUpdatedRows.md) մեթոդը, ապա ստացված տողերը համեմատում է դիտելու ձևի առկա տողերի հետ և ըստ համընկնման՝ ավելացնում, փոխարինում կամ հեռացնում է համապատասխան տողերը։

[IsUpdatable](../Properties/IsUpdatable.md) հատկության false արժեքի դեպքում առաջանում է NotImplementedException տիպի սխալ։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- |
| key | object | - | Թարմացվող տողի բանալին։ Կարող է լինել առանձին արժեք՝ մեկ տող թարմացնելու համար, կամ IEnumerable՝ միանգամից մի քանի տող թարմացնելու համար։ |
