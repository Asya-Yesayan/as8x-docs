---
title: AddNewSupported
parent: "Հատկություններ"
grand_parent: "DropDownView"
---

# DropDownView.AddNewSupported հատկություն

## Նկարագիր

**Դաս՝** [DropDownView](../DropDownView.md)

```c#
public virtual bool AddNewSupported { get; }
```

Սահմանում է DropDownView-ում նոր տող ավելացնելու իրավասությունը` [AddNewEnabled](AddNewEnabled.md) հատկության հետ համատեղ: Հատկության լռությամբ արժեքը false է։

* Եթե `AddNewSupported=true` և `AddNewEnabled=true`, ապա DropDownView-ում ցուցադրվում է «Ավելացնել (Ctrl + N)» կոճակը, որը հասանելի է կատարման համար։
* Եթե `AddNewSupported=true` և `AddNewEnabled=false`, ապա DropDownView-ում ցուցադրվում է «Ավելացնել (Ctrl + N)» կոճակը, սակայն հասանելի չէ կատարման համար (ցուցադրվում է readonly ռեժիմով)։
* Եթե `AddNewSupported=false`, ապա DropDownView-ում չի ցուցադրվում «Ավելացնել (Ctrl + N)» կոճակը։

«Ավելացնել (Ctrl + N)» կոճակի կատարման արդյունքում բացվող ավելացման պատուհանը սահմանվում է [`AddNew`](../Methods/AddNew.md) մեթոդով: 
