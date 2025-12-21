---
title: Accounting.OnAdd(OnAddEventArgs) մեթոդ
---

## Նկարագիր

**Համարժեքը 4x-ում՝** [OnAdd](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/ScriptProcs/OnAdd.html)

**Դաս՝** [Accounting](../../Accounting.md)

```c#
public virtual Task OnAdd(OnAddEventArgs args);
```

Մեթոդը կանչվում է միջուկի կողմից [DocumentService](../../../services/IDocumentService.md) դասի [StoreFact](../../../services/IDocumentService/Methods/StoreFact.md) մեթոդով հաշվառումները գրանցելիս։

**Պարամետրեր**


| Անվանում        | Տվյալների տիպ        | Լռությամբ արժեք | Նկարագրություն |
|-----------------|----------------------|----------------|----------------|
| args            | OnAddEventArgs       | -              | Գրանցման ենթակա հաշվառումը նկարագրող դասը։ |
