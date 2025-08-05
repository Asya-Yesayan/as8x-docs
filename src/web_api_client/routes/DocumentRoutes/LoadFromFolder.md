---
title: DocumentRoutes.LoadFromFolder(string, string, bool) մեթոդ
---

```c#
public DocumentModel LoadFromFolder(string folder, 
                                    string key, 
                                    bool isExtended = true)
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
