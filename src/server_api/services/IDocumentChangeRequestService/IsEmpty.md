---
title: IDocumentChangeRequestService.IsEmpty(DocumentChangeRequest, bool) մեթոդ
---

## Նկարագիր

**Համարժեքը 4x-ում՝** DocChangeRequest.IsEmpty

**Դաս՝** [IDocumentChangeRequestService](../IDocumentChangeRequestService.md)

```c#
public bool IsEmpty(DocumentChangeRequest dcr, 
                    bool includeHiddenFields = true)
```

Ստուգում է [փաստաթղթի փոփոխման հայտի](../../../server_api/types/DocumentChangeRequest.md) դատարկությունը։

[Փաստաթղթի փոփոխման հայտը](../../../server_api/types/DocumentChangeRequest.md) համարվում է դատարկ, եթե փաստաթղթի ոչ մի բաղադրիչ (դաշտ, աղյուսակ, նկար, մեմո) չի փոփոխվել:

**Պարամետրեր**

* `dcr` - [Փաստաթղթի փոփոխման հայտը](../../../server_api/types/DocumentChangeRequest.md)։
* `includeHiddenFields` - Պարամետրի **true** արժեքի դեպքում ստուգումը կներառի նաև փաստաթղթի անտեսանելի դաշտերը։
