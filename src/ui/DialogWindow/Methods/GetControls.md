---
title: GetControls
nav_exclude: true
---

# DialogWindow.GetControls() մեթոդ

## Նկարագիր

**Դաս՝** [DialogWindow](../DialogWindow.md)

```c#
public IEnumerable<Control> GetControls();
```

Վերադարձնում է երկխոսության պատուհանի բոլոր դաշտերի ցուցակը։

## Օրինակ

```c#
// անցնում է երկխոսության պատուհանի բոլոր դաշտերով և ստանում դաշտերի արժեքները
foreach (var control in GetControls())
{
    var value = GetControlValue(control);
}
```
