---
title: AllowEdit
parent: "Հատկություններ"
grand_parent: "DataView"
---

# DataView.AllowEdit հատկություն

## Նկարագիր

**Դաս՝** [DataView](../DataView.md)

```c#
public virtual bool AllowEdit { get; }
```

Սահմանում է դիտելու ձևի ընթացիկ տողը խմբագրման իրավասությունը` [IsEditEnabled](IsEditEnabled.md) հատկության հետ համատեղ: Հատկության լռությամբ արժեքը false է:

* Եթե `AllowEdit=true` և [`IsEditEnabled=true`](IsEditEnabled.md), ապա դիտելու ձևի կոնտեքստային մենյուում ցուցադրվում է «Դիտել/Խմբագրել» կոնտեքստային ֆունկցիան, որը հասանելի է կատարման համար՝ խմբագրման ռեժիմով։
* Եթե `AllowEdit=true` և [`IsEditEnabled=false`](IsEditEnabled.md), ապա դիտելու ձևի կոնտեքստային մենյուում ցուցադրվում է «Դիտել/Խմբագրել» կոնտեքստային ֆունկցիան, սակայն հասանելի չէ կատարման համար (ցուցադրվում է readonly ռեժիմով)։
* Եթե `AllowEdit=false`, ապա դիտելու ձևի կոնտեքստային մենյուում չի ցուցադրվում «Դիտել/Խմբագրել» կոնտեքստային ֆունկցիան։

«Դիտել/Խմբագրել» կոնտեքստային ֆունկցիայի կատարման արդյունքում բացվող խմբագրման պատուհանը սահմանվում է [`Edit`](../Methods/Edit.md) կամ [`EditDocument`](../Methods/EditDocument.md) մեթոդներով: 
* Եթե `AllowEdit=true` և [`IsEditEnabled=true`](IsEditEnabled.md) և [`IsDocumentBased=false`](IsDocumentBased.md), ապա կանչվում է [`Edit`](../Methods/Edit.md) մեթոդը:
* Եթե `AllowEdit=true` և [`IsEditEnabled=true`](IsEditEnabled.md) և [`IsDocumentBased=true`](IsDocumentBased.md), ապա կանչվում է [`EditDocument`](../Methods/EditDocument.md) մեթոդը:

![Edit_Function](../../images/DataView/Edit_Function.png)

![Edit_Window](../../images/DataView/Edit_Window.png)