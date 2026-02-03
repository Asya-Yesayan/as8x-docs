---
title: AuthenticateWithSecretAsync(string, short, string, CancellationToken)
nav_exclude: true
---

# AuthenticationClient.AuthenticateWithSecretAsync(string, short, string, CancellationToken) մեթոդ

```c#
public Task<AuthenticateResponse> AuthenticateWithSecretAsync(
    string username, 
    short apiClientId, 
    string secret, 
    CancellationToken cancellationToken = default)
```

Նույնականացնում է ինտեգրման ծրագրի համար ստեղծված բանալիով ([API Client](../../../api_client.md))։

Նույնականացման հաջողման դեպքում վերադարձնում է [օգտագործողի տվյալները և թոքեն՝ դեպի սերվիս հարցումներ կատարելու համար](../../../Types/AuthenticateResponse.md), հակառակ դեպքում առաջացնում է սխալ։

**Պարամետրեր**

| Անվանում        | Տվյալների տիպ        | Լռությամբ արժեք | Նկարագրություն |
|-----------------|----------------------|----------------|----------------|
| username        | string               | -              | Օգտագործողի մուտքանունը (ներքին անունը)։ |
| apiClientId     | short                | -              | Կլիենտ ծրագրի id-ն (API Client Id)։ |
| secret          | string               | -              | Կլիենտ ծրագրի բանալի (API Client Secret)։ |
| cancellationToken | CancellationToken    | default        | Ընդհատման օբյեկտ։ |

**Օրինակ**

Տե՛ս օգտագործման [օրինակը](../../../Examples/AuthenticationClient.md)։
