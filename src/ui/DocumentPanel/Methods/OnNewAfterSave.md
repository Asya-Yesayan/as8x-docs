---
title: OnNewAfterSave
parent: "Մեթոդներ"
grand_parent: "DocumentPanel"
---
# DocumentPanel&lt;T&gt;.OnNewAfterSave() մեթոդ
## Նկարագիր
**Դաս՝** [DocumentPanel](../DocumentPanel.md)
```c#
protected virtual void OnNewAfterSave()
```
Սահմանում է **«Պահպանել և նորը»** հրամանից հետո նոր փաստաթղթի բացման ընթացքում կատարվող գործողությունները։
Մեթոդը չմշակելու դեպքում թարմացվում է պատուհանի վերնագիրը և կանչվում են [LoadDocumentToControls](LoadDocumentToControls.md) և [AfterLoadDocumentToControls](AfterLoadDocumentToControls.md) մեթոդները՝ նոր ստեղծված փաստաթղթի արժեքները վահանակի դաշտերի մեջ բեռնելու համար։
