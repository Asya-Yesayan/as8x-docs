---
title: GetColumnsDefinition(string)
parent: "Մեթոդներ"
grand_parent: "DataSourceService"
---

# DataSourceService.GetColumnsDefinition(string) մեթոդ

## Նկարագիր

**Դաս՝** [DataSourceService](../DataSourceService.md)

```c#
public Task<Dictionary<string, DataSourceColumnDefinition>> GetColumnsDefinition(string dsName)
```

Վերադարձնում է տվյալների աղբյուրի սյուների նկարագրությունների ցանկը։

**Պարամետրեր**

| Անվանում        | Տվյալների տիպ        | Լռությամբ արժեք | Նկարագրություն |
|-----------------|----------------------|----------------|----------------|
| dsName          | string               | -              | Տվյալների աղբյուրի ներքին անունը: |
