---
title: LoginService.PasswordState հատկություն
---

```c#
public PasswordState? PasswordState { get; private set; }
```

Նույնականացումից հետո վերադարձնում է նույնականացված օգտագործողի գաղտնաբառի վիճակը։

* `Normal` - Գաղտնաբառը վավեր է։
* `PasswordChangedByAdmin` - Գաղտնաբառը նշանակվել է ադմինիստրատորի կողմից և ենթակա է փոփոխման:
* `PasswordExpired` - Գաղտնաբառի օգտագործման ժամկետը լրացել է։

## Մեթոդներ
