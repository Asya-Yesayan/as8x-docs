---
title: IDocumentChangeRequestService.IsEmpty(DocumentChangeRequest, bool) մեթոդ
---

## Նկարագիր

**Համարժեքը 4x-ում՝** DocChangeRequest.IsEmpty

**Դաս՝** [IDocumentChangeRequestService](../../IDocumentChangeRequestService/IDocumentChangeRequestService.md)

```c#
public bool IsEmpty(DocumentChangeRequest dcr, 
                    bool includeHiddenFields = true)
```

Ստուգում է [փաստաթղթի փոփոխման հայտի](../../../../server_api/Types/DocumentChangeRequest.md) դատարկությունը։

[Փաստաթղթի փոփոխման հայտը](../../../../server_api/Types/DocumentChangeRequest.md) համարվում է դատարկ, եթե փաստաթղթի ոչ մի բաղադրիչ (դաշտ, աղյուսակ, նկար, մեմո) չի փոփոխվել:

**Պարամետրեր**


| Անվանում | Տեսակ | Լռությամբ արժեք | Նկարագրություն |
|-----------|-------|-----------------|----------------|
| `dcr` | [DocumentChangeRequest](../../../../server_api/Types/DocumentChangeRequest.md) | – | [Փաստաթղթի փոփոխման հայտը](../../../../server_api/Types/DocumentChangeRequest.md)։ |
| `includeHiddenFields` | bool | true | Ստուգման ընթացքում անտեսանելի դաշտերի ներառման հայտանիշ։ |
