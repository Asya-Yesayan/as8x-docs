---
layout: page
title: "ErrorDetail" 
---

# ErrorDetail դաս

Այս դասը նախատեսված է ծրագրի աշխատանքի ընթացքում առաջացող սխալների նկարագրման համար։

Օգտագործվում է [IErrorHandlingService](../Services/IErrorHandling/IErrorHandlingService.md).[GetSqlExceptionDetails](../Services/IErrorHandling/Methods/GetSqlExceptionDetails.md) մեթոդում։

```c#
public class ErrorDetail
{
    public string Message { get; set; }
    public int Number { get; set; }

    public ErrorDetail(string message, int number = -1)
    {
        this.Message = message;
        this.Number = number;
    }
}
```

## Հատկություններ

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն           |
| -------- | ------------- | --------------- | ------------------------ |
| Message  | string        |   -              | Սխալի հաղորդագրությունը։ |
| Number   | int           | -1              | Սխալի համարը։            |


