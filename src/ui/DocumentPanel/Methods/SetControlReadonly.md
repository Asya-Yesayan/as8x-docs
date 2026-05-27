---
title: SetControlReadonly
parent: "Մեթոդներ"
grand_parent: "DocumentPanel"
---

# DocumentPanel&lt;T&gt;.SetControlReadonly մեթոդ

## Գերբեռնումներ

| Անվանում | Նկարագրություն |
|----------|----------------|
| [SetControlReadonly(bool, Control)](#documentpanelsetcontrolreadonlybool-control-մեթոդ) | Սահմանում է տրված դաշտի readOnly վիճակի փոփոխությունը։ |
| [SetControlReadonly(bool, string)](#documentpanelsetcontrolreadonlybool-string-մեթոդ) | Սահմանում է տրված ներքին անունով դաշտի readOnly վիճակի փոփոխությունը։ |

### DocumentPanel.SetControlReadonly(bool, Control) մեթոդ

**Դաս՝** [DocumentPanel](../DocumentPanel.md)

```c#
protected virtual void SetControlReadonly(bool value,
                                          Control control)
```

Սահմանում է տրված դաշտի readOnly վիճակի փոփոխությունը։

Մեթոդը չմշակելու դեպքում դաշտի **IsReadOnly** հատկության արժեքը նշանակվում է ըստ տրված արժեքի՝ ճանաչված դաշտի կոնկրետ տիպի համար (**TextEditExt**, **ButtonEditExt**, **DropDownControl**, **DateEditControl**, **TimeEditControl**, **NumericEditControl**, **CheckEditExt** և այլն)։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- |
| value | bool | - | **true** արժեքի դեպքում դաշտը դառնում է readOnly, **false** արժեքի դեպքում՝ խմբագրման համար հասանելի։ |
| control | Control | - | Դաշտը, որի վիճակը պետք է փոփոխվի։ |

### DocumentPanel.SetControlReadonly(bool, string) մեթոդ

**Դաս՝** [DocumentPanel](../DocumentPanel.md)

```c#
protected virtual void SetControlReadonly(bool value,
                                          string name)
```

Սահմանում է տրված ներքին անունով դաշտի readOnly վիճակի փոփոխությունը։

Մեթոդը չմշակելու դեպքում փոխանցվում է [SetControlReadonly(bool, Control)](#documentpanelsetcontrolreadonlybool-control-մեթոդ) մեթոդին՝ գտնված դաշտով։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- |
| value | bool | - | **true** արժեքի դեպքում դաշտը դառնում է readOnly, **false** արժեքի դեպքում՝ խմբագրման համար հասանելի։ |
| name | string | - | Դաշտի ներքին անունը։ |
