---
title: Document.DoLoadGrids(LoadGridsEventArgs) մեթոդ
---

## Նկարագիր

**Համարժեքը 4x-ում՝** [LoadGrid](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/ScriptProcs/LoadGrid.html)

**Դաս՝** [Document](../Document.md)

```c#
protected virtual Task DoLoadGrids(LoadGridsEventArgs args)
```

Մեթոդը կանչվում է միջուկի կողմից [IDocumentService](../../../Services/IDocument/IDocumentService.md).[Load](../../../Services/IDocument/Methods/Load.md) մեթոդի միջոցով փաստաթուղթը բեռնելիս։

Նախատեսված է [DOCSG](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Database/DocsG.html) աղյուսակում չպահվող փաստաթղթի աղյուսակների բեռնման տրամաբանության սահմանման համար։

Մեթոդը չմշակելու դեպքում բեռնվելու են [DOCSG](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Database/DocsG.html) աղյուսակում պահվող փաստաթղթի աղյուսակները։

**Պարամետրեր**


| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- |
| args | [LoadGridsEventArgs](../../../Types/Args/LoadGridsEventArgs.md) | - | [LoadGridsEventArgs](../../../Types/Args/LoadGridsEventArgs.md) դասի օբյեկտ։ |

