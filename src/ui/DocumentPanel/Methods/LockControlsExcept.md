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

Բոլոր դաշտերը դարձնում է readOnly՝ բացառությամբ տրված ներքին անուններով դաշտերի։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- |
| lockUserDefinedFields | bool | false | **true** արժեքի դեպքում readOnly են դարձվում նաև օգտագործողի կողմից սահմանված դաշտերը, հակառակ դեպքում՝ բոլորը։ |
| suppressFor | string[] | - | ReadOnly վիճակի փոփոխությունից բացառվող դաշտերի ներքին անունների ցուցակը։ |

