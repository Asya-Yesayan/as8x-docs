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

Սահմանում է այն փաստաթղթերի ներքին անունների (տեսակների) ցանկը, որոնք թույլատրվում է ավելացնել դիտելու ձևից՝ «Ավելացնել» կոնտեքստային ֆունկցիայի միջոցով։ Լռությամբ արժեքը null է, որի դեպքում «Ավելացնել» կոնտեքստային ֆունկցիան հասանելի է բոլոր փաստաթղթերի համար։

