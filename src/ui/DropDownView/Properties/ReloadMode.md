---
title: ReloadMode
parent: "Հատկություններ"
grand_parent: "DropDownView"
---

# DropDownView.ReloadMode հատկություն

## Նկարագիր

**Դաս՝** [DropDownView](../DropDownView.md)

```c#
public virtual ReloadMode ReloadMode { get; }
```

Սահմանում է բացվող ցուցակի դիտելու ձևի տողերի թարմացման ռեժիմը։

Հատկությունը չմշակելու դեպքում ViewSource-ը SmartEnum լինելու դեպքում վերադարձնում է ReloadMode.None, հակառակ դեպքում՝ ReloadMode.Reloadable։

**Արժեք**

- **None** — տողերի վերբեռնումը չի կատարվում ավտոմատ։
- **ReloadAlways** — տողերը միշտ վերբեռնվում են։
- **Reloadable** — տողերը կարող են վերբեռնվել, երբ դա պահանջվում է։

**Օրինակ**

```c#
public override ReloadMode ReloadMode => ReloadMode.None;
```
