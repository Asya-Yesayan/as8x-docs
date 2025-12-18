---
title: IErrorHandlingService.GetSqlRelatedException(SqlException, string, bool) մեթոդ
---

## Նկարագիր

**Դաս՝** [IErrorHandlingService](../IErrorHandlingService.md)

```c#           
public Exception GetSqlRelatedException(SqlException exception, 
                                        string duplicateErrorMessage = "", 
                                        bool duplicateIsRestException = false)
```

Ձևափոխում է SQL-ական սխալը փոխելով հաղորդագրությունը տեքստը ըստ [GetSqlExceptionText](GetSqlExceptionText.md)-ի։

**Պարամետրեր**
| Անվանում        | Տվյալների տիպ        | Լռությամբ արժեք | Նկարագրություն |
|-----------------|----------------------|----------------|----------------|
| exception       | SqlException         | -              | [SqlException](https://learn.microsoft.com/en-us/dotnet/api/microsoft.data.sqlclient.sqlexception) տիպի սխալ: |
| duplicateErrorMessage | string               | ""             | Այն հաղորդագրությունը, որը կվերադարձնի տվյալների պահոցում տվյալի կրկնության դեպքում։ Սա միայն հատուկ թույլատրված աղյուսակների՝ դրանցում կրկնությունների, դեպքում է։ |
| duplicateIsRestException | bool                 | false          | Վերադարձնել `RESTException`, եթե տվյալի կրկնության կրկնության սխալ է։ |

**Օրինակ**

Տե՛ս օգտագործման [օրինակը](../../examples/IErrorHandlingService.md#օրինակ-2)։
