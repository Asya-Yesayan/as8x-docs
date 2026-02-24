---
title: LoadGrids
parent: "Մեթոդներ"
grand_parent: "Փաստաթուղթ"
---

# Document.LoadGrids(LoadGridsEventArgs) մեթոդ

## Նկարագիր

**Համարժեքը 4x-ում՝** AsDoc.LoadGrids

**Դաս՝** [Document](../Document.md)

```c#
public Task LoadGrids(LoadGridsEventArgs args)
```

Բեռնում է փաստաթղթի աղյուսակները, եթե մինչ այդ բեռնված չէին [IDocumentService](../../../Services/IDocument/IDocumentService.md).[Load](../../../Services/IDocument/Methods/Load.md) մեթդով:

**Պարամետրեր**


| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- |
| args | [LoadGridsEventArgs](../../../Types/Args/LoadGridsEventArgs.md) | - | [LoadGridsEventArgs](../../../Types/Args/LoadGridsEventArgs.md) դասի օբյեկտ։ |

