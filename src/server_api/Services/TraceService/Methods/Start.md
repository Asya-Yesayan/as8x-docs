---
title: Start
nav_exclude: true
---

# TraceService.Start մեթոդ

## Գերբեռնումներ

| Անվանում | Նկարագրություն |
|---------|----------------|
| [Start(string)](#traceservicestartstring-մեթոդ) | Ստեղծում և սկսում է նոր [Activity](https://learn.microsoft.com/en-us/dotnet/api/system.diagnostics.activity#remarks)` այն կապելով [ընթացիկ Activity](https://learn.microsoft.com/en-us/dotnet/api/system.diagnostics.activity.current)-ին։ |
| [Start(string, string)](#traceservicestartstring-string-մեթոդ) | Ստեղծում և սկսում է նոր [Activity](https://learn.microsoft.com/en-us/dotnet/api/system.diagnostics.activity#remarks)՝ այն կապելով նշված [ծնող Activity](https://learn.microsoft.com/en-us/dotnet/api/system.diagnostics.activity.parent#system-diagnostics-activity-parent)-ին։ |

### TraceService.Start(string) մեթոդ

```c#
public Activity Start([CallerMemberName] string caption = "");
```

Ստեղծում և սկսում է նոր [Activity](https://learn.microsoft.com/en-us/dotnet/api/system.diagnostics.activity#remarks)` այն կապելով [ընթացիկ Activity](https://learn.microsoft.com/en-us/dotnet/api/system.diagnostics.activity.current)-ին։ Վերադարձնում է ստեղծված օբյեկտը։

[Ընթացիկ Activity](https://learn.microsoft.com/en-us/dotnet/api/system.diagnostics.activity.current)-ի բացակայության դեպքում վերադարձնում է null:

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
|---------|---------------|----------------|----------------|
| caption  | string        | -              | Ստեղծվող Activity-ի անվանումը։ Չփոխանցելու դեպքում օգտագործվում է կանչող մեթոդի անունը։ |

## Օրինակ

```c#
public async Task ProcessOrderAsync(string orderId)
{
    using var activity = _traceService.Start();
    if (activity != null)
    {
        activity.SetTag("order.id", orderId);
        activity.SetTag("operation.type", "Processing");
    }
    await ValidateAsync(orderId);
}
```

### TraceService.Start(string, string) մեթոդ

```c#
public Activity Start(string parentId, [CallerMemberName] string caption = "");
```

Ստեղծում և սկսում է նոր [Activity](https://learn.microsoft.com/en-us/dotnet/api/system.diagnostics.activity#remarks)՝ այն կապելով նշված [ծնող Activity](https://learn.microsoft.com/en-us/dotnet/api/system.diagnostics.activity.parent#system-diagnostics-activity-parent)-ին։ Վերադարձնում է ստեղծված օբյեկտը։

Եթե **parentId** պարամետրը [դատարկ](https://learn.microsoft.com/en-us/dotnet/api/system.string.isnullorwhitespace) է, ապա Activity չի ստեղծում և վերադարձնում է null։

**Պարամետրեր**

| Անվանում  | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
|----------|---------------|----------------|----------------|
| parentId | string        | -              | Ծնող activity-ի ID-ն, որի տակ պետք է ստեղծվի նոր activity-ը։ |
| caption  | string        | -              | Ստեղծվող Activity-ի անվանումը։ Չփոխանցելու դեպքում օգտագործվում է կանչող մեթոդի անունը։ |

## Օրինակ

```c#
var parentId = httpContext.Request.Headers["traceparent"].FirstOrDefault();
using var activity = _traceService.Start(parentId, "ProcessRequest");
if (activity != null)
{
    activity.SetTag("http.method", httpContext.Request.Method);
    activity.SetTag("http.route", httpContext.Request.Path);
    activity.SetTag("operation.category", "Integration");
}
```