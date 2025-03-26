---
layout: page
title: "Փաստաթղթերի տիպերի նկարագրություն"
---

## Բովանդակություն

- [Բովանդակություն](#բովանդակություն)
- [Ներածություն](#ներածություն)
- [Document դաս](#document-դաս)
- [LiteDocument և RODocument դասեր](#litedocument-և-rodocument-դասեր)

## Ներածություն

8x համակարգում փաստաթուղթը կարող է հանդես գալ այս 3 տիպերի միջոցով՝
* [Document](#document-դաս),
* [LiteDocument](#litedocument-և-rodocument-դասեր),
* [RODocument](#litedocument-և-rodocument-դասեր):

## Document դաս

* [Document](../definitions/document.md)-ը փաստաթուղթը նկարագրող հիմնական դասն է, որը օգտագործվում է փաստաթուղթը [ստեղծելու](../services/IDocumentService.md#create), [բեռնելու](../services/IDocumentService.md#load-1), խմբագրելու, տվյալների պահոցում [գրանցելու](../services/IDocumentService.md#store) և [հեռացնելու](../services/IDocumentService.md#delete) նպատակներով։

Տե՛ս նաև

* [Փաստաթղթի նկարագրման ձեռնարկ](../definitions/document_guide.md),
* [Փաստաթղթի տեղափոխման մասնակի ավտոմատացում Codegen գործիքի միջոցով](../CodeGen/CodeGen.md#փաստաթղթի-սերվերային-նկարագրության-տեղափոխում),
* [IDocumentService](../services/IDocumentService.md):

## LiteDocument և RODocument դասեր

* [LiteDocument](LiteDocument.md), [RODocument](RODocument.md) դասերը հիմնականում օգտագործվում են փաստաթուղթը բեռնելու և քեշավորելու նպատակով։ Այս դասերը թույլ են տալիս կարդալ փաստաթուղթը՝ առանց այն խմբագրելու իրավասության:

**LiteDocument**
* [LiteDocument](LiteDocument.md) դասը չտիպիզացված է, ինչը թույլ է տալիս փաստաթղթերը օգտագործել առանց առանձին դաս սահմանելու։
* Փաստաթուղթը բեռնվում է [LiteDocumentService](../services/LiteDocumentService.md)-ի միջոցով և պահվում է [LiteDocument](LiteDocument.md) դասում՝ պարունակելով փաստաթղթի դաշտերն ու աղյուսակները (**նկարներն ու մեմոները հասանելի չեն**)։
* Դաշտերին հնարավոր է դիմել [indexer](LiteDocument.md#indexer)-ով՝ փոխանցելով դաշտի անունը կամ ստանալ դաշտերի ամբողջական ցուցակը [Fields](LiteDocument.md#fields) հատկությամբ։
* Աղյուսակներին կարելի է դիմել [Grids](LiteDocument.md#grids) հատկությամբ։

**RODocument**
* [RODocument](RODocument.md) դասը ի տարբերություն [LiteDocument](LiteDocument.md)-ի տիպիզացված է` յուրաքանչյուր փաստաթղթի համար անհրաժեշտ է սահմանել համապատասխան դաս։ 
* Դասը կարելի է գեներացնել ավտոմատ՝ [Codegen](../CodeGen/CodeGen.md#փաստաթղթի-քեշավորվող-նկարագրության-տեղափոխում) գործիքի միջոցով: 
*  Փաստաթուղթը բեռնվում է [RODocumentService](../services/RODocumentService.md)-ի միջոցով և պարունակում փաստաթղթի դաշտերը, աղյուսակները, նկարները, մեմոները, որոնց կարելի է դիմել դասի համապատասխան հատկությունների միջոցով։

## Document, LiteDocument և RODocument տիպերի տարբերությունները

Ստորև բերված աղյուսակում ներկայացված են [Document](../definitions/document.md), [LiteDocument](LiteDocument.md), [RODocument](RODocument.md) տիպերի հիմնական տարբերությունները։ 

|   | [Document](../definitions/document.md) | [LiteDocument](LiteDocument.md) | [RODocument](RODocument.md) |
| -- | -- | -- | -- |
|Քեշավորվող է |   ❌  |  ✅  |  ✅  |
|Խմբագրելի է |   ✅  |  ❌  |  ❌  |
|Տիպիզացված է |   ✅  |  ❌  |  ✅  |
|Պարունակում է փաստաթղթի դաշտերը, աղյուսակները |   ✅  |  ✅  |  ✅  |
|Պարունակում է փաստաթղթի մեմոները, նկարները |   ✅  |  ❌  |  ✅  |
