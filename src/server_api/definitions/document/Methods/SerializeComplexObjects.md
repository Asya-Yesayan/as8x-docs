---
title: Document.SerializeComplexObjects(SerializeComplexObjectsEventArgs) մեթոդ
---

## Նկարագիր

**Համարժեքը 4x-ում՝** SerializeComplexObjects

**Դաս՝** [Document](../../document.md)

```c#
public virtual Task SerializeComplexObjects(SerializeComplexObjectsEventArgs args)
```

Մեթոդը անհրաժեշտ է մշակել այն դեպքում, երբ 8X-ական փաստաթղթի [Properties](../Properties/Properties.md) հատկությունում եկած բարդ օբյեկտները անհրաժեշտ է բերել 4X-ական տիպերի՝ 4X-ում օգտագործելու համար։

**Պարամետրեր**


| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- |
| args | [SerializeComplexObjectsEventArgs](../../../types/args/SerializeComplexObjectsEventArgs.md) | - | [SerializeComplexObjectsEventArgs](../../../types/args/SerializeComplexObjectsEventArgs.md) դասի օբյեկտ։ |

