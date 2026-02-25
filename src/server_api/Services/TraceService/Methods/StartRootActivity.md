---
title: StartRootActivity
nav_exclude: true
---

# TraceService.StartRootActivity(string) մեթոդ

```c#
public Activity StartRootActivity([CallerMemberName] string caption = "");
```

Ստեղծում և սկսում է նոր 1-ին մակարդակի [Activity](https://learn.microsoft.com/en-us/dotnet/api/system.diagnostics.activity#remarks)՝ նախապես ընդհատելով [ընթացիկ Activity](https://learn.microsoft.com/en-us/dotnet/api/system.diagnostics.activity.current)-ն։ Վերադարձնում է ստեղծված օբյեկտը։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
|---------|---------------|----------------|----------------|
| caption  | string        | -              | Ստեղծվող Activity-ի անվանումը։ Չփոխանցելու դեպքում օգտագործվում է կանչող մեթոդի անունը։ |

## Օրինակ

```c#
using var activity = _traceService.StartRootActivity("InitializeService");
if (activity != null)
{
    activity.SetTag("operation.stage", "Initialization");
    activity.SetTag("operation.category", "ServiceStartup");
    InitializeComponents();
}
```


