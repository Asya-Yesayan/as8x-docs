---
title: "DocumentLockMode enum" 
---

Այս enum-ը նախատեսված է փաստաթղթի [բեռնման](../services/IDocumentService/Load.md) ժամանակ տվյալների պահոցում կիրառվող արգելափակման (lock) ռեժիմի սահմանման համար։

```c#
public enum DocumentLockMode
{
    ReadLock = 0,
    ChangeTS = 1,
    UpdateLock = 2,
    ExclusiveLock = 3
}
```

**Արժեքների բազմություն**

* `ReadLock` - Փաստաթղթի տվյալների ստացման Sql հարցումը կատարվում է READ COMMITTED իզոլացման մակարդակով և ROWLOCK արգելափակման (lock) ռեժիմով։
* `ChangeTS` - Փաստաթղթի տվյալների ստացման Sql հարցումը կատարվում է Sql server-ի լռությամբ կարգավորումներով։
* `UpdateLock` - Փաստաթղթի տվյալների ստացման Sql հարցումը կատարվում է ROWLOCK և UPDLOCK արգելափակման (lock) ռեժիմներով։
* `ExclusiveLock` - Փաստաթղթի տվյալների ստացման Sql հարցումը կատարվում է ROWLOCK և XLOCK արգելափակման (lock) ռեժիմներով։
