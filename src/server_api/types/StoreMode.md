---
layout: page
title: "StoreMode" 
---

## Փաստաթղթի պահպանման ռեժիմը

Այս դասը նախատեսված է փաստաթղթի պահպանման ռեժիմի սահմանման համար։  
Տե՛ս [Document](../definitions/document.md).[StoreMode](../definitions/document/Properties/StoreMode.md) հատկությունը։


```c#
public enum StoreMode
{
    Draft = 0,
    StartProcessing = 1,
    ContinueProcessing = 2,
    SecondInput = 3,
    NotConfirmed = 4,
    Confirmed = 5,
    Import = 6
}
```

**Արժեքների բազմություն**

| Անվանում           | Արժեք | Նկարագրություն                                    |
| ------------------ | ----- | ------------------------------------------------- |
| Draft              | 0     | Փաստաթուղթը պահվում է 0 վիճակով։                  |
| StartProcessing    | 1     | Փաստաթուղթը պահվում է և սկսվում է անցումը 0-ից 1։ |
| ContinueProcessing | 2     | Փաստաթուղթը պահվում է և շարունակվում գործընթացը։  |
| SecondInput        | 3     | Փաստաթղթի կրկնակի մուտքագրում։                    |
| NotConfirmed       | 4     | Փաստաթուղթը մերժվել է։                            |
| Confirmed          | 5     | Փաստաթուղթը վավերացվում է։                        |
| Import             | 6     | Փաստաթղթի ներմուծում։                             |
