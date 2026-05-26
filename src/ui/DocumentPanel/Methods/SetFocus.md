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

Ֆոկուսը տեղափոխում է տրված դաշտի վրա։ Ֆոկուսավորման տրամաբանությունը կախված է դաշտի տիպից (**DropDownControl**, **DateEditControl**, **NumericEditControl**, **CheckEditExt**, ․․․)։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- |
| focusableControl | Control | - | Դաշտը, որի վրա պետք է տեղափոխվի ֆոկուսը։ |
| selectAll | bool | true | **true** արժեքի դեպքում դաշտի ամբողջական բովանդակությունը ընտրվում է, հակառակ դեպքում՝ ոչ։ |
