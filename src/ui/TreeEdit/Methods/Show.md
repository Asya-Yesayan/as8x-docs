---
title: Show
parent: "Մեթոդներ"
grand_parent: "TreeEdit"
---

# TreeEdit.Show(int? panelSupportingWindowId) մեթոդ

## Նկարագիր

**Դաս՝** [TreeEdit](../TreeEdit.md)

```c#
void Show(int? panelSupportingWindowId = null)
```

Բացում է ծառի խմբագրման էջը նշված պատուհանում։ Մեթոդը ստեղծում է **TreeEditPanel** վահանակը, տեղադրում է ընթացիկ ծառի օբյեկտի [Panel](../Properties/Panel.md) հատկության մեջ և ավելացնում է պատուհանի փաստաթղթերի խմբին որպես ակտիվ էջ։

Մեթոդի կատարման ընթացքում մկնիկի ցուցիչը ցուցադրվում է որպես սպասման ցուցիչ։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- |
| panelSupportingWindowId | int? | null | Այն պատուհանի ներքին նույնականացման համարը (id), որում բացվում է ծառի խմբագրման էջը։ null արժեքի դեպքում օգտագործվում է ընթացիկ ակտիվ պատուհանը։ |

**Օրինակ**

```c#
// "ApTrans" ներքին անունով ծառ-տեղեկատուի օբյեկտի ստեղծում
var treeEdit = new ApTransTreeEdit();
// ծառի խմբագրման էջի բացում ընթացիկ ակտիվ պատուհանում
treeEdit.Show();
```

```c#
// "ApTrans" ներքին անունով ծառ-տեղեկատուի օբյեկտի ստեղծում
var treeEdit = new ApTransTreeEdit();
// ծառի խմբագրման էջի բացում նշված id-ով պատուհանում
treeEdit.Show(panelSupportingWindowId: supportWindowId);
```
