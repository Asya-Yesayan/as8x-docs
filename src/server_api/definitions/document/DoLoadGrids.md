---
title: Document.DoLoadGrids(LoadGridsEventArgs) մեթոդ
---

## Նկարագիր

**Համարժեքը 4x-ում՝** [LoadGrid](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/ScriptProcs/LoadGrid.html)

```c#
protected virtual Task DoLoadGrids(LoadGridsEventArgs args)
```

Մեթոդը կանչվում է միջուկի կողմից [IDocumentService](../../services/IDocumentService.md).[Load](../../services/IDocumentService/Load.md) մեթոդի միջոցով փաստաթուղթը բեռնելիս։

Նախատեսված է [DOCSG](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Database/DocsG.html) աղյուսակում չպահվող փաստաթղթի աղյուսակների բեռնման տրամաբանության սահմանման համար։

Մեթոդը չմշակելու դեպքում բեռնվելու են [DOCSG](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Database/DocsG.html) աղյուսակում պահվող փաստաթղթի աղյուսակները։

**Պարամետրեր**

* `args` - LoadGridsEventArgs տիպի օբյեկտ, որը պարունակում է [GridLoadMode](../../types/GridLoadMode.md) տիպի օբյեկտ, որը սահմանում է փաստաթղթի աղյուսակների բեռնման ռեժիմը։

