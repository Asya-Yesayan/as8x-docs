---
title: IDocumentService.StoreInTree(Document, TreeElement) մեթոդ
---

## Նկարագիր

**Համարժեքը 4x-ում՝** [AsDoc.StoreInFolder](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Functions/ASDOC/StoreInFolder.html)

**Դաս՝** [IDocumentService](../IDocumentService.md)

```c#
public void StoreInTree(Document document, 
                        TreeElement treeElement)
```

Գրանցում է ծառի տարրը տվյալների պահոցում:
Մեթոդը հարկավոր է կանչել միմիայն փաստաթղթի [Folders](../../definitions/document/Folders.md) իրադարձության մշակիչի մեջ։  
Ծառի տարրերը անմիջապես չեն գրանցվում տվյալների պահոցում անմիջապես, գրանցումները կատարվում են [Folders](../../definitions/document/Folders.md) իրադարձության մշակիչի ավարտից հետո։

**Պարամետրեր**

* `document` - [Փաստաթղթի օբյեկտ](../../definitions/document.md)։
* `treeElement` - [Ծառի տարր](../../types/TreeElement.md):
