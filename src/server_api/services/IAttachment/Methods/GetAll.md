---
title: IAttachmentService.GetAll(int) մեթոդ
---

## Նկարագիր

**Համարժեքը 4x-ում՝** [AsAttachmentCollection․Refresh](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Functions/AsAttachmentCollection/Refresh.html)

**Դաս՝** [IAttachmentService](../../IAttachment/IAttachmentService.md)

```c#
public Task<List<AttachmentModel>> GetAll(int isn)
```

Վերադարձնում է փաստաթղթին կցված բոլոր [ֆայլերի տվյալները](../../../Types/AttachmentModel.md)։

**Պարամետրեր**

| Անվանում        | Տվյալների տիպ        | Լռությամբ արժեք | Նկարագրություն |
|-----------------|----------------------|----------------|----------------|
| isn             | int                  | -              | Փաստաթղթի ներքին նույնականացման համար։ |
