---
title: "TimeoutType enum"
---

Այս enum-ը նախատեսված է Sql հարցումների կատարման առավելագույն ժամանակի սահմանման համար։

```c#
public enum TimeoutType
{
    QueryTimeout,
    DsQueryTimeout
}
```

**Արժեքների բազմություն**

* `QueryTimeout` - Որպես հարցումների կատարման առավելագույն ժամանակ վերցվում է [սեսսիայի](../types/SessionInfo.md) **QueryTimeout** հատկության արժեքը (լռությամբ 30 վրկ)։
* `DsQueryTimeout` - Որպես տվյալների աղբյուրի հարցման կատարման առավելագույն ժամանակ վերցվում է [սեսսիայի](../types/SessionInfo.md) **DsQueryTimeout** հատկության արժեքը (լռությամբ 300 վրկ)։
