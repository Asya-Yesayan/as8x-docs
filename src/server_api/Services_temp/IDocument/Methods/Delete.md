---
title: Delete
parent: "Մեթոդներ"
grand_parent: "IDocumentService"
---

# IDocumentService.Delete մեթոդ

## Նկարագիր

**Համարժեքը 4x-ում՝** [AsDocEngine.DeleteDoc](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Functions/Functions/DocumentsCirculation/DeleteDoc.html)

**Դաս՝** [IDocumentService](../IDocumentService.md)

## Գերբեռնումներ

| Անվանում | Նկարագրություն |
|--|--|
| [Delete(int, bool, string, bool, bool)](#idocumentservicedeleteint-bool-string-bool-bool-մեթոդ) | Ջնջում է փաստաթուղթը համակարգից։ |
| [Delete(Document, bool, string, bool, bool)](#idocumentservicedeletedocument-bool-string-bool-bool-մեթոդ) | Ջնջում է փաստաթուղթը համակարգից։ |

### IDocumentService.Delete(int, bool, string, bool, bool) մեթոդ

```c#
public Task<DeletedDoc> Delete(int isn,
                               bool fullDelete,
                               string comment,
                               bool callDelete = true,
                               bool inheritedDelete = false)
```

Ջնջում է փաստաթուղթը համակարգից։  
Ջնջվող փաստաթղթերի համար առաջանում է [Delete](../../../Definitions/Document/Methods/Delete.md) իրադարձությունը, ապա փաստաթղթի վիճակը դառնում է 999, որից հետո այդ փաստաթուղթը հայտնվում է ջնջված փաստաթղթերի թղթապանակում։ 
Ջնջման ժամանակ հեռացվում են նաև այդ փաստաթղթի բոլոր թղթապանակները, ծառի տարրերը և իր համար գրանցված հաշվառումները։

Եթե փաստաթուղթը ունի ենթափաստաթղթեր, ապա ջնջումը չի կատարվի և կառաջանա սխալ։

Ջնջումը տեղի է ունենում տրանզակցիայի մեջ։

**Պարամետրեր**

| Անվանում        | Տվյալների տիպ        | Լռությամբ արժեք | Նկարագրություն |
|-----------------|----------------------|----------------|----------------|
| isn             | int                  | -              | Ջնջվող փաստաթղթի ներքին նույնականացման համարը: |
| fullDelete      | bool                 | -              | Փաստաթղթի վերջնական ջնջման հայտանիշ։ <br> Վերջնական ջնջման ժամանակ փաստաթուղթը ջնջվում է բոլոր միջուկային աղյուսակներից՝ [DOCP](https://github.com/armsoft/as4x-docs/blob/master/HTM/ProgrGuide/Database/DocP.html), [FOLDERS](https://github.com/armsoft/as4x-docs/blob/master/HTM/ProgrGuide/Database/Folders.html), [TREES](https://github.com/armsoft/as4x-docs/blob/master/HTM/ProgrGuide/Database/Trees.html), [HIPAR](https://github.com/armsoft/as4x-docs/blob/master/HTM/ProgrGuide/Database/HiPar.html), [HIREST](https://github.com/armsoft/as4x-docs/blob/master/HTM/ProgrGuide/Database/Hirest.html), [HIREST2](https://github.com/armsoft/as4x-docs/blob/master/HTM/ProgrGuide/Database/Hirest2.html), [ACCESS](https://github.com/armsoft/as4x-docs/blob/master/HTM/ProgrGuide/Database/Access.html), [HI](https://github.com/armsoft/as4x-docs/blob/master/HTM/ProgrGuide/Database/Hi.html) և [HI2](https://github.com/armsoft/as4x-docs/blob/master/HTM/ProgrGuide/Database/Hi2.html)։ <br> Ոչ վերջնական ջնջման ժամանակ փաստաթուղթը մնում է [DOCS](https://github.com/armsoft/as4x-docs/blob/master/HTM/ProgrGuide/Database/Docs.html), [DOCLOG](https://github.com/armsoft/as4x-docs/blob/master/HTM/ProgrGuide/Database/DocLog.html), [DOCSG](https://github.com/armsoft/as4x-docs/blob/master/HTM/ProgrGuide/Database/DocsG.html), [DOCSIM](https://github.com/armsoft/as4x-docs/blob/master/HTM/ProgrGuide/Database/Docsim.html) աղյուսակների մեջ և վիճակը լինում է 999: |
| comment         | string               | -              | Փաստաթղթի պատմության մեջ գրանցվող ջնջման մեկնաբանություն։ |
| callDelete      | bool                 | true           | Փաստաթղթի [Delete](../../../Definitions/Document/Methods/Delete.md) իրադարձությունը կանչելու հայտանիշ։ |
| inheritedDelete | bool                 | false          | `true` արժեքի դեպքում փաստաթղթի պատմության մեջ գրվում է, որ փաստաթուղթը ջնջվել է այլ փաստաթղթի ջնջման ընթացքում։ Տվյալների պահոցում ջնջման կոդը լինում է `H`, հակառակ դեպքում `D`։ |
  

### IDocumentService.Delete(Document, bool, string, bool, bool) մեթոդ

```c#
public Task<DeletedDoc> Delete(Document document,
                               bool fullDelete,
                               string comment,
                               bool callDelete = true,
                               bool inheritedDelete = false)
```

Ջնջում է փաստաթուղթը համակարգից։  
Ջնջվող փաստաթղթերի համար առաջանում է [Delete](../../../Definitions/Document/Methods/Delete.md) իրադարձությունը, ապա փաստաթղթի վիճակը դառնում է 999, որից հետո այդ փաստաթուղթը հայտնվում է ջնջված փաստաթղթերի թղթապանակում։ 
Ջնջման ժամանակ հեռացվում են նաև այդ փաստաթղթի բոլոր թղթապանակները, ծառի տարրերը և իր համար գրանցված հաշվառումները։

Եթե փաստաթուղթը ունի ենթափաստաթղթեր, ապա ջնջումը չի կատարվի և կառաջանա սխալ։

Ջնջումը տեղի է ունենում տրանզակցիայի մեջ։

**Պարամետրեր**

| Անվանում        | Տվյալների տիպ        | Լռությամբ արժեք | Նկարագրություն |
|-----------------|----------------------|----------------|----------------|
| document        | Document             | -              | Ջնջվող [փաստաթուղթ](../../../Definitions/Document/Document.md)։ |
| fullDelete      | bool                 | -              | Փաստաթղթի վերջնական ջնջման հայտանիշ։ <br> Վերջնական ջնջման ժամանակ փաստաթուղթը ջնջվում է բոլոր միջուկային աղյուսակներից՝ [DOCP](https://github.com/armsoft/as4x-docs/blob/master/HTM/ProgrGuide/Database/DocP.html), [FOLDERS](https://github.com/armsoft/as4x-docs/blob/master/HTM/ProgrGuide/Database/Folders.html), [TREES](https://github.com/armsoft/as4x-docs/blob/master/HTM/ProgrGuide/Database/Trees.html), [HIPAR](https://github.com/armsoft/as4x-docs/blob/master/HTM/ProgrGuide/Database/HiPar.html), [HIREST](https://github.com/armsoft/as4x-docs/blob/master/HTM/ProgrGuide/Database/Hirest.html), [HIREST2](https://github.com/armsoft/as4x-docs/blob/master/HTM/ProgrGuide/Database/Hirest2.html), [ACCESS](https://github.com/armsoft/as4x-docs/blob/master/HTM/ProgrGuide/Database/Access.html), [HI](https://github.com/armsoft/as4x-docs/blob/master/HTM/ProgrGuide/Database/Hi.html) և [HI2](https://github.com/armsoft/as4x-docs/blob/master/HTM/ProgrGuide/Database/Hi2.html)։ <br> Ոչ վերջնական ջնջման ժամանակ փաստաթուղթը մնում է [DOCS](https://github.com/armsoft/as4x-docs/blob/master/HTM/ProgrGuide/Database/Docs.html), [DOCLOG](https://github.com/armsoft/as4x-docs/blob/master/HTM/ProgrGuide/Database/DocLog.html), [DOCSG](https://github.com/armsoft/as4x-docs/blob/master/HTM/ProgrGuide/Database/DocsG.html), [DOCSIM](https://github.com/armsoft/as4x-docs/blob/master/HTM/ProgrGuide/Database/Docsim.html) աղյուսակների մեջ և վիճակը լինում է 999:  |
| comment         | string               | -              | Փաստաթղթի պատմության մեջ գրանցվող ջնջման մեկնաբանություն։ |
| callDelete      | bool                 | true           | Փաստաթղթի [Delete](../../../Definitions/Document/Methods/Delete.md) իրադարձությունը կանչելու հայտանիշ։ |
| inheritedDelete | bool                 | false          | `true` արժեքի դեպքում փաստաթղթի պատմության մեջ գրվում է, որ փաստաթուղթը ջնջվել է այլ փաստաթղթի ջնջման ընթացքում։ Տվյալների պահոցում ջնջման կոդը լինում է `H`, հակառակ դեպքում `D`։ |
  

