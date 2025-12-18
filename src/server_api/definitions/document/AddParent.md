---
title: Document.AddParent(int) մեթոդ
---

## Նկարագիր

**Դաս՝** [Document](../document.md)

```c#
public Task AddParent(int isn)
```

Ավելացնում է տրված isn-ով փաստաթուղթը փաստաթղթի ծնող փաստաթղթերի ցուցակում։

Ծնող փաստաթղթերի ցուցակը գրանցում է տվյալների պահոցի [DOCP](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Database/DocP.html) աղյուսակում 
[IDocumentService](../../services/IDocumentService.md).[Store](../../services/IDocumentService/Store.md) ֆունկցիայով փաստաթուղթը տվյալների պահոցում գրանցելուց:

**Պարամետրեր**
| Անվանում        | Տվյալների տիպ        | Լռությամբ արժեք | Նկարագրություն |
|-----------------|----------------------|----------------|----------------|
| isn             | int                  | -              | Ծնող փաստաթղթի ներքին նույնականացման համարը։ |

