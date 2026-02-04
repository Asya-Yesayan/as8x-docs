---
layout: page
title: "NotificationType enum" 
nav_exclude: true
---

# NotificationType enum

## Առաջադրանքի ծանուցման եղանակը

Այս enum նախատեսված է առաջադրանքի ծանուցման եղանակի սահմանման համար։ 

```c#
public enum NotificationType
{
    None = 0,
    Email = 1
}
```

**Արժեքների բազմություն**

| Անվանում           | Արժեք | Նկարագրություն          |
| ------------------ | ----- | ------------------------|
| None               | 0     | Առանց ծանուցում։    |
| Email              | 1     | Էլեկտրոնային փոստով։ |