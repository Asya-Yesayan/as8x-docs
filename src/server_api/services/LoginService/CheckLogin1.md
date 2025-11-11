---
title: LoginService.CheckLogin(string, bool) մեթոդ
---

```c#
public Task<(short Suid, 
             string Name, 
             bool IsAdmin, 
             bool IsMustChangePWD, 
             PasswordState PasswordState)> CheckLogin(string login, 
                                                      bool bySecret = false)
```

Վերադարձնում է տրված մուտքանունով օգտագործողի մուտքի ինֆորմացիան։

| Անվանում | Տվյալների տիպ | Նկարագրություն |
| --- | --- | --- |
| Suid | short | Օգտագործողի ներքին համարը (կոդը)։ |
| Name | string | Օգտագործողի մուտքանունը։ |
| IsAdmin | bool | Օգտագործողի ադմինիստրատոր հանդիսանալու հայտանիշ։ |
| IsMustChangePWD | bool | Գաղտնաբառի փոփոխման հայտանիշ։ |
| PasswordState | PasswordState | Գաղտնաբառի վիճակը։ <br>• Normal - Գաղտնաբառը վավեր է։  <br>• PasswordChangedByAdmin - Գաղտնաբառը նշանակվել է ադմինիստրատորի կողմից և ենթակա է փոփոխման:  <br>• PasswordExpired - Գաղտնաբառը ժամկետանց է։ |

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- |
| login | string | - | Օգտագործողի մուտքանունը։ |
| bySecret | bool | false |  |
