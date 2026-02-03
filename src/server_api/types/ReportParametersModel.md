---
title: "ReportParametersModel դաս"
nav_exclude: true
---

# ReportParametersModel դաս

Դասը պարունակում է տվյալներ դիտելու ձևի պարամետրի մասին։

```c#
public class ReportParametersModel
{
    public string Name { get; set; }
    public string Value { get; set; }
    public string Type { get; set; }
}
```

## Հատկություններ

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն                           |
| -------- | ------------- | --------------- | ---------------------------------------- |
| Name     | string        |      -           | Դիտելու ձևի պարամետրի ներքին անունը։     |
| Value    | string        |      -           | Դիտելու ձևի պարամետրի արժեքը։            |
| Type     | string        |      -           | Դիտելու ձևի պարամետրի համակարգային տիպը։ |