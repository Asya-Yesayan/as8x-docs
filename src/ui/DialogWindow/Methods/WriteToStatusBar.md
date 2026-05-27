---
title: WriteToStatusBar
nav_exclude: true
---

# DialogWindow.WriteToStatusBar(string) մեթոդ

## Նկարագիր

**Դաս՝** [DialogWindow](../DialogWindow.md)

```c#
public void WriteToStatusBar(string msg);
```

Երկխոսության պատուհանի կարգավիճակի տողում գրում է տրված հաղորդագրությունը։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
|----------|--------------|----------------|----------------|
| msg | string | — | Ցուցադրվող հաղորդագրությունը։ |

## Օրինակ

```c#
// երկխոսության պատուհանի status bar-ում ցուցադրում է հաղորդագրություն
WriteToStatusBar("Տվյալները պահպանված են");
```
