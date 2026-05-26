---
title: AddNumericEditControl
parent: "Մեթոդներ"
grand_parent: "DocumentPanel"
---

# DocumentPanel&lt;T&gt;.AddNumericEditControl(string, string, bool, short, short, string, bool, bool, HorizontalAlignment) մեթոդ

## Նկարագիր

**Դաս՝** [DocumentPanel](../DocumentPanel.md)

```c#
public NumericEditControl AddNumericEditControl(string name,
                                                string caption,
                                                bool isRequired,
                                                short length,
                                                short precision = 0,
                                                string dataItemName = null,
                                                bool allowNegativeNumbers = false,
                                                bool useCurrencyFormat = true,
                                                HorizontalAlignment horizontalAlignment = HorizontalAlignment.Left)
```

Փաստաթղթի վահանակում ավելացնում է թվային դաշտ (**NumericEditControl**) և վերադարձնում է այն։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- |
| name | string | - | Դաշտի ներքին անունը։ |
| caption | string | - | Դաշտի գլխագիրը։ |
| isRequired | bool | false | Որոշում է, արդյոք դաշտի արժեքը պարտադիր է լրացման համար։ |
| length | short | - | Դաշտում թույլատրելի թվանշանների ընդհանուր քանակը։ |
| precision | short | 0 | Տասնորդական մասի թվանշանների քանակը։ |
| dataItemName | string | null | Տվյալների աղբյուրի ներքին անունը։ |
| allowNegativeNumbers | bool | false | **true** արժեքի դեպքում թույլատրված են բացասական արժեքները։ |
| useCurrencyFormat | bool | true | **true** արժեքի դեպքում օգտագործվում է արժույթի ֆորմատը (`1,234.56`), հակառակ դեպքում՝ սովորական թվային ֆորմատը (`1234.56`)։ |
| horizontalAlignment | HorizontalAlignment | HorizontalAlignment.Left | Դաշտի հորիզոնական դասավորման ռեժիմը։ |
