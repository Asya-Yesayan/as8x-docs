---
title: IDocumentService.GetProcessingModes(string) մեթոդ
---

## Նկարագիր

**Համարժեքը 4x-ում՝** AsKernel.GetProccesingMode

**Դաս՝** [IDocumentService](../IDocumentService.md)

```c#
public  Task<DocumentProcessingModes> GetProcessingModes(string docType)
```

Վերադարձնում է փաստաթղթի կատարման ռեժիմները ըստ փաստաթղթի ներքին անվան (տեսակի)։
 
**Պարամետրեր**

* `docType` - Փաստաթղթի ներքին անուն (տեսակ):
