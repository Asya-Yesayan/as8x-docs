---
title: SetControlValue
parent: "Մեթոդներ"
grand_parent: "DocumentPanel"
---

# DocumentPanel&lt;T&gt;.SetControlValue(Control, object) մեթոդ

## Նկարագիր

**Դաս՝** [DocumentPanel](../DocumentPanel.md)

```c#
protected virtual void SetControlValue(Control control,
                                       object value)
```

Սահմանում է տրված դաշտին արժեք վերագրելու գործողությունները։

Մեթոդը չմշակելու դեպքում արժեքը վերագրվում է ըստ դաշտի կոնկրետ տիպի՝ **TextEditExt**, **ButtonEditExt**, **DropDownControl**, **DateEditControl**, **TimeEditControl**, **NumericEditControl**, **CheckEditExt**, **MultiSelectDropDownControl**, **DropDownCommentControl**, **TreeDropDownControl**, **ComboBoxEditExt**, **NumPairControl**, **MemoEditControl**, **SimpleDropDown**, **DocumentGridControl**, **ImageEditExt** կամ **BrowsePathEditExt**։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- |
| control | Control | - | Դաշտը, որին պետք է վերագրվի արժեքը։ |
| value | object | - | Վերագրվող արժեքը։ |
