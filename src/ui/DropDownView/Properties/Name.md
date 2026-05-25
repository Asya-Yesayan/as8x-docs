---
title: Name
parent: "Հատկություններ"
grand_parent: "DropDownView"
---

# DropDownView.Name հատկություն

## Նկարագիր

**Դաս՝** [DropDownView](../DropDownView.md)

```c#
public virtual string Name { get; }
```

Սահմանում է DropDownView-ի ներքին անունը: Հատկության լռությամբ արժեքը համընկնում է DropDownView ատրիբուտում նշված անվան հետ։

Եթե DropDownView-ն նկարագրող դասում բացակայում է DropDownView ատրիբուտը և հատկությունը override չի արվել, ապա այս հատկությանը դիմելիս առաջանում է InvalidOperationException տիպի սխալ։

**Օրինակ**

```c#
[DropDownView(nameof(ActivationConditions),
                  ArmenianCaption = "Ակտիվացման պայմաններ",
                  EnglishCaption = "Activation conditions",
                  SupportsExtensions = false)]
```
