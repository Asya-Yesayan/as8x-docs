---
title: LoadIndication
parent: "Հատկություններ"
grand_parent: "DataView"
---

# DataView.LoadIndication հատկություն

## Նկարագիր

**Դաս՝** [DataView](../DataView.md)

```c#
public virtual LoadIndication LoadIndication { get; }
```

Սահմանում է դիտելու ձևի կատարման պրոգրեսի ցուցադրման ռեժիմը։

* **LoadIndication.None** - Կատարման պրոգրեսը չի ցուցադրվում։
* **LoadIndication.Allways** - Կատարման պրոգրեսը ցուցադրվում է մոդալ պատուհանի միջոցով (ծրագրային ինտերֆեյսը դառնում է անհասանելի այլ գործողությունների համար)։
* **LoadIndication.AlwaysInside** - Կատարման պրոգրեսը ցուցադրվում է ոչ մոդալ պատուհանի միջոցով (ծրագրային ինտերֆեյսը մնում է հասանելի գործողությունների կատարման համար)։
