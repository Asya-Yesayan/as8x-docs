---
title: AuthenticateWithCertificateAsync(CertificateAuthenticateRequest, CancellationToken)
nav_exclude: true
---

# AuthenticationClient.AuthenticateWithCertificateAsync(CertificateAuthenticateRequest, CancellationToken) մեթոդ

```c#
public Task<CertificateAuthenticateResponse> AuthenticateWithCertificateAsync(
        CertificateAuthenticateRequest certificateAuthenticateRequest, 
        CancellationToken cancellationToken = default)
```

Նույնականացնում է օգտագործողի մուտքանունով և գաղտնաբառով, պահանջվում է սերտիֆիկատի առկայություն ([API Client](../../../api_client.md))։

Նույնականացման հաջողման դեպքում վերադարձնում է [օգտագործողի տվյալները և թոքեն՝ դեպի սերվիս հարցումներ կատարելու համար](../../../Types/CertificateAuthenticateResponse.md), հակառակ դեպքում առաջացնում է սխալ։

**Պարամետրեր**

| Անվանում        | Տվյալների տիպ        | Լռությամբ արժեք | Նկարագրություն |
|-----------------|----------------------|----------------|----------------|
| certificateAuthenticateRequest | CertificateAuthenticateRequest | -              | [Օգտագործողի և API Client-ի տվյալները](../../../Types/CertificateAuthenticateRequest.md)։ |
| cancellationToken | CancellationToken    | default        | Ընդհատման օբյեկտ։ |
