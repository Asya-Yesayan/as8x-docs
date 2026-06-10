---
title: CalculatedExtenderParamsValues
parent: "Հատկություններ"
grand_parent: "ViewExtension"
---

# ViewExtension.CalculatedExtenderParamsValues հատկություն

## Նկարագիր

**Դաս՝** [ViewExtension](../ViewExtension.md)

```c#
public Dictionary<string, object> CalculatedExtenderParamsValues { get; protected internal set; }
```

Վերադարձնում կամ նշանակում է ընդլայնման հաշվարկված պարամետրերի արժեքների Dictionary-ն։ Dictionary-ի բանալին պարամետրի ներքին անունն է (կոդ), իսկ արժեքը՝ այդ պարամետրի հաշվարկված արժեքը՝ իր փաստացի տիպով։ Արժեքները լրացվում են [CalculateExtenderParamsValues](../Methods/CalculateExtenderParamsValues.md) մեթոդի կատարման արդյունքում և օգտագործվում են տողերի մշակման ընթացքում։
