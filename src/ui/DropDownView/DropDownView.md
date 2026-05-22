---
layout: page
title: DropDownView
parent: "UI"
has_toc: false
---

# DropDownView նկարագրություն

## Ներածություն

Այս դասը նախատեսված է բացվող ցուցակի դիտելու ձևի նկարագրման համար։

## Մեթոդներ

| Անվանում | Նկարագրություն |
|----------|----------------|
| [AddNew(ref string, ref string, Window, double, double)](Methods/AddNew.md) | Սահմանում է բացվող ցուցակի դիտելու ձևից նոր արժեքի ավելացման գործողությունը։ |
| [ApplyExtension(bool)](Methods/ApplyExtension.md) | Կիրառում է բացվող ցուցակի դիտելու ձևին կցված ընդլայնումը։ |
| [CodeMember(int)](Methods/CodeMember.md) | Սահմանում է բացվող ցուցակի դիտելու ձևի՝ տրված ինդեքսով տողի կոդի արժեքը։ |
| [CommentMember(int)](Methods/CommentMember.md) | Սահմանում է բացվող ցուցակի դիտելու ձևի՝ տրված ինդեքսով տողի մեկնաբանության արժեքը։ |
| [DropDownView()](Methods/DropDownView.md) | Ստեղծում է DropDownView դասի նոր օբյեկտ։ |
| [Edit(ref string, ref string, Window, double, double)](Methods/Edit.md) | Սահմանում է բացվող ցուցակի դիտելու ձևից ընտրված արժեքի խմբագրման գործողությունը։ |
| [FilteredSearch(ref string, ref string, Window, double, double)](Methods/FilteredSearch.md) | Սահմանում է բացվող ցուցակի դիտելու ձևի ֆիլտրացված որոնման գործողությունը։ |
| [GetRowByCode(string)](Methods/GetRowByCode.md) | Վերադարձնում է բացվող ցուցակի դիտելու ձևի՝ տրված կոդին համապատասխանող տողը։ |
| [KeyMember(int)](Methods/KeyMember.md) | Սահմանում է բացվող ցուցակի դիտելու ձևի՝ տրված ինդեքսով տողի բանալու արժեքը։ |
| [ReloadRows(LoadSource)](Methods/ReloadRows.md) | Վերբեռնում է բացվող ցուցակի դիտելու ձևի տողերը։ |
| [Validate(ref string)](Methods/Validate.md) | Սահմանում է բացվող ցուցակի դիտելու ձևի համար տրված արժեքի վավերականության ստուգման գործողությունը։ |

## Հատկություններ

| Անվանում | Նկարագրություն |
|----------|----------------|
| [AddNewEnabled](Properties/AddNewEnabled.md) | Սահմանում է բացվող ցուցակի դիտելու ձևից «Ավելացնել» գործողության հասանելիության իրավասությունը՝ AddNewSupported հատկության հետ համատեղ։ |
| [AddNewSupported](Properties/AddNewSupported.md) | Սահմանում է բացվող ցուցակի դիտելու ձևի՝ «Ավելացնել» գործողության սատարման իրավասությունը։ |
| [CodeColumn](Properties/CodeColumn.md) | Սահմանում է բացվող ցուցակի դիտելու ձևի կոդերի սյունը։ |
| [CodeDictionary](Properties/CodeDictionary.md) | Վերադարձնում է բացվող ցուցակի դիտելու ձևի կոդերի՝ ըստ տողի ինդեքսի համապատասխանեցման բառարանը։ |
| [CodeIsUnique](Properties/CodeIsUnique.md) | Սահմանում է բացվող ցուցակի դիտելու ձևի կոդերի եզակիության հատկությունը։ |
| [CommentColumn](Properties/CommentColumn.md) | Սահմանում է բացվող ցուցակի դիտելու ձևի մեկնաբանությունների սյունը։ |
| [EditEnabled](Properties/EditEnabled.md) | Սահմանում է բացվող ցուցակի դիտելու ձևի ընթացիկ տողի խմբագրման հասանելիության իրավասությունը՝ EditSupported հատկության հետ համատեղ։ |
| [EditSupported](Properties/EditSupported.md) | Սահմանում է բացվող ցուցակի դիտելու ձևի՝ խմբագրման գործողության սատարման իրավասությունը։ |
| [Enable2LineHeaders](Properties/Enable2LineHeaders.md) | Սահմանում է, արդյոք բացվող ցուցակի դիտելու ձևում սյուների վերնագրերը ցուցադրվելու են 2 տողով։ |
| [Extension](Properties/Extension.md) | Վերադարձնում կամ նշանակում է բացվող ցուցակի դիտելու ձևի ընդլայնումը։ |
| [FilteredSearchEnabled](Properties/FilteredSearchEnabled.md) | Սահմանում է բացվող ցուցակի դիտելու ձևի ֆիլտրացված որոնման հասանելիության իրավասությունը՝ FilteredSearchSupported հատկության հետ համատեղ։ |
| [FilteredSearchSupported](Properties/FilteredSearchSupported.md) | Սահմանում է բացվող ցուցակի դիտելու ձևի՝ ֆիլտրացված որոնման գործողության սատարման իրավասությունը։ |
| [KeyColumn](Properties/KeyColumn.md) | Սահմանում է բացվող ցուցակի դիտելու ձևի բանալի սյունը։ |
| [Name](Properties/Name.md) | Վերադարձնում է բացվող ցուցակի դիտելու ձևի ներքին անունը, որը համընկնում է DropDownView ատրիբուտում նշված անվան հետ։ |
| [ReloadMode](Properties/ReloadMode.md) | Սահմանում է բացվող ցուցակի դիտելու ձևի տողերի թարմացման ռեժիմը։ |
| [SupportsExtensions](Properties/SupportsExtensions.md) | Վերադարձնում է բացվող ցուցակի դիտելու ձևի ընդլայնման իրավասությունը, որը համընկնում է DropDownView ատրիբուտի [SupportsExtensions](Properties/SupportsExtensions.md) հատկության արժեքի հետ։ |
| [SystemFilters](Properties/SystemFilters.md) | Սահմանում է բացվող ցուցակի դիտելու ձևի համակարգային ֆիլտրերի հավաքածուն։ |
| [UseFilters](Properties/UseFilters.md) | Սահմանում է բացվող ցուցակի դիտելու ձևում ընտրյալների ֆունկցիոնալության հասանելիության իրավասությունը։ |
| [Validator](Properties/Validator.md) | Վերադարձնում է բացվող ցուցակի դիտելու ձևի արժեքների վավերականության ստուգիչը։ |
| [ValueDoesNotExistInTheListMessage](Properties/ValueDoesNotExistInTheListMessage.md) | Սահմանում է բացվող ցուցակում արժեքի բացակայության դեպքում ցուցադրվող հաղորդագրությունը։ |
