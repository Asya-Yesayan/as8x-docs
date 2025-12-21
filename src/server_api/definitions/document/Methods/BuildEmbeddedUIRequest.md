---
title: Document.BuildEmbeddedUIRequest(T uiRequestExecutionProgress) մեթոդ
---

## Նկարագիր

**Դաս՝** [Document](../../document.md)

```c#
public void BuildEmbeddedUIRequest<T>(T uiRequestExecutionProgress) where T : IUIRequestExecutionProgress;
```

Եթե [DPR](../../dpr.md)-ի [Execute](../../dpr/Methods/Execute.md) կամ փաստաթղթի կամայական մեթոդում նախատեսվում է կանչել մեկ այլ փաստաթղթի [Store](../../../services/IDocumentService/Methods/Store.md)/[Delete](../../../services/IDocumentService/Methods/Delete.md) մեթոդները, և անհրաժեշտ է, որ այդ մեթոդների կանչի ընթացքում առաջացող հաղորդագրությունները ցուցադրվեն UI-ում, ապա այդ մեթոդների կանչից առաջ անհրաժեշտ է կանչել BuildEmbeddedUIRequest մեթոդը՝ փոխանցելով համապատասխան կատարման պրոգրեսը:

**Պարամետրեր**


| Անվանում        | Տվյալների տիպ        | Լռությամբ արժեք | Նկարագրություն |
|-----------------|----------------------|----------------|----------------|
| uiRequestExecutionProgress | T                    | -              | Կատարման պրոգրեսը։ |

