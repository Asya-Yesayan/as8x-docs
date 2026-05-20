---
title: AddComboBoxEditControl
parent: "Մեթոդներ"
grand_parent: "DocumentPanel"
---

# DocumentPanel&lt;T&gt;.AddComboBoxEditControl(string, string, short, bool, IEnumerable&lt;string&gt;, string, HorizontalAlignment) մեթոդ

## Նկարագիր

**Դաս՝** [DocumentPanel](../DocumentPanel.md)

```c#
public ComboBoxEditExt AddComboBoxEditControl(string name,
                                              string caption,
                                              short length,
                                              bool isRequired,
                                              IEnumerable<string> itemsSource,
                                              string dataItemName = null,
                                              HorizontalAlignment horizontalAlignment = HorizontalAlignment.Left)
```

Փաստաթղթի վահանակում ավելացնում է բացվող ցուցակով տեքստային դաշտ (**ComboBoxEditExt**) և վերադարձնում է այն։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- |
| name | string | — | Դաշտի ներքին անունը։ |
| caption | string | — | Դաշտի գլխագիրը։ |
| length | short | — | Դաշտում թույլատրելի նիշերի առավելագույն քանակը։ |
| isRequired | bool | false | Որոշում է, արդյոք դաշտի արժեքը պարտադիր է։ |
| itemsSource | IEnumerable&lt;string&gt; | — | Բացվող ցուցակում ցուցադրվող արժեքների ցուցակը։ |
| dataItemName | string | null | Տվյալների աղբյուրի ներքին անունը։ |
| horizontalAlignment | HorizontalAlignment | HorizontalAlignment.Left | Դաշտի հորիզոնական դասավորման ռեժիմը։ |