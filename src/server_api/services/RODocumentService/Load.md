---
title: RODocumentService.Load մեթոդ  
---

## Գերբեռնումներ

| Անվանում | Նկարագրություն |
|--|--|
| [Load(int, bool, bool, bool)](#rodocumentserviceloadint-bool-bool-bool-մեթոդ) | Բեռնում է նշված ներքին նույնականացման համարներով փաստաթղթերը հիմնական տվյալների պահոցից՝ առանց աղյուսակների բեռնման և արխիվային տվյալների ստուգման: |
| [Load(int, bool, bool, bool, bool)](#rodocumentserviceloadint-bool-bool-bool-bool-մեթոդ) | Բեռնում է փաստաթուղթը տվյալների պահոցից ըստ փաստաթղթի ներքին նույնականացման համարի։ |
| [Load(int isn, bool, bool, bool, bool)](#rodocumentserviceloadint-bool-bool-bool-bool-մեթոդ) | Բեռնում է փաստաթուղթը տվյալների պահոցից ըստ փաստաթղթի ներքին նույնականացման համարի։ |
| [Load(int, bool, Ref, bool)](#rodocumentserviceloadint-bool-refbool-bool-մեթոդ) | Բեռնում է նշված ներքին նույնականացման համարներով փաստաթղթերը հիմնական տվյալների պահոցից՝ առանց աղյուսակների բեռնման և արխիվային տվյալների ստուգման: |
| [Load(IEnumerable&lt;int&gt;, bool, bool, bool, bool)](#rodocumentserviceloadienumerableint-bool-bool-bool-bool-մեթոդ) | Բեռնում է նշված ներքին նույնականացման համարներով (isn-ներով) փաստաթղթերը հիմնական տվյալների պահոցից և վերադարձնում Dictionary, որտեղ բանալին փաստաթղթի isn-ն է, իսկ արժեքը՝ տվյալ փաստաթուղթը։ |

### RODocumentService.Load(int, bool, bool, bool) մեթոդ

#### Նկարագիր

**Դաս՝** [RODocumentService](../RODocumentService.md)

```c#
public Task<Dictionary<int, RODocument>> Load(IEnumerable<int> isnList, bool loadGrids = false)
```

Բեռնում է նշված ներքին նույնականացման համարներով փաստաթղթերը հիմնական տվյալների պահոցից՝ առանց աղյուսակների բեռնման և արխիվային տվյալների ստուգման:

Վերադարձնում է միայն այն [քեշավորվող փաստաթղթերի](../../types/RODocument.md) բազմությունը, որոնք գտնվել են տվյալների պահոցում։
Վերադարձվող Dictionary-ում բանալին փաստաթղթի ISN-ն է, իսկ արժեքը՝ [քեշավորվող փաստաթուղթը](../../types/RODocument.md)։

**Պարամետրեր**

* `isnList` - Փաստաթղթերի ներքին նույնականացման համարների ցուցակ։
* `loadGrids` - Փաստաթղթերի աղյուսակների բեռնման հայտանիշ։

### RODocumentService.Load(int, bool, bool, bool, bool) մեթոդ  

#### Նկարագիր

**Դաս՝** [RODocumentService](../RODocumentService.md)

```c#
public Task<RODocument> Load(int isn,
                             bool loadGrids = true,
                             bool throwExceptionIfDeleted = true,
                             bool lookInArc = true,
                             bool loadImagesAndMemos = false)
```

Բեռնում է փաստաթուղթը տվյալների պահոցից ըստ փաստաթղթի ներքին նույնականացման համարի։

Վերադարձնում է [քեշավորվող փաստաթղթի](../../types/RODocument.md) օբյեկտը, եթե հայտնաբերվել է։
Եթե չի հայտնաբերվել առաջացնում է սխալ կամ վերադարձնում է **null** կախված throwExceptionIfDeleted պարամետրից։

**Պարամետրեր**

* `isn` - Բեռնվող փաստաթղթի ներքին նույնականացման համարը։
* `loadGrids` - Փաստաթղթի աղյուսակների բեռնման հայտանիշ։
* `throwExceptionIfDeleted` - Պահանջվող փաստաթղթի հեռացված լինելու դեպքում սխալի գեներացման հայտանիշ։ 
* `lookInArc` - Արխիվացված փաստաթղթի բեռնման հայտանիշ։ **true** արժեքի դեպքում փաստաթուղթը հիմնական պահոցում չգտնելու դեպքում փորձում է բեռնել նաև արխիվային տվյալների պահոցից։
* `loadImagesAndMemos` - Փաստաթղթի նկարների ու մեծ մուտքագրման դաշտերի (մեմո) բեռնման հայտանիշ։

### RODocumentService.Load(int, bool, bool, bool, bool) մեթոդ  

#### Նկարագիր

**Դաս՝** [RODocumentService](../RODocumentService.md)

```c#
public Task<T> Load<T>(int isn,
                       bool loadGrids = true,
                       bool throwExceptionIfDeleted = true,
                       bool lookInArc = true,
                       bool loadImagesAndMemos = false) where T : RODocument, new()
```

Բեռնում է փաստաթուղթը տվյալների պահոցից ըստ փաստաթղթի ներքին նույնականացման համարի։

Վերադարձնում է փաստաթղթի օբյեկտը, եթե հայտնաբերվել է։
Եթե չի հայտնաբերվել առաջացնում է սխալ կամ վերադարձնում է **null** կախված throwExceptionIfDeleted պարամետրից։

**Պարամետրեր**

* `T` - Վերադարձնում է փաստաթղթի նկարագրված դաս 8X-ում, [RODocument](../../types/RODocument.md) դասի ժառանգ։
* `isn` - Բեռնվող փաստաթղթի ներքին նույնականացման համարը։
* `loadGrids` - Փաստաթղթի աղյուսակների բեռնման հայտանիշ։
* `throwExceptionIfDeleted` - Պահանջվող փաստաթղթի հեռացված լինելու դեպքում սխալի գեներացման հայտանիշ։ 
* `lookInArc` - Արխիվացված փաստաթղթի բեռնման հայտանիշ։ **true** արժեքի դեպքում փաստաթուղթը հիմնական պահոցում չգտնելու դեպքում փորձում է բեռնել նաև արխիվային տվյալների պահոցից։
* `loadImagesAndMemos` - Փաստաթղթի նկարների ու մեծ մուտքագրման դաշտերի (մեմո) բեռնման հայտանիշ։

### RODocumentService.Load(int, bool, Ref&lt;bool&gt;, bool) մեթոդ  

#### Նկարագիր

**Դաս՝** [RODocumentService](../RODocumentService.md)

```c#
public Task<Dictionary<int, RODocument>> Load(IEnumerable<int> isnList, 
                                              bool loadGrids = false)
```

Բեռնում է նշված ներքին նույնականացման համարներով փաստաթղթերը հիմնական տվյալների պահոցից՝ առանց աղյուսակների բեռնման և արխիվային տվյալների ստուգման:

Վերադարձնում է միայն այն [քեշավորվող փաստաթղթերի](../../types/RODocument.md) բազմությունը, որոնք գտնվել են տվյալների պահոցում։
Վերադարձվող Dictionary-ում բանալին փաստաթղթի ISN-ն է, իսկ արժեքը՝ [քեշավորվող փաստաթուղթը](../../types/RODocument.md)։

**Պարամետրեր**

* `isnList` - Փաստաթղթերի ներքին նույնականացման համարների ցուցակ։
* `loadGrids` - Փաստաթղթերի աղյուսակների բեռնման հայտանիշ։

### RODocumentService.Load(IEnumerable&lt;int&gt;, bool, bool, bool, bool) մեթոդ  

#### Նկարագիր

**Դաս՝** [RODocumentService](../RODocumentService.md)

```c#
public Task<Dictionary<int, RODocument>> Load(IEnumerable<int> isnList, 
                                              bool loadGrids = false, 
                                              bool loadImagesAndMemos = false,
                                              bool throwExceptionIfDelet  false, 
                                              bool lookInArc = false)
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