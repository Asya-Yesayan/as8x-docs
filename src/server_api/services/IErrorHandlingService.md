---
title: "IErrorHandlingService սերվիս"
---

## Ներածություն

IErrorHandlingService դասը նախատեսված է ծրագրի աշխատանքի ընթացքում առաջացած sql սխալների մշակման համար։
Մեթոդները ճանաչում են [SqlException](https://learn.microsoft.com/en-us/dotnet/api/microsoft.data.sqlclient.sqlexception)-ները և դրանք ձևափոխում են։

## Մեթոդներ

| Անվանում | Նկարագրություն |
|----------|----------------|
| [GetSqlExceptionDetails(SqlException)](IErrorHandlingService/GetSqlExceptionDetails.md) | Վերադարձնում է `sqlException` պարամետրում պարունակվող SQL-ական ենթասխալների [մանրամասների](../types/ErrorDetail.md) ցուցակը։ |
| [GetSqlExceptionText(SqlException, string)](IErrorHandlingService/GetSqlExceptionText.md) | Փորձում է ճանաչել SQL-ական սխալը և վերադարձնել վերջնական օգտագործողներին ավելի հասկանալի հաղորդագրություն։ |
| [GetSqlRelatedException(SqlException, string, bool)](IErrorHandlingService/GetSqlRelatedException.md) | Ձևափոխում է SQL-ական սխալը փոխելով հաղորդագրությունը տեքստը ըստ [GetSqlExceptionText(SqlException, string)](IErrorHandlingService/GetSqlExceptionText.md)-ի։ |