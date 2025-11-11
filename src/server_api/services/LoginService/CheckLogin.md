---
title: LoginService.CheckLogin(short) մեթոդ
---

```c#
public Task<(short Suid, 
             string Name, 
             bool IsAdmin, 
             bool IsMustChangePWD, 
             PasswordState PasswordState)> CheckLogin(short suid)
```

Վերադարձնում է տրված ներքին համարով օգտագործողի մուտքի ինֆորմացիան։

| Անվանում | Տվյալների տիպ | Նկարագրություն |
| --- | --- | --- |
| Suid | short | Օգտագործողի ներքին համարը (կոդը)։ |
| Name | string | Օգտագործողի մուտքանունը։ |
| IsAdmin | bool | Օգտագործողի ադմինիստրատոր հանդիսանալու հայտանիշ։ |
| IsMustChangePWD | bool | Գաղտնաբառի փոփոխման հայտանիշ։ |
| PasswordState | PasswordState | Գաղտնաբառի վիճակը։ <br>• Normal - Գաղտնաբառը վավեր է։  <br>• PasswordChangedByAdmin - Գաղտնաբառը նշանակվել է ադմինիստրատորի կողմից և ենթակա է փոփոխման:  <br>• PasswordExpired - Գաղտնաբառը ժամկետանց է։ |

Եթե տրված suid-ով օգտագործողը գոյություն չունի կամ նրա մուտքը համակարգ արգելված է, ապա առաջացնում է սխալ։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- |
| suid | short | - | Օգտագործողի ներքին համարը (կոդը)։ |
