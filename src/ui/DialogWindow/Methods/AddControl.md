---
title: AddControl
nav_exclude: true
---

# DialogWindow.AddControl մեթոդ

## Գերբեռնումներ

| Անվանում | Նկարագրություն |
|--|--|
| [AddControl(FieldType, string, string, bool, bool)](#dialogwindowaddcontrolfieldtype-string-string-bool-bool-մեթոդ) | Երկխոսության պատուհանում ավելացնում է մուտքագրման դաշտ՝ ըստ տրված [դաշտի տիպի](../../../../../Common/ArmSoft.AS8X.Common/FieldTypes/)։ |
| [AddControl(LayoutGroup, FieldType, string, string, bool, bool)](#dialogwindowaddcontrollayoutgroup-fieldtype-string-string-bool-bool-մեթոդ) | Նշված դասավորման խմբում ավելացնում է մուտքագրման դաշտ՝ ըստ տրված դաշտի տիպի։ |
| [AddControl(string, string, Control, bool)](#dialogwindowaddcontrolstring-string-control-bool-մեթոդ) | Երկխոսության պատուհանին ավելացնում է արդեն ստեղծված դաշտ։ |
| [AddControl(LayoutGroup, string, string, Control, bool, bool, LayoutItemLabelPosition)](#dialogwindowaddcontrollayoutgroup-string-string-control-bool-bool-layoutitemlabelposition-մեթոդ) | Նշված դասավորման խմբում ավելացնում է արդեն ստեղծված դաշտ։ |

### DialogWindow.AddControl(FieldType, string, string, bool, bool) մեթոդ

**Դաս՝** [DialogWindow](../DialogWindow.md)

```c#
public Control AddControl(FieldType type, string name, string caption, bool isRequired = false, bool storeValue = true);
```

Երկխոսության պատուհանում ավելացնում է մուտքագրման դաշտ՝ տրված դաշտի տիպի (**FieldType**) հիման վրա։ Կախված տիպից՝ ստեղծվում է համապատասխան մուտքագրման դաշտ՝ տողային, թվային, ամսաթվային, ժամային, տրամաբանական, ծառային, ֆայլային, պանակի կամ popup տեսակի ընտրացանկով դաշտ։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
|----------|--------------|----------------|----------------|
| type | FieldType | — | Դաշտի տիպը, որը որոշում է ստեղծվող դաշտի տեսակը։ |
| name | string | — | Դաշտի ներքին անունը։ |
| caption | string | — | Դաշտի անվանումը։ |
| isRequired | bool | false | Որոշում է, արդյոք դաշտի արժեքը պարտադիր է լրացման համար։ |
| storeValue | bool | true | Որոշում է, արդյոք դաշտի արժեքը պետք է պահպանվի։ |

### DialogWindow.AddControl(LayoutGroup, FieldType, string, string, bool, bool) մեթոդ

**Դաս՝** [DialogWindow](../DialogWindow.md)

```c#
public Control AddControl(LayoutGroup container, FieldType type, string name, string caption,
                          bool isRequired = false, bool storeValue = true);
```

Նշված դասավորման խմբում ավելացնում է մուտքագրման դաշտ՝ ըստ տրված դաշտի տիպի։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
|----------|--------------|----------------|----------------|
| container | LayoutGroup | — | Դասավորման խումբը, որտեղ ավելացվում է դաշտը։ |
| type | FieldType | — | Դաշտի տիպը։ |
| name | string | — | Դաշտի ներքին անունը։ |
| caption | string | — | Դաշտի անվանումը։ |
| isRequired | bool | false | Որոշում է, արդյոք դաշտի արժեքը պարտադիր է։ |
| storeValue | bool | true | Որոշում է, արդյոք դաշտի արժեքը պետք է պահպանվի։ |


### DialogWindow.AddControl(string, string, Control, bool) մեթոդ

**Դաս՝** [DialogWindow](../DialogWindow.md)

```c#
public void AddControl(string name, string caption, Control myControl, bool storeValue = true);
```

Երկխոսության պատուհանին ավելացնում է արդեն ստեղծված դաշտ։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
|----------|--------------|----------------|----------------|
| name | string | — | Դաշտի ներքին անունը։ |
| caption | string | — | Դաշտի անվանումը։ |
| myControl | Control | — | Ավելացվող ստեղծված դաշտը։ |
| storeValue | bool | true | Որոշում է, արդյոք դաշտի արժեքը պետք է պահպանվի։ |

### DialogWindow.AddControl(LayoutGroup, string, string, Control, bool, bool, LayoutItemLabelPosition) մեթոդ

**Դաս՝** [DialogWindow](../DialogWindow.md)

```c#
public void AddControl(LayoutGroup container, string name, string caption, Control myControl,
                       bool storeValue = true, bool addLayoutItemBinding = false,
                       LayoutItemLabelPosition labelPosition = LayoutItemLabelPosition.Left);
```

Նշված դասավորման խմբում ավելացնում է արդեն ստեղծված դաշտ։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
|----------|--------------|----------------|----------------|
| container | LayoutGroup | — | Դասավորման խումբը, որտեղ ավելացվում է դաշտը։ |
| name | string | — | Դաշտի ներքին անունը։ |
| caption | string | — | Դաշտի անվանումը։ |
| myControl | Control | — | Ավելացվող ստեղծված դաշտը։ |
| storeValue | bool | true | Որոշում է, արդյոք դաշտի արժեքը պետք է պահպանվի։ |
| addLayoutItemBinding | bool | false | Որոշում է, արդյոք պետք է սահմանվի դաշտի **IsRequired** հատկության կապը դասավորման տարրի հետ։ |
| labelPosition | LayoutItemLabelPosition | LayoutItemLabelPosition.Left | Դաշտի անվանման դիրքավորումը։ |
