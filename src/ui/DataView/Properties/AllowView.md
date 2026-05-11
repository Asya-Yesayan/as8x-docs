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

Սահմանում է դիտելու ձևի ընթացիկ տողի դիտման իրավասությունը` IsEditEnabled հատկության հետ համատեղ: Հատկության լռությամբ արժեքը համընկնում է IsDocumentBased հատկության արժեքի հետ։

* Եթե `AllowEdit=true` և `IsEditEnabled=true`, ապա դիտելու ձևի կոնտեքստային մենյուում ցուցադրվում է «Դիտել/Խմբագրել» կոնտեքստային ֆունկցիան, որը հասանելի է կատարման համար՝ դիտման ռեժիմով (ցուցադրվում է readonly ռեժիմով)։
* Եթե `AllowEdit=true` և `IsEditEnabled=false`, ապա դիտելու ձևի կոնտեքստային մենյուում ցուցադրվում է «Դիտել/Խմբագրել» կոնտեքստային ֆունկցիան, սակայն հասանելի չէ կատարման համար (ցուցադրվում է readonly ռեժիմով)։
* Եթե `AllowEdit=false`, ապա դիտելու ձևի կոնտեքստային մենյուում չի ցուցադրվում «Դիտել/Խմբագրել» կոնտեքստային ֆունկցիան։

«Դիտել/Խմբագրել» կոնտեքստային ֆունկցիայի կատարման արդյունքում բացվող խմբագրման պատուհանը սահմանվում է `Edit` կամ `EditDocument` մեթոդներով: 
* Եթե `AllowEdit=true` և `IsEditEnabled=true` և `IsDocumentBased=false`, ապա կանչվում է `Edit` մեթոդը:
* Եթե `AllowEdit=true` և `IsEditEnabled=true` և `IsDocumentBased=true`, ապա կանչվում է `EditDocument` մեթոդը:
* 
Ինդիկացնում է՝ արդյոք DataView-ից թույլատրված է փաստաթղթի read-only դիտումը:

Լռությամբ հավասար է `IsDocumentBased`-ի արժեքին:
Կոնտեքստային մենյուն ցուցադրում է "Դիտել" ֆունկցիան, որն կանչում է
`EditDocument(isReadOnly: true)`:

