---
title: IDocumentService.SerializeResponseBody<T>(Document, bool) մեթոդ
---

## Նկարագիր

**Դաս՝** [IDocumentService](../IDocumentService.md)

```c#
public Task<T> SerializeResponseBody<T>(Document document, 
                                        bool isExtended = false) where T : DocumentModelBase, new();
```

Այս մեթոդը սերիալիզացնում է տրված փաստաթուղթը `DocumentModelBase` տիպի ժառանգ հանդիսացող տիպի։

Այն անհրաժեշտ է կիրառել [AddCustomUIRequest](../../types/UIRequestExecutionProgress/AddCustomUIRequest.md) մեթոդի կամ [Properties](../../definitions/document/Properties.md) հատկության միջոցով փաստաթուղթը 4x ուղարկելիս։

**Պարամետրեր**
| Անվանում        | Տվյալների տիպ        | Լռությամբ արժեք | Նկարագրություն |
|-----------------|----------------------|----------------|----------------|
| document        | Document             | -              | [Փաստաթղթի օբյեկտ](../../definitions/document.md)։ |
| isExtended      | bool                 | false | Փաստաթղթի ընդլայնված դաշտերի սերիալիզացման հայտանիշ։ |
