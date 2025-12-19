---
title: AuthenticationClient դաս
---

## Ներածություն

AuthenticationClient դասը նախատեսված է 8X սերվիսին միացման ժամանակ նույնականացնելու համար։ 

Հնարավորության դեպքում նախընտրելի է օգտագործել [LoginService](LoginService.md) դասը նույնականացման համար։

8X սերվիսին որևէ ծրագրից միանալու համար անհրաժեշտ է նախապես սահմանել [API Client](../api_client.md)։

Նույնականացումից հետո օգտագործվում է [ApiClient](../types/ApiClient.md) ստեղծելու և դրա միջոցով սերվիսին հարցումներ կատարելու համար։

Տե՛ս օգտագործման [օրինակը](../examples/AuthenticationClient.md)։

## Մեթոդներ

| Անվանում | Նկարագրություն |
|----------|----------------|
| [AuthenticateWithCertificateAsync(CertificateAuthenticateRequest, CancellationToken)](AuthenticationClient/AuthenticateWithCertificateAsync.md) | Նույնականացնում է օգտագործողի մուտքանունով և գաղտնաբառով, պահանջվում է սերտիֆիկատի առկայություն ([API Client](../api_client.md))։ |
| [AuthenticateWithSecretAsync(string, short, string, CancellationToken)](AuthenticationClient/AuthenticateWithSecretAsync.md) | Նույնականացնում է ինտեգրման ծրագրի համար ստեղծված բանալիով ([API Client](../api_client.md))։ |
