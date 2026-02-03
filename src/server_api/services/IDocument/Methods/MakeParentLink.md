---
title: MakeParentLink(Document, int, bool)
parent: "Մեթոդներ"
grand_parent: "IDocumentService"
---

# IDocumentService.MakeParentLink(Document, int, bool) մեթոդ

## Նկարագիր

**Համարժեքը 4x-ում՝** [AsDocEngine.MakeParentLink](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Functions/Functions/DocumentsCirculation/MakeParentLink.html)

**Դաս՝** [IDocumentService](../IDocumentService.md)

```c#
public Task MakeParentLink(Document document, 
                           int parentIsn, 
                           bool removeExistingLinks = true)
```

Ընթացիկ փաստաթղթի համար սահմանում է ծնողի հետ կապ։ 
Ընթացիկ փաստաթուղթը կարող է դեռ գրանցված չլինել տվյալների պահոցում։

Մեթոդը նախատեսված է [Action](../../../Definitions/Document/Methods/Action.md) իրադարձության մշակիչում կանչելու համար։  
Եթե փաստաթուղթը տվյալների պահոցում դեռ գրանցված չէ, ապա այս մեթոդի կանչից հետո ծնող-զավակ կապերը անմիջապես չեն գրանցվում տվյալների պահոցում, դրանց գրանցումը կատարվում է [Action](../../../Definitions/Document/Methods/Action.md) իրադարձության մշակիչի ավարտից հետո։

**Պարամետրեր**

| Անվանում            | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
|--------------------|---------------|----------------|----------------|
| document           | Document      |     -           | [Փաստաթղթի օբյեկտ](../../../Definitions/Document/Document.md)։ |
| parentIsn          | int           |     -           | Ծնող փաստաթղթի ներքին նույնականացման համար։ |
| removeExistingLinks | bool          | true           | `true` արժեքի դեպքում ստեղծվող կապը լինում է միակը և նախորդ եղած կապերը հեռացվում են։ `false` արժեքի դեպքում ծնողների ցուցակում ավելանում է ևս մեկը։ |
