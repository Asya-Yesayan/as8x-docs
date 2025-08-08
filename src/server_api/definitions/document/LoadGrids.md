---
title: Document.LoadGrids(LoadGridsEventArgs) մեթոդ
---

## Նկարագիր

**Համարժեքը 4x-ում՝** AsDoc.LoadGrids

**Դաս՝** [Document](../document.md)

```c#
public Task LoadGrids(LoadGridsEventArgs args)
```

Բեռնում է փաստաթղթի աղյուսակները, եթե մինչ այդ բեռնված չէին [IDocumentService](../../services/IDocumentService.md).[Load](../../services/IDocumentService/Load.md) մեթդով:

**Պարամետրեր**

* `args` - LoadGridsEventArgs տիպի օբյեկտ, որը պարունակում է [GridLoadMode](../../types/GridLoadMode.md) տիպի օբյեկտ, որը սահմանում է փաստաթղթի աղյուսակների բեռնման ռեժիմը։

