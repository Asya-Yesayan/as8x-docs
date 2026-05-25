---
title: OnScannerRead
parent: "Մեթոդներ"
grand_parent: "DocumentPanel"
---

# DocumentPanel&lt;T&gt;.OnScannerRead(OnScannerEventArgs) մեթոդ

## Նկարագիր

**Դաս՝** [DocumentPanel](../DocumentPanel.md)

```c#
public void OnScannerRead(OnScannerEventArgs args)
```

Կանչում է սկաների կարդալու իրադարձության մշակումը՝ ընդլայնիչի **BeforeOnScanner** և **AfterOnScanner** կանչերով։ Հաջորդաբար կանչվում են ընդլայնիչի **BeforeOnScanner** մեթոդը, [OnScanner](OnScanner.md) մեթոդը և ընդլայնիչի **AfterOnScanner** մեթոդը։

**Պարամետրեր**

| Անվանում | Տվյալների տիպ | Լռությամբ արժեք | Նկարագրություն |
| --- | --- | --- | --- |
| args | OnScannerEventArgs | - | Սկաների իրադարձության պարամետրերի օբյեկտը։ |
