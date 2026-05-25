---
title: AddGrid
parent: "Մեթոդներ"
grand_parent: "DocumentPanel"
---

# DocumentPanel&lt;T&gt;.AddGrid մեթոդ

## Գերբեռնումներ

| Անվանում | Նկարագրություն |
|----------|----------------|
| [AddGrid(GridInfo, HorizontalAlignment, VerticalAlignment, bool)](#documentpaneladdgridgridinfo-horizontalalignment-verticalalignment-bool-մեթոդ) | Փաստաթղթի վահանակում ավելացնում է աղյուսակ (**DocumentGridControl**)՝ աղյուսակի տեղեկատվության օբյեկտից վերցված կարգավորումներով և սյունակներով։ |
| [AddGrid(string, string, HorizontalAlignment, VerticalAlignment, string, bool)](#documentpaneladdgridstring-string-horizontalalignment-verticalalignment-string-bool-մեթոդ) | Փաստաթղթի վահանակում ավելացնում է աղյուսակ (**DocumentGridControl**)՝ տրված անվանումով և գլխագրով։ |

### DocumentPanel.AddGrid(GridInfo, HorizontalAlignment, VerticalAlignment, bool) մեթոդ

**Դաս՝** [DocumentPanel](../DocumentPanel.md)

```c#
public DocumentGridControl AddGrid(GridInfo gridInfo,
                                   HorizontalAlignment horizontalAlignment = HorizontalAlignment.Stretch,
                                   VerticalAlignment verticalAlignment = VerticalAlignment.Stretch,
                                   bool isSupportDialogMode = false)
```

Փաստաթղթի վահանակում ավելացնում է աղյուսակ (**DocumentGridControl**) և վերադարձնում է այն։ Աղյուսակի սխեմայում **AllowSort** հայտանիշի **true** արժեքի դեպքում սյունակները դարձվում են սորտավորվող։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- |
| gridInfo | GridInfo | - | Աղյուսակի տեղեկատվության օբյեկտը՝ պարունակող սխեման և սյունակները։ |
| horizontalAlignment | HorizontalAlignment | HorizontalAlignment.Stretch | Աղյուսակի հորիզոնական դասավորման ռեժիմը։ |
| verticalAlignment | VerticalAlignment | VerticalAlignment.Stretch | Աղյուսակի ուղղահայաց դասավորման ռեժիմը։ |
| isSupportDialogMode | bool | false | **true** արժեքի դեպքում աղյուսակը կարգավորվում է երկխոսության պատուհանում աշխատելու համար։ |

### DocumentPanel.AddGrid(string, string, HorizontalAlignment, VerticalAlignment, string, bool) մեթոդ

**Դաս՝** [DocumentPanel](../DocumentPanel.md)

```c#
public DocumentGridControl AddGrid(string name,
                                   string caption,
                                   HorizontalAlignment horizontalAlignment,
                                   VerticalAlignment verticalAlignment,
                                   string dataItemName = null,
                                   bool isSupportDialogMode = false)
```

Փաստաթղթի վահանակում ավելացնում է աղյուսակ (**DocumentGridControl**) և վերադարձնում է այն՝ տրված անվանումով և գլխագրով։ Աղյուսակին գրանցվում են ստանդարտ իրադարձության մշակիչներ՝ ընտրման փոփոխման, ֆոկուսի ստացման, բեռնման և **Enter**, **Escape** ստեղների սեղմման համար։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- |
| name | string | - | Աղյուսակի ներքին անունը։ |
| caption | string | - | Աղյուսակի գլխագիրը։ |
| horizontalAlignment | HorizontalAlignment | - | Աղյուսակի հորիզոնական դասավորման ռեժիմը։ |
| verticalAlignment | VerticalAlignment | - | Աղյուսակի ուղղահայաց դասավորման ռեժիմը։ |
| dataItemName | string | null | Տվյալների աղբյուրի ներքին անունը։ |
| isSupportDialogMode | bool | false | **true** արժեքի դեպքում աղյուսակը կարգավորվում է երկխոսության պատուհանում աշխատելու համար։ |
