---
title: ToolTipItemsHandle
parent: "Մեթոդներ"
grand_parent: "DataView"
---

# DataView.ToolTipItemsHandle(IEnumerable<StoredValueInfo> items) մեթոդ

## Նկարագիր

**Դաս՝** [DataView](../DataView.md)

```c#
public virtual void ToolTipItemsHandle(IEnumerable<StoredValueInfo> items)
```

Նախատեսված է tooltip-ում ցուցադրվող պահպանվող արժեքների մշակման համար։

Մեթոդը չմշակելու դեպքում ոչ մի գործողություն չի կատարվում։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- |
| items | IEnumerable<StoredValueInfo> | - | tooltip-ի համար մշակվող պահպանվող արժեքները։ Կարող է լինել null։ |
