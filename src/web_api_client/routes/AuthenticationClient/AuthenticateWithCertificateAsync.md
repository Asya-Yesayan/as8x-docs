---
title: AuthenticationClient.AuthenticateWithCertificateAsync(CertificateAuthenticateRequest, CancellationToken) մեթոդ
---

```c#
public Task<CertificateAuthenticateResponse> AuthenticateWithCertificateAsync(
    CertificateAuthenticateRequest certificateAuthenticateRequest, 
    CancellationToken cancellationToken = default)
```

Նույնականացնում է օգտագործողի մուտքանունով և գաղտնաբառով, պահանջվում է սերտիֆիկատի առկայություն ([API Client](../../api_client.md))։

Նույնականացման հաջողման դեպքում վերադարձնում է [օգտագործողի տվյալները և թոքեն՝ դեպի սերվիս հարցումներ կատարելու համար](../../types/CertificateAuthenticateResponse.md), հակառակ դեպքում առաջացնում է սխալ։

**Պարամետրեր**

* `certificateAuthenticateRequest` - [Օգտագործողի և API Client-ի տվյալները](../../types/CertificateAuthenticateRequest.md)։
* `cancellationToken` - Ընդհատման օբյեկտ։
