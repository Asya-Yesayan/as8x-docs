---
title: FilteredSearch
parent: "Մեթոդներ"
grand_parent: "DropDownView"
---

# DropDownView.FilteredSearch(ref string value, ref string comment, Window owner, double top, double left) մեթոդ

## Նկարագիր

**Դաս՝** [DropDownView](../DropDownView.md)

```c#
public virtual bool FilteredSearch(ref string value,
                                  ref string comment,
                                  Window owner,
                                  double top,
                                  double left)
```

Սահմանում է DropDownView-ի «Որոնել» (ֆիլտրացված որոնում) կոճակի կատարման արդյունքում բացվող պատուհանը։

«Որոնել» (ֆիլտրացված որոնում) կոճակի վարքագիծը կարգավորվում է [FilteredSearchSupported](../Properties/FilteredSearchSupported.md), [FilteredSearchEnabled](../Properties/FilteredSearchEnabled.md) հատկությունների միջոցով։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- |
| value | string | - | Որոնվող արժեքի կոդը։  |
| comment | string | - | Որոնվող արժեքի անվանումը։ |
| owner | Window | - | Գործողությունը բացող պատուհանը։ |
| top | double | - | Popup պատուհանի վերին կողմի կոորդինատը էկրանի նկատմամբ։ |
| left | double | - | Popup պատուհանի ձախ կողմի կոորդինատը էկրանի նկատմամբ։ |
