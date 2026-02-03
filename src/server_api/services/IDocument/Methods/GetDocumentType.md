---
title: GetDocumentType(int)
parent: "Մեթոդներ"
grand_parent: "IDocumentService"
---

# IDocumentService.GetDocumentType(int) մեթոդ

## Նկարագիր

**Համարժեքը 4x-ում՝** [AsUtil.GetDocType](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Functions/Functions/DocumentsCirculation/GetDocType.html)

**Դաս՝** [IDocumentService](../IDocumentService.md)

```c#
public Task<string> GetDocumentType(int isn)
```

Վերադարձնում է նշված ներքին նույնականացման համարով փաստաթղթի ներքին անունը (տեսակը)։

**Պարամետրեր**

| Անվանում        | Տվյալների տիպ        | Լռությամբ արժեք | Նկարագրություն |
|-----------------|----------------------|----------------|----------------|
| isn             | int                  | -              | Փաստաթղթի ներքին նույնականացման համար։ |
