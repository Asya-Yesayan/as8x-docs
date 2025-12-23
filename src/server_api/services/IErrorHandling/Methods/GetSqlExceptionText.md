---
title: IErrorHandlingService.GetSqlExceptionText(SqlException, string) մեթոդ
---

## Նկարագիր

**Դաս՝** [IErrorHandlingService](../IErrorHandlingService.md)

```c#           
public string GetSqlExceptionText(SqlException exception, 
                                  string duplicateErrorMessage = "")
```

Փորձում է ճանաչել SQL-ական սխալը և վերադարձնել վերջնական օգտագործողներին ավելի հասկանալի հաղորդագրություն։
Օրինակ. հետևյալ հաղորդագրության փոխարեն վերադարձնում է 
  - `The connection is broken and recovery is not possible. The client driver attempted to recover the connection one or more times and all attempts failed. Increase the value of ConnectRetryCount to increase the number of recovery attempts.`
  - `Ցանցային կապի խզում: Կապվեք ցանցի ադմինիստրատորի հետ`

**Պարամետրեր**

| Անվանում        | Տվյալների տիպ        | Լռությամբ արժեք | Նկարագրություն |
|-----------------|----------------------|----------------|----------------|
| exception       | SqlException         | -              | [SqlException](https://learn.microsoft.com/en-us/dotnet/api/microsoft.data.sqlclient.sqlexception) տիպի սխալ, որի հաղորդագրությունը պետք է վերադարձնել: |
| duplicateErrorMessage | string               | ""             | Այն հաղորդագրությունը, որը կվերադարձնի տվյալների պահոցում տվյալի կրկնության դեպքում։ Սա միայն հատուկ թույլատրված աղյուսակների՝ դրանցում կրկնությունների, դեպքում է։ |

**Օրինակ**

Տե՛ս օգտագործման [օրինակը](../../../Examples/IErrorHandlingService.md)։
