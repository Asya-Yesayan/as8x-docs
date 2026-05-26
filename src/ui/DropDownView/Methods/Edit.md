---
title: Edit
parent: "Մեթոդներ"
grand_parent: "DropDownView"
---

# DropDownView.Edit(ref string value, ref string comment, Window owner, double top, double left) մեթոդ

## Նկարագիր

**Դաս՝** [DropDownView](../DropDownView.md)

```c#
public virtual bool Edit(ref string value,
                        ref string comment,
                        Window owner,
                        double top,
                        double left)
```

Սահմանում է DropDownView-ի «Խմբագրել» կոճակի կատարման արդյունքում բացվող պատուհանը։

«Խմբագրել» կոճակի վարքագիծը կարգավորվում է [EditSupported](../Properties/EditSupported.md) և [EditEnabled](../Properties/EditEnabled.md) հատկությունների միջոցով։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- |
| value | string | - | Խմբագրվող տողի «Կոդ» սյան արժեքը։  |
| comment | string | - | Խմբագրվող տողի «Անվանում» սյան արժեքը։  |
| owner | Window | - | Գործողությունը բացող պատուհանը։ |
| top | double | - | Popup պատուհանի վերին կողմի կոորդինատը էկրանի նկատմամբ։ |
| left | double | - | Popup պատուհանի ձախ կողմի կոորդինատը էկրանի նկատմամբ։ |
