---
title: AfterLoadValues
nav_exclude: true
---

# DialogWindow.AfterLoadValues() մեթոդ

## Նկարագիր

**Դաս՝** [DialogWindow](../DialogWindow.md)

```c#
public virtual void AfterLoadValues();
```

Կանչվում է երկխոսության պատուհանի դաշտերի արժեքների բեռնման ավարտից հետո։ 

## Օրինակ

```c#
// Սահմանում է արժեքների բեռնման ավարտից հետո կատարվող գործողությունները
public override void AfterLoadValues()
{
    base.AfterLoadValues();

    // արժեքների բեռնումից հետո ֆոկուսը սահմանում է «code» դաշտի վրա
    SetFocus(GetControl("code"));
}
```
