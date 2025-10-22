---
title: WebServicesManager.Get(string, string) մեթոդ
---

```c#
public async Task<List<WebServiceInfo>> Get(string id = null, string role = null)
```

Վերադարձնում է վեբ ծառայությունների [նկարագրությունների](../../types/WebServiceInfo.md) ցանկը՝ ըստ տրված `id`-ի կամ `role`-ի։ Եթե պարամետրերը նշված չեն, վերադարձնում է բոլոր հասանելի վեբ ծառայությունները։

**Պարամետրեր**

| Անվանում | Տեսակ | Լռությամբ արժեք | Նկարագրություն |
|-----------|-------|-----------------|----------------|
| service | string | null | Վեբ ծառայության id-ն։ |
| role | string | null | Վեբ ծառայության դերը (նշանակությունը) (օրինակ՝ Desktop, Integration, JobExecutor, ...)։  |