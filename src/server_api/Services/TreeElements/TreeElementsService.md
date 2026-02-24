---
title: "TreeElementsService"
parent: "Սերվիսներ"
nav_order: 2
has_toc: false
---

# TreeElementsService սերվիս

## Ներածություն

TreeElementService դասը նախատեսված է ծառի հանգույցների հետ աշխատանքը ապահովելու համար։

Ծառի հանգույցները ծրագրային ստեղծվում են երկու ձևով, 
- փաստաթղթերի հետ կապված [IDocumentService](../IDocument/IDocumentService.md).[StoreInTree](../IDocument/Methods/StoreInTree.md) ֆունկցիայով,
- անկախ հանգույցներ [AddNode(TreeElement, bool)](Methods/AddNode.md) ֆունկցիայով։

Ծառի հանգույցները պահվում են [TREES](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Database/Trees.html) աղյուսակում։

## Մեթոդներ

| Անվանում | Նկարագրություն |
|----------|----------------|
| [AddNode(TreeElement, bool)](Methods/AddNode.md) | Ավելացնում է ծառի նոր հանգույց տվյալների պահոցում։ |
| [DeleteNode(string, string)](Methods/DeleteNode.md) | Հեռացնում է ծառի հանգույցը տվյալների պահոցից։ |
| [EditNode(TreeElement)](Methods/EditNode.md) | Խմբագրում է ծառի հանգույցը և գրանցում տվյալների պահոցում։ |
| [ExistsInDB(string, string)](Methods/ExistsInDB.md) | Ստուգում է ծառի հանգույցի առկայությունը տվյալների պահոցում։ |
| [Get(string, string, bool)](Methods/Get.md) | Բեռնում է [ծառի տարրը](../../Types/TreeElement.md) տվյալների պահոցից կամ քեշից, եթե ծառը քեշավոևվող է։ |
| [GetTreeElements(int, Dictionary<string, TreeElement>, bool, bool)](Methods/GetTreeElements.md) | Վերադարձնում է ծառի տարրերը տվյալների պահոցից կամ քեշից, եթե ծառը քեշավորվող է։ |

<!-- ### CheckAndLoadIfNeeded

```c#
public Task<(bool, byte[], Dictionary<string, TreeElement>)> CheckAndLoadIfNeeded(string treeId, byte[] ts)
```

Եթե ՝ts՝ պարամետրը չի համընկնում ծառի հանգույցների բեռնման և քեշում գրանցման վերջին ժամանակի հետ, ապա բեռնում է տրված ծառի բոլոր հանգույցները և գրանցում քեշում։

Վերադարձնում է՝ արդյոք բեռնվել են ծառի հանգույցները, վերջին բեռնման ժամանակը՝ որպես byte-երի զանգված, և հանգույցները նկարագրող dictionary-ն։ Եթե բեռնումը տեղի չի ունեցել, վերադարձնում է null-եր։

**Պարամետրեր**

| Անվանում        | Տվյալների տիպ        | Լռությամբ արժեք | Նկարագրություն |
|-----------------|----------------------|----------------|----------------|
| treeID              | string | -              |Ծառի ներքին անունը։  |
* `ts` -  

### ClearOldsFromCache

```c#
public static void ClearOldsFromCache(SqlConnection connection, string treeId = null)
```

Մաքրում է ծառի նկարագրությունը և հանգույցները քեշից։

**Պարամետրեր**

| Անվանում        | Տվյալների տիպ        | Լռությամբ արժեք | Նկարագրություն |
|-----------------|----------------------|----------------|----------------|
| connection      | SqlConnection        | -              | [SqlConnection](https://learn.microsoft.com/en-us/dotnet/api/microsoft.data.sqlclient.sqlconnection?view=sqlclient-dotnet-standard-5.2) դեպի ծառը պարունակող տվյալների պահոց։ |
| treeId          | string               | null           | Ծառի ներքին անունը։ |

-->

<!-- ### Store

```c#
public Task<List<TreeNode>> Store(int isn, Dictionary<string, TreeElement> cols, bool existsInDB, bool returnModifiedTreeNodes)
```

Գրանցում է `cols` պարամետրում տրված ծառի հանգույցները տվյալների պահոցի [TREES](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Database/Trees.html) աղյուսակում և վերադարձնում 

**Պարամետրեր**

| Անվանում        | Տվյալների տիպ        | Լռությամբ արժեք | Նկարագրություն |
|-----------------|----------------------|----------------|----------------|
| isn             | int                  | -              | Գրանցման ենթակա ծառի հանգույցներին տարրերին կապակցված փաստաթղթի ներքին նույնակականացման համարը։ |
| cols            | Dictionary<string, TreeElement> | -              | Գրանցման ենթակա ծառի հանգույցների ցուցակը։ |
| existsInDB      | bool                 | -              | — |
| returnModifiedTreeNodes | bool                 | -              | — |
* `existsInDB` - 
* `returnModifiedTreeNodes` -  -->
