---
title: Field
parent: "Հատկություններ"
grand_parent: "ASException"
---

# ASException.Field հատկություն

**Դաս՝** [ASException](../../ASException.md)

```c#
public string Field { get; set; } = string.Empty;
```

Վերադարձնում կամ նշանակում է սխալի հետ կապված դաշտի ներքին անունը (կոդ)։

Լռությամբ արժեքը դատարկ տող է. ոչ դատարկ արժեքի դեպքում UI-ն այս ինֆորմացիան օգտագործում է, որպեսզի սխալը ցուցադրելիս ֆոկուսը տեղափոխվի համապատասխան դաշտին։ Արժեքավորվում է [ASException](../Methods/ASException.md) դասի կոնստրուկտորի **field** կամ **list** պարամետրով։
