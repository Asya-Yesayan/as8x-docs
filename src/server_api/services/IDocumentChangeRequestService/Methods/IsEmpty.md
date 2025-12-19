---
title: IDocumentChangeRequestService.IsEmpty(DocumentChangeRequest, bool) մեթոդ
---

## Նկարագիր

**Համարժեքը 4x-ում՝** DocChangeRequest.IsEmpty

**Դաս՝** [IDocumentChangeRequestService](../../IDocumentChangeRequestService.md)

```c#
public bool IsEmpty(DocumentChangeRequest dcr, 
                    bool includeHiddenFields = true)
```

Ստուգում է [փաստաթղթի փոփոխման հայտի](../../../definitions/document/Properties/DocumentChangeRequest.md) դատարկությունը։

[Փաստաթղթի փոփոխման հայտը](../../../definitions/document/Properties/DocumentChangeRequest.md) համարվում է դատարկ, եթե փաստաթղթի ոչ մի բաղադրիչ (դաշտ, աղյուսակ, նկար, մեմո) չի փոփոխվել:

**Պարամետրեր**


| Անվանում | Տեսակ | Լռությամբ արժեք | Նկարագրություն |
|-----------|-------|-----------------|----------------|
| `dcr` | [DocumentChangeRequest](../../../definitions/document/Properties/DocumentChangeRequest.md) | – | [Փաստաթղթի փոփոխման հայտը](../../../definitions/document/Properties/DocumentChangeRequest.md)։ |
| `includeHiddenFields` | bool | true | Ստուգման ընթացքում անտեսանելի դաշտերի ներառման հայտանիշ։ |
