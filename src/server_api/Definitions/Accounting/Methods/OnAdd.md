---
title: OnAdd
parent: "Մեթոդներ"
grand_parent: "Հաշվառում"
---

## Նկարագիր

**Համարժեքը 4x-ում՝** [OnAdd](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/ScriptProcs/OnAdd.html)

**Դաս՝** [Accounting](../Accounting.md)

```c#
public virtual Task OnAdd(OnAddEventArgs args);
```

Մեթոդը կանչվում է միջուկի կողմից [DocumentService](../../../Services/IDocument/IDocumentService.md) դասի [StoreFact](../../../Services/IDocument/Methods/StoreFact.md) մեթոդով հաշվառումները գրանցելիս։

**Պարամետրեր**


| Անվանում        | Տվյալների տիպ        | Լռությամբ արժեք | Նկարագրություն |
|-----------------|----------------------|----------------|----------------|
| args            | OnAddEventArgs       | -              | Գրանցման ենթակա հաշվառումը նկարագրող դասը։ |
