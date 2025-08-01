---
title: LoginService.PasswordState հատկություն
---

```c#
public PasswordState? PasswordState { get; private set; }
```

Վերադարձնում է նույնականացված օգտագործողի գաղտնաբառի վիճակը։

* `PasswordState․Normal` - Գաղտնաբառը վավեր է։
* `PasswordState․PasswordChangedByAdmin` - Գաղտնաբառը նշանակվել է ադմինիստրատորի կողմից և ենթակա է փոփոխման:
* `PasswordState․PasswordExpired` - Գաղտնաբառի օգտագործման ժամկետը լրացել է։
