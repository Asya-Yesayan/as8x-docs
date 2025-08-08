---
title: Document.AfterCreate(AfterCreateEventArgs) մեթոդ
---

## Նկարագիր

**Համարժեքը 4x-ում՝** [AfterCreate](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/ScriptProcs/AfterCreate.html)

**Դաս՝** [Document](../document.md)

```c#
public virtual Task AfterCreate(AfterCreateEventArgs args)
```

Մեթոդը կանչվում է միջուկի կողմից [IDocumentService](../../services/IDocumentService.md).[Create](../../services/IDocumentService/Create.md) ֆունկցիայով փաստաթղթի օբյեկտը ստեղծելուց հետո։

Փաստաթղթի ներմուծման ժամանակ մեթոդը չի կանչվում։

