---
title: OnRefuse
parent: "Մեթոդներ"
grand_parent: "Փաստաթուղթ"
---

# Document.OnRefuse(RefuseEventArgs) մեթոդ

## Նկարագիր

**Համարժեքը 4x-ում՝** [OnRefuseDoc](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/ScriptProcs/OnRefuseDoc.html)

**Դաս՝** [Document](../Document.md)

```c#
public virtual Task OnRefuse(RefuseEventArgs args)
```

Մեթոդը կանչվում է միջուկի կողմից [IDocumentService](../../../Services/IDocument/IDocumentService.md).[Delete](../../../Services/IDocument/Methods/Delete.md) մեթոդի միջոցով փաստաթղթի ջնջելուց առաջ, եթե մեթոդի `callDelete` պարամետրի արժեքը `false` է։ 

Այս մեթոդի մշակման դեպքում իմաստ չունի մշակել [Delete](Delete.md) մեթոդը, քանի որ մեթոդը չի կանչվելու միջուկի կողմից։

**Պարամետրեր**


| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- |
| args | [RefuseEventArgs](../../../Types/Args/RefuseEventArgs.md) | - | [RefuseEventArgs](../../../Types/Args/RefuseEventArgs.md) դասի օբյեկտ։ |

