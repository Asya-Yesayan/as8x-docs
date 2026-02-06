---
title: DeleteAll
parent: "Մեթոդներ"
grand_parent: "IDocumentService"
---

# Document.DeleteAll(List<int>, bool, string, bool, bool) մեթոդ

## Նկարագիր

**Դաս՝** [IDocumentService](../IDocumentService.md)

```c#
public Task DeleteAll(List<int> isnList, 
                      bool fullDelete, 
                      string comment, 
                      bool callDelete = true, 
                      bool inheritedDelete = false)
```

Ջնջում է տրված փաստաթղթերը համակարգից։  
Ջնջվող փաստաթղթերի համար առաջանում է  [Delete](https://github.com/armsoft/as4x-docs/blob/master/HTM/ProgrGuide/ScriptProcs/Delete.md)  իրադարձությունը, ապա փաստաթղթերի վիճակը դառնում է 999, որից հետո այդ փաստաթուղթը հայտնվում է ջնջված փաստաթղթերի թղթապանակում։ Ջնջման ժամանակ հեռացվում են նաև այդ փաստաթղթերի բոլոր թղթապանակները, ծառի տարրերը և իր համար գրանցված հաշվառումները։

Եթե փաստաթուղթերը ունեն ենթափաստաթղթեր, ապա ջնջումը թույլատրելի չի լինի։

Ջնջումը տեղի է ունենում տրանզակցիայի մեջ։

Ֆունկցիան վերադարձնում է  `True`  եթե ջնջումը հաջողվում է,  `False`  չհաջողվելու դեպքում։

**Պարամետրեր**

| Անվանում        | Տվյալների տիպ        | Լռությամբ արժեք | Նկարագրություն |
|-----------------|----------------------|----------------|----------------|
| isnList         | List<int>            | -              | — |
| fullDelete      | bool                 | -              | Փաստաթղթի վերջնական ջնջման հայտանիշ։ Վերջնական ջնջման ժամանակ փաստաթուղթը ջնջվում է բոլոր միջուկային աղյուսակներից աղյուսակներից՝ [DOCP](https://github.com/armsoft/as4x-docs/blob/master/HTM/ProgrGuide/Database/DocP.html), [FOLDERS](https://github.com/armsoft/as4x-docs/blob/master/HTM/ProgrGuide/Database/Folders.html), [TREES](https://github.com/armsoft/as4x-docs/blob/master/HTM/ProgrGuide/Database/Trees.html), [HIPAR](https://github.com/armsoft/as4x-docs/blob/master/HTM/ProgrGuide/Database/HiPar.html), [HIREST](https://github.com/armsoft/as4x-docs/blob/master/HTM/ProgrGuide/Database/Hirest.html), [HIREST2](https://github.com/armsoft/as4x-docs/blob/master/HTM/ProgrGuide/Database/Hirest2.html), [ACCESS](https://github.com/armsoft/as4x-docs/blob/master/HTM/ProgrGuide/Database/Access.html), [HI](https://github.com/armsoft/as4x-docs/blob/master/HTM/ProgrGuide/Database/Hi.html) և [HI2](https://github.com/armsoft/as4x-docs/blob/master/HTM/ProgrGuide/Database/Hi2.html)։ Ոչ վերջնական ջնջման ժամանակ փաստաթուղթը մնում է [DOCS](https://github.com/armsoft/as4x-docs/blob/master/HTM/ProgrGuide/Database/Docs.html), [DOCLOG](https://github.com/armsoft/as4x-docs/blob/master/HTM/ProgrGuide/Database/DocLog.html), [DOCSG](https://github.com/armsoft/as4x-docs/blob/master/HTM/ProgrGuide/Database/DocsG.html), [DOCSIM](https://github.com/armsoft/as4x-docs/blob/master/HTM/ProgrGuide/Database/Docsim.html) աղյուսակների մեջ և վիճակը լինում է 999: Լռությամբ արժեքը `False`։ |
| comment         | string               | -              | Փաստաթղթերի ջնջման մեկնաբանություն, որը գրանցվում է փաստաթղթերի պատմության մեջ։ |
| callDelete      | bool                 | true           | Փաստաթղթերի [Delete](https://github.com/armsoft/as4x-docs/blob/master/HTM/ProgrGuide/ScriptProcs/Delete.md) իրադարձությունը կանչելու հայտանիշ։ Լռությամբ արժեքը `True`։ |
| inheritedDelete | bool                 | false          | `True` արժեքի դեպքում փաստաթղթերի պատմության մեջ գրվում է, որ փաստաթղթերը ջնջվել են այլ փաստաթղթի ջնջման ընթացքում։ Տվյալների պահոցում ջնջման կոդը լինում է `H`։ |
