---
title: LiteDocumentService.RemoveFromCache մեթոդ  
---

## Գերբեռնումներ

| Անվանում | Նկարագրություն |
|--|--|
| [LiteDocumentService.RemoveFromCache(int) մեթոդ](#litedocumentserviceremovefromcacheint-մեթոդ) | Հեռացնում է փաստաթուղթը քեշից՝ ըստ ներքին նույնականացման համարի։ |
| [LiteDocumentService.RemoveFromCache(string) մեթոդ](#litedocumentserviceremovefromcachestring-մեթոդ) | Հեռացնում է նշված տեսակի բոլոր փաստաթղթերը քեշից։ |

### LiteDocumentService.RemoveFromCache(int) մեթոդ

#### Նկարագիր

**Դաս՝** [LiteDocumentService](../LiteDocumentService/LiteDocumentService.md)

```c#
public void RemoveFromCache(int isn);
```

Հեռացնում է փաստաթուղթը քեշից՝ ըստ ներքին նույնականացման համարի։

**Պարամետրեր**

| Անվանում        | Տվյալների տիպ        | Լռությամբ արժեք | Նկարագրություն |
|-----------------|----------------------|----------------|----------------|
| isn             | int                  | -              | Փաստաթղթի ներքին նույնականացման համարը։ |

### LiteDocumentService.RemoveFromCache(string) մեթոդ  

#### Նկարագիր

**Դաս՝** [LiteDocumentService](../LiteDocumentService/LiteDocumentService.md)

```c#
public void RemoveFromCache(string docType);
```

Հեռացնում է նշված տեսակի բոլոր փաստաթղթերը քեշից։

**Պարամետրեր**

| Անվանում        | Տվյալների տիպ        | Լռությամբ արժեք | Նկարագրություն |
|-----------------|----------------------|----------------|----------------|
| docType         | string               | -              | Փաստաթղթի տեսակը։ |

