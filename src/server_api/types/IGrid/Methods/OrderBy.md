---
title: OrderBy
nav_exclude: true
---

# IGrid.OrderBy(string, bool, Func<IGridRow, string, object>) մեթոդ

```c#
public void OrderBy(string column, bool descending = false, Func<IGridRow, string, object> valueSelector = null);
```

Մեթոդը նախատեսված է աղյուսակի տողերը դասավորելու համար՝ նշված սյան արժեքների հիման վրա։

**Պարամետրեր**

| Անվանում        | Տվյալների տիպ                          | Լռությամբ արժեք | Նկարագրություն |
|-----------------|----------------------------------------|----------------|---------------|
| column          | string                                 | —              | Սյան ներքին անունը, որի հիման վրա պետք է դասավորվեն աղյուսակի տողերը։ |
| descending      | bool                                   | false          | Դասավորման կարգը։ **true** արժեքի դեպքում դասավորումը կատարվում է նվազման (descending) կարգով, հակառակ դեպքում՝ աճման (ascending) կարգով։ |
| valueSelector   | Func<IGridRow, string, object>         | null           | Delegate, որը ընդունում է աղյուսակի տողի նկարագրությունը, սյան ներքին անունը ու վերադարձնում է արժեք, ըստ որի պետք է դասավորվի սյունը: |
