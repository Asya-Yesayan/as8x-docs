---
title: Add
parent: "Մեթոդներ"
grand_parent: "TreeEdit"
---

# TreeEdit.Add(AddEventArgs addEventArgs) մեթոդ

## Նկարագիր

**Դաս՝** [TreeEdit](../TreeEdit.md)

```c#
public virtual void Add(AddEventArgs addEventArgs)
```

Սահմանում է ծառ-տեղեկատուի **«Ավելացնել»** կոնտեքստային ֆունկցիայի կատարման արդյունքում բացվող պատուհանը։

Մեթոդը չմշակելու դեպքում բացվում է ավելացվող փաստաթղթի պատուհանը։

«Ավելացնել» կոնտեքստային ֆունկցիայի հասանելիությունը կարգավորվում է [AllowAddNode](../Properties/AllowAddNode.md), [AllowedDocumentsToAdd](../Properties/AllowedDocumentsToAdd.md) հատկությունների միջոցով։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- |
| addEventArgs | AddEventArgs | - | Ավելացման իրադարձության արգումենտները, որոնք պարունակում են ավելացվող փաստաթղթի տեսակի և ավելացման համատեքստի մասին տեղեկություն։ |

**Օրինակ**

```c#
public override void Add(AddEventArgs addEventArgs)
{
    // ավելացվող փաստաթղթի ստեղծում
    var doc = (TPlace)DocumentHelper.Create(addEventArgs.DocumentType);
    // դաշտերի արժեքների սահմանում (օրինակ՝ կոդի դաշտի)
    doc.Code = "NEW";
    // ստեղծված փաստաթղթի ցուցադրում ընթացիկ վահանակում
    doc.Show(supportDocumentPanelId: this.Panel.Id);
}
```
