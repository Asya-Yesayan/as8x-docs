---
layout: page
title: "DocumentAttribute" 
---

Document ատրիբուտը նախատեսված է [Document](../../definitions/document.md)-ը նկարագրող դասի վրա դնելու համար։

```c#
public class DocumentAttribute
{
    public string Name { get; protected set; }

    public FeatureAvailability IsCancellationSupported { get; set; } = FeatureAvailability.Enabled;

    public FeatureAvailability ShowProgress { get; set; } = FeatureAvailability.Disabled;

    public DocumentAttribute(string name = "")
    {
        this.Name = name;
    }
}
```

## Հատկություններ

| Անվանում | Տեսակ | Լռությամբ արժեք | Նկարագրություն |
|-----------|-------|-----------------|----------------|
| `Name` | string | [Փաստաթուղթը](../../definitions/document.md) նկարագրող դասի անունը։ | [Փաստաթղթի](../../definitions/document.md) ներքին անունը (տեսակը)։ |
| `ShowProgress` | FeatureAvailability | **FeatureAvailability.Disabled** | [Փաստաթղթի](../../definitions/document.md) [գրանցման](../../services/IDocumentService/Store.md)/[հեռացման](../../services/IDocumentService/Delete.md) ընթացքում պրոգրեսի պատուհանի ցուցադրման հայտանիշ։ <br> **FeatureAvailability.Enabled** – Պրոգրեսի պատուհանը ցուցադրվում է։ <br> **FeatureAvailability.Disabled** – Պրոգրեսի պատուհանը չի ցուցադրվում։ |
| `IsCancellationSupported` | FeatureAvailability | **FeatureAvailability.Enabled** | UI-ից [փաստաթղթի](../../definitions/document.md) [գրանցման](../../services/IDocumentService/Store.md)/[հեռացման](../../services/IDocumentService/Delete.md) ընթացքում ընդհատման հնարավորության հայտանիշ։ Հասանելի է միայն այն դեպքում, երբ ակտիվացված է `ShowProgress` հատկությունը։ <br> **FeatureAvailability.Enabled** – Թույլատրված է ընդհատումը UI-ից։ <br> **FeatureAvailability.Disabled** – Արգելված է ընդհատումը UI-ից։ |

**Օրինակ**

```c#
[Document("Filial", IsCancellationSupported = FeatureAvailability.Disabled, ShowProgress = FeatureAvailability.Enabled)]
public class Filial : Document
{

}
```