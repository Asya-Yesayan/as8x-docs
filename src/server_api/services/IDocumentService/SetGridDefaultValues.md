---
title: IDocumentService.SetGridDefaultValues(Document, Dictionary<string, HashSet<string>>) մեթոդ
---

## Նկարագիր

**Համարժեքը 4x-ում՝** [AsKernel.SetGridDefValue](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Functions/Functions/SetGridDefValue.html)

```c#
public void SetGridDefaultValues(Document document, Dictionary<string, HashSet<string>> gridColumns)
```

Վերագրում է լռությամբ արժեքներ փաստաթղթի տրված աղյուսակների տրված սյուներին։

**Պարամետրեր**

* `document` - [Փաստաթղթի օբյեկտ](../../definitions/document.md)։
* `gridColumns` - Dictionary տիպի օբյեկտ, որտեղ բանալի հանդիսանում է աղյուսակի ներքին անունը, իսկ արժեք՝ աղյուսակի այն սյուների ցուցակը, որոնց պետք է տալ լռությամբ արժեքներ։
