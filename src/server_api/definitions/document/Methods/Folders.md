---
title: Document.Folders(FoldersEventArgs) մեթոդ
---

## Նկարագիր

**Համարժեքը 4x-ում՝** [Folders](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/ScriptProcs/Folders.html)

**Դաս՝** [Document](../../Document.md)

```c#
public virtual Task Folders(FoldersEventArgs args)
```

Մեթոդը կանչվում է միջուկի կողմից [IDocumentService](../../../services/IDocumentService.md).[Store](../../../services/IDocumentService/Methods/Store.md) ֆունկցիայով փաստաթուղթը տվյալների պահոցում գրանցելուց առաջ։
Կանչվում է նաև փաստաթղթերի ինդեքսավորման ժամանակ։

Թղթապանակների, ծառերի տարրերի ստեղծումը և տվյալների պահոցումը գրանցումը հարկավոր է կատարել այս մեթոդում՝ կանչելով համապատասխանաբար [IDocumentService](../../../services/IDocumentService.md).[StoreInFolder](../../../services/IDocumentService/Methods/StoreInFolder.md) և [IDocumentService](../../../services/IDocumentService.md).[StoreInTree](../../../services/IDocumentService/Methods/StoreInTree.md) մեթոդները։

**Պարամետրեր**


| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- |
| args | [FoldersEventArgs](../../../types/args/FoldersEventArgs.md) | - | [FoldersEventArgs](../../../types/args/FoldersEventArgs.md) դասի օբյեկտ։ |

