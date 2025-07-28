---
title: LiteDocument դաս
---

## Ներածություն

LiteDocument դասը նախատեսված է փաստաթուղթը քեշավորելու համար։

LiteDocument տեսակի փաստաթուղթը տվյալների պահոցից բեռնելու, քեշում պահելու և քեշից կարդալու համար տե՛ս [LiteDocumentService](../services/LiteDocumentService.md):

## Մեթոդներ

| Անվանում | Նկարագրություն |
|----------|----------------|
| [ExistsRekvizit](LiteDocument/ExistsRekvizit.md) | Ստուգում է տրված ներքին անունով դաշտի առկայությունը փաստաթղթի նկարագրության մեջ։ |
| [InitGrids](LiteDocument/InitGrids.md) | Ձևավորում է փաստաթղթի աղյուսակները՝ առանց տվյալների բեռնելու։ |
| [LoadGrids](LiteDocument/LoadGrids.md) | Բեռնում է փաստաթղթի աղյուսակները տվյալների պահոցից և ավելացնում փաստաթղթում։ |
| [RefreshLastLookup](LiteDocument/RefreshLastLookup.md) | Թարմացնում է [LastLookup](LiteDocument/LastLookup.md) հատկության արժեքը՝ նշանակելով ընթացիկ ամսաթիվը/ժամանակը։ |
| [RefreshLastTSCheck](LiteDocument/RefreshLastTSCheck.md) | Թարմացնում է [LastTSCheck](LiteDocument/LastTSCheck.md) հատկության արժեքը՝ նշանակելով ընթացիկ ամսաթիվը/ժամանակը։ |

## Հատկություններ

| Անվանում | Նկարագրություն |
|----------|----------------|
| [Archived](LiteDocument/Archived.md) | Ցույց է տալիս փաստաթղթի արխիվացված լինելը։ |
| [CreationDate](LiteDocument/CreationDate.md) | Վերադարձնում է փաստաթղթի ստեղծման ամսաթիվը/ժամանակը։ |
| [CreatorSUID](LiteDocument/CreatorSUID.md) | Վերադարձնում է փաստաթուղթը ստեղծողի ներքին համարը (user id): |
| [Description](LiteDocument/Description.md) | Վերադարձնում է փաստաթղթի նկարագրությունը։ |
| [DocumentType](LiteDocument/DocumentType.md) | Վերադարձնում է փաստաթղթի տեսակը։ |
| [Fields](LiteDocument/Fields.md) | Վերադարձնում է փաստաթղթի դաշտերը որպես dictionary, որտեղ բանալին՝ դաշտի ներքին անունն է, իսկ արժեքը՝ դաշտի արժեքը: |
| [Grids](LiteDocument/Grids.md) | Վերադարձնում է փաստաթղթի աղյուսակների բազմությունը՝ որտեղ բանալին աղյուսակի ներքին անունն է, իսկ արժեքը՝ աղյուսակը IGrid ինտերֆեյսով։ |
| [GridsInitialized](LiteDocument/GridsInitialized.md) | Ցույց է տալիս փաստաթղթի աղյուսակների ձևավորված լինելը։ |
| [GridsLoaded](LiteDocument/GridsLoaded.md) | Ցույց է տալիս փաստաթղթի աղյուսակների բեռնված լինելը։ |
| [GridsLoading](LiteDocument/GridsLoading.md) | Ցույց է տալիս փաստաթղթի աղյուսակները գտնվում են բեռնման պրոցեսում թե ոչ։ |
| [indexer](LiteDocument/indexer.md) | Վերադարձնում կամ նշանակում է փաստաթղթի տրված ներքին անունով դաշտի արժեքը։ |
| [ISN](LiteDocument/ISN.md) | Վերադարձնում է փաստաթղթի ներքին նույնականացման համարը (isn-ը): |
| [LastLookup](LiteDocument/LastLookup.md) | Վերադարձնում է փաստաթղթի քեշում փնտրման և քեշից բեռնման վերջին ամսաթիվը/ժամանակը: |
| [LastTSCheck](LiteDocument/LastTSCheck.md) | Վերադարձնում է փաստաթղթի [TimeStamp](LiteDocument/TimeStamp.md)-ի տվյալների պահոցից վերջին ստուգման ամսաթիվը/ժամանակը: |
| [State](LiteDocument/State.md) | Վերադարձնում կամ նշանակում է փաստաթղթի վիճակը: |
| [TimeStamp](LiteDocument/TimeStamp.md) | Նշանակում է կամ վերադարձնում փաստաթղթի վերջին փոփոխման ամսաթիվը և ժամանակը` որպես byte տիպի զանգված: |

