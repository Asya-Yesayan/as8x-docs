---
title: Store(Document, DocumentCheckLevel, string)
parent: "Մեթոդներ"
grand_parent: "IDocumentService"
---

# IDocumentService.Store(Document, DocumentCheckLevel, string) մեթոդ

## Նկարագիր

**Համարժեքը 4x-ում՝** [AsDoc.Store](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Functions/ASDOC/Store.html)

**Դաս՝** [IDocumentService](../IDocumentService.md)

```c#
public Task Store(Document document, 
                  DocumentCheckLevel checkLevel = DocumentCheckLevel.None, 
                  string logComment = "")
```

Անցկացնում է պարտադիր ստուգումներ և գրանցում փաստաթուղթը տվյալների պահոցում։

**Պարամետրեր**

| Անվանում        | Տվյալների տիպ        | Լռությամբ արժեք | Նկարագրություն |
|-----------------|----------------------|----------------|----------------|
| document        | Document             | -              | [Փաստաթղթի օբյեկտ](../../../Definitions/Document/Document.md)։ |
| checkLevel      | DocumentCheckLevel   | DocumentCheckLevel.None | [Փաստաթղթի ստուգման մակարդակը](../../../Types/DocumentCheckLevel.md)։ |
| logComment      | string               | ""             | Փաստաթղթի պատմության մեջ գրանցվող հաղորդագրությունը։ |
