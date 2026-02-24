---
layout: page
title: "AppLogInfo" 
---

Այդ դասը նախատեսված է հատուկ իրադարձության (տարբերակի փոփոխություն, Debug-ի գործարկում...) մանրամասների նկարագրման համար։

Օգտագործվում է [AppLogService](../Services/AppLog/AppLogService.md).[Write](../Services/AppLog/AppLogService.md) մեթոդում։

```c#
public class AppLogInfo
{
    public string ModuleCode { get; set; }
    public string OperationCode { get; set; }
    public string Comment { get; set; }
    public int ObjectISN { get; set; }
    public int BaseISN { get; set; }
}
```

## Հատկություններ

| Անվանում      | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն   |
| ------------- | ------------- | --------------- | -------------- |
| ModuleCode    | string        |       -          | Հատուկ իրադարձության մոդուլի կոդ։                                                    |
| OperationCode | string        |       -          | Հատուկ իրադարձության գործողության կոդ։                                               |
| Comment       | string        |       -          | Հատուկ իրադարձությունը նկարագրող մեկնաբանություն։                                    |
| ObjectISN     | int           |       -          | Իրադարձությունը իրականացրած երկրորդային փաստաթղթի ներքին նույնականացման համար (isn)։ |
| BaseISN       | int           |        -         | Իրադարձությունը իրականացրած հիմքային փաստաթղթի ներքին նույնականացման համար (isn)։    |

