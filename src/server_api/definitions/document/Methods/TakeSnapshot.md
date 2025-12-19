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

| Անվանում        | Տվյալների տիպ        | Լռությամբ արժեք | Նկարագրություն |
|-----------------|----------------------|----------------|----------------|
| content         | SnapshotContent      | -              | Սահմանում է փաստաթղթի քեշավորվող կտորները, որը կարող է ընդունել հետևյալ արժեքները՝ |
| name            | string               | -              | Ստեղծվող քեշավորման օբյեկտի ներքին անուն, որը հանդիսանալու է բանալի [Snapshots](Snapshots.md)-ում։ |
| overwrite       | bool                 | true           | [Snapshots](Snapshots.md)-ում բանալիի առկայության դեպքում վերարտագրման հայտանիշ։ |

