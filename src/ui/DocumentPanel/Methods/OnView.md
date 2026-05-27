---
title: OnView
parent: "Մեթոդներ"
grand_parent: "DocumentPanel"
---

# DocumentPanel&lt;T&gt;.OnView() մեթոդ

## Նկարագիր

**Դաս՝** [DocumentPanel](../DocumentPanel.md)

```c#
protected virtual void OnView()
```

Սահմանում է փաստաթղթի դիտման ռեժիմում բացման ընթացքում կատարվող գործողությունները։

Մեթոդը չմշակելու դեպքում թարմացվում է պատուհանի վերնագիրը, կանչվում են [LoadDocumentToControls](LoadDocumentToControls.md) և [AfterLoadDocumentToControls](AfterLoadDocumentToControls.md) մեթոդները, իսկ վահանակի բոլոր դաշտերը դարձվում են միայն readOnly վիճակում։
