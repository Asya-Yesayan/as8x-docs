---
layout: page
title: DropDownView
parent: "UI"
has_toc: false
---

# DropDownView նկարագրություն

## Ներածություն

Այս դասը նախատեսված է DropDownView-ի նկարագրման համար։

## Կոնստրուկտորներ

| Անվանում | Նկարագրություն |
|----------|----------------|
| [+DropDownView()](Methods/DropDownView.md) | Ստեղծում է DropDownView դասի օբյեկտ և կոնստրուկտորում ստուգում է DropDownView ատրիբուտի առկայությունը։ |

## Մեթոդներ

| Անվանում | Նկարագրություն |
|----------|----------------|
| [AddNew(ref string, ref string, Window, double, double)](Methods/AddNew.md) | Սահմանում է բացվող ցուցակի դիտելու ձևից նոր արժեքի ավելացման գործողությունը։ |
| [ApplyExtension(bool)](Methods/ApplyExtension.md) | Կիրառում է բացվող ցուցակի դիտելու ձևին կցված ընդլայնումը ([Extension](Properties/Extension.md))։ |
| [CodeMember(int)](Methods/CodeMember.md) | Սահմանում է բացվող ցուցակի դիտելու ձևի՝ տրված ինդեքսով տողի կոդի արժեքը։ |
| [CommentMember(int)](Methods/CommentMember.md) | Սահմանում է բացվող ցուցակի դիտելու ձևի՝ տրված ինդեքսով տողի մեկնաբանության արժեքը։ |
| [Edit(ref string, ref string, Window, double, double)](Methods/Edit.md) | Սահմանում է բացվող ցուցակի դիտելու ձևից ընտրված արժեքի խմբագրման գործողությունը։ |
| [FilteredSearch(ref string, ref string, Window, double, double)](Methods/FilteredSearch.md) | Սահմանում է բացվող ցուցակի դիտելու ձևի ֆիլտրացված որոնման գործողությունը։ |
| [+GetRowByCode(string)](Methods/GetRowByCode.md) | Վերադարձնում է DropDownView-ի տրված կոդին համապատասխանող տողը։ |
| [KeyMember(int)](Methods/KeyMember.md) | Սահմանում է բացվող ցուցակի դիտելու ձևի՝ տրված ինդեքսով տողի բանալու արժեքը։ |
| [ReloadRows(LoadSource)](Methods/ReloadRows.md) | Վերբեռնում է բացվող ցուցակի դիտելու ձևի տողերը։ |
| [Validate(ref string)](Methods/Validate.md) | Սահմանում է բացվող ցուցակի դիտելու ձևի համար տրված արժեքի վավերականության ստուգման գործողությունը։ |

## Հատկություններ

| Անվանում | Նկարագրություն |
|----------|----------------|
| [+AddNewEnabled](Properties/AddNewEnabled.md) | Սահմանում է DropDownView-ում նոր տող ավելացնելու իրավասությունը` [AddNewSupported](Properties/AddNewSupported.md) հատկության հետ համատեղ: |
| [+AddNewSupported](Properties/AddNewSupported.md) | Սահմանում է DropDownView-ում նոր տող ավելացնելու իրավասությունը` [AddNewEnabled](Properties/AddNewEnabled.md) հատկության հետ համատեղ: |
| [+CodeColumn](Properties/CodeColumn.md) | Սահմանում է այն սյունը, որի տվյալները ցուցադրվում են DropDownView-ի «Կոդ» սյունակում։ |
| [+CodeDictionary](Properties/CodeDictionary.md) | Վերադարձնում կամ նշանակում է DropDownView-ի կոդերի և դրանց համապատասխանող տողերի ինդեքսների Dictionary-ն։ |
| [+CodeIsUnique](Properties/CodeIsUnique.md) | Սահմանում է, արդյոք DropDownView-ի «Կոդ» սյան արժեքները չկրկնվող են։ |
| [+CommentColumn](Properties/CommentColumn.md) | Սահմանում է այն սյունը, որի տվյալները ցուցադրվում են DropDownView-ի «Անվանում» սյունակում։ |
| [+EditEnabled](Properties/EditEnabled.md) | Սահմանում է DropDownView-ի ընթացիկ տողի խմբագրման իրավասությունը` [EditSupported](Properties/EditSupported.md) հատկության հետ համատեղ: |
| [+EditSupported](Properties/EditSupported.md) | Սահմանում է DropDownView-ի ընթացիկ տողի խմբագրման իրավասությունը` [EditEnabled](Properties/EditEnabled.md) հատկության հետ համատեղ: |
| [+Enable2LineHeaders](Properties/Enable2LineHeaders.md) | Սահմանում է, արդյոք DropDownView-ի սյուների վերնագրերը ցուցադրվելու են 2 տողով։ |
| [+Extension](Properties/Extension.md) | Վերադարձնում կամ նշանակում է DropDownView-ի ընդլայնումը։ |
| [+FilteredSearchEnabled](Properties/FilteredSearchEnabled.md) | Սահմանում է DropDownView-ի ֆիլտրացված որոնման իրավասությունը՝ [FilteredSearchSupported](Properties/FilteredSearchSupported.md) հատկության հետ համատեղ։ |
| [+FilteredSearchSupported](Properties/FilteredSearchSupported.md) | Սահմանում է DropDownView-ի ֆիլտրացված որոնման իրավասությունը՝ [FilteredSearchEnabled](Properties/FilteredSearchEnabled.md) հատկության հետ համատեղ։ |
| [KeyColumn](Properties/KeyColumn.md) | Սահմանում է բացվող ցուցակի դիտելու ձևի բանալի սյունը։ |
| [+Name](Properties/Name.md) | Սահմանում է DropDownView-ի ներքին անունը: |
| [ReloadMode](Properties/ReloadMode.md) | Սահմանում է բացվող ցուցակի դիտելու ձևի տողերի թարմացման ռեժիմը։ |
| [SupportsExtensions](Properties/SupportsExtensions.md) | Սահմանում է DropDownView-ի ընդլայնման իրավասությունը։ |
| [+SystemFilters](Properties/SystemFilters.md) | Սահմանում է DropDownView-ի համակարգային ֆիլտրերի հավաքածուն։ |
| [+UseFilters](Properties/UseFilters.md) | Սահմանում է DropDownView-ում ֆիլտրների կիրառման իրավասությունը։ |
| [Validator](Properties/Validator.md) | Վերադարձնում է բացվող ցուցակի դիտելու ձևի արժեքների վավերականության ստուգիչը։ |
| [ValueDoesNotExistInTheListMessage](Properties/ValueDoesNotExistInTheListMessage.md) | Սահմանում է բացվող ցուցակում արժեքի բացակայության դեպքում ցուցադրվող հաղորդագրությունը։ |
