---
title: LastLookup
nav_exclude: true
---

# RODocument.LastLookup հատկություն

```c#
public DateTime LastLookup { get; private set; }
```

Վերադարձնում է փաստաթղթի քեշում փնտրման և քեշից բեռնման վերջին ամսաթիվը/ժամանակը:

Փաստաթուղթը քեշից բեռնելու համար անհրաժեշտ է կանչել [RODocumentService](../../../Services/RODocument/RODocumentService.md).[LookUpInCache](../../../Services/RODocument/Methods/LookUpInCache.md) մեթոդը։
