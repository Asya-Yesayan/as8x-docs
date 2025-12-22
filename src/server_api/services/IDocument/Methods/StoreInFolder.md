---
title: IDocumentService.StoreInFolder(Document, FolderElement) մեթոդ
---

## Նկարագիր

**Համարժեքը 4x-ում՝** [AsDoc.StoreInFolder](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Functions/ASDOC/StoreInFolder.html)

**Դաս՝** [IDocumentService](../IDocument/IDocumentService.md)

```c#
public void StoreInFolder(Document document, 
                          FolderElement folderElement)
```

Գրանցում է թղթապանակի տարրը տվյալների պահոցում:
Մեթոդը հարկավոր է կանչել միմիայն փաստաթղթի [Folders](../../../Definitions/Document/Methods/Folders.md) իրադարձության մշակիչի մեջ։  
Թղթապանակի տարրերը անմիջապես չեն գրանցվում տվյալների պահոցում անմիջապես, գրանցումները կատարվում են [Folders](../../../Definitions/Document/Methods/Folders.md) իրադարձության մշակիչի ավարտից հետո։

**Պարամետրեր**

| Անվանում        | Տվյալների տիպ        | Լռությամբ արժեք | Նկարագրություն |
|-----------------|----------------------|----------------|----------------|
| document        | Document             | -              | [Փաստաթղթի օբյեկտ](../../Definitions/Document/Document.md)։ |
| folderElement   | FolderElement        | -              | [Թղթապանակի տարր](../../Types/FolderElement.md)։ |
