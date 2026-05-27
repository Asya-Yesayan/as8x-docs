---
title: BindHeight
nav_exclude: true
---

# DialogWindow.BindHeight(LayoutGroup, LayoutGroup) մեթոդ

## Նկարագիր

**Դաս՝** [DialogWindow](../DialogWindow.md)

```c#
public void BindHeight(LayoutGroup lgDestination, LayoutGroup lgSource);
```

Մի դասավորման խմբի (**lgDestination**) նվազագույն և առավելագույն բարձրությունները կապում է մյուս դասավորման խմբի (**lgSource**) փաստացի բարձրությանը։ Արդյունքում **lgDestination**-ի բարձրությունը հետևում է **lgSource**-ի բարձրությանը։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
|----------|--------------|----------------|----------------|
| lgDestination | LayoutGroup | — | Նպատակային դասավորման խումբը, որի բարձրությունը կապվում է աղբյուրին։ |
| lgSource | LayoutGroup | — | Աղբյուր դասավորման խումբը։ |