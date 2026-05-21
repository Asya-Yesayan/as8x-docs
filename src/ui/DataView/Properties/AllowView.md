---
title: AllowView
parent: "Հատկություններ"
grand_parent: "DataView"
---

# DataView.AllowView հատկություն

## Նկարագիր

**Դաս՝** [DataView](../DataView.md)

```c#
public virtual bool AllowView { get; }
```

Սահմանում է դիտելու ձևի ընթացիկ տողի դիտման իրավասությունը: Հատկության լռությամբ արժեքը համընկնում է IsDocumentBased հատկության արժեքի հետ։

Հատկության true արժեքի դեպքում դիտելու ձևի կոնտեքստային մենյուում ցուցադրվում է «Դիտել/Խմբագրել» կոնտեքստային ֆունկցիան, որը հասանելի է կատարման համար՝ դիտման (readonly) ռեժիմով։

«Դիտել/Խմբագրել» կոնտեքստային ֆունկցիայի կատարման արդյունքում բացվող դիտման պատուհանը սահմանվում է `View` կամ `EditDocument` մեթոդներով: 
* Եթե `AllowView=true` և `AllowEdit=false` և `IsDocumentBased=false`, ապա կանչվում է `View` մեթոդը:
* Եթե `AllowView=true` և `IsDocumentBased=true`, ապա կանչվում է `EditDocument` մեթոդը:

