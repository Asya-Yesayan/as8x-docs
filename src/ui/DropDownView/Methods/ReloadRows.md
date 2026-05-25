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

Վերբեռնում է բացվող ցուցակի դիտելու ձևի տողերը։

Մեթոդը մաքրում է ներկայիս տողերի ցուցակը, կրկին բեռնում է տողերը ([Extension](../Properties/Extension.md) հատկության միջոցով, եթե այն նշանակված է), ապա թարմացնում է CodeDictionary Dictionary-ն [CodeIsUnique](../Properties/CodeIsUnique.md) հատկության true արժեքի դեպքում։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- |
| source | LoadSource | LoadSource.None | Տողերի վերբեռնման աղբյուրը (օրինակ՝ վերաբեռնման կոճակ կամ դիալոգ)։ |
