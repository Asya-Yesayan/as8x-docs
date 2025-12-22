---
title: IDocumentService.SerializeResponseBody<T>(Document, bool) մեթոդ
---

## Նկարագիր

**Դաս՝** [IDocumentService](../IDocument/IDocumentService.md)

```c#
public Task<T> SerializeResponseBody<T>(Document document, 
                                        bool isExtended = false) where T : DocumentModelBase, new();
```

Այս մեթոդը սերիալիզացնում է տրված փաստաթուղթը `DocumentModelBase` տիպի ժառանգ հանդիսացող տիպի։

Այն անհրաժեշտ է կիրառել [AddCustomUIRequest](../../Types/UIRequestExecutionProgress/AddCustomUIRequest.md) մեթոդի կամ [Properties](../../../Definitions/Document/Properties/Properties.md) հատկության միջոցով փաստաթուղթը 4x ուղարկելիս։

**Պարամետրեր**

| Անվանում        | Տվյալների տիպ        | Լռությամբ արժեք | Նկարագրություն |
|-----------------|----------------------|----------------|----------------|
| document        | Document             | -              | [Փաստաթղթի օբյեկտ](../../Definitions/Document/Document.md)։ |
| isExtended      | bool                 | false | Փաստաթղթի ընդլայնված դաշտերի սերիալիզացման հայտանիշ։ |
