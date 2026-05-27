---
title: CreateBrowseParametersInfo
nav_exclude: true
---

# DialogWindow.CreateBrowseParametersInfo() մեթոդ

## Նկարագիր

**Դաս՝** [DialogWindow](../DialogWindow.md)

```c#
public Dictionary<string, object> CreateBrowseParametersInfo();
```

Ձևավորում և վերադարձնում է երկխոսության պատուհանի դաշտերի ընթացիկ արժեքների բառարան, որտեղ բանալին դաշտի ներքին անունն է, իսկ արժեքը՝ դաշտի ընթացիկ արժեքը։ Ստացված Dictionary-ն պահպանվում է երկխոսության պատուհանի ներսում և կարող է հետագայում օգտագործվել [LoadBrowseParametersInfo](LoadBrowseParametersInfo.md) մեթոդով։

## Օրինակ

```c#
// ձևավորում է երկխոսության պատուհանի դաշտերի ընթացիկ արժեքների Dictionary-ն
Dictionary<string, object> parameters = CreateBrowseParametersInfo();

// հետագայում նույն արժեքները կարող են վերականգնվել
LoadBrowseParametersInfo(parameters);
```
