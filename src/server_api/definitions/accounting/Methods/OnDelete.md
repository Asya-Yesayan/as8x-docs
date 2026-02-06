---
title: OnDelete
parent: "Մեթոդներ"
grand_parent: "Հաշվառում"
---

## Նկարագիր

**Համարժեքը 4x-ում՝** [OnDelete](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/ScriptProcs/OnDelete.html)

**Դաս՝** [Accounting](../Accounting.md)

```c#
public virtual Task OnDelete(OnDeleteEventArgs args);
```

OnDelete մեթոդը կանչվում է միջուկի կողմից [DocumentService](../../../Services/IDocument/IDocumentService.md) դասի [HiDelete](../../../Services/IDocument/Methods/HiDelete.md), [HiDeleteAll](../../../Services/IDocument/Methods/HiDeleteAll.md) մեթոդներով հաշվառումները ջնջելիս կամ փաստաթուղթը [Delete](../../../Services/IDocument/Methods/Delete.md) մեթոդով իր հաշվառումների հետ ջնջելիս։

**Պարամետրեր**


| Անվանում        | Տվյալների տիպ        | Լռությամբ արժեք | Նկարագրություն |
|-----------------|----------------------|----------------|----------------|
| args            | OnDeleteEventArgs    | -              | Հեռացման ենթակա հաշվառումը նկարագրող դասը։ |
