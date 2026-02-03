---
title: GetDocumentStatus(string, int)
parent: "Մեթոդներ"
grand_parent: "IDocumentService"
---

# IDocumentService.GetDocumentStatus(string, int) մեթոդ

## Նկարագիր

**Համարժեքը 4x-ում՝** AsDocEngine.GetDocStatus

**Դաս՝** [IDocumentService](../IDocumentService.md)

```c#
public Task<byte> GetDocumentStatus(string folderID, 
                                    int isn)
```

Վերադարձնում է թղթապանակի տարրի վիճակը։

**Պարամետրեր**

| Անվանում        | Տվյալների տիպ        | Լռությամբ արժեք | Նկարագրություն |
|-----------------|----------------------|----------------|----------------|
| folderID        | string               | -              | Թղթապանակի ներքին անուն: |
| isn             | int                  | -              | Փաստաթղթի ներքին նույնականացման համար։ |
