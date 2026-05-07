---
title: ComposeTitle
parent: "Մեթոդներ"
grand_parent: "DataView"
---

# DataView.ComposeTitle() մեթոդ

## Նկարագիր

**Դաս՝** [DataView](../DataView.md)

```c#
public string ComposeTitle()
```

Ստեղծում է ֆորմատավորված բազմատող վերնագիր՝ `IncludeCaptionToolTip=true`
դրոշ ունեցող բոլոր parameters-ի նկարագրություններով ու արժեքներով:

Յուրաքանչյուր parameter-ի ձևաչափ ըստ տիպի.
- `string`: դատարկ → "Բոլորը", հակառակ դեպքում `"value"`:
- `IMultiFilterValue`: FilterType + Start + End արժեքներ:
- `bool`: "Այո" / "Ոչ":
- `DateTime`: "dd/MM/yyyy" ձևաչափ:
- `null`: DateFieldType → "Դատարկ", հակառակ դեպքում "Բոլորը":
Կիրառվում է report title-ների, print headers-ների համար:

**Վերադարձնում է**

Ֆորմատավորված string, որն ներառում է `ReportTitle()`-ը հետևյալ ձևաչափով.
<code>
ReportTitle()
Param1Description - value1
Param2Description - FilterType = ...; Value = ...
</code>

