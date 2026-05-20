---
title: OnNew
parent: "Մեթոդներ"
grand_parent: "DocumentPanel"
---
# DocumentPanel&lt;T&gt;.OnNew() մեթոդ
## Նկարագիր
**Դաս՝** [DocumentPanel](../DocumentPanel.md)
```c#
protected virtual void OnNew()
```
Սահմանում է նոր փաստաթղթի բացման ընթացքում կատարվող գործողությունները։
Մեթոդը չմշակելու դեպքում թարմացվում է պատուհանի վերնագիրը և կանչվում են [LoadDocumentToControls](LoadDocumentToControls.md) և [AfterLoadDocumentToControls](AfterLoadDocumentToControls.md) մեթոդները՝ փաստաթղթի արժեքները վահանակի դաշտերի մեջ բեռնելու համար։
