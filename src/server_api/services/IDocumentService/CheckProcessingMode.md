---
title: IDocumentService.CheckProcessingMode(string) մեթոդ
---

## Նկարագիր

**Դաս՝** [IDocumentService](../IDocumentService.md)

```c#
public Task CheckProcessingMode(string docType)
```

Ստուգում է տրված տեսակի փաստաթղթերի գրանցման/հեռացման հնարավորությունը 8X սերվիսում (փաստաթղթի կատարման ռեժիմը (ProcessingMode) չլինի `0`)։
`0` լինելու դեպքում առաջանում է սխալ։

**Պարամետրեր**

* `docType` - Փաստաթղթի ներքին անունը (տեսակը)։
