---
title: AddDocument
parent: "Մեթոդներ"
grand_parent: "DataView"
---

# DataView.AddDocument(string docType) մեթոդ

## Նկարագիր

**Դաս՝** [DataView](../DataView.md)

```c#
public virtual void AddDocument(string docType)
```

Ստեղծում և ցուցադրում է նոր փաստաթուղթ:

Կանչում է `DocumentHelper.Create(docType, true).Show(false, Panel.Id)`:

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- |
| docType | string | - | Ստեղծվող փաստաթղթի տիպի անունը (ոչ-`null`, ոչ-empty): Պետք է ներկա լինի `AllowedDocumentsToAdd`-ում: |

