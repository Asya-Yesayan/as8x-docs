---
title: LiteDocument դաս
---

## Ներածություն

LiteDocument դասը նախատեսված է փաստաթուղթը քեշավորելու համար։

LiteDocument տեսակի փաստաթուղթը տվյալների պահոցից բեռնելու, քեշում պահելու և քեշից կարդալու համար տե՛ս [LiteDocumentService](../services/LiteDocumentService.md):

## Մեթոդներ

| Անվանում | Նկարագրություն |
|----------|----------------|
| [ExistsRekvizit(string)](../definitions/document/Methods/ExistsRekvizit.md) | Ստուգում է տրված ներքին անունով դաշտի առկայությունը փաստաթղթի նկարագրության մեջ։ |
| [InitGrids()](../definitions/document/Methods/InitGrids.md) | Ձևավորում է փաստաթղթի աղյուսակները՝ առանց տվյալների բեռնելու։ |
| [LoadGrids(IDBService, ArchiveInfo)](../definitions/document/Methods/LoadGrids.md) | Բեռնում է փաստաթղթի աղյուսակները տվյալների պահոցից և ավելացնում փաստաթղթում։ |
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
| [Grids](../definitions/document/Properties/Grids.md) | Վերադարձնում է փաստաթղթի աղյուսակների բազմությունը՝ որտեղ բանալին աղյուսակի ներքին անունն է, իսկ արժեքը՝ աղյուսակը IGrid ինտերֆեյսով։ |
| [GridsInitialized](../definitions/document/Properties/GridsInitialized.md) | Ցույց է տալիս փաստաթղթի աղյուսակների ձևավորված լինելը։ |
| [GridsLoaded](../definitions/document/Properties/GridsLoaded.md) | Ցույց է տալիս փաստաթղթի աղյուսակների բեռնված լինելը։ |
| [GridsLoading](../definitions/document/Properties/GridsLoading.md) | Ցույց է տալիս փաստաթղթի աղյուսակները գտնվում են բեռնման պրոցեսում թե ոչ։ |
| [indexer](../definitions/document/Properties/indexer.md) | Վերադարձնում կամ նշանակում է փաստաթղթի տրված ներքին անունով դաշտի արժեքը։ |
| [ISN](../definitions/document/Properties/ISN.md) | Վերադարձնում է փաստաթղթի ներքին նույնականացման համարը (isn-ը): |
| [LastLookup](LiteDocument/Properties/LastLookup.md) | Վերադարձնում է փաստաթղթի քեշում փնտրման և քեշից բեռնման վերջին ամսաթիվը/ժամանակը: |
| [LastTSCheck](LiteDocument/Properties/LastTSCheck.md) | Վերադարձնում է փաստաթղթի [TimeStamp](../definitions/document/Properties/TimeStamp.md)-ի տվյալների պահոցից վերջին ստուգման ամսաթիվը/ժամանակը: |
| [State](../definitions/document/Properties/State.md) | Վերադարձնում կամ նշանակում է փաստաթղթի վիճակը: |
| [TimeStamp](../definitions/document/Properties/TimeStamp.md) | Նշանակում է կամ վերադարձնում փաստաթղթի վերջին փոփոխման ամսաթիվը և ժամանակը` որպես byte տիպի զանգված: |

