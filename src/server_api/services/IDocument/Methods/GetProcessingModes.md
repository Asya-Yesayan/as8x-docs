---
title: GetProcessingModes(string)
parent: "Մեթոդներ"
grand_parent: "IDocumentService"
---

# IDocumentService.GetProcessingModes(string) մեթոդ

## Նկարագիր

**Համարժեքը 4x-ում՝** AsKernel.GetProccesingMode

**Դաս՝** [IDocumentService](../IDocumentService.md)

```c#
public  Task<DocumentProcessingModes> GetProcessingModes(string docType)
```

Վերադարձնում է փաստաթղթի կատարման ռեժիմները ըստ փաստաթղթի ներքին անվան (տեսակի)։
 
**Պարամետրեր**

| Անվանում        | Տվյալների տիպ        | Լռությամբ արժեք | Նկարագրություն |
|-----------------|----------------------|----------------|----------------|
| docType         | string               | -              | Փաստաթղթի ներքին անուն (տեսակ): |
