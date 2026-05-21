---
title: AllowCreateCopy
parent: "Հատկություններ"
grand_parent: "DataView"
---

# DataView.AllowCreateCopy հատկություն

## Նկարագիր

**Դաս՝** [DataView](../DataView.md)

```c#
public virtual bool AllowCreateCopy { get; }
```

Սահմանում է դիտելու ձևի ընթացիկ տողի պատճենման իրավասությունը` IsCreateCopyEnabled հատկության հետ համատեղ: Հատկության լռությամբ արժեքը համընկնում է IsDocumentBased հատկության արժեքի հետ։

* Եթե `AllowCreateCopy=true` և `IsCreateCopyEnabled=true` և (`IsDocumentBased=false` կամ `IsDocumentBased=true`, ընթացիկ տողը պարունակող փաստաթղթի `Schema.DisableCopy=false`), ապա դիտելու ձևի կոնտեքստային մենյուում ցուցադրվում է «Պատճենել» կոնտեքստային ֆունկցիան, որը հասանելի է կատարման համար։
* Եթե `AllowCreateCopy=true` և `IsCreateCopyEnabled=false` և (`IsDocumentBased=false` կամ `IsDocumentBased=true`, ընթացիկ տողը պարունակող փաստաթղթի `Schema.DisableCopy=false`), ապա դիտելու ձևի կոնտեքստային մենյուում ցուցադրվում է «Պատճենել» կոնտեքստային ֆունկցիան, սակայն հասանելի չէ կատարման համար (ցուցադրվում է readonly ռեժիմով)։
* Եթե `AllowCreateCopy=false`, ապա դիտելու ձևի կոնտեքստային մենյուում չի ցուցադրվում «Պատճենել» կոնտեքստային ֆունկցիան։

«Պատճենել» կոնտեքստային ֆունկցիայի կատարման արդյունքում բացվող պատճենման պատուհանը սահմանվում է `CreateCopy` կամ `CreateCopyDocument` մեթոդներով: 
* Եթե `AllowCreateCopy=true` և `IsCreateCopyEnabled=true` և `IsDocumentBased=false`, ապա կանչվում է `CreateCopy` մեթոդը:
* Եթե `AllowCreateCopy=true` և `IsCreateCopyEnabled=true` և `IsDocumentBased=true`, ապա ցուցադրվում է ընթացիկ տողում պարունակվող փաստաթղթի պատճենը։

![Copy_Function](../../images/DataView/Copy_Function.png)

![Copy_Window](../../images/DataView/Copy_Window.png)