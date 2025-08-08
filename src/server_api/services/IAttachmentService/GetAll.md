---
title: IAttachmentService.GetAll(int) մեթոդ
---

## Նկարագիր

**Համարժեքը 4x-ում՝** [AsAttachmentCollection․Refresh](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Functions/AsAttachmentCollection/Refresh.html)

**Դաս՝** [IAttachmentService](../IAttachmentService.md)

```c#
public Task<List<AttachmentModel>> GetAll(int isn)
```

Վերադարձնում է փաստաթղթին կցված բոլոր [ֆայլերի տվյալները](../../types/AttachmentModel.md)։

**Պարամետրեր**

* `isn` - Փաստաթղթի ներքին նույնականացման համար։
