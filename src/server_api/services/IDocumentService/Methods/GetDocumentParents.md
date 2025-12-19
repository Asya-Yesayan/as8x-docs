---
title: IDocumentService.GetDocumentParents(int, string, DocumentChildrenOrder, string) մեթոդ
---

## Նկարագիր

**Համարժեքը 4x-ում՝** [AsDocEngine.DocParents](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Functions/Functions/DocumentsCirculation/DocParents.html)

**Դաս՝** [IDocumentService](../../IDocumentService.md)

```c#
public Task<List<(int isn, string docType)>> GetDocumentParents(int isn, 
                                                                string docType = "", 
                                                                DocumentChildrenOrder order = DocumentChildrenOrder.UnOrdered, string docTypeLike = "")
```

Վերադարձնում է փաստաթղթի ծնող փաստաթղերի isn-ների ու ներքին անունների (տեսակների) ցուցակը:

Եթե փաստաթուղթը չի ունենում ծնողներ, ապա ֆունկցիան վերադարձնում է դատարկ ցուցակ։

**Պարամետրեր**

| Անվանում    | Տվյալների տիպ              | Լռությամբ արժեք                       | Նկարագրություն |
|------------|----------------------------|--------------------------------------|----------------|
| isn        | int                        | ---                                  | Զավակ փաստաթղթի ներքին նույնականացման համարը։ |
| docType    | string                     | ""                                   | Սահմանում է ներառվող կամ չներառվող ծնող փաստաթղթերի տիպերը։ Եթե պարամետրը առկա չի, ապա վերադարձվում են բոլոր տիպի ծնող փաստաթղթերի isn-ները ու տեսակները։ Ներառվող տիպերի ցուցակը թվարկվում են `+` նշանով սկսելով՝ փաստաթղթի տեսակների անվանումները իրարից առանձնացնելով բացատներով։ Օրինակ՝ `"+KasPr MemOrd SetPr"`։ Չներառվող տիպերի ցուցակը թվարկվում են `-` նշանով սկսելով՝ փաստաթղթի տեսակների անվանումները իրարից առանձնացնելով բացատներով։ Օրինակ՝ `"-AccDoc AsTurn"`։ Միայն նշված տիպի ծնող փաստաթղթերը վերադարձնելու համար անհրաժեշտ է ավելացնել փաստաթղթի տեսակը։ Օրինակ՝ `"AccDoc"`։ |
| order      | DocumentChildrenOrder       | DocumentChildrenOrder.UnOrdered      | Ըստ ծնող փաստաթղթերի ստեղծման ամսաթվի դասավորման նշան։ <br> DocumentChildrenOrder.UnOrdered - Չի դասավորվում։ <br> DocumentChildrenOrder.CreationDateAscending - Դասավորվում է աճման կարգով։ <br> DocumentChildrenOrder.CreationDateDescending - Դասավորվում է նվազման կարգով։ |
| docTypeLike| string                     | ""                                   | Սահմանում է ներառվող կամ չներառվող ծնող փաստաթղթերի տիպերի ֆիլտր։ Եթե պարամետրը առկա չի, ապա վերադարձվում են բոլոր տիպի ծնող փաստաթղթերի isn-ները ու տեսակները։ <br> Ներառվող տիպերի ֆիլտրը `+` նշանով սկսելով։ Օրինակ՝ `"+Acc%"`։ <br> Չներառվող տիպերի ֆիլտրը `-` նշանով սկսելով։ Օրինակ՝ `"-Acc%"`։ |

