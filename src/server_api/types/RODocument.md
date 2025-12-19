---
title: RODocument դաս
---

## Ներածություն

RODocument դասը նախատեսված է փաստաթուղթը քեշավորելու համար։

RODocument տիպի քեշավորվող փաստաթղթերը ժառանգում են `RODocument` դասից և ունեն փաստաթղթի ներքին անունը պարունակող `RODocument` ատրիբուտը։

```c#
[RODocument("Cli")]
public class Client : RODocument
```

Փաստաթղթին համապատասխան քեշավորվող փաստաթուղթը գեներացվում է ավտոմատ [Codegen](../../CodeGen/CodeGen.md) գործիքի միջոցով։

RODocument տեսակի փաստաթուղթը տվյալների պահոցից բեռնելու, քեշում պահելու և քեշից կարդալու համար տե՛ս [RODocumentService](../services/RODocumentService.md):

## Մեթոդներ

| Անվանում | Նկարագրություն |
|----------|----------------|
| [CheckGrid()](RODocument/Methods/CheckGrid.md) | Ստուգում է փաստաթղթի աղյուսակների բեռնված լինելը։ |
| [CheckImage()](RODocument/Methods/CheckImage.md) | Ստուգում է փաստաթղթի նկարների բեռնված լինելը։ |
| [CheckMemo()](RODocument/Methods/CheckMemo.md) | Ստուգում է փաստաթղթի մեծ տեքստային դաշտերի (մեմո) բեռնված լինելը։ |
| [RefreshLastLookup()](LiteDocument/Methods/RefreshLastLookup.md) | Թարմացնում է [LastLookup](LiteDocument/Properties/LastLookup.md) հատկության արժեքը՝ նշանակելով ընթացիկ ամսաթիվը/ժամանակը։ |
| [RefreshLastTSCheck()](LiteDocument/Methods/RefreshLastTSCheck.md) | Թարմացնում է [LastTSCheck](LiteDocument/Properties/LastTSCheck.md) հատկության արժեքը՝ նշանակելով ընթացիկ ամսաթիվը/ժամանակը։ |

## Հատկություններ

| Անվանում | Նկարագրություն |
|----------|----------------|
| [Archived](../definitions/document/Properties/Archived.md) | Ցույց է տալիս փաստաթղթի արխիվացված լինելը։ |
| [CreationDate](../definitions/document/Properties/CreationDate.md) | Վերադարձնում է փաստաթղթի ստեղծման ամսաթիվը/ժամանակը։ |
| [CreatorSUID](../definitions/document/Properties/CreatorSUID.md) | Վերադարձնում է փաստաթուղթը ստեղծողի ներքին համարը (user id): |
| [Description](../definitions/document/Properties/Description.md) | Վերադարձնում է փաստաթղթի նկարագրությունը։ |
| [DocumentType](LiteDocument/Properties/DocumentType.md) | Վերադարձնում է փաստաթղթի տեսակը։ |
| [Fields](LiteDocument/Properties/Fields.md) | Վերադարձնում է փաստաթղթի դաշտերը որպես dictionary, որտեղ բանալին՝ դաշտի ներքին անունն է, իսկ արժեքը՝ դաշտի արժեքը: |
| [indexer](../definitions/document/Properties/indexer.md) | Վերադարձնում է փաստաթղթի տրված ներքին անունով դաշտի արժեքը։ |
| [ISN](../definitions/document/Properties/ISN.md) | Վերադարձնում է փաստաթղթի ներքին նույնականացման համարը (isn-ը): |
| [LastLookup](LiteDocument/Properties/LastLookup.md) | Վերադարձնում է փաստաթղթի քեշում փնտրման և քեշից բեռնման վերջին ամսաթիվը/ժամանակը: |
| [LastTSCheck](LiteDocument/Properties/LastTSCheck.md) | Վերադարձնում է փաստաթղթի [TimeStamp](../definitions/document/Properties/TimeStamp.md)-ի տվյալների պահոցից վերջին ստուգման ամսաթիվը/ժամանակը: |
| [TimeStamp](../definitions/document/Properties/TimeStamp.md) | Նշանակում է կամ վերադարձնում փաստաթղթի վերջին փոփոխման ամսաթիվը և ժամանակը` որպես byte տիպի զանգված: |
| [State](../definitions/document/Properties/State.md) | Վերադարձնում կամ նշանակում է փաստաթղթի վիճակը: |
