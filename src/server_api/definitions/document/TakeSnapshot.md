---
title: Document.TakeSnapshot(SnapshotContent, string, bool) մեթոդ
---

## Նկարագիր

**Համարժեքը 4x-ում՝** AsDoc.TakeSnapshot

**Դաս՝** [Document](../document.md)

```c#
public Task TakeSnapshot(SnapshotContent content, 
						 string name, 
						 bool overwrite = true)
```

Քեշավորում և պահպանում է փաստաթղթի պատկերը [Snapshots](Snapshots.md)-ում։

**Պարամետրեր**

* `content` - Սահմանում է փաստաթղթի քեշավորվող կտորները, որը կարող է ընդունել հետևյալ արժեքները՝
	* **SnapshotContent.None** - ոչինչ չի քեշավորվում,
	* **SnapshotContent.Requisites** - քեշավորվում են միայն դաշտերը,
	* **SnapshotContent.Grids** - քեշավորվում են միայն աղյուսակները,
	* **SnapshotContent.All** - քեշավորվում են դաշտերը և աղյուսակները։
* `name` - Ստեղծվող քեշավորման օբյեկտի ներքին անուն, որը հանդիսանալու է բանալի [Snapshots](Snapshots.md)-ում։
* `overwrite` - [Snapshots](Snapshots.md)-ում բանալիի առկայության դեպքում վերարտագրման հայտանիշ։

