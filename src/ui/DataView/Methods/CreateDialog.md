---
title: CreateDialog
parent: "Մեթոդներ"
grand_parent: "DataView"
---

# DataView.CreateDialog(bool isRefresh) մեթոդ

## Նկարագիր

**Դաս՝** [DataView](../DataView.md)

```c#
public virtual DataViewDialogWindow CreateDialog(bool isRefresh)
```

Ստեղծում է DataView-ի պարամետրային dialog-ը:

Կոչվում է `CreateExtendedDialog`-ի կողմից: Override-ն պետք է
`dialog.Extensions`-ը ՉՓոփոխի (կատարվում է caller-ի կողմից):

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- |
| isRefresh | bool | - | `true` → dialog-ը կբացվի թարմացման ռեժիմով (parameters pre-filled): `false` → dialog-ը կբացվի նախնական ռեժիմով: |

**Վերադարձնում է**

Լռությամբ `null`: Override-ի դեպքում՝ `DataViewDialogWindow` ինստանս:

