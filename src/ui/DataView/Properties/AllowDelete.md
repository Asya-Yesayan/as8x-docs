---
title: AllowDelete
parent: "Հատկություններ"
grand_parent: "DataView"
---

# DataView.AllowDelete հատկություն

## Նկարագիր

**Դաս՝** [DataView](../DataView.md)

```c#
public virtual bool AllowDelete { get; }
```

Սահմանում է դիտելու ձևի ընթացիկ տողի հեռացման իրավասությունը` [IsDeleteEnabled](IsDeleteEnabled.md) հատկության հետ համատեղ: Հատկության լռությամբ արժեքը false է:

* Եթե `AllowDelete=true` և [`IsDeleteEnabled=true`](IsDeleteEnabled.md), ապա դիտելու ձևի կոնտեքստային մենյուում ցուցադրվում է «Հեռացնել» կոնտեքստային ֆունկցիան, որը հասանելի է կատարման համար։
* Եթե `AllowDelete=true` և [`IsDeleteEnabled=false`](IsDeleteEnabled.md), ապա դիտելու ձևի կոնտեքստային մենյուում ցուցադրվում է «Հեռացնել» կոնտեքստային ֆունկցիան, սակայն հասանելի չէ կատարման համար (ցուցադրվում է readonly ռեժիմով)։
* Եթե `AllowDelete=false`, ապա դիտելու ձևի կոնտեքստային մենյուում չի ցուցադրվում «Հեռացնել» կոնտեքստային ֆունկցիան։

«Հեռացնել» կոնտեքստային ֆունկցիայի կատարման արդյունքում բացվող հեռացման պատուհանը սահմանվում է [`Delete`](../Methods/Delete.md) կամ [`DeleteDocument`](../Methods/DeleteDocument.md) մեթոդներով: 
* Եթե `AllowDelete=true` և [`IsDeleteEnabled=true`](IsDeleteEnabled.md) և [`IsDocumentBased=false`](IsDocumentBased.md), ապա կանչվում է [`Delete`](../Methods/Delete.md) մեթոդը:
* Եթե `AllowDelete=true` և [`IsDeleteEnabled=true`](IsDeleteEnabled.md) և [`IsDocumentBased=true`](IsDocumentBased.md), ապա կանչվում է [`DeleteDocument`](../Methods/DeleteDocument.md) մեթոդը:

![Delete_Function](../../images/DataView/Delete_Function.png)

![Delete_Window](../../images/DataView/Delete_Window.png)

