---
title: Document.DeserializeComplexObjects(DeserializeComplexObjectsEventArgs) մեթոդ
---

## Նկարագիր

Համարժեքը 4x-ում։ DeserializeComplexObjects

```c#
public virtual Task DeserializeComplexObjects(DeserializeComplexObjectsEventArgs args)
```

Մեթոդը անհրաժեշտ է մշակել այն դեպքում, երբ 4X-ական փաստաթղթի [Properties](Properties.md) հատկությունով եկած բարդ օբյեկտները անհրաժեշտ է բերել համապատասխան c#-ական տիպերի 8X-ում։

**Օրինակ**
```c#
public override async Task DeserializeComplexObjects(DeserializeComplexObjectsEventArgs args)
{
  foreach (var key in args.ComplexObjectsJson.Keys)
  {
    if (key.StartsWith("StmKey"))
    {
      this.Properties.Add(key, await this.DocumentService.DeserializeRequestBody(args.Deserialize<DocumentModel>(key)));
    }
  }
}
```

