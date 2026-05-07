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

Բացում է ֆոկուսավորված row-ի փաստաթղթի պատուհանը:

Նախապայման: `Panel.FocusedRow()`-ն պետք է ոչ-`null` row վերադարձնի:
Կանչում է `DocumentHelper.Show(isn, isReadOnly, panelId, checkIsn, ...)`:
`checkIsn`-ը `!MayContainDeletedDocuments`-ն է:

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- |
| isReadOnly | bool | - | `true` → read-only դիտման ռեժիմ (View): `false` → խմբագրման ռեժիմ (Edit): |

