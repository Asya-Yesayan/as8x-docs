---
title: LockControlsExcept
parent: "Մեթոդներ"
grand_parent: "DocumentPanel"
---

# DocumentPanel&lt;T&gt;.LockControlsExcept(bool, string[]) մեթոդ

## Նկարագիր

**Դաս՝** [DocumentPanel](../DocumentPanel.md)

```c#
public void LockControlsExcept(bool lockUserDefinedFields = false,
                               params string[] suppressFor)
```

Բոլոր դաշտերը դարձնում է միայն կարդալու՝ բացառությամբ տրված ներքին անուններով դաշտերի։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- |
| lockUserDefinedFields | bool | false | **true** արժեքի դեպքում միայն կարդալու են դարձվում նաև օգտագործողի կողմից սահմանված դաշտերը, **false** արժեքի դեպքում՝ ոչ։ |
| suppressFor | string[] | — | Միայն կարդալու վիճակի փոփոխությունից բացառվող դաշտերի ներքին անունների ցուցակը։ |
