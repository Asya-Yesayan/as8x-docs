---
title: AddParent(int)
parent: "Մեթոդներ"
grand_parent: "Փաստաթուղթ"
---

# Document.AddParent(int) մեթոդ

## Նկարագիր

**Դաս՝** [Document](../Document.md)

```c#
public Task AddParent(int isn)
```

Ավելացնում է տրված isn-ով փաստաթուղթը փաստաթղթի ծնող փաստաթղթերի ցուցակում։

Ծնող փաստաթղթերի ցուցակը գրանցում է տվյալների պահոցի [DOCP](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Database/DocP.html) աղյուսակում 
[IDocumentService](../../../Services/IDocument/IDocumentService.md).[Store](../../../Services/IDocument/Methods/Store.md) ֆունկցիայով փաստաթուղթը տվյալների պահոցում գրանցելուց:

**Պարամետրեր**


| Անվանում        | Տվյալների տիպ        | Լռությամբ արժեք | Նկարագրություն |
|-----------------|----------------------|----------------|----------------|
| isn             | int                  | -              | Ծնող փաստաթղթի ներքին նույնականացման համարը։ |

