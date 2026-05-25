---
title: EditEnabled
parent: "Հատկություններ"
grand_parent: "DropDownView"
---

# DropDownView.EditEnabled հատկություն

## Նկարագիր

**Դաս՝** [DropDownView](../DropDownView.md)

```c#
public virtual bool EditEnabled { get; }
```

Սահմանում է DropDownView-ի ընթացիկ տողի խմբագրման իրավասությունը` [EditSupported](EditSupported.md) հատկության հետ համատեղ: Հատկության լռությամբ արժեքը համընկնում է [EditSupported](EditSupported.md) հատկության արժեքի հետ։

* Եթե `EditSupported=true` և `EditEnabled=true`, ապա DropDownView-ում ցուցադրվում է «Խմբագրել (Ctrl + E)» կոճակը, որը հասանելի է կատարման համար։
* Եթե `EditSupported=true` և `EditEnabled=false`, ապա DropDownView-ում ցուցադրվում է «Խմբագրել (Ctrl + E)» կոճակը, սակայն հասանելի չէ կատարման համար (ցուցադրվում է readonly ռեժիմով)։
* Եթե `EditSupported=false`, ապա DropDownView-ում չի ցուցադրվում «Խմբագրել (Ctrl + E)» կոճակը։

«Խմբագրել (Ctrl + E)» կոճակի կատարման արդյունքում բացվող խմբագրման պատուհանը սահմանվում է [`Edit`](../Methods/Edit.md) մեթոդով: 