---
layout: page
title: "DocumentChangeRequest" 
tags: [DocChangeRequest, DCR]
nav_exclude: true
---

# DocumentChangeRequest դաս

# Ներածություն

`IDocumentChangeRequest` ինտերֆեյսը նախատեսված է **Փաստաթղթի փոփոխման հայտով** գրանցվող փաստաթղթերի սահմանման համար։

Փաստաթղթի փոփոխման հայտը նկարագրում է փաստաթղթի փոփոխությունների այնպիսի բազմություն, որը համակարգում կիրառելու համար նախքան գրանցումը պետք է անցնի հաստատման կամ մերժման փուլ։ Հաստատման դեպքում փոփոխությունները կիրառվում են փաստաթղթի վրա, և այն գրանցվում է համակարգում։ Մերժման դեպքում փոփոխությունները չեն կիրառվում։

Այս մոտեցումը կիրառվում է զգայուն փաստաթղթերի համար, որոնց փոփոխությունները նախքան համակարգում գրանցումը պետք է անցնեն լրացուցիչ ստուգումներ և ուսումնասիրություն։ Այդպիսի փաստաթղթերի օրինակներ են՝

- հաճախորդի անձնական տվյալների փոփոխությունները,
- հաշվի կարգավորումների փոփոխությունները,
- քարտի տվյալների փոփոխությունները։

Փաստաթղթի փոփոխման հայտով գրանցվող փաստաթուղթ սահմանելու համար անհրաժեշտ է ստեղծել [Document](../Definitions/Document/Document.md)-ից ժառանգվող դաս, որը՝

- իրականացնում է `IDocumentChangeRequest` ինտերֆեյսը։

```c#
[Document("Customer",
          ArmenianCaption = "Հաճախորդ",
          EnglishCaption = "Customer")]
public class Customer : Document, IDocumentChangeRequest
{
    public Task ChangeRequest(ChangeRequestEventArgs args) { ... }
}
```

Փաստաթղթի փոփոխման հայտի ստեղծման սցենարը սահմանվում է [ChangeRequest](IDocumentChangeRequest/Methods/ChangeRequest.md) մեթոդով, որը որոշում է՝ արդյոք փաստաթղթի գրանցման ընթացքում կստեղծվի փոփոխման հայտ, և անհրաժեշտության դեպքում հնարավորություն է տալիս հայտը միանգամից ստեղծել ու հաստատել։

Փաստաթղթի փոփոխման հայտի հաստատման ընթացքում փաստաթղթի հետ կապված լրացուցիչ գործողությունները հնարավոր է սահմանել երկու եղանակով՝

- [Document](../Definitions/Document/Document.md) դասի [OnConfirmDocumentChangeRequest](../Definitions/Document/Methods/OnConfirmDocumentChangeRequest.md) մեթոդով՝ հաստատման հետ կապված ուղեկցող տրամաբանությունը սահմանվում է անմիջապես փաստաթղթի դասում (օրինակ՝ ծանուցումների ուղարկում, հաստատման մասին հավելյալ լոգի գրառում, կապակցված տվյալների թարմացում),
- [DocumentExtender](../Extensions/Definitions/DocumentExtender/document_extender.md)-ից ժառանգված դասի [PreOnConfirmDocumentChangeRequest](../Extensions/Definitions/DocumentExtender/Methods/PreOnConfirmDocumentChangeRequest.md) և [PostOnConfirmDocumentChangeRequest](../Extensions/Definitions/DocumentExtender/Methods/PostOnConfirmDocumentChangeRequest.md) մեթոդներով՝ հաստատման հետ կապված ուղեկցող տրամաբանությունը սահմանվում է ընդլայնման մեջ՝ առանց փաստաթղթի դասը փոփոխելու։ [PreOnConfirmDocumentChangeRequest](../Extensions/Definitions/DocumentExtender/Methods/PreOnConfirmDocumentChangeRequest.md)-ը նախատեսված է հաստատման հիմնական մշակմանը նախորդող տրամաբանության համար (օրինակ՝ նախնական ստուգումներ, հաստատման արգելման որոշում), [PostOnConfirmDocumentChangeRequest](../Extensions/Definitions/DocumentExtender/Methods/PostOnConfirmDocumentChangeRequest.md)-ը՝ հաստատման հիմնական մշակմանը հաջորդող տրամաբանության համար (օրինակ՝ արտաքին համակարգերում թարմացման հաղորդում)։

Փաստաթղթի փոփոխման հայտի մերժման ընթացքում փաստաթղթի հետ կապված լրացուցիչ գործողությունների սահմանման համար նախատեսված են [Document](../Definitions/Document/Document.md) դասի [OnRejectDocumentChangeRequest](../Definitions/Document/Methods/OnRejectDocumentChangeRequest.md) մեթոդը և [DocumentExtender](../Extensions/Definitions/DocumentExtender/document_extender.md)-ից ժառանգված դասի [PreOnRejectDocumentChangeRequest](../Extensions/Definitions/DocumentExtender/Methods/PreOnRejectDocumentChangeRequest.md), [PostOnRejectDocumentChangeRequest](../Extensions/Definitions/DocumentExtender/Methods/PostOnRejectDocumentChangeRequest.md) մեթոդները։ Մերժման իրադարձության մշակիչներում հնարավոր է արգելել մերժումը՝ սխալի հաղորդագրությամբ սխալ առաջացնելու միջոցով (օրինակ՝ եթե հայտի մերժումը խախտում է բիզնեսի այլ կանոնները)։

Հաստատման և մերժման իրադարձության թվարկված մշակիչները կանչվում են համակարգի կողմից փաստաթղթի փոփոխման հայտի հաստատման կամ մերժման ընթացքում՝ անկախ այն բանից, թե հայտը հաստատվել/մերժվել է ծրագրային եղանակով, թե UI-ից։

Փաստաթղթի փոփոխման հայտը ծրագրային եղանակով հաստատելու կամ մերժելու համար նախատեսված են [IDocumentChangeRequestService](../Services/IDocumentChangeRequest/IDocumentChangeRequestService.md) սերվիսի `Confirm` և `Reject` մեթոդները։ Մեթոդները ընդունում են համապատասխան փոփոխման հայտի օբյեկտը և մեկնաբանությունը։ `Confirm`-ի կանչի արդյունքում փոփոխման հայտի փոփոխությունները կիրառվում են փաստաթղթի վրա, և այն գրանցվում է համակարգում, `Reject`-ի կանչի արդյունքում հայտը մերժվում է առանց փոփոխությունների կիրառման։

Ստեղծված Փաստաթղթի փոփոխման հայտերի դիտումը, հաստատումը և մերժումը կարող են կատարվել նաև UI-ից՝ «Իրավասությունների փոփոխությունների հաստատում» ԱՇՏ-ի «Փաստաթղթերի փոփոխման հայտեր» դիտելու ձևի միջոցով։

## Հատկություններ

| Անվանում           | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն                                                                                                                                                            |
| ------------------ | ------------- | --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DCRID              | int           | -1              | Փաստաթղթի փոփոխման հայտի համարը։ |
| ISN                | int           |     -            | Այն փաստաթղթի ներքին նույնականացման համարը (isn), որի համար ուղարկվել է փոփոխման հայտ։ |
| SUID               | short         |      -           | Փաստաթղթի փոփոխման հայտը ստեղծած օգտատիրոջ ներքին համարը (id)։ |
| Comment            | string        | string.Empty    | Փաստաթղթի փոփոխման հայտի մեկնաբանությունը։ |
| CreationDate       | DateTime      | DateTime.Now    | Փաստաթղթի փոփոխման հայտի ստեղծման ամսաթիվը/ժամանակը։ |
| State              | short         |     -            | Փաստաթղթի փոփոխման հայտի վիճակը։ <br> 0 - նոր ստեղծված փոփոխման հայտ, <br> 1 - փոփոխման հայտը հաստատվել է, <br> 2 - փոփոխման հայտը մերժվել է։|
| EmptyMessage       | string        |      -           | Դատարկ փաստաթղթի հայտ գրանցել փորձելիս առաջացող սխալի հաղորդագրությունը։ Եթե արժեքը դատարկ տող է, ապա առաջանում է ստանդարտ տեքստով սխալ։ |
| ReFolderDocument   | bool          |      -           | true արժեքի դեպքում փաստաթղթի փոփոխման հայտը մերժելիս փաստաթուղթը [վերաինդեքսավորում է թղթապանակներում](../Services/IDocument/Methods/ReFolder.md)։ |
| CreationLogMessage | string        |       -          | Փաստաթղթի փոփոխման հայտի ստեղծման ժամանակ [փաստաթղթի պատմությունում](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Database/DocLog.html) գրանցվող հաղորդագրությունը։ |

