---
title: AddNew
parent: "Մեթոդներ"
grand_parent: "DropDownView"
---

# DropDownView.AddNew(ref string value, ref string comment, Window owner, double top, double left) մեթոդ

## Նկարագիր

**Դաս՝** [DropDownView](../DropDownView.md)

```c#
public virtual bool AddNew(ref string value,
                           ref string comment,
                           Window owner,
                           double top,
                           double left)
```

Սահմանում է DropDownView-ի «Ավելացնել» կոճակի կատարման արդյունքում բացվող պատուհանը։

«Ավելացնել» կոճակի վարքագիծը կարգավորվում է [AddNewSupported](../Properties/AddNewSupported.md), [AddNewEnabled](../Properties/AddNewEnabled.md) հատկությունների միջոցով։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- |
| value | string | - | Ավելացվող տողի «Կոդ» սյան արժեքը։  |
| comment | string | - | Ավելացվող տողի «Անվանում» սյան արժեքը։  |
| owner | Window | - | Գործողությունը բացող պատուհանը։ |
| top | double | - | Popup պատուհանի վերին կողմի կոորդինատը էկրանի նկատմամբ։ |
| left | double | - | Popup պատուհանի ձախ կողմի կոորդինատը էկրանի նկատմամբ։ |
