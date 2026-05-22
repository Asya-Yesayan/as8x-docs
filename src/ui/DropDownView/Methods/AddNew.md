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

Սահմանում է բացվող ցուցակի դիտելու ձևից նոր արժեքի ավելացման գործողությունը։

Մեթոդը չմշակելու դեպքում առաջանում է **NotImplementedException** տիպի սխալ։

Գործողության հասանելիությունը կարգավորվում է [AddNewSupported](../Properties/AddNewSupported.md) և [AddNewEnabled](../Properties/AddNewEnabled.md) հատկությունների միջոցով։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- |
| value | string | - | Ավելացվող արժեքի կոդը։ Գործողության ավարտից հետո կարող է փոփոխվել ավելացված արժեքով։ |
| comment | string | - | Ավելացվող արժեքի մեկնաբանությունը։ Գործողության ավարտից հետո կարող է փոփոխվել։ |
| owner | Window | - | Գործողությունը բացող պատուհանը։ |
| top | double | - | Popup պատուհանի վերին կողմի կոորդինատը էկրանի նկատմամբ։ |
| left | double | - | Popup պատուհանի ձախ կողմի կոորդինատը էկրանի նկատմամբ։ |

**Վերադարձնում է**

**true**, եթե նոր արժեքը հաջողությամբ ավելացվել է, հակառակ դեպքում՝ **false**։
