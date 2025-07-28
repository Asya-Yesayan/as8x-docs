---
title: DocumentRoutes.LoadFromFolderAsync(string, string, bool, CancellationToken) մեթոդ
---

```c#
public Task<DocumentModel> LoadFromFolderAsync(string folder, string key, bool isExtended = true, CancellationToken cancellationToken = default)
```

Բեռնում է փաստաթուղթը ըստ թղթապանակի և բանալու։ Չհաջողվելու դեպքում վերադարձնում է **null**։

**Պարամետրեր**

* `folder` - Թղթապանակի ներքին անուն։
* `key` - Թղթապանակի տարրի բանալի։
* `isExtended` - Վերադարձվող `DocumentModel`-ում փաստաթղթի դաշտերի ընդլայնված անուններով պահման հայտանիշ։ Ընդլայնված դաշտի օրինակ՝ 
  ```c#
  [DocumentField("State")] // դաշտի տվյալների բազայում գրանցված ներքին անուն
  public string ContrState // դաշտի նոր նշանակված ներքին անուն
  ```
  Պարամետրի true արժեքի դեպքում վերադարձվող `DocumentModel`-ում դաշտերը պահվում են ընդլայնված ներքին անունով (այս օրինակում՝ `ContrState`), հակառակ դեպքում տվյալների բազայում առկա ներքին անունով (այս օրինակում՝ `State`)։
* `cancellationToken` - Ընդհատման օբյեկտ:
