---
title: DisableDocumentFunctions
parent: "Հատկություններ"
grand_parent: "TreeEdit"
---

# TreeEdit.DisableDocumentFunctions հատկություն

## Նկարագիր

**Դաս՝** [TreeEdit](../TreeEdit.md)

```c#
public virtual bool DisableDocumentFunctions { get; internal set; }
```

Սահմանում է ծառի կոնտեքստային մենյուից փաստաթղթի կոնտեքստային ֆունկցիաների անջատման իրավասությունը։ Հատկությունը արժեքավորվում է ConfigureFromDefinition մեթոդի կանչի արդյունքում՝ ծառի նկարագրության (TreeDefinition) DisableDocFunc հատկության հիման վրա։

Հատկության true արժեքի դեպքում ծառ-տեղեկատուի կոնտեքստային մենյուում չեն ցուցադրվում ընթացիկ տողում պարունակվող փաստաթղթի և փաստաթղթի ընդլայնման կոնտեքստային ֆունկցիաները։
