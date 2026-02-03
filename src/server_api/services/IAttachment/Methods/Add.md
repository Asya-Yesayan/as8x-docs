---
title: Add(AttachmentAddModel)
parent: "Մեթոդներ"
grand_parent: "IAttachmentService"
---

# IAttachmentService.Add(AttachmentAddModel) մեթոդ

## Նկարագիր

**Համարժեքը 4x-ում՝** [AsAttachmentCollection.Add](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Functions/AsAttachmentCollection/Add.html)

**Դաս՝** [IAttachmentService](../../IAttachment/IAttachmentService.md)

```c#
public Task<AttachmentModel> Add(AttachmentAddModel attachment)
```

Կցում է ֆայլը փաստաթղթին, գրանցում տվյալների պահոցի [DOCSATTACH](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Database/DocsAttach.html) աղյուսակում և վերադարձնում [կցված ֆայլի տվյալները](../../../Types/AttachmentModel.md)։
Տվյալների պահոցում գրանցվում են նաև ավելացման ամսաթիվը, կատարողի և համակարգչի տվյալները։

Փաստաթղթին կարելի է կցել առավելագույնը 10 մբ ծավալով ֆայլ։

Տե՛ս [օրինակը](../../../Examples/IAttachmentService.md#օրինակ-1)։

**Պարամետրեր**

| Անվանում        | Տվյալների տիպ        | Լռությամբ արժեք | Նկարագրություն |
|-----------------|----------------------|----------------|----------------|
| attachment      | AttachmentAddModel   | -              | [Կցվող ֆայլի տվյալներ](../../../Types/AttachmentAddModel.md)՝ փաստաթղթի ISN, ֆայլի անուն, նույնականացուցիչ, մեկնաբանություն, կցման ձև։ |

<!-- **Կարևոր**

Փաստաթղթին ֆայլ կցելու համար անհրաժեշտ է կցվող ֆայլը նախապես պահպանել սերվերի պահոցումը [IStorageService](../../IStorage/IStorageService.md)-ի միջոցով։

**Օրինակ**

Տե՛ս [օրինակը](../../../Examples/IAttachmentService.md#օրինակ-1)։ -->
