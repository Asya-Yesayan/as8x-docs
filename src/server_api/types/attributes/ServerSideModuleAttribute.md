---
title: "ServerSideModuleAttribute" 
---

**ServerSideModule** ատրիբուտը նախատեսված է [սերվերային մոդուլը](../../../extensions/definitions/server_side_module.md) նկարագրող դասի վրա դնելու համար։

```c#
[AttributeUsage(AttributeTargets.Class, AllowMultiple = false)]
public class ServerSideModuleAttribute
```

## Հատկություններ

| Անվանում | Տեսակ | Լռությամբ արժեք | Նկարագրություն |
|-----------|-------|-----------------|----------------|
| `Name` | string | [Սերվերային մոդուլը](../../../extensions/definitions/server_side_module.md) նկարագրող դասի անունը։ | [Սերվերային մոդուլի](../../../extensions/definitions/server_side_module.md) ներքին անունը (կոդը)։ |

**Օրինակ**

```c#
[ServerSideModule("Logic")]
public class CustomLogic
{

}
```