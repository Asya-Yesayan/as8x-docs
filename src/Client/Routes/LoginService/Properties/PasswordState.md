---
title: PasswordState
nav_exclude: true
---

# LoginService.PasswordState հատկություն

```c#
public PasswordState? PasswordState { get; private set; }
```

Վերադարձնում է նույնականացված օգտագործողի գաղտնաբառի վիճակը։

**Արժեքների բազմություն**

| Անվանում                             | Արժեք | Նկարագրություն    |
| ------------------------------------ | ----- | --------- |
| PasswordState.Normal                 |  0     | Գաղտնաբառը վավեր է։  |
| PasswordState.PasswordChangedByAdmin |  1     | Գաղտնաբառը նշանակվել է ադմինիստրատորի կողմից և ենթակա է փոփոխման: |
| PasswordState.PasswordExpired        |   2    | Գաղտնաբառի օգտագործման ժամկետը լրացել է։   |

