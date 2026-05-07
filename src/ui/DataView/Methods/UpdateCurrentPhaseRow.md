---
title: UpdateCurrentPhaseRow
parent: "Մեթոդներ"
grand_parent: "DataView"
---

# DataView.UpdateCurrentPhaseRow(int row) մեթոդ

## Նկարագիր

**Դաս՝** [DataView](../DataView.md)

```c#
protected void UpdateCurrentPhaseRow(int row)
```

Թարմացնում է ընթացիկ progress փուլի row count-ը:

Նախապայման: `SupportShowProgress` պետք է `true` լինի:
Progress UI-ն թարմացվում է ըստ `LoadIndication`:

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- |
| row | int | - | Նոր row count արժեքը: Ոչ-բացասական: |

