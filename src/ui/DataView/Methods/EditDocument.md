---
title: EditDocument
parent: "Մեթոդներ"
grand_parent: "DataView"
---

# DataView.EditDocument(bool isReadOnly) մեթոդ

## Նկարագիր

**Դաս՝** [DataView](../DataView.md)

```c#
public virtual void EditDocument(bool isReadOnly)
```

Սահմանում է դիտելու ձևի «Դիտել/Խմբագրել» կոնտեքստային ֆունկցիայի կատարման արդյունքում բացվող պատուհանը՝ [IsDocumentBased](../Properties/IsDocumentBased.md) հատկության true արժեքի դեպքում։

Մեթոդը չմշակելու դեպքում բացվում է դիտելու ձևի ընթացիկ տողում պարունակվող փաստաթղթի պատուհանը` խմբագրման ռեժիմով։

«Դիտել/Խմբագրել» կոնտեքստային ֆունկցիայի վարքագիծը կարգավորվում է [AllowEdit](../Properties/AllowEdit.md), [IsEditEnabled](../Properties/IsEditEnabled.md), [IsDocumentBased](../Properties/IsDocumentBased.md) հատկությունների միջոցով։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- |
| isReadOnly | bool | - | Սահմանում է փաստաթղթի բացման ռեժիմը՝ խմբագրման թե դիտման (readonly): |

**Օրինակ**

```c#
public override void EditDocument(bool isReadOnly)
{
    // ընթացիկ տողում պարունակվող փաստաթղթի բեռնում
    var doc = (WGZatr)DocumentHelper.Load(this.Panel.FocusedDocument.ISN);
    // փաստաթղթի Properties-ում EditNumComm անունով տարրի ավելացում
    doc.Properties.Add("EditNumComm", "EditNumComm");
    // փաստաթղթի ցուցադրում տրված isReadOnly ռեժիմով 
    doc.Show(isReadOnly, this.Panel.Id);
}
```

![Edit_Function](../../images/DataView/Edit_Function.png)

