---
title: Accounting.OnDelete(OnDeleteEventArgs) մեթոդ
---

## Նկարագիր

**Համարժեքը 4x-ում՝** [OnDelete](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/ScriptProcs/OnDelete.html)

**Դաս՝** [Accounting](../../Accounting.md)

```c#
public virtual Task OnDelete(OnDeleteEventArgs args);
```

OnDelete մեթոդը կանչվում է միջուկի կողմից [DocumentService](../../../services/IDocumentService.md) դասի [HiDelete](../../../services/IDocumentService/Methods/HiDelete.md), [HiDeleteAll](../../../services/IDocumentService/Methods/HiDeleteAll.md) մեթոդներով հաշվառումները ջնջելիս կամ փաստաթուղթը [Delete](../../../services/IDocumentService/Methods/Delete.md) մեթոդով իր հաշվառումների հետ ջնջելիս։

**Պարամետրեր**


| Անվանում        | Տվյալների տիպ        | Լռությամբ արժեք | Նկարագրություն |
|-----------------|----------------------|----------------|----------------|
| args            | OnDeleteEventArgs    | -              | Հեռացման ենթակա հաշվառումը նկարագրող դասը։ |
