---
title: ServerSideModuleMetadata.GetByAttribute() մեթոդ
---

```c#
public IReadOnlyDictionary<string, Type> GetByAttribute<T>() where T : Attribute
```

Վերադարձնում է [սերվերային մոդուլի](../../../extensions/definitions/server_side_module.md) բոլոր այն դասերի անուն/[մետանկարագրությունների](https://learn.microsoft.com/en-us/dotnet/api/system.type) ցուցակը, որոնց վրա կիրառված է T ատրիբուտը։

**Պարամետրեր**


| Անվանում | Տեսակ | Լռությամբ արժեք | Նկարագրություն |
|----------|----------|----------|----------|
| T | [Attribute](https://learn.microsoft.com/en-us/dotnet/api/system.attribute) | - | Այն ատրիբուտի տեսակը, ըստ որի կատարվում է դասերի որոնումը [սերվերային մոդուլում](../../../extensions/definitions/server_side_module.md)։ |



