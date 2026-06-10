---
title: AllowedDocumentsToAdd
parent: "Հատկություններ"
grand_parent: "TreeEdit"
---

# TreeEdit.AllowedDocumentsToAdd հատկություն

## Նկարագիր

**Դաս՝** [TreeEdit](../TreeEdit.md)

```c#
public virtual IReadOnlyCollection<string> AllowedDocumentsToAdd { get; internal set; }
```

Սահմանում է այն փաստաթղթերի ներքին անունների (տեսակների) ցանկը, որոնք թույլատրվում է ավելացնել ծառից՝ **«Ավելացնել»** կոնտեքստային ֆունկցիայի միջոցով։ Հատկությունը արժեքավորվում է ConfigureFromDefinition մեթոդի կանչի արդյունքում՝ ծառի սահմանումից (TreeDefinition) ստացված Document.Names արժեքով։
