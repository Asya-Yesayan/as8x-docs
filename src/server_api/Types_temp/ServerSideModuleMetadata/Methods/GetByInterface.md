---
title: GetByInterface
nav_exclude: true
---

# ServerSideModuleMetadata.GetByInterface() մեթոդ

```c#
public IReadOnlyDictionary<string, Type> GetByInterface<T>()
```

Վերադարձնում է [սերվերային մոդուլի](../../../extensions/Definitions/ServerSideModule/server_side_module.md) բոլոր այն դասերի անուն/[մետանկարագրությունների](https://learn.microsoft.com/en-us/dotnet/api/system.type) ցուցակը, որոնք իրականացնում են T ինտերֆեյսը։

**Պարամետրեր**


| Անվանում | Տեսակ | Լռությամբ արժեք | Նկարագրություն |
|----------|----------|----------|----------|
| T | T | - | Այն ինտերֆեյսի տեսակը, ըստ որի կատարվում է դասերի որոնումը [սերվերային մոդուլում](../../../extensions/Definitions/ServerSideModule/server_side_module.md)։ |
