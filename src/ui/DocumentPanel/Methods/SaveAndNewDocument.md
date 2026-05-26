---
title: SaveAndNewDocument
parent: "Մեթոդներ"
grand_parent: "DocumentPanel"
---

# DocumentPanel&lt;T&gt;.SaveAndNewDocument() մեթոդ

## Նկարագիր

**Դաս՝** [DocumentPanel](../DocumentPanel.md)

```c#
protected bool SaveAndNewDocument()
```

Պահպանում է փաստաթուղթը և սկսում նորի ստեղծումը՝ պատճենելով ընթացիկ փաստաթղթի բովանդակությունը։ ReadOnly ռեժիմում մեթոդը որևէ գործողություն չի կատարում և վերադարձնում է **false**։ 

Պահպանումից հետո պատճենման հարցումով ստեղծվում է նոր փաստաթուղթ, ակտիվ թաբը տեղափոխվում է առաջինի վրա, և ֆոկուսը նշանակվում է [SetFocusOnActivation](../Properties/SetFocusOnActivation.md) հատկությունում սահմանված դաշտին։