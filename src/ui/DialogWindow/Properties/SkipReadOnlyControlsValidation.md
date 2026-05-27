---
title: SkipReadOnlyControlsValidation
nav_exclude: true
---

# DialogWindow.SkipReadOnlyControlsValidation հատկություն

## Նկարագիր

**Դաս՝** [DialogWindow](../DialogWindow.md)

```c#
protected virtual bool SkipReadOnlyControlsValidation { get; }
```

Սահմանում է, արդյոք վալիդացիան անտեսվում է readonly դաշտերի համար։ 

## Օրինակ

```c#
// ժառանգ դասում միացնում է readonly դաշտերի վալիդացիայի անտեսումը
protected override bool SkipReadOnlyControlsValidation => true;
```
