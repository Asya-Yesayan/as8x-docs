---
title: "ServerSideModuleAttribute" 
---

**ServerSideModule** ատրիբուտը նախատեսված է [սերվերային մոդուլը](../../Extensions/Definitions/ServerSideModule/server_side_module.md) նկարագրող դասի վրա դնելու համար։

```c#
[AttributeUsage(AttributeTargets.Class, AllowMultiple = false)]
public class ServerSideModuleAttribute
```

## Հատկություններ

| Անվանում | Տեսակ | Լռությամբ արժեք | Նկարագրություն |
|-----------|-------|-----------------|----------------|
| `Name` | string | [Սերվերային մոդուլը](../../Extensions/Definitions/ServerSideModule/server_side_module.md) նկարագրող դասի անունը։ | [Սերվերային մոդուլի](../../Extensions/Definitions/ServerSideModule/server_side_module.md) ներքին անունը (կոդը)։ |

**Օրինակ**

```c#
[ServerSideModule("Logic")]
public class CustomLogic
{

}
```