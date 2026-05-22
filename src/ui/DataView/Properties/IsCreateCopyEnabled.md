---
title: IsCreateCopyEnabled
parent: "Հատկություններ"
grand_parent: "DataView"
---

# DataView.IsCreateCopyEnabled հատկություն

## Նկարագիր

**Դաս՝** [DataView](../DataView.md)

```c#
public virtual bool IsCreateCopyEnabled { get; }
```

Սահմանում է դիտելու ձևի ընթացիկ տողի պատճենման իրավասությունը` [AllowCreateCopy](AllowCreateCopy.md) հատկության հետ համատեղ: Հատկության լռությամբ արժեքը true է:

* Եթե [`AllowCreateCopy=true`](AllowCreateCopy.md) և `IsCreateCopyEnabled=true` և ([`IsDocumentBased=false`](IsDocumentBased.md) կամ [`IsDocumentBased=true`](IsDocumentBased.md), ընթացիկ տողը պարունակող փաստաթղթի `Schema.DisableCopy=false`), ապա դիտելու ձևի կոնտեքստային մենյուում ցուցադրվում է «Պատճենել» կոնտեքստային ֆունկցիան, որը հասանելի է կատարման համար։
* Եթե [`AllowCreateCopy=true`](AllowCreateCopy.md) և `IsCreateCopyEnabled=false` և ([`IsDocumentBased=false`](IsDocumentBased.md) կամ [`IsDocumentBased=true`](IsDocumentBased.md), ընթացիկ տողը պարունակող փաստաթղթի `Schema.DisableCopy=false`), ապա դիտելու ձևի կոնտեքստային մենյուում ցուցադրվում է «Պատճենել» կոնտեքստային ֆունկցիան, սակայն հասանելի չէ կատարման համար (ցուցադրվում է readonly ռեժիմով)։
* Եթե [`AllowCreateCopy=false`](AllowCreateCopy.md), ապա դիտելու ձևի կոնտեքստային մենյուում չի ցուցադրվում «Պատճենել» կոնտեքստային ֆունկցիան։

«Պատճենել» կոնտեքստային ֆունկցիայի կատարման արդյունքում բացվող խմբագրման պատուհանը սահմանվում է [`CreateCopy`](../Methods/CreateCopy.md) կամ `CreateCopyDocument` մեթոդներով: 
* Եթե [`AllowCreateCopy=true`](AllowCreateCopy.md) և `IsCreateCopyEnabled=true` և [`IsDocumentBased=false`](IsDocumentBased.md), ապա կանչվում է [`CreateCopy`](../Methods/CreateCopy.md) մեթոդը:
* Եթե [`AllowCreateCopy=true`](AllowCreateCopy.md) և `IsCreateCopyEnabled=true` և [`IsDocumentBased=true`](IsDocumentBased.md), ապա կանչվում է `CreateCopyDocument` մեթոդը:

![Copy_Function](../../images/DataView/Copy_Function.png)

![Copy_Window](../../images/DataView/Copy_Window.png)