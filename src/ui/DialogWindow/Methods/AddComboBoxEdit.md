---
title: AddComboBoxEdit
nav_exclude: true
---

# DialogWindow.AddComboBoxEdit մեթոդ

## Գերբեռնումներ

| Անվանում | Նկարագրություն |
|--|--|
| [AddComboBoxEdit(string, string, short, IEnumerable&lt;string&gt;, bool, bool, HorizontalAlignment, bool)](#dialogwindowaddcomboboxeditstring-string-short-ienumerablestring-bool-bool-horizontalalignment-bool-մեթոդ) | Երկխոսության պատուհանում ավելացնում է ընտրացանկով (ComboBox) դաշտ։ |
| [AddComboBoxEdit(LayoutGroup, string, string, short, IEnumerable&lt;string&gt;, bool, bool, HorizontalAlignment, bool)](#dialogwindowaddcomboboxeditlayoutgroup-string-string-short-ienumerablestring-bool-bool-horizontalalignment-bool-մեթոդ) | Նշված դասավորման խմբում (LayoutGroup) ավելացնում է ընտրացանկով (ComboBox) դաշտ։ |

### DialogWindow.AddComboBoxEdit(string, string, short, IEnumerable&lt;string&gt;, bool, bool, HorizontalAlignment, bool) մեթոդ

**Դաս՝** [DialogWindow](../DialogWindow.md)

```c#
public ComboBoxEditExt AddComboBoxEdit(string name, string caption, short length,
                                       IEnumerable<string> itemsSource, bool isRequired = false,
                                       bool storeValue = true,
                                       HorizontalAlignment horizontalAlignment = HorizontalAlignment.Left,
                                       bool isTextEditable = false);
```

Երկխոսության պատուհանում ավելացնում է ընտրացանկով (ComboBox) դաշտ։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
|----------|--------------|----------------|----------------|
| name | string | — | Դաշտի ներքին անունը։ |
| caption | string | — | Դաշտի անվանումը։ |
| length | short | — | Մուտքագրման տեքստի առավելագույն երկարությունը։ |
| itemsSource | IEnumerable&lt;string&gt; | — | Ընտրացանկում ցուցադրվող արժեքների ցուցակը։ |
| isRequired | bool | false | Որոշում է, արդյոք դաշտի արժեքը պարտադիր է լրացման համար։ |
| storeValue | bool | true | Որոշում է, արդյոք դաշտի արժեքը պետք է պահպանվի։ |
| horizontalAlignment | HorizontalAlignment | HorizontalAlignment.Left | Դաշտի հորիզոնական դասավորվածության ուղղությունը։ |
| isTextEditable | bool | false | Որոշում է, արդյոք օգտագործողը կարող է մուտքագրել կամայական տեքստ՝ չսահմանափակվելով ընտրացանկի տարրերով։ |

### DialogWindow.AddComboBoxEdit(LayoutGroup, string, string, short, IEnumerable&lt;string&gt;, bool, bool, HorizontalAlignment, bool) մեթոդ

**Դաս՝** [DialogWindow](../DialogWindow.md)

```c#
public ComboBoxEditExt AddComboBoxEdit(LayoutGroup container, string name, string caption, short length,
                                       IEnumerable<string> itemsSource, bool isRequired = false,
                                       bool storeValue = true,
                                       HorizontalAlignment horizontalAlignment = HorizontalAlignment.Left,
                                       bool isTextEditable = false);
```

Նշված դասավորման խմբում (LayoutGroup) ավելացնում է ընտրացանկով (ComboBox) դաշտ։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
|----------|--------------|----------------|----------------|
| container | LayoutGroup | — | Դասավորման խումբը (LayoutGroup), որտեղ ավելացվում է դաշտը։ |
| name | string | — | Դաշտի ներքին անունը։ |
| caption | string | — | Դաշտի անվանումը։ |
| length | short | — | Մուտքագրման տեքստի առավելագույն երկարությունը։ |
| itemsSource | IEnumerable&lt;string&gt; | — | Ընտրացանկում ցուցադրվող արժեքների ցուցակը։ |
| isRequired | bool | false | Որոշում է, արդյոք դաշտի արժեքը պարտադիր է լրացման համար։ |
| storeValue | bool | true | Որոշում է, արդյոք դաշտի արժեքը պետք է պահպանվի։ |
| horizontalAlignment | HorizontalAlignment | HorizontalAlignment.Left | Դաշտի հորիզոնական դասավորվածության ուղղությունը։ |
| isTextEditable | bool | false | Որոշում է, արդյոք օգտագործողը կարող է մուտքագրել կամայական տեքստ՝ չսահմանափակվելով ընտրացանկի տարրերով։ |
