---
title: OnEdit
parent: "Մեթոդներ"
grand_parent: "DocumentPanel"
---

# DocumentPanel&lt;T&gt;.OnEdit() մեթոդ

## Նկարագիր

**Դաս՝** [DocumentPanel](../DocumentPanel.md)

```c#
protected virtual void OnEdit()
```

Սահմանում է փաստաթղթի խմբագրման ռեժիմում բացման ընթացքում կատարվող գործողությունները։

Մեթոդը չմշակելու դեպքում թարմացվում է պատուհանի վերնագիրը և կանչվում են [LoadDocumentToControls](LoadDocumentToControls.md) և [AfterLoadDocumentToControls](AfterLoadDocumentToControls.md) մեթոդները՝ փաստաթղթի արժեքները վահանակի դաշտերի մեջ բեռնելու համար։
