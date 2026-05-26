---
title: AllowSaveAndCloseButton
parent: "Մեթոդներ"
grand_parent: "DocumentPanel"
---

# DocumentPanel&lt;T&gt;.AllowSaveAndCloseButton() մեթոդ

## Նկարագիր

**Դաս՝** [DocumentPanel](../DocumentPanel.md)

```c#
protected virtual bool AllowSaveAndCloseButton()
```

Սահմանում է, արդյոք **«Պահպանել և փակել»** կոճակը հասանելի է փաստաթղթի վահանակում։

Մեթոդը չմշակելու դեպքում վերադարձնում է **true**։ Կոճակի հասանելիության կանոնները նույնն են, ինչ [AllowSaveButton](AllowSaveButton.md) մեթոդի համար։ [AllowSave](AllowSave.md) մեթոդի **false** արժեքի դեպքում կոճակը մնում է անհասանելի։