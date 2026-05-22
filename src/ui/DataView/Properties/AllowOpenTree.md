---
title: AllowOpenTree
parent: "Հատկություններ"
grand_parent: "DataView"
---

# DataView.AllowOpenTree հատկություն

## Նկարագիր

**Դաս՝** [DataView](../DataView.md)

```c#
public virtual bool AllowOpenTree { get; }
```

Սահմանում է դիտելու ձևի ընթացիկ տողի ծառային ներկայացումը բացելու իրավասությունը։ Հատկության լռությամբ արժեքը false է։

Հատկության true արժեքի դեպքում ծրագրի Toolbar-ի **«Բացել ծառի տեսքով»** կոճակը , «Թղթապանակ» -> **«Բացել ծառի տեսքով»** կոնտեքստային ֆունկցիան կանչելիս ցուցադրվում է ընթացիկ տողի ծառատիպ ներկայացումը, որը սահմանվում է [OpenTree](../Methods/OpenTree.md) մեթոդի միջոցով։

![Open_Tree_Button](../../images/DataView/Open_Tree_Button.png)

![Open_Tree_Function](../../images/DataView/Open_Tree_Function.png)