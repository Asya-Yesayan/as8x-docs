---
layout: page
title: "CertificateAuthenticateRequest դաս"
nav_exclude: true
---

# CertificateAuthenticateRequest դաս

Դասը պարունակում է նույնականացման ենթակա սերտիֆիկատով կլիենտ ծրագրի և օգտագործողի տվյալները։

Օգտագործվում է [AuthenticationClient](../Routes/AuthenticationClient/AuthenticationClient.md).[AuthenticateWithCertificateAsync](../Routes/AuthenticationClient/Methods/AuthenticateWithCertificateAsync.md) մեթոդում։

```c#
public class CertificateAuthenticateRequest
{
    public byte[] Certificate { get; set; }
    public short ApiClientId { get; set; }
    public string Username { get; set; }
    public string Password { get; set; }
    public DateTime? RequestTime { get; set; }
    public string TimeZoneId { get; set; }
}
```

## Հատկություններ

| Անվանում    | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն    |
| ----------- | ------------- | --------------- | ------ |
| Certificate |  byte[]             |       -          | Սերտիֆիկատով նույնականացվող կլիենտ ծրագրի սերտիֆիկատը։  |
| ApiClientId |  short             |       -          | Նույնականացվող կլիենտ ծրագրի id-ն։    |
| Username    |  string            |       -          | Կլիենտ ծրագրի օգտագործողի ներքին անունը, որով նույնականացվում է։ |
| Password    |  string             |       -         | Կլիենտ ծրագրի օգտագործողի գաղտնաբառը։  |
| RequestTime |  DateTime?             |       -          | Օգտագործողի նույնականացման հարցման ուղարկման ամսաթիվը/ժամանակը։  |
| TimeZoneId  |  string             |       -          | Այն ժամային գոտու id-ն, որով աշխատում է օգտագործողը։    |