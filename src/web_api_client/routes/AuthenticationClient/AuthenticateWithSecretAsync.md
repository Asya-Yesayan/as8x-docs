---
title: AuthenticationClient.AuthenticateWithSecretAsync(string, short, string, CancellationToken) մեթոդ
---

```c#
public Task<AuthenticateResponse> AuthenticateWithSecretAsync(
    string username, short apiClientId, string secret, 
    CancellationToken cancellationToken = default)
```

Նույնականացնում է ինտեգրման ծրագրի համար ստեղծված բանալիով ([API Client](../../api_client.md))։

Նույնականացման հաջողման դեպքում վերադարձնում է [օգտագործողի տվյալները և թոքեն՝ դեպի սերվիս հարցումներ կատարելու համար](../../types/AuthenticateResponse.md), հակառակ դեպքում առաջացնում է սխալ։

**Պարամետրեր**

* `username` - Օգտագործողի մուտքանունը (ներքին անունը)։
* `apiClientId` - Կլիենտ ծրագրի id-ն (API Client Id)։
* `secret` - Կլիենտ ծրագրի բանալի (API Client Secret)։
* `cancellationToken` - Ընդհատման օբյեկտ։

**Օրինակ**

Տե՛ս օգտագործման [օրինակը](../../examples/AuthenticationClient.md)։
