---
title: AllowSave
parent: "Մեթոդներ"
grand_parent: "DocumentPanel"
---

# DocumentPanel&lt;T&gt;.AllowSave() մեթոդ

## Նկարագիր

**Դաս՝** [DocumentPanel](../DocumentPanel.md)

```c#
protected virtual bool AllowSave()
```

Սահմանում է, արդյոք ընդհանուր առմամբ թույլատրված է փաստաթղթի պահպանումը։
Մեթոդը չմշակելու դեպքում վերադարձնում է **true**։ Մեթոդի **false** արժեքով ձևափոխման դեպքում փաստաթղթի պահպանումը արգելվում է անկախ [AllowSaveButton](AllowSaveButton.md), [AllowSaveAndCloseButton](AllowSaveAndCloseButton.md) և [AllowNewAfterSave](AllowNewAfterSave.md) մեթոդների արժեքներից։

**Վերադարձնում է**

**true** արժեքի դեպքում փաստաթղթի պահպանումը թույլատրված է, **false** արժեքի դեպքում՝ արգելված։
