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

Սահմանում է DropDownView-ի ֆիլտրացված որոնման գործողությունը։

Մեթոդը չմշակելու դեպքում առաջանում է **NotImplementedException** տիպի սխալ։

Գործողության հասանելիությունը կարգավորվում է [FilteredSearchSupported](../Properties/FilteredSearchSupported.md) և [FilteredSearchEnabled](../Properties/FilteredSearchEnabled.md) հատկությունների միջոցով։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- |
| value | string | - | Որոնվող արժեքի կոդը։ Գործողության ավարտից հետո կարող է փոփոխվել ընտրված արժեքով։ |
| comment | string | - | Որոնվող արժեքի մեկնաբանությունը։ Գործողության ավարտից հետո կարող է փոփոխվել։ |
| owner | Window | - | Գործողությունը բացող պատուհանը։ |
| top | double | - | Popup պատուհանի վերին կողմի կոորդինատը էկրանի նկատմամբ։ |
| left | double | - | Popup պատուհանի ձախ կողմի կոորդինատը էկրանի նկատմամբ։ |

**Վերադարձնում է**

**true**, եթե որոնումը հաջողությամբ ավարտվել է և արժեքը ընտրվել է, հակառակ դեպքում՝ **false**։

**Օրինակ**

```c#
public override bool FilteredSearchSupported => true;

public override bool FilteredSearch(ref string value, ref string comment, Window owner, double top, double left)
{
    var dialog = new FilteredSearchWindow(this.SystemFilters)
    {
        Owner = owner,
        WindowStartupLocation = WindowStartupLocation.Manual,
        Left = left,
        Top = top
    };
    if ((bool)dialog.ShowDialog())
    {
        value = dialog.SelectedCode;
        comment = dialog.SelectedComment;
        return true;
    }
    return false;
}
```
