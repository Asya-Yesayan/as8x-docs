---
title: AllowedDocumentsToAdd
parent: "Հատկություններ"
grand_parent: "DataView"
---

# DataView.AllowedDocumentsToAdd հատկություն

## Նկարագիր

**Դաս՝** [DataView](../DataView.md)

```c#
public virtual IReadOnlyCollection<string> AllowedDocumentsToAdd { get; }
```

`AddDocument`-ի կողմից թույլատրված փաստաթղթային տիպերի ցանկ:

Լռությամբ `null`: Override-ի դեպքում վերադարձնել string collection:
`AllowAdd`-ը `true` վերադարձնում է միայն երբ հավաքածուն ոչ-`null` ու ոչ-դատարկ է:

