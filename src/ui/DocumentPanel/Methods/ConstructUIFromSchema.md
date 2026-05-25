---
title: ConstructUIFromSchema
parent: "Մեթոդներ"
grand_parent: "DocumentPanel"
---

# DocumentPanel&lt;T&gt;.ConstructUIFromSchema(IEnumerable&lt;string&gt;) մեթոդ

## Նկարագիր

**Դաս՝** [DocumentPanel](../DocumentPanel.md)

```c#
protected void ConstructUIFromSchema(IEnumerable<string> suppressFor = null)
```

Փաստաթղթի սխեմայի հիման վրա կառուցում է վահանակի ինտերֆեյսը՝ ստեղծելով անհրաժեշտ թաբները։ Սխեմայում մեկ էջի առկայության և ընդլայնիչի լրացուցիչ թաբների բացակայության դեպքում ինտերֆեյսը կառուցվում է առանց թաբների, հակառակ դեպքում՝ յուրաքանչյուր էջի համար ստեղծվում է առանձին թաբ։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- |
| suppressFor | IEnumerable&lt;string&gt; | null | Բացառվող էջի տարրերի ներքին անունների ցուցակը։ |
