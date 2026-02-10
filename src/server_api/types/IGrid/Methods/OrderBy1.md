---
title: OrderBy
nav_exclude: true
---

# IGrid.OrderBy(IEnumerable<(string ColumnName, bool Descending)>, Func<IGridRow, string, object>) մեթոդ

```c#
public void OrderBy(IEnumerable<(string ColumnName, bool Descending)> columnsInfos, Func<IGridRow, string, object> valueSelector = null);
```

Մեթոդը նախատեսված է աղյուսակի տողերը դասավորելու համար՝ նշված սյան արժեքների հիման վրա։

**Պարամետրեր**

| Անվանում        | Տվյալների տիպ                                                   | Լռությամբ արժեք | Նկարագրություն |
|-----------------|------------------------------------------------------------------|----------------|---------------|
| columnsInfos    | IEnumerable<(string ColumnName, bool Descending)>               | —              | Սյուների ներքին անունների/դասավորման կարգերի (աճման կամ նվազման կարգ) ցուցակ, որի հիման վրա պետք է դասավորվեն աղյուսակի տողերը։ |
| valueSelector   | Func<IGridRow, string, object>                                  | null           | Delegate, որը ընդունում է աղյուսակի տողի նկարագրությունը, սյան ներքին անունը ու վերադարձնում է արժեք, ըստ որի պետք է դասավորվի սյունը: |
