---
title: SetFocusOnActivation
nav_exclude: true
---

# DialogWindow.SetFocusOnActivation հատկություն

## Նկարագիր

**Դաս՝** [DialogWindow](../DialogWindow.md)

```c#
public Control SetFocusOnActivation { get; set; }
```

Վերադարձնում կամ նշանակում է այն դաշտը, որի վրա կտեղադրվի մուտքագրման ֆոկուսը՝ երկխոսության պատուհանի առաջին ակտիվացման ժամանակ։ 

Լռությամբ ֆոկուսը տեղափոխվում է երկխոսության պատուհանին առաջինը ավելացված դաշտին։

## Օրինակ

```c#
// ստեղծում է դաշտը և սահմանում, որ ակտիվացման ժամանակ ֆոկուսը տեղադրվի դրա վրա
var codeEdit = AddTextEdit("code", "Կոդ", 50);
this.SetFocusOnActivation = codeEdit;
```