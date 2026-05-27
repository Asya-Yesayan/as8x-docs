---
title: LoadStoredValues
nav_exclude: true
---

# DialogWindow.LoadStoredValues հատկություն

## Նկարագիր

**Դաս՝** [DialogWindow](../DialogWindow.md)

```c#
public bool LoadStoredValues { get; set; }
```

Վերադարձնում կամ նշանակում է դաշտերի պահպանված արժեքները բեռնելու հատկանիշը։ **true** արժեքի դեպքում երկխոսության պատուհանի բացման ժամանակ պահպանված արժեքները բեռնվում են դաշտերում։ Մոդալ պատուհանների համար լռությամբ **true** է, ոչ մոդալների համար՝ **false**։

## Օրինակ

```c#
// թարմացման ռեժիմում անջատում է պահպանված արժեքների բեռնումը
this.LoadStoredValues = !isRefresh;
```
