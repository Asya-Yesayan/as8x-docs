---
title: RODocumentService.Load մեթոդ  
---

## RODocumentService.Load(int, bool, bool, bool, bool) մեթոդ  

### Նկարագիր

**Դաս՝** [RODocumentService](../../RODocumentService.md)

```c#
public Task<RODocument> Load(int isn,
                             bool loadGrids = true,
                             bool throwExceptionIfDeleted = true,
                             bool lookInArc = true,
                             bool loadImagesAndMemos = false)
```

Բեռնում է փաստաթուղթը պահոցից՝ ըստ ներքին նույնականացման համարի և վերադարձնում այն [RODocument](../../../types/RODocument.md) բազային դասով։

Փաստաթղթի բացակայության դեպքում վերադարձնում է **null** կամ առաջանում է սխալ՝ կախված throwExceptionIfDeleted պարամետրից։

**Պարամետրեր**


| Անվանում              | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
|-----------------------|---------------|------------------|----------------|
| isn                   | int           | -                | Բեռնվող փաստաթղթի ներքին նույնականացման համարը։ |
| loadGrids             | bool          | true             | Փաստաթղթի աղյուսակների բեռնման հայտանիշ։ |
| throwExceptionIfDeleted | bool        | true             | Պահանջվող փաստաթղթի հեռացված լինելու դեպքում սխալի առաջացման հայտանիշ։ |
| lookInArc             | bool          | true             | Արխիվացված փաստաթղթի բեռնման հայտանիշ։ <br> Պարամետրի **true** արժեքի և հիմնական տվյալների պահոցում փաստաթղթի բացակայության դեպքում փորձում է այն բեռնել արխիվայինից։ Հիմնական, արխիվային տվյալների պահոցումներում փաստաթղթի բացակայության և **throwExceptionIfDeleted** պարամետրի true արժեքի դեպքում առաջանում է սխալ։ |
| loadImagesAndMemos    | bool          | false            | Փաստաթղթի նկարների ու մեծ մուտքագրման դաշտերի (մեմո) բեռնման հայտանիշ։ |

## RODocumentService.Load(int, bool, bool, bool, bool) մեթոդ  

### Նկարագիր

**Դաս՝** [RODocumentService](../../RODocumentService.md)

```c#
public Task<T> Load<T>(int isn,
                       bool loadGrids = true,
                       bool throwExceptionIfDeleted = true,
                       bool lookInArc = true,
                       bool loadImagesAndMemos = false) where T : RODocument, new()
```

Բեռնում է փաստաթուղթը պահոցից՝ ըստ ներքին նույնականացման համարի և վերադարձնում այն T դասով, որը հանդիսանում է [RODocument](../../../types/RODocument.md)-ի ժառանգ։

Փաստաթղթի բացակայության դեպքում վերադարձնում է **null** կամ առաջանում է սխալ՝ կախված throwExceptionIfDeleted պարամետրից։

**Պարամետրեր**


| Անվանում              | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
|-----------------------|---------------|------------------|----------------|
| T                     | -             | -                | Վերադարձնում է փաստաթղթի նկարագրված դաս 8X-ում, RODocument դասի ժառանգ։ |
| isn                   | int           | -                | Բեռնվող փաստաթղթի ներքին նույնականացման համարը։ |
| loadGrids             | bool          | true             | Փաստաթղթի աղյուսակների բեռնման հայտանիշ։ |
| throwExceptionIfDeleted | bool        | true             | Պահանջվող փաստաթղթի հեռացված լինելու դեպքում սխալի առաջացման հայտանիշ։ |
| lookInArc             | bool          | true             | Արխիվացված փաստաթղթի բեռնման հայտանիշ։ <br> Պարամետրի **true** արժեքի և հիմնական տվյալների պահոցում փաստաթղթի բացակայության դեպքում փորձում է այն բեռնել արխիվայինից։ Հիմնական, արխիվային տվյալների պահոցումներում փաստաթղթի բացակայության և **throwExceptionIfDeleted** պարամետրի true արժեքի դեպքում առաջանում է սխալ։ |
| loadImagesAndMemos    | bool          | false            | Փաստաթղթի նկարների ու մեծ մուտքագրման դաշտերի (մեմո) բեռնման հայտանիշ։ |

## RODocumentService.Load(IEnumerable&lt;int&gt;, bool, bool, bool, bool) մեթոդ  

### Նկարագիր

**Դաս՝** [RODocumentService](../../RODocumentService.md)

```c#
public Task<Dictionary<int, RODocument>> Load(IEnumerable<int> isnList, 
                                              bool loadGrids = false, 
                                              bool loadImagesAndMemos = false,
                                              bool throwExceptionIfDelet  false, 
                                              bool lookInArc = false)
```

Բեռնում է նշված ներքին նույնականացման համարներով (isn-ներով) փաստաթղթերը հիմնական տվյալների պահոցից և վերադարձնում Dictionary, որտեղ բանալին փաստաթղթի isn-ն է, իսկ արժեքը՝ տվյալ փաստաթուղթը։

**Պարամետրեր**


| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | **Նկարագրություն** |
| --- | --- | --- | --- |
| isnList | IEnumerable<int> | - | Փաստաթղթերի ներքին նույնականացման համարների ցուցակ։ |
| loadGrids | bool | false | Փաստաթղթերի աղյուսակների բեռնման հայտանիշ։ |
| loadImagesAndMemos | bool | false | Փաստաթղթերի նկարների ու մեծ մուտքագրման դաշտերի բեռնման հայտանիշ։ |
| throwExceptionIfDeleted | bool | false | Պահանջվող փաստաթղթերից որևէ մեկի հեռացված լինելու դեպքում սխալի առաջացման հայտանիշ։ |
| lookInArc | bool | false | Արխիվացված փաստաթղթերի բեռնման հայտանիշ։ <br> Պարամետրի **true** արժեքի և հիմնական տվյալների պահոցում փաստաթղթերի բացակայության դեպքում փորձում է բեռնել արխիվայինից։ Հիմնական, արխիվային տվյալների պահոցումներում փաստաթղթերից որևէ մեկի բացակայության և **throwExceptionIfDeleted** պարամետրի true արժեքի դեպքում առաջանում է սխալ։ |