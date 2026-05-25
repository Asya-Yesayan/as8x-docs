---
title: HandleDocumentException
parent: "Մեթոդներ"
grand_parent: "DocumentPanel"
---

# DocumentPanel&lt;T&gt;.HandleDocumentException(DocumentException) մեթոդ

## Նկարագիր

**Դաս՝** [DocumentPanel](../DocumentPanel.md)

```c#
protected virtual void HandleDocumentException(DocumentException ex)
```

Սահմանում է փաստաթղթի պահպանման ընթացքում առաջացած **DocumentException** տիպի սխալի մշակումը։

Մեթոդը չմշակելու դեպքում սխալը փոխանցվում է **ErrorHandler** ծառայությանը, և կիրառվում է հետևյալ վարքագիծը՝ **InvalidFieldValue** տիպի սխալի դեպքում [SetFocusAfterInvalidSave](../Properties/SetFocusAfterInvalidSave.md) հատկությունը արժեքավորվում է խնդրահարույց դաշտով և ֆոկուսը տեղափոխվում է դրա վրա, **Report** տիպի սխալի դեպքում ստեղծվում և ցուցադրվում է տեքստային հաշվետվությունը։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- |
| ex | DocumentException | - | Փաստաթղթի սխալի օբյեկտը՝ պարունակող սխալի տիպը և համապատասխան մանրամասները։ |
