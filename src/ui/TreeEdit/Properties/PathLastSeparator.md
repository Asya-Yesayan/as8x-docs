---
title: PathLastSeparator
parent: "Հատկություններ"
grand_parent: "TreeEdit"
---

# TreeEdit.PathLastSeparator հատկություն

## Նկարագիր

**Դաս՝** [TreeEdit](../TreeEdit.md)

```c#
public virtual bool PathLastSeparator { get; internal set; }
```

Սահմանում է ծառի ուղու վերջում բաժանարարի ցուցադրման իրավասությունը։ Հատկությունը արժեքավորվում է ConfigureFromDefinition մեթոդի կանչի արդյունքում՝ ծառի նկարագրության (TreeDefinition) PathLastSeparator հատկության հիման վրա։

Հատկության true արժեքի դեպքում ծառի տողի ուղին (path) ցուցադրվում է վերջում բաժանարար նիշով, հակառակ դեպքում՝ առանց։
