---
title: Name
parent: "Հատկություններ"
grand_parent: "DataView"
---

# DataView.Name հատկություն

## Նկարագիր

**Դաս՝** [DataView](../DataView.md)

```c#
public virtual string Name { get; }
```

Սահմանում է դիտելու ձևի ներքին անունը: Հատկության լռությամբ արժեքը համընկնում է DataView ատրիբուտում նշված անվան հետ։

Եթե դիտելու ձևը նկարագրող դասում բացակայում է DataView ատրիբուտը և հատկությունը override չի արվել, ապա այս հատկությանը դիմելիս առաջանում է սխալ։

**Օրինակ**

```c#
[DataView(nameof(JobSet), ArmenianCaption = "Առաջադրանքներ",
                          EnglishCaption = "Jobs", SupportsExtensions = false)]
```


