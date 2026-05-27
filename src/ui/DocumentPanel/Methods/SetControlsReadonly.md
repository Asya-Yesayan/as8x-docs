---
title: SetControlsReadonly
parent: "Մեթոդներ"
grand_parent: "DocumentPanel"
---

# DocumentPanel&lt;T&gt;.SetControlsReadonly մեթոդ

## Գերբեռնումներ

| Անվանում | Նկարագրություն |
|----------|----------------|
| [SetControlsReadonly(bool)](#documentpanelsetcontrolsreadonlybool-մեթոդ) | Սահմանում է փաստաթղթի բոլոր դաշտերի միայն readOnly վիճակի փոփոխությունը։ |
| [SetControlsReadonly(bool, Control[])](#documentpanelsetcontrolsreadonlybool-control-մեթոդ) | Սահմանում է տրված դաշտերի միայն readOnly վիճակի փոփոխությունը։ |
| [SetControlsReadonly(bool, string[])](#documentpanelsetcontrolsreadonlybool-string-մեթոդ) | Սահմանում է տրված ներքին անուններով դաշտերի միայն readOnly վիճակի փոփոխությունը։ |

### DocumentPanel.SetControlsReadonly(bool) մեթոդ

**Դաս՝** [DocumentPanel](../DocumentPanel.md)

```c#
protected virtual void SetControlsReadonly(bool value)
```

Սահմանում է փաստաթղթի բոլոր դաշտերի միայն readOnly վիճակի փոփոխությունը։

Մեթոդը չմշակելու դեպքում տվյալների աղբյուրի հետ կապված բոլոր դաշտերի **IsReadOnly** հատկության արժեքը նշանակվում է ըստ տրված արժեքի՝ [SetControlReadonly](SetControlReadonly.md) մեթոդի միջոցով։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- |
| value | bool | - | **true** արժեքի դեպքում բոլոր դաշտերը դառնում են միայն կարդալու, **false** արժեքի դեպքում՝ խմբագրման համար հասանելի։ |

### DocumentPanel.SetControlsReadonly(bool, Control[]) մեթոդ

**Դաս՝** [DocumentPanel](../DocumentPanel.md)

```c#
protected virtual void SetControlsReadonly(bool value,
                                           params Control[] controls)
```

Սահմանում է տրված դաշտերի միայն readOnly վիճակի փոփոխությունը։

Մեթոդը չմշակելու դեպքում տրված դաշտերի վիճակը նշանակվում է ըստ տրված արժեքի՝ [SetControlReadonly](SetControlReadonly.md) մեթոդի միջոցով։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- |
| value | bool | - | **true** արժեքի դեպքում տրված դաշտերը դառնում են միայն կարդալու, **false** արժեքի դեպքում՝ խմբագրման համար հասանելի։ |
| controls | Control[] | - | Փոփոխման ենթակա դաշտերի ցուցակը։ |

### DocumentPanel.SetControlsReadonly(bool, string[]) մեթոդ

**Դաս՝** [DocumentPanel](../DocumentPanel.md)

```c#
protected virtual void SetControlsReadonly(bool value,
                                           params string[] names)
```

Սահմանում է տրված ներքին անուններով դաշտերի միայն readOnly վիճակի փոփոխությունը։

Մեթոդը չմշակելու դեպքում տրված ներքին անուններով դաշտերի վիճակը նշանակվում է ըստ տրված արժեքի՝ [SetControlReadonly](SetControlReadonly.md) մեթոդի միջոցով։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- |
| value | bool | - | **true** արժեքի դեպքում տրված դաշտերը դառնում են միայն կարդալու, **false** արժեքի դեպքում՝ խմբագրման համար հասանելի։ |
| names | string[] | - | Փոփոխման ենթակա դաշտերի ներքին անունների ցուցակը։ |
