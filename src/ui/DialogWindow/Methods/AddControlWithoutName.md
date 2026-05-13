---
title: AddControlWithoutName
nav_exclude: true
---

# DialogWindow.AddControlWithoutName(LayoutGroup, Control) մեթոդ

## Նկարագիր

**Դաս՝** [DialogWindow](../DialogWindow.md)

```c#
public static void AddControlWithoutName(LayoutGroup container, Control myControl);
```

Տրված դասավորման խմբին ավելացնում է դաշտը՝ առանց երկխոսության պատուհանի դաշտերի ներքին հավաքածուում գրանցելու։ Այս մեթոդը հարմար է, երբ դաշտը պետք է լինի միայն տեսանելի, բայց չհամարվի երկխոսության պատուհանի լիարժեք դաշտ։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
|----------|--------------|----------------|----------------|
| container | LayoutGroup | — | Դասավորման խումբը, որտեղ ավելացվում է դաշտը։ |
| myControl | Control | — | Ավելացվող դաշտը։ |
