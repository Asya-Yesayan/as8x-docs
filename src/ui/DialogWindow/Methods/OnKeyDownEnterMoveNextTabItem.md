---
title: OnKeyDownEnterMoveNextTabItem
nav_exclude: true
---

# DialogWindow.OnKeyDownEnterMoveNextTabItem(object, KeyEventArgs) մեթոդ

## Նկարագիր

**Դաս՝** [DialogWindow](../DialogWindow.md)

```c#
public void OnKeyDownEnterMoveNextTabItem(object sender, KeyEventArgs e);
```

Մշակում է **Enter** ստեղնի սեղմումը էջի (tab) վրա, որպեսզի, եթե ֆոկուսը դեռևս չի տեղափոխվել էջի դաշտերի մեջ, այն տեղափոխվի հաջորդ ֆոկուս ընդունող դաշտին։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
|----------|--------------|----------------|----------------|
| sender | object | — | Իրադարձության աղբյուրը (սպասվում է **DXTabItem**)։ |
| e | KeyEventArgs | — | Ստեղնի սեղմման իրադարձության արգումենտները։ |
