---
title: Document.LoadImagesAndMemos(ArchiveInfo) մեթոդ
---

## Նկարագիր

**Դաս՝** [Document](../document.md)

```c#
public Task LoadImagesAndMemos(ArchiveInfo archiveInfo = null)
```

Բեռնում է փաստաթղթի նկարները և մեծ տեքստային դաշտերը (մեմոներ) տվյալների պահոցից` մինչև այս բեռնված չլինելու դեպքում։

**Պարամետրեր**

* `archiveInfo` - ArchiveInfo դասի օբյեկտ, որը պարունակում է արխիվացված փաստաթուղթը պարունակող տվյալների պահոցի անունը և [IDBService](../../services/IDBService.md) դասի օբյեկտ՝ այդ պահոցի հետ Sql միացում ապահովելու համար։ null արժեքի դեպքում նկարները և մեմոները բեռնում է հիմնական տվյալների պահոցից։

