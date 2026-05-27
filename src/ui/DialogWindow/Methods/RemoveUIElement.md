---
title: RemoveUIElement
nav_exclude: true
---

# DialogWindow.RemoveUIElement(string) մեթոդ

## Նկարագիր

**Դաս՝** [DialogWindow](../DialogWindow.md)

```c#
protected void RemoveUIElement(string name);
```

Երկխոսության պատուհանից հեռացնում է տրված ներքին անունով դաշտը։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
|----------|--------------|----------------|----------------|
| name | string | — | Հեռացվող դաշտի ներքին անունը։ |

## Օրինակ

```c#
// երկխոսության պատուհանից հեռացնում է «code» ներքին անունով դաշտը
RemoveUIElement("code");
```
