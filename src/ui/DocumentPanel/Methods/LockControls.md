---
title: LockControls
parent: "Մեթոդներ"
grand_parent: "DocumentPanel"
---

# DocumentPanel&lt;T&gt;.LockControls(bool) մեթոդ

## Նկարագիր

**Դաս՝** [DocumentPanel](../DocumentPanel.md)

```c#
public void LockControls(bool lockUserDefinedFields = false)
```

Բոլոր դաշտերը դարձնում է readOnly։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- |
| lockUserDefinedFields | bool | false | **true** արժեքի դեպքում readOnly են դարձվում նաև օգտագործողի կողմից սահմանված դաշտերը, հակառակ դեպքում՝ բոլորը։ |
