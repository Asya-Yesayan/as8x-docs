---
title: ExecuteOld
parent: "Մեթոդներ"
grand_parent: "UserReportService"
nav_exclude: true
---

# UserReportService.ExecuteOld մեթոդ

## Գերբեռնումներ

| Անվանում | Նկարագրություն |
|--|--|
| [ExecuteOld&lt;T&gt;(string, CancellationToken)](#userreportserviceexecuteoldstring-cancellationtoken-մեթոդ) | Կատարում է 4x-ական օգտագործողի հաշվետվությունը և վերադարձնում է արդյունքը որպես `IList`։ |
| [ExecuteOld(string, CancellationToken)](#userreportserviceexecuteoldstring-cancellationtoken-մեթոդ-1) | Կատարում է 4x-ական օգտագործողի հաշվետվությունը և վերադարձնում է արդյունքը որպես `IList<T>`։ |

### UserReportService.ExecuteOld(string, CancellationToken) մեթոդ

```c#
public Task<IList> ExecuteOld(string name, CancellationToken stoppingToken = default)
```

Կատարում է 4x-ական օգտագործողի հաշվետվությունը և վերադարձնում է արդյունքը որպես `IList`։

**Պարամետրեր**

| Անվանում        | Տվյալների տիպ           | Լռությամբ արժեք | Նկարագրություն |
|-----------------|-------------------------|----------------|----------------|
| name            | string                  | -              | Օգտագործողի հաշվետվության ներքին անունը։ |
| stoppingToken   | CancellationToken       | default      | Ընդհատման օբյեկտ։ |

## Օրինակ

```c#
public async Task<IList> GetRowsAsync()
{
    return await _userReportService.ExecuteOld("SALES_REPORT");
}
```

### UserReportService.ExecuteOld<T>(string, CancellationToken) մեթոդ

```c#
public Task<IList<T>> ExecuteOld<T>(string name, CancellationToken stoppingToken = default)
```

Կատարում է 4x-ական օգտագործողի հաշվետվությունը և վերադարձնում է արդյունքը որպես `IList<T>`։

**Պարամետրեր**

| Անվանում        | Տվյալների տիպ           | Լռությամբ արժեք | Նկարագրություն |
|-----------------|-------------------------|----------------|----------------|
| name            | string                  | -              | Օգտագործողի հաշվետվության ներքին անունը։ |
| stoppingToken   | CancellationToken       | default      | Ընդհատման օբյեկտ։ |


**Օրինակ**

```c#
public async Task<IList<CustomerInfoRow>> GetTypedRowsAsync()
{
    return (IList<CustomerInfoRow>)await _userReportService.ExecuteOld<CustomerInfoRow>("CUSTOMERS_REPORT");
}
```






