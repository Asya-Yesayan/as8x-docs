---
title: BindWidth
nav_exclude: true
---

# DialogWindow.BindWidth(LayoutGroup, LayoutGroup) մեթոդ

## Նկարագիր

**Դաս՝** [DialogWindow](../DialogWindow.md)

```c#
public void BindWidth(LayoutGroup lgDestination, LayoutGroup lgSource);
```

Մի դասավորման խմբի (**lgDestination**) նվազագույն և առավելագույն լայնությունները կապում է մյուս դասավորման խմբի (**lgSource**) փաստացի լայնությանը։ Արդյունքում **lgDestination**-ի լայնությունը հետևում է **lgSource**-ի լայնությանը։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
|----------|--------------|----------------|----------------|
| lgDestination | LayoutGroup | — | Նպատակային դասավորման խումբը, որի լայնությունը կապվում է աղբյուրին։ |
| lgSource | LayoutGroup | — | Աղբյուր դասավորման խումբը։ |
