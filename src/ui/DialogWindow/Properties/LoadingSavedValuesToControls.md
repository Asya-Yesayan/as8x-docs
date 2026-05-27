---
title: LoadingSavedValuesToControls
nav_exclude: true
---

# DialogWindow.LoadingSavedValuesToControls հատկություն

## Նկարագիր

**Դաս՝** [DialogWindow](../DialogWindow.md)

```c#
public bool LoadingSavedValuesToControls { get; private set; }
```

Վերադարձնում է **true**, եթե ընթացիկ պահին երկխոսության պատուհանի դաշտերում բեռնվում են պահպանված արժեքները։

## Օրինակ

```c#
// պահպանված արժեքների բեռնման ընթացքում բաց է թողնում արժեքի փոփոխման մշակումը
if (LoadingSavedValuesToControls)
{
    return;
}
```
