---
title: GetDocumentTypeFromFolder
parent: "Մեթոդներ"
grand_parent: "IDocumentService"
---

# IDocumentService.GetDocumentTypeFromFolder(string, string) մեթոդ

## Նկարագիր

**Դաս՝** [IDocumentService](../IDocumentService.md)

```c#
public Task<string> GetDocumentTypeFromFolder(string folder, 
                                              string key)
```

Վերադարձնում է նշված թղթապանակից փաստաթղթի ներքին անունը (տեսակը):

**Պարամետրեր**

| Անվանում        | Տվյալների տիպ        | Լռությամբ արժեք | Նկարագրություն |
|-----------------|----------------------|----------------|----------------|
| folder          | string               | -              | Թղթապանակի ներքին անուն։ |
| key             | string               | -              | Թղթապանակի տարրի բանալի։ |
