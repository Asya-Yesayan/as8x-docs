---
title: IDocumentService.Approve(Document, DocumentCheckLevel, string) մեթոդ
---

## Նկարագիր

**Համարժեքը 4x-ում՝** [AsDoc.Confirm](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Functions/ASDOC/Confirm.html)

**Դաս՝** [IDocumentService](../IDocumentService.md)

```c#
public Task Approve(Document document, 
                    DocumentCheckLevel checkLevel = DocumentCheckLevel.None, 
                    string logComment = "")
```

Հաստատում է փաստաթուղթը և գրանցում տվյալների պահոցում։

**Պարամետրեր**

| Անվանում        | Տվյալների տիպ        | Լռությամբ արժեք | Նկարագրություն |
|-----------------|----------------------|----------------|----------------|
| document        | Document             | -              | [Փաստաթղթի օբյեկտ](../../definitions/document.md)։ |
| checkLevel      | DocumentCheckLevel   | DocumentCheckLevel.None | [Փաստաթղթի գրանցման եղանակ](../../types/DocumentCheckLevel.md)։ |
| logComment      | string               | ""             | Փաստաթղթի պատմության մեջ գրանցվող հաղորդագրություն։ |

<!-- ### CheckAndStore

```c#
public Task CheckAndStore(Document document,
                          StoreMode mode,
                          DocumentCheckLevel checkLevel = DocumentCheckLevel.None,
                          int stateBeforeCallPostMessage = 0,
                          string logComment = "")
```

Անցկացնում է պարտադիր ստուգումներ և սահմանված ռեժիմով գրանցում փաստաթուղթը տվյալների պահոցում։

**Պարամետրեր**

| Անվանում        | Տվյալների տիպ        | Լռությամբ արժեք | Նկարագրություն |
|-----------------|----------------------|----------------|----------------|
| document        | Document             | -              | [Փաստաթղթի օբյեկտ](../../definitions/document.md)։ |
| mode            | StoreMode            | -              | [Փաստաթղթի պահպանման ռեժիմը](StoreMode.md)։ |
| checkLevel      | DocumentCheckLevel   | DocumentCheckLevel.None | [Փաստաթղթի ստուգման մակարդակը](DocumentCheckLevel.md)։ |
| stateBeforeCallPostMessage | int                  | 0              | Փաստաթղթի վիճակը PostMessage մեթոդի կանչից առաջ։ |
| logComment      | string               | ""             | Փաստաթղթի պատմության մեջ գրանցվող հաղորդագրություն։ --> |
