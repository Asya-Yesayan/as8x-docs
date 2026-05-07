---
title: ReloadRows
parent: "Մեթոդներ"
grand_parent: "DataView"
---

# DataView.ReloadRows(LoadSource source) մեթոդ

## Նկարագիր

**Դաս՝** [DataView](../DataView.md)

```c#
public void ReloadRows(LoadSource source)
```

Ամբողջականորեն թարմացնում է Rows հավաքածուն՝ մաքրելով հին rows-ը և վերաբեռնելով:

Ի տարբերություն `LoadData()`-ի, այս մեթոդը սահմանում է `RowsLoaded=true`
ավարտին: Կիրառվում է panel-ի Refresh button-ի կողմից:

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- |
| source | LoadSource | - | Բեռնման աղբյուրը (`None` / `ReloadButton` / `ReloadDialog`): Փոխանցվում է `LoadRowsAndExtend`-ին: |

