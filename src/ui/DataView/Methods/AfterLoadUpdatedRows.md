---
title: AfterLoadUpdatedRows
parent: "Մեթոդներ"
grand_parent: "DataView"
---

# DataView.AfterLoadUpdatedRows(List<R> rows) մեթոդ

## Նկարագիր

**Դաս՝** [DataView](../DataView.md)

```c#
protected virtual void AfterLoadUpdatedRows(List<R> rows)
```

Կոչվում է `LoadUpdatedRows`-ի կողմից server-ից rows ստանալուց հետո:

Լռությամբ ոչինչ չի կատարում: Override-ի դեպքում կատարի post-processing:

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- |
| rows | List<R> | - | Server-ից ստացված թարմ rows-ը: |

