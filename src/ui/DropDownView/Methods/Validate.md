---
title: Validate
parent: "Մեթոդներ"
grand_parent: "DropDownView"
---

# DropDownView.Validate(ref string value) մեթոդ

## Նկարագիր

**Դաս՝** [DropDownView](../DropDownView.md)

```c#
public virtual (bool, string) Validate(ref string value)
```

Սահմանում է DropDownView-ի համար տրված արժեքի վավերականության ստուգման գործողությունը։

null արժեքի դեպքում value պարամետրը չի փոփոխվում և վերադարձնում է (false, դատարկ տող)։

Մեթոդը չմշակելու դեպքում value-ն կտրվում է (trim), ապա ստուգվում է ցուցակում։ Տողերը դեռ բեռնված չլինելու և [Validator](../Properties/Validator.md) հատկության առկայության դեպքում վավերականությունը ստուգվում է Validator-ի միջոցով, հակառակ դեպքում կանչվում է [ReloadRows](ReloadRows.md)։ [CodeIsUnique](../Properties/CodeIsUnique.md) հատկության true արժեքի դեպքում որոնումը կատարվում է CodeDictionary-ի միջոցով, հակառակ դեպքում՝ տողերի ցուցակի ամբողջական անցումով։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- |
| value | string | - | Ստուգվող կոդի արժեքը։ Հաջողական ստուգման դեպքում փոփոխվում է կտրված (trim) արժեքով։ |

**Վերադարձնում է**

Երկու տարրից կազմված արդյունք՝ արժեքի ցուցակում առկայության նշանը և համապատասխան մեկնաբանությունը։ Արժեքը չգտնելու դեպքում վերադարձնում է (false, դատարկ տող)։

**Օրինակ**

```c#
public override (bool, string) Validate(ref string value)
{
    using var cloudClient = CommonServices.GetCloudAdminClient();
    var customer = cloudClient.AS7X.GetCustomer(int.Parse(value));
    if (customer != null)
    {
        return (true, customer.Name);
    }
    return (false, string.Empty);
}
```
