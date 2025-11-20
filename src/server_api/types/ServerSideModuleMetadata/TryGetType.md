---
title: ServerSideModuleMetadata.TryGetType(string, Type) մեթոդ
---

```c#
public bool TryGetType(string typeName, out Type type)
```

Ստուգում է [սերվերային մոդուլում](../../../extensions/definitions/server_side_module.md) տրված անունով դասի առկայությունը, առկայության դեպքում վերադարձնում է true և դասի [մետանկարագրությունը](https://learn.microsoft.com/en-us/dotnet/api/system.type), հակառակ դեպքում՝ false և null:

**Պարամետրեր**

| Անվանում | Տեսակ | Լռությամբ արժեք | Նկարագրություն |
|----------|----------|----------|----------|
| typeName | string | - | [Սերվերային մոդուլում](../../../extensions/definitions/server_side_module.md) որոնվող դասի անունը։ |
| type | [Type](https://learn.microsoft.com/en-us/dotnet/api/system.type) | null | Վերադարձնում է դասի [մետանկարագրությունը](https://learn.microsoft.com/en-us/dotnet/api/system.type): |

## Օրինակ

```c#
private async Task<T> CreateCustomType<T>(string moduleName, string typeName)
{
    // ստանում է տրված moduleName ներքին անունով (կոդով) սերվերային մոդուլի նկարագրությունը։
    var moduleMetadata = await ServerSideModuleHelper.GetServerSideModuleMetadata(dBService, moduleName);

    // ստուգում է սերվերային մոդուլում typeName անունով class-ի առկայությունը,
    // բացակայության դեպքում առաջանում է սխալ։
    if (!moduleMetadata.TryGetType(typeName, out var customType))
    {
        throw new InvalidOperationException(string.Format("{0} տիպը գոյություն չունի {1} սերվերային մոդուում։", typeName, moduleName));
    }
    // ստեղծում է typeName տիպի class-ի instance։
    return (T)ActivatorUtilities.CreateInstance(serviceProvider, customType);
}
```

