---
title: ToolTipItemsHandle
parent: "Մեթոդներ"
grand_parent: "DataView"
---

# DataView.ToolTipItemsHandle(IEnumerable<StoredValueInfo> items) մեթոդ

## Նկարագիր

**Դաս՝** [DataView](../DataView.md)

```c#
public virtual void ToolTipItemsHandle(IEnumerable<StoredValueInfo> items) }
```

Մշակում է `StoredValueInfo` արժեքները tooltip ցուցադրման համար:

Լռությամբ ոչինչ չի կատարում: Override-ի դեպքում կատարի tooltip customization:
Կոչվում է `ApplyToolTip`-ի կողմից:

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- |
| items | IEnumerable<StoredValueInfo> | - | Tooltip-ի համար մշակվող `StoredValueInfo` արժեքները: Կարող է լինել `null`: |

