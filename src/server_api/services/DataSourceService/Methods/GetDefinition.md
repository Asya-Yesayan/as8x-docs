---
title: DataSourceService.GetDefinition(string, bool) մեթոդ
---

## Նկարագիր

**Դաս՝** [DataSourceService](../../DataSourceService.md)

```c#
public Task<DataSourceDefinition> GetDefinition(string dsName, 
                                                bool isFull = false)
```

Վերադարձնում է տվյալների աղբյուրի նկարագրությունը, որը պարունակում է տվյալների աղբյուրի մետատվյալները և հատկությունները(ներքին անուն, հայերեն, անգլերեն անվանումներ, SqlBased է թե ոչ...):

**Պարամետրեր**

| Անվանում        | Տվյալների տիպ        | Լռությամբ արժեք | Նկարագրություն |
|-----------------|----------------------|----------------|----------------|
| dsName          | string               | -              | Տվյալների աղբյուրի ներքին անունը: |
| isFull          | bool                 | false          | — |
