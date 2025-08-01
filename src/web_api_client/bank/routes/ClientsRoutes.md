---
title: ClientsRoutes դաս
---

## Ներածություն

ClientsRoutes դասը պարունակում է մեթոդներ հաճախորդների տվյալների հետ աշխատանքը ապահովելու համար։
Այն հասանելի է [BankApiClient](../types/BankApiClient.md) դասի միջից։

## Մեթոդներ

| Անվանում | Նկարագրություն |
|----------|----------------|
| [CreateClientFromEkeng(CreateClientFromEkengRequest)](ClientsRoutes/CreateClientFromEkeng.md) | Ստեղծում է ֆիզ. անձ հաճախորդ ստանալով նույնականացման փաստաթղթի համարը (սոց.քարտ, անձնագիր...), իսկ հիմնական տվյալները ստանալով [ԷԿԵՆԳ](https://www.ekeng.am) համակարգից: |
| [CreatePhysicalClientByFullData(CreatePhysicalClientByFullDataRequest)](ClientsRoutes/CreatePhysicalClientByFullData.md) | Ստեղծում է նոր ֆիզ. անձ հաճախորդ ըստ հաճախորդի հիմնական տվյալների։ |
