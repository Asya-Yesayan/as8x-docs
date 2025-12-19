---
title: LoginService.AuthenticationMode հատկություն
---

```c#
public AuthenticationMode? AuthenticationMode { get; private set; }
```

Նույնականացումից հետո վերադարձնում է նույնականացման եղանակը։

**Արժեքների բազմություն**

| Անվանում                   | Արժեք | Նկարագրություն                  |
| -------------------------- | ----- | ------------------------------- |
| AuthenticationMode.ArmSoft |   0    | SQL նույնականացում              |
| AuthenticationMode.AD      |   1    | Active Directory նույնականացում |

