---
title: GetControlValue
parent: "Մեթոդներ"
grand_parent: "DocumentPanel"
---

# DocumentPanel&lt;T&gt;.GetControlValue(Control) մեթոդ

## Նկարագիր

**Դաս՝** [DocumentPanel](../DocumentPanel.md)

```c#
protected virtual object GetControlValue(Control control)
```

Սահմանում է տրված դաշտի ընթացիկ արժեքը ստանալու գործողությունները։

Մեթոդը չմշակելու դեպքում արժեքը վերադարձվում է ըստ դաշտի կոնկրետ տիպի՝ **TextEditExt**, **ButtonEditExt**, **DropDownControl**, **DateEditControl**, **TimeEditControl**, **NumericEditControl**, **CheckEditExt**, **MultiSelectDropDownControl**, **DropDownCommentControl**, **TreeDropDownControl**, **ComboBoxEditExt**, **NumPairControl**, **MemoEditControl**, **SimpleDropDown**, **ImageEditExt**, **MonthYearControl**, **MultiSelectTreeDropDownControl** կամ **BrowsePathEditExt**։

Չմշակվող դաշտի տիպի դեպքում առաջանում է **NotImplementedException** տիպի սխալ։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- |
| control | Control | - | Դաշտը, որի արժեքը պետք է վերադարձվի։ |

**Վերադարձնում է**

Դաշտի ընթացիկ արժեքը։
