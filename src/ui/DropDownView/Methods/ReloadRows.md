---
title: ReloadRows
parent: "Մեթոդներ"
grand_parent: "DropDownView"
---

# DropDownView.ReloadRows(LoadSource source) մեթոդ

## Նկարագիր

**Դաս՝** [DropDownView](../DropDownView.md)

```c#
public void ReloadRows(LoadSource source = LoadSource.None)
```

Վերբեռնում է DropDownView-ի տողերը։

Մեթոդը մաքրում է տողերի ցուցակը, կրկին բեռնում է տողերը, ապա թարմացնում է [CodeDictionary](../Properties/CodeDictionary.md) Dictionary-ն՝ [CodeIsUnique](../Properties/CodeIsUnique.md) հատկության true արժեքի դեպքում։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- |
| source | LoadSource | LoadSource.None | Տողերի վերբեռնման աղբյուրը: |
