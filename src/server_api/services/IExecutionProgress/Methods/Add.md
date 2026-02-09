---
title: Add
parent: "Մեթոդներ"
grand_parent: "IExecutionProgress"
---

# IExecutionProgress.Add մեթոդ

## Գերբեռնումներ

| Անվանում | Նկարագրություն |
|--|--|
| [Add(int, string)](#iexecutionprogressaddint-string-մեթոդ)| Ավելացնում է նոր [փուլ](../../../Types/ProgressPhase.md) կատարման պրոգրեսում։ |
| [Add(string)](#iexecutionprogressaddstring-մեթոդ)| Ավելացնում է նոր [փուլ](../../../Types/ProgressPhase.md) կատարման պրոգրեսում: |

### IExecutionProgress.Add(int, string) մեթոդ

```c#
public void Add(int id, 
                string name);
```

Ավելացնում է նոր [փուլ](../../../Types/ProgressPhase.md) կատարման պրոգրեսում։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն                    |
| -------- | ------------- | --------------- | --------------------------------- |
| id       | int           | -               | Կատարման փուլի ներքին նույնականացման համարը (id): |
| name     | string        | -               | Կատարման փուլի անվանումը։         |

### IExecutionProgress.Add(string) մեթոդ

```c#
public void Add(string name);
```

Ավելացնում է նոր [փուլ](../../../Types/ProgressPhase.md) կատարման պրոգրեսում:

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն            |
| -------- | ------------- | --------------- | ------------------------- |
| name     | string        | -               | Կատարման փուլի անվանումը։ |
