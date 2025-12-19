---
title: IDBService.SetIsolationLevel(IsolationLevel) մեթոդ
---

## Նկարագիր

**Դաս՝** [IDBService](../IDBService.md)

```c#
public void SetIsolationLevel(IsolationLevel level);
```

[Փոխում է բաց տրազակցիայի մեկուսացման մակարդակը](https://learn.microsoft.com/en-us/sql/t-sql/statements/set-transaction-isolation-level-transact-sql)։ 

Տրանզակցիաների բացվում են Read Committed մակարդակով։

**Պարամետրեր**

| Անվանում        | Տվյալների տիպ        | Լռությամբ արժեք | Նկարագրություն |
|-----------------|----------------------|----------------|----------------|
| level           | IsolationLevel       | -              | [Տրանզակցիայի իզոլյացիայի մակարդակը](https://learn.microsoft.com/en-us/dotnet/api/system.data.isolationlevel)։ |
