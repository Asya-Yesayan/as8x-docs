---
title: HasControls
nav_exclude: true
---

# DialogWindow.HasControls() մեթոդ

## Նկարագիր

**Դաս՝** [DialogWindow](../DialogWindow.md)

```c#
protected internal bool HasControls();
```

Վերադարձնում է **true**, եթե երկխոսության պատուհանում առկա է գոնե մեկ դաշտ, հակառակ դեպքում՝ **false**։

## Օրինակ

```c#
// եթե երկխոսության պատուհանում արդեն կան դաշտեր, ավելացնում է բաժանարար գիծ
if (HasControls())
{
    AddLine();
}
```

