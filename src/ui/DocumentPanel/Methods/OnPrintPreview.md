---
title: OnPrintPreview
parent: "Մեթոդներ"
grand_parent: "DocumentPanel"
---

# DocumentPanel&lt;T&gt;.OnPrintPreview(PrintModeSE) մեթոդ

## Նկարագիր

**Դաս՝** [DocumentPanel](../DocumentPanel.md)

```c#
protected virtual void OnPrintPreview(PrintModeSE mode)
```

Սահմանում է փաստաթղթի տպման նախնական դիտման բացման գործողությունները։

Մեթոդը չմշակելու դեպքում տրված ռեժիմով կանչվում է փաստաթղթի ձևանմուշային տպման նախադիտումը։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- |
| mode | PrintModeSE | - | Տպման ռեժիմը՝ նախադիտում, Word, Excel կամ PDF։ |
