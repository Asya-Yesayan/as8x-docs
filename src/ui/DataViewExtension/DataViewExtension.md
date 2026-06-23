---
layout: page
title: DataViewExtension
parent: "UI"
has_toc: false
---

# DataViewExtension նկարագրություն

## Ներածություն

Այս դասը նախատեսված է դիտելու ձևի ընդլայնման նկարագրման համար։ Ժառանգվում է [ViewExtension](../ViewExtension/ViewExtension.md) բազային դասից և ընդլայնման բոլոր ընդհանուր կարգավորումները (անվանում, վերնագրեր, ընդլայնման սխեմա, ֆիլտր, խմբավորում և այլն) ստանում է բազային դասից։

Դասն ավելացնում է հատկություններ, որոնք բնորոշ են միայն դիտելու ձևի ընդլայնմանը՝ ընդլայնմանը կցված դիտելու ձև ([DataView](Properties/DataView.md)), կոնտեքստային ֆունկցիաների հասանելիության վերասահմանման **Allow…** հատկություններ (օրինակ՝ [AllowAdd](Properties/AllowAdd.md), [AllowEdit](Properties/AllowEdit.md)), ինչպես նաև ընդլայնման սեփական դիալոգի control-ների և արժեքների կարգավորումներ։

## Հատկություններ

| Անվանում | Նկարագրություն |
|----------|----------------|
| [AllowAccessControl](Properties/AllowAccessControl.md) | Վերասահմանում է դիտելու ձևի `AllowAccessControl` հատկության արժեքը՝ որոշելով դիտելու ձևի ընթացիկ տողի (փաստաթղթի) մուտքի իրավասությունների կարգավորման իրավասությունը։ |
| [AllowAdd](Properties/AllowAdd.md) | Վերասահմանում է դիտելու ձևի [AllowAdd](../DataView/Properties/AllowAdd.md) հատկության արժեքը՝ որոշելով դիտելու ձևում նոր տող ավելացնելու իրավասությունը։ |
| [AllowCreateCopy](Properties/AllowCreateCopy.md) | Վերասահմանում է դիտելու ձևի [AllowCreateCopy](../DataView/Properties/AllowCreateCopy.md) հատկության արժեքը՝ որոշելով դիտելու ձևի ընթացիկ տողի պատճենման իրավասությունը։ |
| [AllowDelete](Properties/AllowDelete.md) | Վերասահմանում է դիտելու ձևի [AllowDelete](../DataView/Properties/AllowDelete.md) հատկության արժեքը՝ որոշելով դիտելու ձևի ընթացիկ տողի հեռացման իրավասությունը։ |
| [AllowDocumentChildren](Properties/AllowDocumentChildren.md) | Վերասահմանում է դիտելու ձևի [AllowDocumentChildren](../DataView/Properties/AllowDocumentChildren.md) հատկության արժեքը՝ որոշելով դիտելու ձևի ընթացիկ տողի (փաստաթղթի) զավակ փաստաթղթերի դիտման իրավասությունը։ |
| [AllowDocumentHistory](Properties/AllowDocumentHistory.md) | Վերասահմանում է դիտելու ձևի [AllowDocumentHistory](../DataView/Properties/AllowDocumentHistory.md) հատկության արժեքը՝ որոշելով դիտելու ձևի ընթացիկ տողի (փաստաթղթի) պատմությունը դիտելու իրավասությունը։ |
| [AllowDocumentParents](Properties/AllowDocumentParents.md) | Վերասահմանում է դիտելու ձևի [AllowDocumentParents](../DataView/Properties/AllowDocumentParents.md) հատկության արժեքը՝ որոշելով դիտելու ձևի ընթացիկ տողի (փաստաթղթի) ծնող փաստաթղթերի դիտման իրավասությունը։ |
| [AllowEdit](Properties/AllowEdit.md) | Վերասահմանում է դիտելու ձևի [AllowEdit](../DataView/Properties/AllowEdit.md) հատկության արժեքը՝ որոշելով դիտելու ձևի ընթացիկ տողի խմբագրման իրավասությունը։ |
| [AllowEditUdf](Properties/AllowEditUdf.md) | Վերասահմանում է դիտելու ձևի [AllowEditUDR](../DataView/Properties/AllowEditUDR.md) հատկության արժեքը՝ որոշելով դիտելու ձևի ընտրված տողերի (փաստաթղթերի) «Օգտագործողի կողմից նկարագրված դաշտերի» խմբագրման իրավասությունը։ |
| [AllowExport](Properties/AllowExport.md) | Վերասահմանում է դիտելու ձևի [AllowExport](../DataView/Properties/AllowExport.md) հատկության արժեքը՝ որոշելով դիտելու ձևի արտահանման իրավասությունը։ |
| [AllowView](Properties/AllowView.md) | Վերասահմանում է դիտելու ձևի [AllowView](../DataView/Properties/AllowView.md) հատկության արժեքը՝ որոշելով դիտելու ձևի ընթացիկ տողի դիտման իրավասությունը։ |
| [DataView](Properties/DataView.md) | Վերադարձնում կամ նշանակում է ընդլայնմանը կցված դիտելու ձևը։ |
| [DialogExtension](Properties/DialogExtension.md) | Վերադարձնում կամ նշանակում է ընդլայնման կողմից դիտելու ձևի նախնական ֆիլտրման դիալոգին ավելացվող control-ների նկարագրությունների ցուցակը։ |
| [DialogValues](Properties/DialogValues.md) | Վերադարձնում կամ նշանակում է ընդլայնման [DialogExtension](Properties/DialogExtension.md) ցուցակում նկարագրված control-ների ընթացիկ արժեքների Dictionary-ն, որտեղ բանալին control-ի ներքին անունն է (կոդը), իսկ արժեքը՝ control-ում մուտքագրված տվյալը։ |
| [View](Properties/View.md) | Վերադարձնում է ընդլայնմանը կցված դիտելու ձևը՝ [IView](../ViewExtension/Properties/View.md) տեսքով։ |

## Մեթոդներ

| Անվանում | Նկարագրություն |
|----------|----------------|
| [CalculateExtenderParamsValues()](Methods/CalculateExtenderParamsValues.md) | Հաշվարկում և թարմացնում է ընդլայնման պարամետրերի արժեքները։ |
| [InitContextFunctions(PopupMenu)](Methods/InitContextFunctions.md) | Նախատեսված է ընդլայնման սեփական կոնտեքստային ֆունկցիաների ավելացման համար՝ դիտելու ձևի [InitContextFunctions](../DataView/Methods/InitContextFunctions.md) մեթոդի կողմից ստեղծված կոնտեքստային մենյուին։ |
