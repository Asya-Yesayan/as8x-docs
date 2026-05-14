---
title: AddVerticalLayoutGroup
nav_exclude: true
---

# DialogWindow.AddVerticalLayoutGroup(LayoutGroup, LayoutGroupView, string) մեթոդ

## Նկարագիր

**Դաս՝** [DialogWindow](../DialogWindow.md)

```c#
public LayoutGroup AddVerticalLayoutGroup(LayoutGroup container = null,
                                          LayoutGroupView view = LayoutGroupView.Group,
                                          string header = "");
```

Երկխոսության պատուհանում (կամ նշված դասավորման խմբում) ավելացնում է ուղղահայաց դասավորմամբ դասավորման խումբ։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
|----------|--------------|----------------|----------------|
| container | LayoutGroup | null | Ծնող դասավորման խումբը։ Եթե **null** է, խումբը ավելացվում է երկխոսության պատուհանի հիմնական դասավորման խմբում։ |
| view | LayoutGroupView | LayoutGroupView.Group | Դասավորման խմբի ցուցադրման ձևը։ |
| header | string | "" | Դասավորման խմբի վերնագիրը։ Դատարկ տողի դեպքում վերնագիրը չի ցուցադրվում։ |
