---
title: SetControlsReadonlyExcept
parent: "Մեթոդներ"
grand_parent: "DocumentPanel"
---

# DocumentPanel&lt;T&gt;.SetControlsReadonlyExcept(bool, string[]) մեթոդ

## Նկարագիր

**Դաս՝** [DocumentPanel](../DocumentPanel.md)

```c#
protected virtual void SetControlsReadonlyExcept(bool value,
                                                 params string[] suppressFor)
```

Սահմանում է բոլոր դաշտերի readOnly վիճակի փոփոխությունը՝ բացառությամբ տրված ներքին անուններով դաշտերի։

Մեթոդը չմշակելու դեպքում տվյալների աղբյուրի հետ կապված բոլոր դաշտերի **IsReadOnly** հատկության արժեքը նշանակվում է ըստ տրված արժեքի, բացառությամբ **suppressFor** ցուցակում ընդգրկված դաշտերի։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- |
| value | bool | - | **true** արժեքի դեպքում դաշտերը դառնում են readOnly, **false** արժեքի դեպքում՝ խմբագրման համար հասանելի։ |
| suppressFor | string[] | - | Փոփոխությունից բացառվող դաշտերի ներքին անունների ցուցակը։ |
