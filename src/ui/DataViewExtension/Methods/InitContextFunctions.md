---
title: InitContextFunctions
parent: "Մեթոդներ"
grand_parent: "DataViewExtension"
---

# DataViewExtension.InitContextFunctions(PopupMenu) մեթոդ

## Նկարագիր

**Դաս՝** [DataViewExtension](../DataViewExtension.md)

```c#
public virtual void InitContextFunctions(PopupMenu popupMenu)
```

Նախատեսված է ընդլայնման սեփական կոնտեքստային ֆունկցիաների ավելացման համար՝ դիտելու ձևի [InitContextFunctions](../../DataView/Methods/InitContextFunctions.md) մեթոդի կողմից ստեղծված կոնտեքստային մենյուին։ Մեթոդը կանչվում է ընդլայնման [ApplyExtension](../../DataView/Methods/ApplyExtension.md) մեթոդի կողմից՝ ընդլայնումը դիտելու ձևին կցելու ընթացքում։

Մեթոդի լռությամբ իրականացումը չի կատարում որևէ գործողություն։ Ընդլայնմանը հատուկ կոնտեքստային ֆունկցիա ավելացնելու համար անհրաժեշտ է վերասահմանել մեթոդը և կատարել անհրաժեշտ ավելացումները ընդունված **popupMenu** պարամետրի վրա։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
|----------|---------------|-----------------|----------------|
| popupMenu | PopupMenu | - | Դիտելու ձևի կոնտեքստային մենյուն, որին ընդլայնումը ավելացնում է իր սեփական կոնտեքստային ֆունկցիաները։ |

**Օրինակ**

```c#
// ընդլայնման սեփական կոնտեքստային ֆունկցիայի ավելացում դիտելու ձևի կոնտեքստային մենյուին
public override void InitContextFunctions(PopupMenu popupMenu)
{
    // «Արտահանել ընդլայնման տվյալները» կոնտեքստային ֆունկցիայի ավելացում
    popupMenu.AddContextFunction(nameof(ExportExtensionData), "Արտահանել ընդլայնման տվյալները", ExportExtensionData, FunctionAvailability.Always);
}
```
