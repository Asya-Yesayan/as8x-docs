---
title: Document.Store(DocumentCheckLevel, string) մեթոդ
---

## Նկարագիր

**Համարժեքը 4x-ում՝** [AsDoc.Store](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Functions/ASDOC/Store.html)

```c#
public Task Store(DocumentCheckLevel checkLevel = DocumentCheckLevel.None, 
                  string logComment = "")
```

Կատարում է պարտադիր ստուգումներ և գրանցում փաստաթուղթը տվյալների պահոցում։

**Պարամետրեր**

* `checkLevel` - [Փաստաթղթի գրանցման եղանակ](../../types/DocumentCheckLevel.md), որը որոշում է թե ինչ ստանդարտ ստուգումներ և մշակիչներ ([Action](Action.md), [Validate](Validate.md)) կարող են անջատվել կամ միացվել փաստաթղթի գրանցման ընթացքում, ինչպես նաև, թե ինչ լրացուցիչ մշակիչներ պետք է գործարկվեն։
* `logComment` - [Փաստաթղթի պատմության](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Database/DocLog.html) մեջ գրվող տեքստը։

