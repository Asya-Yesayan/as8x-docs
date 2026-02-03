---
title: GetDocumentChildren(int, string, DocumentChildrenOrder, string)
parent: "Մեթոդներ"
grand_parent: "IDocumentService"
---

# IDocumentService.GetDocumentChildren(int, string, DocumentChildrenOrder, string) մեթոդ

## Նկարագիր

**Համարժեքը 4x-ում՝** [AsDocEngine.DocChildren](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Functions/Functions/DocumentsCirculation/DocChildren.html)

**Դաս՝** [IDocumentService](../IDocumentService.md)

```c#
public Task<List<(int isn, string docType)>> GetDocumentChildren(int isn, 
                                                                 string docType = "", 
                                                                 DocumentChildrenOrder order = DocumentChildrenOrder.UnOrdered, 
                                                                 string docTypeLike = "")
```

Վերադարձնում է փաստաթղթի զավակ փաստաթղերի isn-ների ու ներքին անունների (տեսակների) ցուցակը:

Եթե փաստաթուղթը չի ունենում զավակներ, ապա ֆունկցիան վերադարձնում է դատարկ ցուցակ։

**Պարամետրեր**

| Անվանում    | Տվյալների տիպ           | Լռությամբ արժեք | Նկարագրություն |
|------------|------------------------|----------------|----------------|
| isn        | int                    | ---            | Ծնող փաստաթղթի ներքին նույնականացման համարը։ |
| docType    | string                 | ""             | Սահմանում է ներառվող կամ չներառվող զավակ փաստաթղթերի տիպերը։ Եթե պարամետրը առկա չի, ապա վերադարձվում են բոլոր տիպի զավակ փաստաթղթերի isn-ները ու տեսակները։ Ներառվող տիպերի ցուցակը թվարկվում են `+` նշանով սկսելով՝ փաստաթղթի տեսակների անվանումները իրարից առանձնացնելով բացատներով։ Օրինակ՝ `"+KasPr MemOrd SetPr"`։ Չներառվող տիպերի ցուցակը թվարկվում են `-` նշանով սկսելով՝ փաստաթղթի տեսակների անվանումները իրարից առանձնացնելով բացատներով։ Օրինակ՝ `"-AccDoc AsTurn"`։ Միայն նշված տիպի զավակ փաստաթղթերը վերադարձնելու համար անհրաժեշտ է ավելացնել փաստաթղթի տեսակը։ Օրինակ՝ `"AccDoc"`: |
| order      | DocumentChildrenOrder  | DocumentChildrenOrder.UnOrdered | Ըստ զավակ փաստաթղթերի ստեղծման ամսաթվի դասավորման նշան։ <br> `DocumentChildrenOrder.UnOrdered` - Չի դասավորվում։ <br> `DocumentChildrenOrder.CreationDateAscending` - Դասավորվում է աճման կարգով։ <br> `DocumentChildrenOrder.CreationDateDescending` - Դասավորվում է նվազման կարգով։ |
| docTypeLike| string                 | ""             | Սահմանում է ներառվող կամ չներառվող զավակ փաստաթղթերի տիպերի ֆիլտր։ Եթե պարամետրը առկա չի, ապա վերադարձվում են բոլոր տիպի զավակների isn-ները ու տեսակները։ <br> Ներառվող տիպերի ֆիլտրը `+` նշանով սկսելով։ Օրինակ՝ `"+Acc%"`։ <br> Չներառվող տիպերի ֆիլտրը `-` նշանով սկսելով։ Օրինակ՝ `"-Acc%"`։ |
