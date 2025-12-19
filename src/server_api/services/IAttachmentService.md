---
title: "IAttachmentService սերվիս"
---

## Ներածություն

IAttachmentService դասը նախատեսված է փաստաթղթին կցված ֆայլերի հետ աշխատանքը ապահովելու համար։

Փաստաթղթին կարելի է կցել ֆայլ կամ ֆայլի հղում։
Կցվող ֆայլերը գրանցվում են տվյալների պահոցի [DOCSATTACH](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Database/DocsAttach.html) աղյուսակում։
Փաստաթղթին ֆայլ կցելիս կամ եղած ֆայլը թարմացնելիս տվյալների պահոցում գրանցվում են նաև փոփոխման ամսաթիվը, փոփոխող օգտագործողի և համակարգչի տվյալները։

Փաստաթղթին կարելի է կցել առավելագույնը 10 մբ ծավալով ֆայլ։

## Մեթոդներ

| Անվանում | Նկարագրություն |
|----------|----------------|
| [Add(AttachmentAddModel)](IAttachmentService/Methods/Add.md) | Կցում է ֆայլը փաստաթղթին, գրանցում տվյալների պահոցի [DOCSATTACH](https://armsoft.github.io/as4x-docs/HTM/ProgrGuide/Database/DocsAttach.html) աղյուսակում և վերադարձնում [կցված ֆայլի տվյալները](../types/AttachmentModel.md)։ |
| [ChangeComment(AttachmentCommentModel)](IAttachmentService/Methods/ChangeComment.md) | Փոխում է փաստաթղթին կցված ֆայլի մեկնաբանությունը և վերադարձնում [կցված ֆայլի տվյալները](../types/AttachmentModel.md)։ |
| [Delete(int, string)](IAttachmentService/Methods/Delete.md) | Հեռացնում է փաստաթղթին կցված ֆայլը՝ ըստ ֆայլի անվան և փաստաթղթի ներքին նույնականացման համարի (ISN)։ |
| [DeleteAll(int)](IAttachmentService/Methods/DeleteAll.md) | Հեռացնում է փաստաթղթին կցված բոլոր ֆայլերը։ |
| [Get(int, string)](IAttachmentService/Methods/Get.md) | Վերադարձնում է փաստաթղթին [կցված ֆայլի տվյալները](../types/AttachmentModel.md)՝ ըստ ֆայլի անվան և փաստաթղթի ներքին նույնականացման համարի (ISN)։ |
| [GetAll(int)](IAttachmentService/Methods/GetAll.md) | Վերադարձնում է փաստաթղթին կցված բոլոր [ֆայլերի տվյալները](../types/AttachmentModel.md)։ |
| [GetContent(int, string)](IAttachmentService/Methods/GetContent.md) | Բեռնում է փաստաթղթին կցված ֆայլի պարունակությունը տվյալների պահոցից և պահում սերվերային պահոցում [ընթացիկ սեսսիայի կոնտեյներում](IStorageService/Properties/Container.md)։ |
| [UpdateContent(AttachmentContentModel)](IAttachmentService/Methods/UpdateContent.md) | Փոխում է փաստաթղթին կցված ֆայլի պարունակությունը: |
| [Copy(int, int, bool)](IAttachmentService/Methods/Copy.md) | Պատճենում է տրված փաստաթղթի կցված ֆայլերը մեկ այլ փաստաթղթի մեջ։ |