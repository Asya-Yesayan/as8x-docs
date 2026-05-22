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

Սահմանում է դիտելու ձևի ընթացիկ տողը խմբագրման իրավասությունը` [AllowEdit](AllowEdit.md) հատկության հետ համատեղ: Հատկության լռությամբ արժեքը true է:

* Եթե [`AllowEdit=true`](AllowEdit.md) և `IsEditEnabled=true`, ապա դիտելու ձևի կոնտեքստային մենյուում ցուցադրվում է «Դիտել/Խմբագրել» կոնտեքստային ֆունկցիան, որը հասանելի է կատարման համար՝ խմբագրման ռեժիմով։
* Եթե [`AllowEdit=true`](AllowEdit.md) և `IsEditEnabled=false`, ապա դիտելու ձևի կոնտեքստային մենյուում ցուցադրվում է «Դիտել/Խմբագրել» կոնտեքստային ֆունկցիան, սակայն հասանելի չէ կատարման համար (ցուցադրվում է readonly ռեժիմով)։
* Եթե [`AllowEdit=false`](AllowEdit.md), ապա դիտելու ձևի կոնտեքստային մենյուում չի ցուցադրվում «Դիտել/Խմբագրել» կոնտեքստային ֆունկցիան։

«Դիտել/Խմբագրել» կոնտեքստային ֆունկցիայի կատարման արդյունքում բացվող խմբագրման պատուհանը սահմանվում է [`Edit`](../Methods/Edit.md) կամ [`EditDocument`](../Methods/EditDocument.md) մեթոդներով: 
* Եթե [`AllowEdit=true`](AllowEdit.md) և `IsEditEnabled=true` և [`IsDocumentBased=false`](IsDocumentBased.md), ապա կանչվում է [`Edit`](../Methods/Edit.md) մեթոդը:
* Եթե [`AllowEdit=true`](AllowEdit.md) և `IsEditEnabled=true` և [`IsDocumentBased=true`](IsDocumentBased.md), ապա կանչվում է [`EditDocument`](../Methods/EditDocument.md) մեթոդը:

![Edit_Function](../../images/DataView/Edit_Function.png)

![Edit_Window](../../images/DataView/Edit_Window.png)