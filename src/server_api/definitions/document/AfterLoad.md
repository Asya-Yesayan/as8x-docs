---
title: Document.AfterLoad(AfterLoadEventArgs) մեթոդ
---

## Նկարագիր

Համարժեքը 4x-ում։ [AfterLoad](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/ScriptProcs/AfterLoad.html)

```c#
public virtual Task AfterLoad(AfterLoadEventArgs args)
```

Մեթոդը կանչվում է միջուկի կողմից [IDocumentService](../../services/IDocumentService.md).[Load](../../services/IDocumentService/Load.md) ֆունկցիայով փաստաթուղթը տվյալների պահոցից բեռնելուց անմիջապես հետո։

Մեթոդում սովորաբար փաստաթղթի դաշտերին տրվում են ժամանակավոր արժեքներ։

Հանդիսանում է 4x համակարգում նկարագրված [AfterLoad](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/ScriptProcs/AfterLoad.html) իրադարձության համարժեքը:

