---
title: RODocumentService.RemoveFromCache մեթոդ  
---

## Գերբեռնումներ

| Անվանում | Նկարագրություն |
|--|--|
| [RemoveFromCache(int)](#rodocumentserviceremovefromcacheint-մեթոդ) | Հեռացնում է փաստաթուղթը քեշից՝ ըստ ներքին նույնականացման համարի։ |
| [RemoveFromCache(string)](#rodocumentserviceremovefromcachestring-մեթոդ) | Հեռացնում է նշված տեսակի բոլոր փաստաթղթերը քեշից։ |

### RODocumentService.RemoveFromCache(int) մեթոդ

#### Նկարագիր

**Դաս՝** [RODocumentService](../../RODocumentService.md)

```c#
public void RemoveFromCache(int isn)
```

Հեռացնում է փաստաթուղթը քեշից՝ ըստ ներքին նույնականացման համարի։

**Պարամետրեր**

| Անվանում        | Տվյալների տիպ        | Լռությամբ արժեք | Նկարագրություն |
|-----------------|----------------------|----------------|----------------|
| isn             | int                  | -              | Փաստաթղթի ներքին նույնականացման համարը։ |

### RODocumentService.RemoveFromCache(string) մեթոդ  

#### Նկարագիր

**Դաս՝** [RODocumentService](../../RODocumentService.md)

```c#
public void RemoveFromCache(string docType)
```

Հեռացնում է նշված տեսակի բոլոր փաստաթղթերը քեշից։

**Պարամետրեր**

| Անվանում        | Տվյալների տիպ        | Լռությամբ արժեք | Նկարագրություն |
|-----------------|----------------------|----------------|----------------|
| docType         | string               | -              | Փաստաթղթի տեսակը։ |

