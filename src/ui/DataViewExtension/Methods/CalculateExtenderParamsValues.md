---
title: CalculateExtenderParamsValues
parent: "Մեթոդներ"
grand_parent: "DataViewExtension"
---

# DataViewExtension.CalculateExtenderParamsValues() մեթոդ

## Նկարագիր

**Դաս՝** [DataViewExtension](../DataViewExtension.md)

```c#
public override void CalculateExtenderParamsValues()
```

Հաշվարկում և թարմացնում է ընդլայնման պարամետրերի արժեքները։

Յուրաքանչյուր պարամետրի համար արժեքի աղբյուրն ընտրվում է հետևյալ առաջնահերթությամբ՝
1. [DialogValues](../Properties/DialogValues.md) Dictionary-ում տվյալ պարամետրին համապատասխան բանալիով արժեքի առկայության դեպքում օգտագործվում է այդ արժեքը։
2. [ExtenderParamsInitialValues](../../ViewExtension/Properties/ExtenderParamsInitialValues.md) Dictionary-ում տվյալ պարամետրի սկզբնական արժեքի առկայության դեպքում օգտագործվում է այն՝ դեսերիալիզացված ընդլայնման սխեմայով սահմանված տիպին համապատասխան։
3. Հակառակ դեպքում կիրառվում է պարամետրի տիպին համապատասխան լռությամբ արժեքը։

Հաշվարկման արդյունքները լրացվում են [CalculatedExtenderParamsValues](../../ViewExtension/Properties/CalculatedExtenderParamsValues.md) հատկության մեջ։ Ընդլայնման սխեմայի կամ պարամետրերի բացակայության դեպքում նշված հատկության արժեքը դառնում է **null**։

**Օրինակ**

```c#
// պարամետրերի արժեքների հաշվարկ՝ բազային իրականացման ընդլայնմամբ
public override void CalculateExtenderParamsValues()
{
    // հիմնական պարամետրերի հաշվարկ (բազային իրականացման կանչ)
    base.CalculateExtenderParamsValues();
    // լրացուցիչ պարամետրի ավելացում՝ ընթացիկ ամսաթվով
    if (this.CalculatedExtenderParamsValues != null)
    {
        this.CalculatedExtenderParamsValues["currentDate"] = DateTime.Now;
    }
}
```
