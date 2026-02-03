---
title: RODocument դաս
nav_exclude: true
---

# RODocument դաս

## Ներածություն

RODocument դասը նախատեսված է փաստաթուղթը քեշավորելու համար։

RODocument տիպի քեշավորվող փաստաթղթերը ժառանգում են `RODocument` դասից և ունեն փաստաթղթի ներքին անունը պարունակող `RODocument` ատրիբուտը։

```c#
[RODocument("Cli")]
public class Client : RODocument
```

Փաստաթղթին համապատասխան քեշավորվող փաստաթուղթը գեներացվում է ավտոմատ [Codegen](../../CodeGen/CodeGen.md) գործիքի միջոցով։

RODocument տեսակի փաստաթուղթը տվյալների պահոցից բեռնելու, քեշում պահելու և քեշից կարդալու համար տե՛ս [RODocumentService](../Services/RODocument/RODocumentService.md):

## Մեթոդներ

| Անվանում | Նկարագրություն |
|----------|----------------|
| [CheckGrid()](RODocument/Methods/CheckGrid.md) | Ստուգում է փաստաթղթի աղյուսակների բեռնված լինելը։ |
| [CheckImage()](RODocument/Methods/CheckImage.md) | Ստուգում է փաստաթղթի նկարների բեռնված լինելը։ |
| [CheckMemo()](RODocument/Methods/CheckMemo.md) | Ստուգում է փաստաթղթի մեծ տեքստային դաշտերի (մեմո) բեռնված լինելը։ |
| [RefreshLastLookup()](RODocument/Methods/RefreshLastLookup.md) | Թարմացնում է [LastLookup](RODocument/Properties/LastLookup.md) հատկության արժեքը՝ նշանակելով ընթացիկ ամսաթիվը/ժամանակը։ |
| [RefreshLastTSCheck()](RODocument/Methods/RefreshLastTSCheck.md) | Թարմացնում է [LastTSCheck](RODocument/Properties/LastTSCheck.md) հատկության արժեքը՝ նշանակելով ընթացիկ ամսաթիվը/ժամանակը։ |

## Հատկություններ

| Անվանում | Նկարագրություն |
|----------|----------------|
| [Archived](RODocument/Properties/Archived.md) | Ցույց է տալիս փաստաթղթի արխիվացված լինելը։ |
| [CreationDate](RODocument/Properties/CreationDate.md) | Վերադարձնում է փաստաթղթի ստեղծման ամսաթիվը/ժամանակը։ |
| [CreatorSUID](RODocument/Properties/CreatorSUID.md) | Վերադարձնում է փաստաթուղթը ստեղծողի ներքին համարը (user id): |
| [Description](RODocument/Properties/Description.md) | Վերադարձնում է փաստաթղթի նկարագրությունը։ |
| [DocumentType](RODocument/Properties/DocumentType.md) | Վերադարձնում է փաստաթղթի տեսակը։ |
| [Fields](RODocument/Properties/Fields.md) | Վերադարձնում է փաստաթղթի դաշտերը որպես dictionary, որտեղ բանալին՝ դաշտի ներքին անունն է, իսկ արժեքը՝ դաշտի արժեքը: |
| [indexer](RODocument/Properties/indexer.md) | Վերադարձնում է փաստաթղթի տրված ներքին անունով դաշտի արժեքը։ |
| [ISN](RODocument/Properties/ISN.md) | Վերադարձնում է փաստաթղթի ներքին նույնականացման համարը (isn-ը): |
| [LastLookup](RODocument/Properties/LastLookup.md) | Վերադարձնում է փաստաթղթի քեշում փնտրման և քեշից բեռնման վերջին ամսաթիվը/ժամանակը: |
| [LastTSCheck](RODocument/Properties/LastTSCheck.md) | Վերադարձնում է փաստաթղթի [TimeStamp](RODocument/Properties/TimeStamp.md)-ի տվյալների պահոցից վերջին ստուգման ամսաթիվը/ժամանակը: |
| [TimeStamp](RODocument/Properties/TimeStamp.md) | Նշանակում է կամ վերադարձնում փաստաթղթի վերջին փոփոխման ամսաթիվը և ժամանակը` որպես byte տիպի զանգված: |
| [State](RODocument/Properties/State.md) | Վերադարձնում կամ նշանակում է փաստաթղթի վիճակը: |
