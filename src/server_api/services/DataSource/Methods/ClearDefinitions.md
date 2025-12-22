---
title: DataSourceService.ClearDefinitions(IEnumerable<string>) մեթոդ
---

## Նկարագիր

**Դաս՝** [DataSourceService](../../DataSourceService/DataSourceService.md)

```c#
public void ClearDefinitions(IEnumerable<string> names = null)
```

Հեռացնում է նշված տվյալների աղբյուրների նկարագրությունների քեշը սերվիսից։

**Պարամետրեր**


| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | **Նկարագրություն** |
| --- | --- | --- | --- |
| names | IEnumerable&lt;string&gt; | null | Քեշից հեռացման ենթակա տվյալների աղբյուրների ներքին անունների ցուցակ։ <br> Պարամետրի դատարկ կամ null արժեքի դեպքում հեռացնում է բոլոր տվյալների աղբյուրների քեշը։ |
