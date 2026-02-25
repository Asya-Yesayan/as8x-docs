---
title: SetErrorTag
nav_exclude: true
---

# TraceService.SetErrorTag մեթոդ

## Գերբեռնումներ

| Անվանում | Նկարագրություն |
|---------|----------------|
| [SetErrorTag(Activity, string)](#traceserviceseterrortagactivity-string-մեթոդ) | Ստեղծում է `Exception` տրված հաղորդագրությամբ և նշում activity-ն ու դրա ծնողներին որպես սխալային։ |
| [SetErrorTag(Activity, Exception)](#traceserviceseterrortagactivity-exception-մեթոդ) | Սխալի տրված `Exception`-ը կապում է activity-ին և բոլոր ծնող activity-ներին։ |

### TraceService.SetErrorTag(Activity, string) մեթոդ

```c#
public void SetErrorTag(Activity activity, string errorText);
```

Ստեղծում է [Exception](https://learn.microsoft.com/en-us/dotnet/api/system.exception) դասի օբյեկտ՝ **errorText** սխալի հաղորդագրությամբ, կապակցում է տրված Activity-ին։ Արդյունքում Activity-ի համար ավելացվում է **exception** անունով event, որի exception.message tag-ում ցուցադրվում է սխալի հաղորդագրությունը։

**Պարամետրեր**

| Անվանում   | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
|-----------|---------------|----------------| ----------------|
| activity  | Activity      | - | Activity տիպի օբյեկտ, որի համար ավելացվում է սխալի հաղորդագրությունը։ |
| errorText | string        | - | Ավելացվող սխալի հաղորդագրությունը։ |

## Օրինակ

```c#
try
{
    using var activity = _traceService.Start("ProcessPayment");
    activity.SetTag("payment.id", orderId);
    activity.SetTag("payment.total_amount", 125.50);
    await _orderProcessor.ProcessAsync();
}
catch (Exception ex)
{
    _traceService.SetErrorTag(Activity.Current, "Payment processing failed");
    throw;
}
```

### TraceService.SetErrorTag(Activity, Exception) մեթոդ

```c#
public void SetErrorTag(Activity activity, Exception exception);
```

Կապակցում է [Exception](https://learn.microsoft.com/en-us/dotnet/api/system.exception) տիպի սխալը տրված Activity-ին։ 

Արդյունքում Activity-ի համար ավելացվում է **exception** անունով event, որի exception.message tag-ում ցուցադրվում է ավելացված սխալի հաղորդագրությունը, իսկ exception.type, exception.stacktrace tag-երում` համապատասխանաբար սխալի տիպը և Stack trace-ը։

**Պարամետրեր**

| Անվանում   | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
|-----------|---------------|----------------| ----------------|
| activity  | Activity      | - | Activity տիպի օբյեկտ, որի համար ավելացվում է սխալի նկարագրությունը։ |
| errorText | string        | - | Ավելացվող սխալի օբյեկտը։ |

## Օրինակ

```c#
try
{
    using var activity = _traceService.Start("LoadCustomer");
    await customersService.Load();
}
catch (Exception ex)
{
    _traceService.SetErrorTag(Activity.Current, ex);
    throw;
}
```


