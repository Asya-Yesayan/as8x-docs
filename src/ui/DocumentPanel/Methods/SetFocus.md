---
title: SetFocus
parent: "Մեթոդներ"
grand_parent: "DocumentPanel"
---
# DocumentPanel&lt;T&gt;.SetFocus(Control, bool) մեթոդ
## Նկարագիր
**Դաս՝** [DocumentPanel](../DocumentPanel.md)
```c#
protected void SetFocus(Control focusableControl,
                        bool selectAll = true)
```
Ֆոկուսը տեղափոխում է տրված դաշտի վրա՝ տրված ընտրելով դրա ամբողջական բովանդակությունը։ Ֆոկուսավորման տրամաբանությունը կիրառվում է ըստ դաշտի կոնկրետ տիպի (**DropDownControl**, **DateEditControl**, **NumericEditControl**, **CheckEditExt**, **MultiSelectDropDownControl**, **DropDownCommentControl**, **TreeDropDownControl**, **ComboBoxEditExt**, **NumPairControl**, **ButtonEditExt**, **TimeEditControl**, **MemoEditControl**, **SimpleDropDown**, **ImageEditExt**, **TextEditExt**, **DXTabItem** կամ **DocumentGridControl**)։ Ճանաչված տիպի բացակայության դեպքում կանչվում է դաշտի ստանդարտ **Focus** մեթոդը։ **null** **focusableControl** արժեքի դեպքում մեթոդը որևէ գործողություն չի կատարում։

**Պարամետրեր**
| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- |
| focusableControl | Control | — | Դաշտը, որի վրա պետք է տեղափոխվի ֆոկուսը։ |
| selectAll | bool | true | **true** արժեքի դեպքում դաշտի ամբողջական բովանդակությունը ընտրվում է, **false** արժեքի դեպքում՝ ոչ։ |
