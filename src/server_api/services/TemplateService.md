---
title: "TemplateService սերվիս"
---

## Ներածություն

TemplateService դասը նախատեսված է տպելու ձևանմուշների նկարագրության հետ աշխատանքը ապահովելու համար։

Տե՛ս նաև [ITemplateSubstitutionService](ITemplateSubstitutionService.md) տպելու ձևանմուշների լրացման համար։

<!-- ### Copy

```c#
public Task<int> Copy(TemplateDefinition definition)
```

Պատճենում է `definition` պարամետրում նշված տպելու ձևանմուշի նկարագրությունը, գրանցում տվյալների պահոցի `TEMPLATES` աղյուսակում և վերադարձնում գրանցված նկարագրության ներքին նույնականացման համարը (rowId):

**Պարամետրեր**

* `definition` - Պատճենման ենթակա տպելու ձևանմուշի նկարագրությունը։

### Delete

```c#
public Task Delete(string name, string type)
```

Հեռացնում է տպելու ձևանմուշի նկարագրությունը տվյալների պահոցի `TEMPLATES` աղյուսակից՝ ըստ տպելու ձևանմուշի ներքին անվան և տիպի։

**Պարամետրեր**

* `name` - Տպելու ձևանմուշի ներքին անուն:
* `type` - [Տպելու ձևանմուշի տիպ][4XTemplateSubstitution]:

### Edit

```c#
public Task Edit(TemplateDefinition definition)
```

Խմբագրում է տվյալների պահոցի `TEMPLATES` աղյուսակում գոյություն ունեցող տպելու ձևանմուշի նկարագրությունը:

**Պարամետրեր**

* `description` - Տպելու ձևանմուշի նկարագրություն:

<!-- ### GetCount

```c#
public Task<int> GetCount(string name)
```

Վերադարձնում է նշված ներքին անունով տպելու ձևանմուշների քանակը։

**Պարամետրեր**

* `name` - Տպելու ձևանմուշի ներքին անուն:

### GetDataGroups

```c#
public Task<string> GetDataGroups(int rowId)
```

Վերադարձնում է տպելու ձևանմուշի տվյալների խմբերի անունները որպես տեքստ, որտեղ խմբերը իրարից տարանջատված են ստորակետերով։

Տվյալների խմբերը օգտագործվում են այն ձևանմուշներում, որոնք պարունակում են մեծ քանակությամբ կոդեր՝ նպատակ ունենալով կոդերը բաժանել խմբերի և հաշվարկել միայն անհրաժեշտ մասը։

**Պարամետրեր**

* `rowId` - Տպելու ձևանմուշի ներքին նույնականացման համար։

### GetFileContent

```c#
public Task<StorageInfo> GetFileContent(int rowId)
```

Բեռնում է տպելու ձևանմուշը տվյալների պահոցի `TEMPLATES` աղյուսակից, պահում [ընթացիկ սեսիայի կոնտեյներում](#container) և վերադարձնում [կոնտեյների](#container), ֆայլի անունները։

**Պարամետրեր**

* `rowId` - Տպելու ձևանմուշի ներքին նույնականացման համար:

### GetMappingCount

```c#
public Task<int> GetMappingCount(int rowId)
```

Վերադարձնում է տպելու ձևանմուշին կապակցված փաստաթղթերի քանակը։

**Պարամետրեր**

* `rowId` - Տպելու ձևանմուշի ներքին նույնականացման համար։

### GetPrintDataGroups

```c#
public Task<List<DocumentPrintDataGroupDefinition>> GetPrintDataGroups(string docType)
```

Վերադարձնում է նշված տեսակի փաստաթղթին կապակցված տպելու ձևանմուշների տվյալների խմբերի նկարագրությունների ցուցակը։

Տվյալների խմբերը օգտագործվում են այն ձևանմուշներում, որոնք պարունակում են մեծ քանակությամբ կոդեր՝ նպատակ ունենալով կոդերը բաժանել խմբերի և հաշվարկել միայն անհրաժեշտ մասը։

Տես նա՛և [PrintDataGroup](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/PrintDataGroup.html):

**Պարամետրեր**

* `docType` - Փաստաթղթի տեսակ (ներքին անուն)։

### GetRowId

```c#
public Task<int> GetRowId(string name, string type)
```

Վերադարձնում է տպելու ձևանմուշի ներքին նույնականացման համարը (rowId) տվյալների պահոցի `TEMPLATES` աղյուսակից՝ ըստ տպելու ձևանմուշի ներքին անվան և տիպի։

**Պարամետրեր**

* `name` - Տպելու ձևանմուշի ներքին անուն:
* `type` - [Տպելու ձևանմուշի տիպ][4XTemplateSubstitution]:

### Store

```
public Task Store(TemplateDefinition description)
```

Գրանցում է տպելու ձևանմուշի նկարագրությունը տվյալների պահոցի `TEMPLATES` աղյուսակում։

**Պարամետրեր**

* `description` - Տպելու ձևանմուշի նկարագրություն:

### UpdateDataGroups

```c#
public Task UpdateDataGroups(int rowId, string dataGroups)
```

Թարմացնում է տպելու ձևանմուշի տվյալների խմբերը։

Տվյալների խմբերը օգտագործվում են այն ձևանմուշներում, որոնք պարունակում են մեծ քանակությամբ կոդեր՝ նպատակ ունենալով կոդերը բաժանել խմբերի և հաշվարկել միայն անհրաժեշտ մասը։

**Պարամետրեր**

* `rowId` - Տպելու ձևանմուշի ներքին նույնականացման համար։
* `dataGroups` - Տպելու ձևանմուշի տվյալների խմբերի անունները որպես տեքստ, որտեղ խմբերը անհրաժեշտ է իրարից տարանջատել ստորակետերով։ Օրինակ **TRN,TRNAMD**:
 -->

<!--

## Մեթոդներ

| Անվանում | Նկարագրություն |
|----------|----------------|
| [ExistsTemplate(string, string)](TemplateService/ExistsTemplate.md) | Ստուգում է տպելու ձևանմուշի նկարագրության առկայությունը տվյալների պահոցի `TEMPLATES` աղյուսակում։ |
| [GetDataGroups](TemplateService/GetDataGroups.md) | Վերադարձնում է տպելու ձևանմուշի տվյալների խմբերի անունները որպես տեքստ, որտեղ խմբերը իրարից տարանջատված են ստորակետերով։ |
| [GetDefinition(string, string)](TemplateService/GetDefinition.md) | Վերադարձնում է տպելու ձևանմուշի նկարագրությունը տվյալների պահոցի `TEMPLATES` աղյուսակից՝ ըստ տպելու ձևանմուշի ներքին անվան և տիպի։ |
| [GetMappingCount](TemplateService/GetMappingCount.md) | Վերադարձնում է տպելու ձևանմուշին կապակցված փաստաթղթերի քանակը։ |
| [GetPrintDataGroups](TemplateService/GetPrintDataGroups.md) | Վերադարձնում է նշված տեսակի փաստաթղթին կապակցված տպելու ձևանմուշների տվյալների խմբերի նկարագրությունների ցուցակը։ |
| [GetRowId](TemplateService/GetRowId.md) | Վերադարձնում է տպելու ձևանմուշի ներքին նույնականացման համարը (rowId) տվյալների պահոցի `TEMPLATES` աղյուսակից՝ ըստ տպելու ձևանմուշի ներքին անվան և տիպի։ |
| [GetTemplateNameAndType(string, bool)](TemplateService/GetTemplateNameAndType.md) | Բաժանում է `templateNameWithType` պարամետրում միավորված տպելու ձևանմուշի ներքին անունը (կոդը) և տիպը: |
| [UpdateDataGroups](TemplateService/UpdateDataGroups.md) | Թարմացնում է տպելու ձևանմուշի տվյալների խմբերը։ |

## Հատկություններ

| Անվանում | Նկարագրություն |
|----------|----------------|
| [Store](TemplateService/Store.md) | Գրանցում է տպելու ձևանմուշի նկարագրությունը տվյալների պահոցի `TEMPLATES` աղյուսակում։ |

 -->

 ## Մեթոդներ

| Անվանում | Նկարագրություն |
|----------|----------------|
| [ExistsTemplate(string, string)](TemplateService/ExistsTemplate.md) | Ստուգում է տպելու ձևանմուշի նկարագրության առկայությունը տվյալների պահոցի `TEMPLATES` աղյուսակում։ |
| [GetDefinition(string, string)](TemplateService/GetDefinition.md) | Վերադարձնում է տպելու ձևանմուշի նկարագրությունը տվյալների պահոցի `TEMPLATES` աղյուսակից՝ ըստ տպելու ձևանմուշի ներքին անվան և տիպի։ |
| [GetTemplateNameAndType(string, bool)](TemplateService/GetTemplateNameAndType.md) | Բաժանում է `templateNameWithType` պարամետրում միավորված տպելու ձևանմուշի ներքին անունը (կոդը) և տիպը: |