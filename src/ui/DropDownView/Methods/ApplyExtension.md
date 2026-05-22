---
title: ApplyExtension
parent: "Մեթոդներ"
grand_parent: "DropDownView"
---

# DropDownView.ApplyExtension(bool applyColumnsActivationConditions) մեթոդ

## Նկարագիր

**Դաս՝** [DropDownView](../DropDownView.md)

```c#
public void ApplyExtension(bool applyColumnsActivationConditions = true)
```

Կիրառում է բացվող ցուցակի դիտելու ձևին կցված ընդլայնումը ([Extension](../Properties/Extension.md))։

[Extension](../Properties/Extension.md) հատկության null արժեքի դեպքում ոչ մի գործողություն չի կատարվում։ Ընդլայնումը կիրառելուց առաջ Extension.DropDownView հատկությունը արժեքավորվում է ընթացիկ դիտելու ձևով։ ViewSource-ը DataSource չլինելու և տողերի արդեն բեռնված լինելու դեպքում կանչվում է ընդլայնման դինամիկ մշակիչը։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- |
| applyColumnsActivationConditions | bool | true | **true** արժեքի դեպքում կիրառվում են սյուների ակտիվացման պայմանները։ |
