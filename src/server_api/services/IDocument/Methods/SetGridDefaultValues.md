---
title: IDocumentService.SetGridDefaultValues(Document, Dictionary<string, HashSet<string>>) մեթոդ
---

## Նկարագիր

**Համարժեքը 4x-ում՝** [AsKernel.SetGridDefValue](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Functions/Functions/SetGridDefValue.html)

**Դաս՝** [IDocumentService](../IDocumentService.md)

```c#
public void SetGridDefaultValues(Document document, 
                                 Dictionary<string, 
                                 HashSet<string>> gridColumns)
```

Վերագրում է լռությամբ արժեքներ փաստաթղթի տրված աղյուսակների տրված սյուներին։

**Պարամետրեր**

| Անվանում        | Տվյալների տիպ        | Լռությամբ արժեք | Նկարագրություն |
|-----------------|----------------------|----------------|----------------|
| document        | Document             | -              | [Փաստաթղթի օբյեկտ](../../../Definitions/Document/Document.md)։ |
| gridColumns     | Dictionary<string, HashSet<string>> | -              | Dictionary տիպի օբյեկտ, որտեղ բանալի հանդիսանում է աղյուսակի ներքին անունը, իսկ արժեք՝ աղյուսակի այն սյուների ցուցակը, որոնց պետք է տալ լռությամբ արժեքներ։ |
