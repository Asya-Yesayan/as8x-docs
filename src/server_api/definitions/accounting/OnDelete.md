---
title: Accounting.OnDelete(OnDeleteEventArgs) մեթոդ
---

## Նկարագիր

**Համարժեքը 4x-ում՝** [OnDelete](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/ScriptProcs/OnDelete.html)

```c#
public virtual Task OnDelete(OnDeleteEventArgs args);
```

OnDelete մեթոդը կանչվում է միջուկի կողմից [DocumentService](../../services/IDocumentService.md) դասի [HiDelete](../../services/IDocumentService/HiDelete.md), [HiDeleteAll](../../services/IDocumentService/HiDeleteAll.md) մեթոդներով հաշվառումները ջնջելիս կամ փաստաթուղթը [Delete](../../services/IDocumentService/Delete.md) մեթոդով իր հաշվառումների հետ ջնջելիս։

**Պարամետրեր**

* `args` - Հեռացման ենթակա հաշվառումը նկարագրող դասը։
