---
title: Folders
parent: "Մեթոդներ"
grand_parent: "Փաստաթուղթ"
---

# Document.Folders(FoldersEventArgs) մեթոդ

## Նկարագիր

**Համարժեքը 4x-ում՝** [Folders](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/ScriptProcs/Folders.html)

**Դաս՝** [Document](../Document.md)

```c#
public virtual Task Folders(FoldersEventArgs args)
```

Մեթոդը կանչվում է միջուկի կողմից [IDocumentService](../../../Services/IDocument/IDocumentService.md).[Store](../../../Services/IDocument/Methods/Store.md) ֆունկցիայով փաստաթուղթը տվյալների պահոցում գրանցելուց առաջ։
Կանչվում է նաև փաստաթղթերի ինդեքսավորման ժամանակ։

Թղթապանակների, ծառերի տարրերի ստեղծումը և տվյալների պահոցումը գրանցումը հարկավոր է կատարել այս մեթոդում՝ կանչելով համապատասխանաբար [IDocumentService](../../../Services/IDocument/IDocumentService.md).[StoreInFolder](../../../Services/IDocument/Methods/StoreInFolder.md) և [IDocumentService](../../../Services/IDocument/IDocumentService.md).[StoreInTree](../../../Services/IDocument/Methods/StoreInTree.md) մեթոդները։

**Պարամետրեր**


| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- |
| args | [FoldersEventArgs](../../../Types/Args/FoldersEventArgs.md) | - | [FoldersEventArgs](../../../Types/Args/FoldersEventArgs.md) դասի օբյեկտ։ |

