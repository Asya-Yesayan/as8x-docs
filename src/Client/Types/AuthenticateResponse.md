---
layout: page
title: "AuthenticateResponse"
nav_exclude: true
---

# AuthenticateResponse

Դասը պարունակում է նույնականացումը անցած կլիենտ ծրագրի և օգտագործողի տվյալները։

Օգտագործվում է [AuthenticationClient](../Routes/AuthenticationClient/AuthenticationClient.md).[AuthenticateWithSecretAsync](../Routes/AuthenticationClient/Methods/AuthenticateWithSecretAsync.md) մեթոդում։

```c#
public class CertificateAuthenticateResponse
{
    public short SUID { get; set; }
    public string Username { get; set; }
    public string Name { get; set; }
    public bool IsAdmin { get; set; }
    public string DbName { get; set; }
    public string Server { get; set; }
    public string SessionGuid { get; set; }
    public string Token { get; set; }
    public string RefreshToken { get; set; }
    public bool MustChangePassword { get; set; }
    public int? PasswordState { get; set; }
}
```

## Հատկություններ

| Անվանում           | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն  |
| ------------------ | ------------- | --------------- | ---------------------------------- |
| SUID               |  short             |      -           | Օգտագործողի ներքին համարը (կոդ)։   |
| Username           |  string             |     -            | Օգտագործողի մուտքանունը։     |
| Name               |  string             |     -            | Օգտագործողի անուն։   |
| IsAdmin            |  bool             |       -          | Օգտագործողի ադմինիստրատոր հանդիսանալու հայտանիշ։ |
| DbName             |  string             |     -            | Տվյալների պահոցի անունը, որին միացված է օգտագործողը։   |
| Server             |  string             |     -            | Տվյալների պահոցը պարունակող սերվերի անունը։ |
| SessionGuid        |  string             |     -            | Օգտագործողի համակարգ մուտք գործման արդյունքում բացված [սեսսիայի](../../server_api/Types/SessionInfo.md) id-ն։   |
| Token              |  string            |      -           | Տոկեն, որը նախատեսված է օգտագործողի կողմից դեպի սերվիս կանչերի նույնականացման համար։ |
| RefreshToken       |  string             |      -           | Հիմնական տոկենի վավերականության ժամկետի լրացումից հետո տրվող թարմացման տոկենը։   |
| MustChangePassword |  bool             |        -         | Համակարգ մուտք գործելուց հետո օգտագործողը պետք է փոխի գաղտնաբառը, թե ոչ։  |
| PasswordState      |  int?             |        -         | Օգտագործողի գաղտնաբառի վիճակը։<br>0 - Գաղտնաբառը վավեր է։<br>1 - Գաղտնաբառը նշանակվել է ադմինի կողմից և ենթակա է փոփոխման։<br>2 - Գաղտնաբառը ժամկետանց է։ |




