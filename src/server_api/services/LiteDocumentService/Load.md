---
title: LiteDocumentService.Load մեթոդ  
---

## Գերբեռնումներ

| Անվանում | Նկարագրություն |
|--|--|
| [Load(int, bool, bool, bool)](#litedocumentserviceloadint-bool-bool-bool-մեթոդ) | Բեռնում է փաստաթուղթը տվյալների պահոցից ըստ փաստաթղթի ներքին նույնականացման համարի։ |
| [Load(IEnumerable&lt;int&gt;, bool, bool, bool, bool)](#litedocumentserviceloadienumerableint-bool-bool-bool-bool-մեթոդ) | Բեռնում է նշված ներքին նույնականացման համարներով (isn-ներով) փաստաթղթերը հիմնական տվյալների պահոցից և վերադարձնում Dictionary, որտեղ բանալին փաստաթղթի isn-ն է, իսկ արժեքը՝ տվյալ փաստաթուղթը։ |

### LiteDocumentService.Load(int, bool, bool, bool) մեթոդ 

#### Նկարագիր

**Դաս՝** [LiteDocumentService](../LiteDocumentService.md)

```c#
public Task<LiteDocument> Load(int isn,
                               bool loadGrids = false,
                               bool throwExceptionIfDeleted = true,
                               bool lookInArc = true);
```

Բեռնում է փաստաթուղթը տվյալների պահոցից ըստ փաստաթղթի ներքին նույնականացման համարի։

Փաստաթղթի բացակայության դեպքում վերադարձնում է **null** կամ առաջացնում է սխալ՝ կախված throwExceptionIfDeleted պարամետրից։

**Պարամետրեր**

| Անվանում                 | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
|--------------------------|---------------|------------------|----------------|
| isn                      | int           | —                | Բեռնվող փաստաթղթի ներքին նույնականացման համարը։ |
| loadGrids                | bool          | false            | Փաստաթղթի աղյուսակների բեռնման հայտանիշ։ |
| throwExceptionIfDeleted  | bool          | true             | Պահանջվող փաստաթղթի հեռացված լինելու դեպքում սխալի առաջացման հայտանիշ։ |
| lookInArc                | bool          | true             | Արխիվացված փաստաթղթի բեռնման հայտանիշ։ <br> Պարամետրի **true** արժեքի և հիմնական տվյալների պահոցում փաստաթղթի բացակայության դեպքում փորձում է այն բեռնել արխիվայինից։ Հիմնական, արխիվային տվյալների պահոցումներում փաստաթղթի բացակայության և **throwExceptionIfDeleted** պարամետրի true արժեքի դեպքում առաջացնում է սխալ։ |


### LiteDocumentService.Load(IEnumerable&lt;int&gt;, bool, bool, bool, bool) մեթոդ  

#### Նկարագիր

**Դաս՝** [LiteDocumentService](../LiteDocumentService.md)

```c#
public Task<Dictionary<int, LiteDocument>> Load(IEnumerable<int> isnList, 
                                                bool loadGrids = false, 
                                                bool loadImagesAndMemos = false,
                                                bool throwExceptionIfDeleted = false, 
                                                bool lookInArc = false);
```

Բեռնում է նշված ներքին նույնականացման համարներով (isn-ներով) փաստաթղթերը հիմնական տվյալների պահոցից և վերադարձնում Dictionary, որտեղ բանալին փաստաթղթի isn-ն է, իսկ արժեքը՝ տվյալ փաստաթուղթը։

Փաստաթղթերի հիմնական տվյալները ստացվում են մեկ Sql հարցումով։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | **Նկարագրություն** |
| --- | --- | --- | --- |
| isnList | IEnumerable<int> | - | Փաստաթղթերի ներքին նույնականացման համարների ցուցակ։ |
| loadGrids | bool | false | Փաստաթղթերի աղյուսակների բեռնման հայտանիշ։ |
| loadImagesAndMemos | bool | false | Փաստաթղթերի նկարների ու մեծ մուտքագրման դաշտերի բեռնման հայտանիշ։ |
| throwExceptionIfDeleted | bool | false | Պահանջվող փաստաթղթերից որևէ մեկի հեռացված լինելու դեպքում սխալի առաջացման հայտանիշ։ |
| lookInArc | bool | false | Արխիվացված փաստաթղթերի բեռնման հայտանիշ։ <br> Պարամետրի **true** արժեքի և հիմնական տվյալների պահոցում փաստաթղթերի բացակայության դեպքում փորձում է բեռնել արխիվայինից։ Հիմնական, արխիվային տվյալների պահոցումներում փաստաթղթերից որևէ մեկի բացակայության և **throwExceptionIfDeleted** պարամետրի true արժեքի դեպքում առաջացնում է սխալ։ |

