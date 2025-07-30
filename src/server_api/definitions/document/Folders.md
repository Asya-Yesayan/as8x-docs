---
title: Document.Folders(FoldersEventArgs) մեթոդ
---

## Նկարագիր

Համարժեքը 4x-ում։ [Folders](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/ScriptProcs/Folders.html)

```c#
public virtual Task Folders(FoldersEventArgs args)
```

Մեթոդը կանչվում է միջուկի կողմից [IDocumentService](../../services/IDocumentService.md).[Store](../../services/IDocumentService/Store.md) ֆունկցիայով փաստաթուղթը տվյալների պահոցում գրանցելուց առաջ։
Կանչվում է նաև փաստաթղթերի ինդեքսավորման ժամանակ։

Թղթապանակների, ծառերի տարրերի ստեղծումը և տվյալների պահոցումը գրանցումը հարկավոր է կատարել այս մեթոդում՝ կանչելով համապատասխանաբար [IDocumentService](../../services/IDocumentService.md).[StoreInFolder](../../services/IDocumentService/StoreInFolder.md) և [IDocumentService](../../services/IDocumentService.md).[StoreInTree](../../services/IDocumentService/StoreInTree.md) մեթոդները։

