---
title: SkipReadOnlyControlsValidation
nav_exclude: true
---

# DialogWindow.SkipReadOnlyControlsValidation հատկություն

## Նկարագիր

**Դաս՝** [DialogWindow](../DialogWindow.md)

```c#
protected virtual bool SkipReadOnlyControlsValidation { get; }
```

Վերադարձնում է, արդյոք վալիդացիան բաց է թողնում միայն կարդալու համար նախատեսված դաշտերը։ **true** արժեքի դեպքում (լռությամբ) վալիդացիայի ընթացքում միայն կարդալու դաշտերը (**IsReadOnly = true**) անտեսվում են։ Ընդլայնման կետ ժառանգորդ դասերի համար, որպեսզի վերասահմանեն այս լռությամբ վարքագիծը։
