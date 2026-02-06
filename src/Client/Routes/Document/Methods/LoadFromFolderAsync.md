---
title: LoadFromFolderAsync
nav_exclude: true
---

# DocumentRoutes.LoadFromFolderAsync(string, string, bool, CancellationToken) մեթոդ

```c#
public Task<DocumentModel> LoadFromFolderAsync(string folder, 
                                               string key, 
                                               bool isExtended = true, 
                                               CancellationToken cancellationToken = default)
```

Բեռնում է փաստաթուղթը ըստ թղթապանակի և բանալու։ Չհաջողվելու դեպքում վերադարձնում է **null**։

**Պարամետրեր**

| Անվանում        | Տվյալների տիպ        | Լռությամբ արժեք | Նկարագրություն |
|-----------------|----------------------|----------------|----------------|
| folder          | string               | -              | Թղթապանակի ներքին անուն։ |
| key             | string               | -              | Թղթապանակի տարրի բանալի։ |
| isExtended      | bool                 | true           | Վերադարձվող `DocumentModel`-ում փաստաթղթի դաշտերի ընդլայնված անուններով պահման հայտանիշ։ Պարամետրի true արժեքի դեպքում վերադարձվող `DocumentModel`-ում դաշտերը պահվում են ընդլայնված ներքին անունով (ստորև օրինակում՝ `ContrState`), հակառակ դեպքում տվյալների բազայում առկա ներքին անունով (ստորև օրինակում՝ `State`)։ |
| cancellationToken | CancellationToken    | default        | Ընդհատման օբյեկտ: |

Ընդլայնված դաշտի օրինակ՝

```c#
[DocumentField("State")] // դաշտի տվյալների բազայում գրանցված ներքին անուն
public string ContrState // դաշտի նոր նշանակված ներքին անուն
```
  
