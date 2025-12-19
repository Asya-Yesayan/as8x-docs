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
| [CheckGrid()](RODocument/CheckGrid.md) | Ստուգում է փաստաթղթի աղյուսակների բեռնված լինելը։ |
| [CheckImage()](RODocument/CheckImage.md) | Ստուգում է փաստաթղթի նկարների բեռնված լինելը։ |
| [CheckMemo()](RODocument/CheckMemo.md) | Ստուգում է փաստաթղթի մեծ տեքստային դաշտերի (մեմո) բեռնված լինելը։ |
| [RefreshLastLookup()](RODocument/RefreshLastLookup.md) | Թարմացնում է [LastLookup](RODocument/LastLookup.md) հատկության արժեքը՝ նշանակելով ընթացիկ ամսաթիվը/ժամանակը։ |
| [RefreshLastTSCheck()](RODocument/RefreshLastTSCheck.md) | Թարմացնում է [LastTSCheck](RODocument/LastTSCheck.md) հատկության արժեքը՝ նշանակելով ընթացիկ ամսաթիվը/ժամանակը։ |

## Հատկություններ

| Անվանում | Նկարագրություն |
|----------|----------------|
| [Archived](RODocument/Archived.md) | Ցույց է տալիս փաստաթղթի արխիվացված լինելը։ |
| [CreationDate](RODocument/CreationDate.md) | Վերադարձնում է փաստաթղթի ստեղծման ամսաթիվը/ժամանակը։ |
| [CreatorSUID](RODocument/CreatorSUID.md) | Վերադարձնում է փաստաթուղթը ստեղծողի ներքին համարը (user id): |
| [Description](RODocument/Description.md) | Վերադարձնում է փաստաթղթի նկարագրությունը։ |
| [DocumentType](RODocument/DocumentType.md) | Վերադարձնում է փաստաթղթի տեսակը։ |
| [Fields](RODocument/Fields.md) | Վերադարձնում է փաստաթղթի դաշտերը որպես dictionary, որտեղ բանալին՝ դաշտի ներքին անունն է, իսկ արժեքը՝ դաշտի արժեքը: |
| [indexer](RODocument/indexer.md) | Վերադարձնում է փաստաթղթի տրված ներքին անունով դաշտի արժեքը։ |
| [ISN](RODocument/ISN.md) | Վերադարձնում է փաստաթղթի ներքին նույնականացման համարը (isn-ը): |
| [LastLookup](RODocument/LastLookup.md) | Վերադարձնում է փաստաթղթի քեշում փնտրման և քեշից բեռնման վերջին ամսաթիվը/ժամանակը: |
| [LastTSCheck](RODocument/LastTSCheck.md) | Վերադարձնում է փաստաթղթի [TimeStamp](RODocument/TimeStamp.md)-ի տվյալների պահոցից վերջին ստուգման ամսաթիվը/ժամանակը: |
| [TimeStamp](RODocument/TimeStamp.md) | Նշանակում է կամ վերադարձնում փաստաթղթի վերջին փոփոխման ամսաթիվը և ժամանակը` որպես byte տիպի զանգված: |
| [State](RODocument/State.md) | Վերադարձնում կամ նշանակում է փաստաթղթի վիճակը: |
