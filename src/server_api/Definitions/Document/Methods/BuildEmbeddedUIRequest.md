---
title: BuildEmbeddedUIRequest
parent: "Մեթոդներ"
grand_parent: "Փաստաթուղթ"
---

# Document.BuildEmbeddedUIRequest(T uiRequestExecutionProgress) մեթոդ

## Նկարագիր

**Դաս՝** [Document](../Document.md)

```c#
public void BuildEmbeddedUIRequest<T>(T uiRequestExecutionProgress) where T : IUIRequestExecutionProgress;
```

Եթե [DPR](../../DataProcessingRequest/DataProcessingRequest.md)-ի [Execute](../../DataProcessingRequest/Methods/Execute.md) կամ փաստաթղթի կամայական մեթոդում նախատեսվում է կանչել մեկ այլ փաստաթղթի [Store](../../../Services/IDocument/Methods/Store.md)/[Delete](../../../Services/IDocument/Methods/Delete.md) մեթոդները, և անհրաժեշտ է, որ այդ մեթոդների կանչի ընթացքում առաջացող հաղորդագրությունները ցուցադրվեն UI-ում, ապա այդ մեթոդների կանչից առաջ անհրաժեշտ է կանչել BuildEmbeddedUIRequest մեթոդը՝ փոխանցելով համապատասխան կատարման պրոգրեսը:

**Պարամետրեր**


| Անվանում        | Տվյալների տիպ        | Լռությամբ արժեք | Նկարագրություն |
|-----------------|----------------------|----------------|----------------|
| uiRequestExecutionProgress | T                    | -              | Կատարման պրոգրեսը։ |

