---
title: IsEditEnabled
parent: "Հատկություններ"
grand_parent: "DataView"
---

# DataView.IsEditEnabled հատկություն

## Նկարագիր

**Դաս՝** [DataView](../DataView.md)

```c#
public virtual bool IsEditEnabled { get; }
```

Սահմանում է դիտելու ձևի ընթացիկ տողը խմբագրման իրավասությունը` IsEditEnabled հատկության հետ համատեղ: Հատկության լռությամբ արժեքը false է:

* Եթե `AllowEdit=true` և `IsEditEnabled=true`, ապա դիտելու ձևի կոնտեքստային մենյուում ցուցադրվում է «Դիտել/Խմբագրել» կոնտեքստային ֆունկցիան, որը հասանելի է կատարման համար։
* Եթե `AllowEdit=true` և `IsEditEnabled=false`, ապա դիտելու ձևի կոնտեքստային մենյուում ցուցադրվում է «Դիտել/Խմբագրել» կոնտեքստային ֆունկցիան, սակայն հասանելի չէ կատարման համար (ցուցադրվում է readonly ռեժիմով)։
* Եթե `AllowEdit=false`, ապա դիտելու ձևի կոնտեքստային մենյուում չի ցուցադրվում «Դիտել/Խմբագրել» կոնտեքստային ֆունկցիան։

«Դիտել/Խմբագրել» կոնտեքստային ֆունկցիայի կատարման արդյունքում բացվող խմբագրման պատուհանը սահմանվում է `Edit` կամ `EditDocument` մեթոդներով: 
* Եթե `AllowEdit=true` և `IsEditEnabled=true` և `IsDocumentBased=false`, ապա կանչվում է `Edit` մեթոդը:
* Եթե `AllowEdit=true` և `IsEditEnabled=true` և `IsDocumentBased=true`, ապա կանչվում է `EditDocument` մեթոդը:
