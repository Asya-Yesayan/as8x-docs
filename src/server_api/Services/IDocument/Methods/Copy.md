---
title: Copy
parent: "Մեթոդներ"
grand_parent: "IDocumentService"
---

# IDocumentService.Copy(int, object, int) մեթոդ

## Նկարագիր

**Համարժեքը 4x-ում՝** [AsDocEngine.CopyDoc](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Functions/Functions/DocumentsCirculation/CopyDoc.html)

**Դաս՝** [IDocumentService](../IDocumentService.md)

```c#
public Task<Document> Copy(int isn, 
                           object beforeCopyParam = null, 
                           int copyDocMode = 0)
```

Ստեղծում է արդեն գոյություն ունեցող փաստաթղթի պատճեն օբյեկտը։
Տրված ISN-ով փաստաթուղթը բեռնում է տվյալների պահոցից, որի հիման վրա ստեղծում է պատճեն օբյեկտը։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
|----------|----------------|----------------|----------------|
| isn | int | --- | Պատճենման ենթակա փաստաթղթի ներքին նույնականացման համար։ |
| beforeCopyParam | object | null | Տվյալ պարամետրի արժեքը փոխանցվում է փաստաթղթի [BeforeCopy](../../../Definitions/Document/Methods/BeforeCopy.md) իրադարձության մշակիչին։ |
| copyDocMode | int | 0 | Փաստաթղթի պատճենման ռեժիմ։ `0` - Պատճենվում են բոլոր դաշտերի արժեքները։ `1` - Պատճենման ռեժիմը կախված է փաստաթղթի նկարագրության [CopyAsRepeatable](https://github.com/armsoft/as4x-docs/blob/master/HTM/ProgrGuide/Defs/doc.md) հատկության արժեքից։ `2` - Պատճենվում են միայն այն դաշտերը, որոնք պարունակում են `N` հայտանիշը։ |
