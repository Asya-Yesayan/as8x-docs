---
title: CalculateExtenderParamsValues
parent: "Մեթոդներ"
grand_parent: "ViewExtension"
---

# ViewExtension.CalculateExtenderParamsValues() մեթոդ

## Նկարագիր

**Դաս՝** [ViewExtension](../ViewExtension.md)

```c#
public abstract void CalculateExtenderParamsValues()
```

Հաշվարկում և թարմացնում է ընդլայնման պարամետրերի արժեքները։ Մեթոդի կատարման արդյունքում ստացված արժեքները լրացվում են [CalculatedExtenderParamsValues](../Properties/CalculatedExtenderParamsValues.md) հատկության մեջ։ Որպես սկզբնական արժեքներ օգտագործվում են [ExtenderParamsInitialValues](../Properties/ExtenderParamsInitialValues.md) հատկության արժեքները։

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
