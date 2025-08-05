---
title: IDocumentService.StoreInFolder(Document, FolderElement) մեթոդ
---

## Նկարագիր

**Համարժեքը 4x-ում՝** [AsDoc.StoreInFolder](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Functions/ASDOC/StoreInFolder.html)

```c#
public void StoreInFolder(Document document, 
                          FolderElement folderElement)
```

Գրանցում է թղթապանակի տարրը տվյալների պահոցում:
Մեթոդը հարկավոր է կանչել միմիայն փաստաթղթի [Folders](../../definitions/document/Folders.md) իրադարձության մշակիչի մեջ։  
Թղթապանակի տարրերը անմիջապես չեն գրանցվում տվյալների պահոցում անմիջապես, գրանցումները կատարվում են [Folders](../../definitions/document/Folders.md) իրադարձության մշակիչի ավարտից հետո։

**Պարամետրեր**

* `document` - [Փաստաթղթի օբյեկտ](../../definitions/document.md)։
* `folderElement` - [Թղթապանակի տարր](../../types/FolderElement.md)։
