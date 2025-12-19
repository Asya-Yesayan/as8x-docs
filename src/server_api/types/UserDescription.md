---
layout: page
title: "UserDescription դաս" 
---

Այս դասը նախատեսված է համակարգի օգտագործողի նկարագրման համար։

Օգտագործվում է [IUserService](../services/IUserService.md).[UserElProp](../services/IUserService/Methods/UserElProp.md), [UserManagerService](../services/UserManagerService.md).[GetUnhiddenUsers](../services/UserManagerService/Methods/GetUnhiddenUsers.md) մեթոդներում։

```c#
public class UserDescription
{
    public short SUID { get; set; }
    public string Name { get; set; }
    public string FullName { get; set; }
    public string Description { get; set; }
    public bool IsAdmin { get; set; }
    public bool LoginDisabled { get; set; }
    public bool IsHidden { get; set; }
    public int Expired { get; set; }
    public string SID { get; set; }
    public byte[] SidData { get; set; }
    public bool IsActiveDirectoryUser { get; set; }
    public bool IsSqlUser { get; set; }
}
```

## Հատկություններ

| Անվանում              | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն  |
| --------------------- | ------------- | --------------- | ----------- |
| SUID                  | short         |      -           | Օգտագործողի ներքին համար։  |
| Name                  | string        |     -           | Օգտագործողի ներքին անուն, որը օգտագործվում է որպես մուտքանուն համակարգ մուտք գործելիս։   |
| FullName              | string        |      -           | Օգտագործողի լրիվ անուն։ |
| Description           | string        |      -           | Օգտագործողի նկարագրություն։ |
| IsAdmin               | bool          |      -           | Օգտագործողի ադմինիստրատոր հանդիսանալու հայտանիշ։ |
| LoginDisabled         | bool          |      -           | Օգտագործողի համակարգ մուտք գործելու թույլտվության հայտանիշ։ |
| IsHidden              | bool          |       -          | Օգտագործողի անտեսանելի լինելու հայտանիշ։ `true` արժեքի դեպքում օգտագործողը չի երևում "Օգտագործողներ" հաշվետվությունում։  |
| Expired               | int           |        -         | Ցույց է տալիս, թե քանի օրից կլրանա օգտագործողի գաղտնաբառի վավերականության ժամկետը։ -1 արժեքի դեպքում գաղտնաբառը համարվում է միշտ վավեր։ |
| SID                   | string        |       -          | SQL եղանակով նույնականացվող օգտագործողի ներքին նույնականացման համարը։  |
| SidData               | byte[]        |       -          | Active Directory եղանակով նույնականացվող օգտագործողի ներքին նույնականացման համարը։ |
| IsActiveDirectoryUser | bool          |       -          | Ցույց է տալիս օգտագործողի նույնականացման եղանակը Active Directory տեսակի է, թե ոչ։  |
| IsSqlUser             | bool          |       -          | Ցույց է տալիս օգտագործողի նույնականացման եղանակը SQL-ով է, թե ոչ։ |
