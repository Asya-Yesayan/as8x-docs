---
title: OrderBy
nav_exclude: true
---

# IGrid.OrderBy մեթոդ

## Գերբեռնումներ

| Անվանում | Նկարագրություն |
|--|--|
| [OrderBy(string, bool, Func&lt;IGridRow, string, object&gt;)](#igridorderbystring-bool-funcigridrow-string-object-մեթոդ) | Մեթոդը նախատեսված է աղյուսակի տողերը դասավորելու համար՝ նշված սյան արժեքների հիման վրա։ |
| [OrderBy(IEnumerable&lt;(string ColumnName, bool Descending)&gt;, Func&lt;IGridRow, string, object&gt;)](#igridorderbyienumerablestring-columnname-bool-descending-funcigridrow-string-object-մեթոդ) | Մեթոդը նախատեսված է աղյուսակի տողերը դասավորելու համար՝ նշված սյան արժեքների հիման վրա։ |

### IGrid.OrderBy(string, bool, Func<IGridRow, string, object>) մեթոդ

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

### IGrid.OrderBy(IEnumerable<(string ColumnName, bool Descending)>, Func<IGridRow, string, object>) մեթոդ

```c#
public void OrderBy(IEnumerable<(string ColumnName, bool Descending)> columnsInfos, Func<IGridRow, string, object> valueSelector = null);
```

Մեթոդը նախատեսված է աղյուսակի տողերը դասավորելու համար՝ նշված սյան արժեքների հիման վրա։

**Պարամետրեր**

| Անվանում        | Տվյալների տիպ                                                   | Լռությամբ արժեք | Նկարագրություն |
|-----------------|------------------------------------------------------------------|----------------|---------------|
| columnsInfos    | IEnumerable<(string ColumnName, bool Descending)>               | —              | Սյուների ներքին անունների/դասավորման կարգերի (աճման կամ նվազման կարգ) ցուցակ, որի հիման վրա պետք է դասավորվեն աղյուսակի տողերը։ |
| valueSelector   | Func<IGridRow, string, object>                                  | null           | Delegate, որը ընդունում է աղյուսակի տողի նկարագրությունը, սյան ներքին անունը ու վերադարձնում է արժեք, ըստ որի պետք է դասավորվի սյունը: |
