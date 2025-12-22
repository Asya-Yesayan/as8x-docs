---
layout: page
title: "DocumentAttribute" 
---

Document ատրիբուտը նախատեսված է [Document](../../Definitions/Document/Document.md)-ը նկարագրող դասի վրա դնելու համար։

```c#
[AttributeUsage(AttributeTargets.Class, Inherited = true, AllowMultiple = false)]
public class DocumentAttribute
```

## Հատկություններ

| Անվանում | Տեսակ | Լռությամբ արժեք | Նկարագրություն |
|-----------|-------|-----------------|----------------|
| `Name` | string | [Փաստաթուղթը](../../Definitions/Document/Document.md) նկարագրող դասի անունը։ | [Փաստաթղթի](../../Definitions/Document/Document.md) ներքին անունը (տեսակը)։ |
| `ShowProgress` | FeatureAvailability | **FeatureAvailability.Disabled** | [Փաստաթղթի](../../Definitions/Document/Document.md) [գրանցման](../../Services/IDocument/Methods/Store.md)/[հեռացման](../../Services/IDocument/Methods/Delete.md) ընթացքում պրոգրեսի պատուհանի ցուցադրման հայտանիշ։ <br> **FeatureAvailability.Enabled** – Պրոգրեսի պատուհանը ցուցադրվում է։ <br> **FeatureAvailability.Disabled** – Պրոգրեսի պատուհանը չի ցուցադրվում։ |
| `IsCancellationSupported` | FeatureAvailability | **FeatureAvailability.Enabled** | UI-ից [փաստաթղթի](../../Definitions/Document/Document.md) [գրանցման](../../Services/IDocument/Methods/Store.md)/[հեռացման](../../Services/IDocument/Methods/Delete.md) ընթացքում ընդհատման հնարավորության հայտանիշ։ Հասանելի է միայն այն դեպքում, երբ ակտիվացված է `ShowProgress` հատկությունը։ <br> **FeatureAvailability.Enabled** – Թույլատրված է ընդհատումը UI-ից։ <br> **FeatureAvailability.Disabled** – Արգելված է ընդհատումը UI-ից։ |

**Օրինակ**

```c#
[Document("Filial", IsCancellationSupported = FeatureAvailability.Disabled, ShowProgress = FeatureAvailability.Enabled)]
public class Filial : Document
{

}
```