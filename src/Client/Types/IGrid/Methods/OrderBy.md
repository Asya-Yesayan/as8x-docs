---
title: OrderBy
nav_exclude: true
---

# IGrid.OrderBy մեթոդ

## Գերբեռնումներ

| Անվանում | Նկարագրություն |
|--|--|
| [OrderBy(string, bool)](#igridorderbystring-bool-մեթոդ) | Մեթոդը նախատեսված է աղյուսակի տողերը դասավորելու համար՝ նշված սյան արժեքների հիման վրա։ |
| [OrderBy(IEnumerable&lt;(string ColumnName, bool Descending)&gt;)](#igridorderbyienumerablestring-columnname-bool-descending-մեթոդ) | Մեթոդը նախատեսված է աղյուսակի տողերը դասավորելու համար՝ նշված սյան արժեքների հիման վրա։ |

### IGrid.OrderBy(string, bool) մեթոդ

```c#
public void OrderBy(string column, bool descending = false);
```

Մեթոդը նախատեսված է աղյուսակի տողերը դասավորելու համար՝ նշված սյան արժեքների հիման վրա։

**Պարամետրեր**

| Անվանում        | Տվյալների տիպ                          | Լռությամբ արժեք | Նկարագրություն |
|-----------------|----------------------------------------|----------------|---------------|
| column          | string                                 | —              | Սյան ներքին անունը, որի հիման վրա պետք է դասավորվեն աղյուսակի տողերը։ |
| descending      | bool                                   | false          | Դասավորման կարգը։ **true** արժեքի դեպքում դասավորումը կատարվում է նվազման (descending) կարգով, հակառակ դեպքում՝ աճման (ascending) կարգով։ |

### IGrid.OrderBy(IEnumerable<(string ColumnName, bool Descending)>) մեթոդ

```c#
public void OrderBy(IEnumerable<(string ColumnName, bool Descending)> columnsInfos);
```

Մեթոդը նախատեսված է աղյուսակի տողերը դասավորելու համար՝ նշված սյան արժեքների հիման վրա։

**Պարամետրեր**

| Անվանում        | Տվյալների տիպ                                                   | Լռությամբ արժեք | Նկարագրություն |
|-----------------|------------------------------------------------------------------|----------------|---------------|
| columnsInfos    | IEnumerable<(string ColumnName, bool Descending)>               | —              | Սյուների ներքին անունների/դասավորման կարգերի (աճման կամ նվազման կարգ) ցուցակ, որի հիման վրա պետք է դասավորվեն աղյուսակի տողերը։ |
