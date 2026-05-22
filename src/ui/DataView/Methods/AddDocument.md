---
title: AddDocument
parent: "Մեթոդներ"
grand_parent: "DataView"
---

# DataView.AddDocument(string docType) մեթոդ

## Նկարագիր

**Դաս՝** [DataView](../DataView.md)

```c#
public virtual void AddDocument(string docType)
```

Սահմանում է դիտելու ձևի «Ավելացնել» կոնտեքստային ֆունկցիայի կատարման արդյունքում բացվող պատուհանը՝ [IsDocumentBased](../Properties/IsDocumentBased.md) հատկության true արժեքի դեպքում։

Մեթոդը չմշակելու դեպքում բացվում է դիտելու ձևի ընթացիկ տողում պարունակվող փաստաթղթի պատուհանը։

«Ավելացնել» կոնտեքստային ֆունկցիայի վարքագիծը կարգավորվում է [AllowAdd](../Properties/AllowAdd.md), [IsAddEnabled](../Properties/IsAddEnabled.md), [IsDocumentBased](../Properties/IsDocumentBased.md) հատկությունների միջոցով։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- |
| docType | string | - | Այն փաստաթղթի ներքին անունը (տեսակը), որի համար կանչվել է «Ավելացնել» կոնտեքստային ֆունկցիան։ |


**Օրինակ**

```c#
public override void AddDocument(string docType)
{
    // փաստաթղթի ստեղծում 
    var document = DocumentHelper.Create(docType);
    // Code դաշտի արժեքավորում
    document["Code"] = 54;
    // փաստաթղթի ցուցադրում խմբագրման ռեժիմով
    document.Show(false, this.Panel.Id);
}

```

![Add_Function](../../images/DataView/Add_Function.png)

