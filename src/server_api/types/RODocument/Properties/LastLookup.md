---
title: RODocument.LastLookup հատկություն
---

```c#
public DateTime LastLookup { get; private set; }
```

Վերադարձնում է փաստաթղթի քեշում փնտրման և քեշից բեռնման վերջին ամսաթիվը/ժամանակը:

Փաստաթուղթը քեշից բեռնելու համար անհրաժեշտ է կանչել [RODocumentService](../../../services/RODocumentService.md).[LookUpInCache](../../../services/LiteDocumentService/Methods/LookUpInCache.md) մեթոդը։
