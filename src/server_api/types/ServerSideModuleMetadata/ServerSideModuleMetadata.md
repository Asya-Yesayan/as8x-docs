---
title: ServerSideModuleMetadata դաս
---

## Հատկություններ

| Անվանում | Նկարագրություն |
|----------|----------------|
| [TS](Properties/TS.md) | Վերադարձնում է [սերվերային մոդուլի](../../../extensions/definitions/server_side_module.md) վերջին փոփոխման ամսաթիվը/ժամանակը։ |

## Մեթոդներ

| Անվանում | Նկարագրություն |
|----------|----------------|
| [GetByAttribute()](Methods/GetByAttribute.md) | Վերադարձնում է [սերվերային մոդուլի](../../../extensions/definitions/server_side_module.md) բոլոր այն դասերի անուն/[մետանկարագրությունների](https://learn.microsoft.com/en-us/dotnet/api/system.type) ցուցակը, որոնց վրա կիրառված է T ատրիբուտը։ |
| [GetByInterface()](Methods/GetByInterface.md) | Վերադարձնում է [սերվերային մոդուլի](../../../extensions/definitions/server_side_module.md) բոլոր այն դասերի անուն/[մետանկարագրությունների](https://learn.microsoft.com/en-us/dotnet/api/system.type) ցուցակը, որոնք իրականացնում են T ինտերֆեյսը։ |
| [TryGetType(string, Type)](Methods/TryGetType.md) | Ստուգում է [սերվերային մոդուլում](../../../extensions/definitions/server_side_module.md) տրված անունով դասի առկայությունը, առկայության դեպքում վերադարձնում է true և դասի [մետանկարագրությունը](https://learn.microsoft.com/en-us/dotnet/api/system.type), հակառակ դեպքում՝ false և null: |